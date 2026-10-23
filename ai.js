
"use strict";

/* =========================================
   PSF AI FRUIT ASSISTANT
   Clean Frontend JavaScript
========================================= */

const $ = (id) => document.getElementById(id);

/* =========================================
   HTML ELEMENTS
========================================= */

const menuButton = $("menuButton");
const drawerClose = $("drawerClose");
const drawer = $("sideDrawer");
const overlay = $("drawerOverlay");

const question = $("question");
const actionButton = $("actionButton");
const chatForm = $("chatForm");
const chatArea = $("chatArea");
const welcome = $("welcome");
const languageSelect = $("languageSelect");

const messages = $("messages");
const historyList = $("historyList");
const clearHistoryButton = $("clearHistory");
const homeButton = $("homeButton");

/* =========================================
   BACKEND CONFIGURATION
========================================= */

// Backend must provide POST /api/chat.
// If frontend and backend are hosted separately,
// replace this with your actual backend endpoint.
const API_URL = "/api/chat";

/* =========================================
   SAFE LOCAL STORAGE
========================================= */

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);

        return value === null
            ? fallback
            : JSON.parse(value);
    } catch (error) {
        console.warn("Storage read error:", error);
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
        return true;
    } catch (error) {
        console.error("Storage write error:", error);
        return false;
    }
}

/* =========================================
   LANGUAGE
========================================= */

let language = "hi";

try {
    const savedLanguage =
        localStorage.getItem("psfLanguage");

    if (savedLanguage === "hi" ||
        savedLanguage === "en") {
        language = savedLanguage;
    }
} catch (error) {
    console.warn("Language storage unavailable.");
}

const text = {
    hi: {
        home: "होम",
        history: "चैट हिस्ट्री",
        settings: "सेटिंग्स",
        language: "भाषा",
        chooseLanguage: "अपनी भाषा चुनें",
        clearAll: "पूरी हिस्ट्री मिटाएँ",
        placeholder: "फलों के बारे में पूछें...",
        empty: "अभी कोई पुरानी चैट नहीं है।",
        confirm: "क्या आप पूरी चैट हिस्ट्री मिटाना चाहते हैं?",
        hello: "नमस्ते! मैं PSF Assistant हूँ। 🍎 फलों के बारे में क्या जानना चाहते हैं?",
        offline: "AI सर्वर से कनेक्शन नहीं हो पाया। Backend server और /api/chat URL जाँचें।",
        voiceError: "इस ब्राउज़र में Voice Input उपलब्ध नहीं है। आप टाइप करके पूछ सकते हैं।",
        newChat: "नई चैट",
        deleteChat: "चैट मिटाएँ",
        archive: "आर्काइव",
        delete: "मिटाएँ",
        send: "मैसेज भेजें",
        mic: "वॉइस इनपुट",
        stopMic: "वॉइस इनपुट रोकें",
        deleteConfirm: "क्या आप इस चैट को हमेशा के लिए मिटाना चाहते हैं?"
    },

    en: {
        home: "Home",
        history: "Chat History",
        settings: "Settings",
        language: "Language",
        chooseLanguage: "Choose your language",
        clearAll: "Clear All History",
        placeholder: "Ask about fruits...",
        empty: "No previous chats yet.",
        confirm: "Do you want to delete all chat history?",
        hello: "Hello! I am PSF Assistant. 🍎 What would you like to know about fruits?",
        offline: "Could not connect to the AI server. Check the backend server and /api/chat URL.",
        voiceError: "Voice input is unavailable in this browser. You can type instead.",
        newChat: "New Chat",
        deleteChat: "Delete chat",
        archive: "Archive",
        delete: "Delete",
        send: "Send message",
        mic: "Voice input",
        stopMic: "Stop voice input",
        deleteConfirm: "Do you want to permanently delete this chat?"
    }
};

function t(key) {
    return text[language][key] || key;
}

/* =========================================
   CHAT HISTORY DATA
========================================= */

let sessions = readStorage("psfHistory", []);

if (!Array.isArray(sessions)) {
    sessions = [];
}

sessions = sessions
    .filter(session =>
        session &&
        typeof session.id === "string" &&
        Array.isArray(session.messages)
    )
    .map(session => ({
        id: session.id,
        title: typeof session.title === "string"
            ? session.title
            : "Chat",
        archived: Boolean(session.archived),

        messages: session.messages
            .filter(message =>
                message &&
                ["user", "assistant"].includes(message.role) &&
                typeof message.content === "string"
            )
            .map(message => ({
                role: message.role,
                content: message.content,
                time: message.time || ""
            }))
    }));

let activeId = null;
let busy = false;
let recognition = null;
let isListening = false;

/* =========================================
   SAVE HISTORY
========================================= */

function saveHistory() {
    const savedSessions = sessions.filter(
        session =>
            session.archived ||
            session.messages.length > 0
    );

    writeStorage("psfHistory", savedSessions);
}

function currentSession() {
    return sessions.find(
        session => session.id === activeId
    );
}

/* =========================================
   NEW CHAT
========================================= */

function newSession() {
    const session = {
        id: Date.now().toString() +
            Math.random().toString(16).slice(2),

        title: t("newChat"),
        archived: false,
        messages: []
    };

    sessions.unshift(session);
    activeId = session.id;

    saveHistory();
    renderChat();

    return session;
}

/* =========================================
   LANGUAGE SETTINGS
========================================= */

function applyLanguage() {
    document.documentElement.lang = language;

    if (languageSelect) {
        languageSelect.value = language;
    }

    document.querySelectorAll("[data-i18n]")
        .forEach(element => {
            element.textContent =
                t(element.dataset.i18n);
        });

    if (question) {
        question.placeholder = t("placeholder");
    }

    if (clearHistoryButton) {
        clearHistoryButton.textContent =
            t("clearAll");
    }

    const newChatLabel = document.querySelector(
        '[data-page="newchat"] span:last-child'
    );

    if (newChatLabel) {
        newChatLabel.textContent = t("newChat");
    }

    renderHistory();
}

languageSelect?.addEventListener("change", () => {
    language =
        languageSelect.value === "en" ? "en" : "hi";

    try {
        localStorage.setItem("psfLanguage", language);
    } catch (error) {
        console.warn("Language save failed:", error);
    }

    applyLanguage();
    updateActionButton();
});

/* =========================================
   SIDE MENU
========================================= */

function openMenu() {
    drawer?.classList.add("open");
    drawer?.setAttribute("aria-hidden", "false");

    if (overlay) {
        overlay.hidden = false;
    }
}

function closeMenu() {
    drawer?.classList.remove("open");
    drawer?.setAttribute("aria-hidden", "true");

    if (overlay) {
        overlay.hidden = true;
    }
}

menuButton?.addEventListener("click", openMenu);
drawerClose?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

function showSection(page) {
    const settings = $("drawerSettings");
    const history = $("drawerHistory");

    if (settings) {
        settings.hidden =
            page !== "settings" &&
            page !== "language";
    }

    if (history) {
        history.hidden = page !== "history";
    }
}

/* =========================================
   MENU NAVIGATION
========================================= */

document.querySelectorAll(".drawer-nav button")
    .forEach(button => {
        button.addEventListener("click", () => {
            const page = button.dataset.page;

            if (page === "newchat") {
                stopVoiceInput();
                newSession();

                if (question) {
                    question.value = "";
                    question.style.height = "auto";
                }

                updateActionButton();
                showSection("none");
                closeMenu();
                question?.focus();

                return;
            }

            if (page === "home") {
                window.location.href = "./index.html";
                return;
            }

            if (page === "history") {
                showSection("history");
                renderHistory();
                return;
            }

            if (page === "settings" ||
                page === "language") {
                showSection(page);
            }
        });
    });

/* =========================================
   CHAT RENDERING
========================================= */

function renderChat() {
    if (!messages) return;

    const session = currentSession();
    const list = session ? session.messages : [];

    messages.replaceChildren();

    if (welcome) {
        welcome.hidden = list.length > 0;
    }

    list.forEach(message => {
        addMessageElement(
            message.role,
            message.content,
            message.time
        );
    });

    renderHistory();

    requestAnimationFrame(() => {
        if (chatArea) {
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    });
}

function addMessageElement(role, content, time) {
    if (!messages) return;

    const row = document.createElement("div");

    row.className =
        "message-row" +
        (role === "user" ? " user" : "");

    const bubble = document.createElement("div");

    bubble.className =
        "message " +
        (role === "user"
            ? "user-message"
            : "bot-message");

    // textContent prevents HTML injection.
    bubble.textContent = String(content);

    const stamp = document.createElement("span");

    stamp.className = "message-time";

    stamp.textContent = time ||
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    bubble.appendChild(stamp);
    row.appendChild(bubble);
    messages.appendChild(row);
}

/* =========================================
   ADD MESSAGE TO A SPECIFIC CHAT
========================================= */

function addMessage(role, content, sessionId = activeId) {
    const session = sessions.find(
        item => item.id === sessionId
    );

    if (!session) return;

    const messageText = String(content);

    const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    if (role === "user" &&
        session.messages.length === 0) {
        session.title = messageText.slice(0, 35);
    }

    session.messages.push({
        role,
        content: messageText,
        time
    });

    saveHistory();

    if (activeId === sessionId) {
        renderChat();
    } else {
        renderHistory();
    }
}

/* =========================================
   CHAT HISTORY LIST
========================================= */

function renderHistory() {
    if (!historyList) return;

    historyList.replaceChildren();

    const visibleSessions = sessions.filter(
        session =>
            !session.archived &&
            session.messages.length > 0
    );

    if (visibleSessions.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = t("empty");
        historyList.appendChild(empty);
        return;
    }

    visibleSessions.forEach(session => {
        const row = document.createElement("div");
        row.className = "history-item";

        const open = document.createElement("button");
        open.type = "button";
        open.className = "history-open";
        open.textContent = session.title || t("newChat");

        open.addEventListener("click", () => {
            activeId = session.id;
            renderChat();
            showSection("none");
            closeMenu();
        });

        const actions = document.createElement("div");
        actions.className = "history-actions";

        const options = document.createElement("button");
        options.type = "button";
        options.className = "history-menu-btn";
        options.textContent = "⋮";
        options.setAttribute("aria-label", "Chat options");

        const popup = document.createElement("div");
        popup.className = "history-options";
        popup.hidden = true;

        options.addEventListener("click", event => {
            event.stopPropagation();

            document.querySelectorAll(".history-options")
                .forEach(menu => {
                    if (menu !== popup) {
                        menu.hidden = true;
                    }
                });

            popup.hidden = !popup.hidden;
        });

        const archive = document.createElement("button");
        archive.type = "button";
        archive.textContent = "▣ " + t("archive");

        archive.addEventListener("click", () => {
            session.archived = true;
            saveHistory();

            if (activeId === session.id) {
                const next = sessions.find(item =>
                    item.id !== session.id &&
                    !item.archived &&
                    item.messages.length > 0
                );

                if (next) {
                    activeId = next.id;
                    renderChat();
                } else {
                    activeId = null;
                    newSession();
                }
            }

            renderHistory();
        });

        const del = document.createElement("button");
        del.type = "button";
        del.className = "history-delete";
        del.textContent = "♜ " + t("delete");

        del.addEventListener("click", () => {
            if (!window.confirm(t("deleteConfirm"))) {
                return;
            }

            sessions = sessions.filter(
                item => item.id !== session.id
            );

            saveHistory();

            if (activeId === session.id) {
                const next = sessions.find(
                    item =>
                        !item.archived &&
                        item.messages.length > 0
                );

                if (next) {
                    activeId = next.id;
                    renderChat();
                } else {
                    activeId = null;
                    newSession();
                }
            }

            renderHistory();
        });

        popup.append(archive, del);
        actions.append(options, popup);
        row.append(open, actions);
        historyList.appendChild(row);
    });
}

/* =========================================
   CLEAR ALL HISTORY
========================================= */

clearHistoryButton?.addEventListener("click", () => {
    if (!window.confirm(t("confirm"))) return;

    sessions = [];
    activeId = null;

    saveHistory();
    newSession();
    renderHistory();
});

/* =========================================
   HOME BUTTON
========================================= */

homeButton?.addEventListener("click", () => {
    window.location.href = "./index.html";
});

/* =========================================
   VOICE ORB STATE
========================================= */

function setVoiceOrbState(state = "idle") {
    const orb = document.querySelector(".voice-orb");

    if (!orb) return;

    orb.classList.remove(
        "is-listening",
        "is-speaking"
    );

    if (state === "listening") {
        orb.classList.add("is-listening");
    } else if (state === "speaking") {
        orb.classList.add("is-speaking");
    }
}

/* =========================================
   MIC / SEND BUTTON
========================================= */

function updateActionButton() {
    if (!question || !actionButton) return;

    const hasText = question.value.trim().length > 0;

    const micIcon = $("micIcon");
    const sendIcon = $("sendIcon");

    if (micIcon) {
        micIcon.hidden = hasText;
        micIcon.style.display = hasText ? "none" : "";
    }

    if (sendIcon) {
        sendIcon.hidden = !hasText;
        sendIcon.style.display = hasText ? "inline" : "none";
    }

    actionButton.disabled = busy;

    const label = hasText
        ? t("send")
        : isListening
            ? t("stopMic")
            : t("mic");

    actionButton.setAttribute("aria-label", label);
    actionButton.title = label;

    actionButton.classList.toggle(
        "listening",
        isListening
    );
}

question?.addEventListener("input", () => {
    question.style.height = "auto";

    question.style.height =
        Math.min(question.scrollHeight, 100) + "px";

    updateActionButton();
});

/* =========================================
   ENTER TO SEND
========================================= */

question?.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

chatForm?.addEventListener("submit", event => {
    event.preventDefault();
    sendMessage();
});

actionButton?.addEventListener("click", () => {
    if (question?.value.trim()) {
        sendMessage();
    } else {
        startVoiceInput();
    }
});

/* =========================================
   GREETING DETECTION
========================================= */

function isGreeting(message) {
    return /^(hi|hello|hey|namaste|नमस्ते|हेलो|हाय)[!,.।\s]*$/i
        .test(message.trim());
}

/* =========================================
   SEND MESSAGE TO AI BACKEND
========================================= */

async function sendMessage({ speakReply = false } = {}) {
    const message = question?.value.trim();

    if (!message || busy) return;

    if (!currentSession()) {
        newSession();
    }

    // Capture the session so replies go to the
    // correct chat even if the user opens another.
    const sessionId = activeId;

    question.value = "";
    question.style.height = "auto";

    updateActionButton();

    addMessage("user", message, sessionId);

    if (isGreeting(message)) {
        const greeting = t("hello");

        addMessage("assistant", greeting, sessionId);

        if (speakReply) {
            speakText(greeting);
        }

        question?.focus();
        return;
    }

    busy = true;
    updateActionButton();

    try {
        const session = sessions.find(
            item => item.id === sessionId
        );

        const history = (session?.messages || [])
            .slice(-12)
            .map(item => ({
                role: item.role,
                content: item.content
            }));

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message,
                language,
                history
            })
        });

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        const data = await response.json();

        const reply = data.reply || data.answer;

        if (typeof reply !== "string" ||
            !reply.trim()) {
            throw new Error("Empty AI response");
        }

        addMessage("assistant", reply, sessionId);

     // Speak replies only when the user used voice.
        if (speakReply) {
            speakText(reply);
        }

    } catch (error) {
        console.error("PSF AI backend error:", error);

        const errorMessage = t("offline");

        addMessage(
            "assistant",
            errorMessage,
            sessionId
        );

        if (speakReply) {
            speakText(errorMessage);
        }

    } finally {
        busy = false;
        updateActionButton();
        question?.focus();
    }
}

/* =========================================
   TEXT-TO-SPEECH
========================================= */

function speakText(content) {
    if (!("speechSynthesis" in window) ||
        !("SpeechSynthesisUtterance" in window)) {
        return;
    }
    window.speechSynthesis.cancel();

    const utterance =
        new SpeechSynthesisUtterance(String(content));

    utterance.lang =
        language === "hi" ? "hi-IN" : "en-US";

    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => {
        setVoiceOrbState("speaking");
    };

    utterance.onend = () => {
        setVoiceOrbState("idle");
    };

    utterance.onerror = () => {
        setVoiceOrbState("idle");
    };

    window.speechSynthesis.speak(utterance);
}

/* =========================================
   VOICE INPUT
========================================= */

function stopVoiceInput() {
    if (recognition && isListening) {
        recognition.stop();
    }

    isListening = false;
    setVoiceOrbState("idle");
    updateActionButton();
}
function startVoiceInput() {
    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        window.alert(t("voiceError"));
        return;
    }

    if (isListening) {
        stopVoiceInput();
        return;
    }

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    recognition = new SpeechRecognition();

    recognition.lang =
        language === "hi" ? "hi-IN" : "en-US";

    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    recognition.onstart = () => {
        isListening = true;
        setVoiceOrbState("listening");
        updateActionButton();
    };

    recognition.onresult = event => {
        const result = event.results?.[0]?.[0];
        const transcript = result?.transcript?.trim();

        if (!transcript || !question) return;
question.value = transcript;

        question.style.height = "auto";
        question.style.height =
            Math.min(question.scrollHeight, 100) + "px";

        updateActionButton();

        sendMessage({ speakReply: true });
    };

    recognition.onerror = event => {
        console.warn("Voice input error:", event.error);

        if (event.error === "not-allowed" ||
            event.error === "service-not-allowed") {
            window.alert(
                language === "hi"
                    ? "माइक्रोफ़ोन की अनुमति दें और दोबारा कोशिश करें।"
                    : "Please allow microphone access and try again."
            );
        }

        isListening = false;
        setVoiceOrbState("idle");
        updateActionButton();
    };

    recognition.onend = () => {
        isListening = false;
        setVoiceOrbState("idle");
        updateActionButton();
    };
try {
        recognition.start();
    } catch (error) {
        console.error("Could not start voice input:", error);

        isListening = false;
        setVoiceOrbState("idle");
        updateActionButton();
    }
}

/* =========================================
   CLICKABLE VOICE ORB
========================================= */

const voiceOrb = document.querySelector(".voice-orb");

if (voiceOrb) {
    voiceOrb.style.cursor = "pointer";
    voiceOrb.setAttribute("role", "button");
    voiceOrb.setAttribute("tabindex", "0");
    voiceOrb.setAttribute(
        "aria-label",
        "Start voice input"
    );

    voiceOrb.addEventListener("click", startVoiceInput);

    voiceOrb.addEventListener("keydown", event => {
        if (event.key === "Enter" ||
            event.key === " ") {
            event.preventDefault();
            startVoiceInput();
        }
    });
}

/* =========================================
   APP INITIALIZATION
   Run only once
========================================= */

applyLanguage();

const firstChat = sessions.find(
    session =>
        !session.archived &&
        session.messages.length > 0
);

if (firstChat) {
    activeId = firstChat.id;
    renderChat();
} else {
    newSession();
}

updateActionButton();

console.log("PSF AI Assistant initialized.");
