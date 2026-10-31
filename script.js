
/* ==========================================
   PSF WEBSITE - COMPLETE JAVASCRIPT
   Pure Safe Fresh
   ========================================== */

/* ---------- MENU OPEN / CLOSE ---------- */

function openMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (sidebar) {
        sidebar.classList.add("menu-open");
        sidebar.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-is-open");
    }

    if (overlay) overlay.classList.add("overlay-open");
}

function closeMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (sidebar) {
        sidebar.classList.remove("menu-open");
        sidebar.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-is-open");
    }

    if (overlay) overlay.classList.remove("overlay-open");
}

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");

    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
    });
});

/* ---------- LANGUAGE TRANSLATIONS ---------- */

const translations = {
    en: {
        home: "🏠 Home",
        about: "ℹ️ About",
        contact: "📞 Contact",
        languageText: "🌐 Language",
        feedback: "💬 Feedback",
        menuTitle: "Fruits Image",
        headerText: "Freshness You Can Trust",
        welcome: "Welcome to PSF",
        tagline: "Fresh • Safe • Healthy Fruits",
        freshTitle: "🍃 Fresh Fruits",
        freshText: "Click here to view all fresh fruits.",
        safeTitle: "🛡️ Safe & Hygienic",
        safeText: "Every fruit is handled with care.",
        qrTitle: "📱 Smart QR Guide",
        qrText: "Scan any fruit QR to know its health benefits.",
        fruitTitle: "🍎 Fruit Availability",
        fruitText: "Check which fruits are currently available in our shop.",
        footerText: "™© 2026 PSF<br>Freshness You Can Trust",
        companyAboutHeading: "About PSF Company",
        companyAboutPara: "PSF is a company focused on building a trusted identity through innovation, quality, and a commitment to serving its customers.",
        companyMissionTitle: "PSF Mission",
        companyMissionPara: "Our mission is to provide valuable services, maintain high standards, and build lasting relationships with our customers.",
        companyVisionTitle: "PSF Vision",
        companyVisionPara: "PSF vision is to grow as a trusted company and continuously improve the way we serve our customers.",
        companyValuesTitle: "PSF Values",
        companyValue1: "Trust and transparency",
        companyValue2: "Quality and reliability",
        companyValue3: "Innovation and improvement",
        companyValue4: "Customer satisfaction",
        companyValue5: "Honesty and responsibility",
        companyCommitmentTitle: "PSF Commitment",
        companyCommitmentPara: "At PSF, we believe that trust, teamwork, and continuous improvement are important for long-term success.",
        companyWhyTitle: "Why Choose PSF?",
        companyWhyIntro: "At PSF, we believe in quality, trust, innovation, and customer satisfaction.",
        companyQualityTitle: "⭐ Quality First",
        companyQualityText: "We focus on quality and continuous improvement.",
        companyTrustTitle: "🤝 Trust & Transparency",
        companyTrustText: "We believe in honest communication.",
        companyInnovationTitle: "💡 Innovation",
        companyInnovationText: "We welcome new ideas and smart solutions.",
        companyCustomerTitle: "❤️ Customer Focus",
        companyCustomerText: "We aim to understand people's needs.",
        backHome: "🏠 Back to Home",
        pageTitle: "PSF",
        pageTagline: "Freshness You Can Trust",
        qualityTitle: "🍎 Why Fruit Quality Matters",
        qualityText: "Fresh and high-quality fruits provide vitamins, minerals, fibre, and antioxidants.",
        chemicalTitle: "⚠️ Harmful Effects of Chemicals",
        chemical1: "❌ Excess pesticides may remain on fruit surfaces.",
        chemical2: "❌ Artificial ripening chemicals can reduce nutritional value.",
        chemical3: "❌ Chemical residues may cause allergies and stomach problems.",
        chemical4: "❌ Long-term exposure may affect overall health.",
        chemical5: "✅ Always wash fruits thoroughly before eating.",
        washTitle: "💧 How to Wash Fruits Properly",
        wash1: "🚰 Wash fruits under clean running water for 20–30 seconds.",
        wash2: "🍎 Gently rub the fruit surface with your hands.",
        wash3: "🚫 Never use soap, detergent, or bleach.",
        wash4: "🧻 Dry fruits with a clean cloth or tissue.",
        wash5: "🔪 Wash fruits first, then cut them using a clean knife.",
        storageTitle: "🧊 Safe Storage Tips",
        storage1: "🥶 Store soft fruits in the refrigerator.",
        storage2: "🍌 Keep bananas at room temperature.",
        storage3: "🍎 Separate ripe and unripe fruits.",
        storage4: "📦 Store fruits in clean containers.",
        storage5: "❌ Remove spoiled fruits immediately.",
        healthyTitle: "🥗 Healthy Eating Tips",
        healthy1: "🍽️ Eat 2–3 servings of fruits every day.",
        healthy2: "🌈 Choose fruits of different colours.",
        healthy3: "⏰ Eat fruits as a healthy snack.",
        healthy4: "💧 Drink enough water throughout the day.",
        healthy5: "🚫 Avoid eating damaged or mouldy fruits.",
        avoidTitle: "🚫 Fruits to Avoid",
        avoid1: "❌ Rotten or mouldy fruits.",
        avoid2: "❌ Fruits with a bad smell.",
        avoid3: "❌ Fruits with deep cuts or leakage.",
        avoid4: "❌ Fruits showing insect damage.",
        avoid5: "❌ Overly bruised fruits.",
        environmentTitle: "🌍 Protect the Environment",
        environment1: "♻️ Reduce food waste.",
        environment2: "🛍️ Use reusable shopping bags.",
        environment3: "🌱 Compost fruit peels whenever possible.",
        environment4: "🍃 Buy local and seasonal fruits.",
        environment5: "💚 Support eco-friendly farming.",
        factsTitle: "💡 Did You Know?",
        fact1: "🍊 Vitamin C helps support immunity.",
        fact2: "🍌 Bananas provide natural energy.",
        fact3: "🍎 Apples are a good source of fibre.",
        fact4: "🍇 Grapes contain antioxidants.",
        fact5: "🥭 Seasonal fruits are usually fresher.",
        promiseTitle: "✅ PSF Safety Promise",
        promiseText: "At PSF (Pure Safe Fresh), we are committed to providing fresh, safe, hygienic, and premium-quality fruits.",
        homeButton: "🏠 Back to Home"
    },

    hi: {
        home: "🏠 होम",
        about: "ℹ️ हमारे बारे में",
        contact: "📞 संपर्क",
        languageText: "🌐 भाषा",
        feedback: "💬 प्रतिक्रिया",
        menuTitle: "फलों की तस्वीरें",
        headerText: "ताज़गी जिस पर आप भरोसा करें",
        welcome: "PSF में आपका स्वागत है",
        tagline: "ताज़े • सुरक्षित • स्वास्थ्यवर्धक फल",
        freshTitle: "🍃 ताज़े फल",
        freshText: "सभी ताज़े फलों की जानकारी देखने के लिए यहाँ क्लिक करें।",
        safeTitle: "🛡️ सुरक्षित एवं स्वच्छ",
        safeText: "हर फल को पूरी सावधानी से संभाला जाता है।",
        qrTitle: "📱 स्मार्ट QR गाइड",
        qrText: "QR स्कैन करके फलों की जानकारी प्राप्त करें।",
        fruitTitle: "🍎 फलों की उपलब्धता",
        fruitText: "यहाँ देखें कि दुकान में कौन-कौन से फल उपलब्ध हैं।",
        footerText: "™© 2026 PSF<br>ताज़गी जिस पर आप भरोसा करें",
        companyAboutHeading: "PSF कंपनी के बारे में",
        companyAboutPara: "PSF गुणवत्ता, नवाचार और ग्राहकों की सेवा के प्रति समर्पित कंपनी है।",
        companyMissionTitle: "PSF मिशन",
        companyMissionPara: "हमारा मिशन अच्छी सेवाएँ देना और ग्राहकों के साथ भरोसेमंद संबंध बनाना है।",
        companyVisionTitle: "PSF विज़न",
        companyVisionPara: "हमारा विज़न एक विश्वसनीय कंपनी के रूप में आगे बढ़ना है।",
        companyValuesTitle: "PSF मूल्य",
        companyValue1: "विश्वास और पारदर्शिता",
        companyValue2: "गुणवत्ता और विश्वसनीयता",
        companyValue3: "नवाचार और सुधार",
        companyValue4: "ग्राहक संतुष्टि",
        companyValue5: "ईमानदारी और जिम्मेदारी",
        companyCommitmentTitle: "PSF प्रतिबद्धता",
        companyCommitmentPara: "हम विश्वास, टीमवर्क और निरंतर सुधार में विश्वास करते हैं।",
        companyWhyTitle: "PSF को क्यों चुनें?",
        companyWhyIntro: "हम गुणवत्ता, विश्वास और ग्राहक संतुष्टि में विश्वास करते हैं।",
        companyQualityTitle: "⭐ गुणवत्ता सबसे पहले",
        companyQualityText: "हम गुणवत्ता पर ध्यान देते हैं।",
        companyTrustTitle: "🤝 विश्वास और पारदर्शिता",
        companyTrustText: "हम ईमानदार संवाद में विश्वास करते हैं।",
        companyInnovationTitle: "💡 नवाचार",
        companyInnovationText: "हम नए विचारों का स्वागत करते हैं।",
        companyCustomerTitle: "❤️ ग्राहक प्राथमिकता",
        companyCustomerText: "हम ग्राहकों की ज़रूरतों को समझने का प्रयास करते हैं।",
        backHome: "🏠 होम पर वापस जाएँ",
        pageTitle: "PSF",
        pageTagline: "ताज़गी जिस पर आप भरोसा करें",
        qualityTitle: "🍎 फलों की गुणवत्ता क्यों ज़रूरी है",
        qualityText: "ताज़े फल विटामिन, मिनरल, फाइबर और एंटीऑक्सिडेंट प्रदान करते हैं।",
        chemicalTitle: "⚠️ रसायनों के हानिकारक प्रभाव",
        chemical1: "❌ फलों की सतह पर कीटनाशक रह सकते हैं।",
        chemical2: "❌ कृत्रिम पकाने की प्रक्रिया गुणवत्ता को प्रभावित कर सकती है।",
        chemical3: "❌ रसायनों के अवशेष परेशानी पैदा कर सकते हैं।",
        chemical4: "❌ लंबे समय तक संपर्क स्वास्थ्य को प्रभावित कर सकता है।",
        chemical5: "✅ खाने से पहले फल अच्छी तरह धोएँ।",
        washTitle: "💧 फल सही तरीके से कैसे धोएँ",
        wash1: "🚰 फलों को साफ बहते पानी में धोएँ।",
        wash2: "🍎 हाथों से फल की सतह को हल्के से रगड़ें।",
        wash3: "🚫 साबुन या डिटर्जेंट का उपयोग न करें।",
        wash4: "🧻 साफ कपड़े से फल सुखाएँ।",
        wash5: "🔪 काटने से पहले फल धोएँ।",
        storageTitle: "🧊 सुरक्षित भंडारण",
        storage1: "🥶 नरम फलों को फ्रिज में रखें।",
        storage2: "🍌 केले कमरे के तापमान पर रखें।",
        storage3: "🍎 पके और कच्चे फल अलग रखें।",
        storage4: "📦 फलों को साफ डिब्बों में रखें।",
        storage5: "❌ खराब फलों को तुरंत हटा दें।",
        healthyTitle: "🥗 स्वस्थ खानपान सुझाव",
        healthy1: "🍽️ रोज़ फल खाएँ।",
        healthy2: "🌈 अलग-अलग रंगों के फल चुनें।",
        healthy3: "⏰ फलों को हेल्दी स्नैक की तरह खाएँ।",
        healthy4: "💧 दिनभर पर्याप्त पानी पिएँ।",
        healthy5: "🚫 खराब फल न खाएँ।",
        avoidTitle: "🚫 किन फलों से बचें",
        avoid1: "❌ सड़े या फफूँद लगे फल।",
        avoid2: "❌ बदबू वाले फल।",
        avoid3: "❌ कटे या रिसाव वाले फल।",
        avoid4: "❌ कीड़ों से खराब फल।",
        avoid5: "❌ बहुत दबे हुए फल।",
        environmentTitle: "🌍 पर्यावरण की रक्षा करें",
        environment1: "♻️ भोजन की बर्बादी कम करें।",
        environment2: "🛍️ दोबारा इस्तेमाल होने वाले बैग लें।",
        environment3: "🌱 फलों के छिलकों से खाद बनाएँ।",
        environment4: "🍃 स्थानीय और मौसमी फल खरीदें।",
        environment5: "💚 पर्यावरण के अनुकूल खेती को बढ़ावा दें।",
        factsTitle: "💡 क्या आप जानते हैं?",
        fact1: "🍊 विटामिन C रोग प्रतिरोधक क्षमता को सहारा देता है।",
        fact2: "🍌 केले प्राकृतिक ऊर्जा देते हैं।",
        fact3: "🍎 सेब फाइबर का अच्छा स्रोत हैं।",
        fact4: "🍇 अंगूर में एंटीऑक्सिडेंट होते हैं।",
        fact5: "🥭 मौसमी फल आमतौर पर ताज़े होते हैं।",
        promiseTitle: "✅ PSF सुरक्षा वादा",
        promiseText: "PSF (Pure Safe Fresh) में हम ताज़े, सुरक्षित और स्वच्छ फलों के लिए प्रतिबद्ध हैं।",
        homeButton: "🏠 होम पर वापस जाएँ"
    }
};

function changeLanguage() {
    const language = document.getElementById("language");
    if (!language) return;

    const selected = translations[language.value] || translations.en;

    Object.keys(selected).forEach(function (key) {
        const element = document.getElementById(key);
        if (element) element.innerHTML = selected[key];
    });

    const feedback = document.getElementById("feedbackMenu");
    if (feedback) feedback.textContent = selected.feedback;

    const languageText = document.getElementById("languageText");
    if (languageText) languageText.textContent = selected.languageText;

    document.documentElement.lang = language.value === "hi" ? "hi" : "en";
}

/* ---------- THEME ---------- */

function toggleTheme() {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    document.body.classList.toggle("blue", toggle.checked);

    try {
        localStorage.setItem("theme", toggle.checked ? "blue" : "default");
    } catch (error) {
        console.warn("Theme preference could not be saved.", error);
    }
}

window.addEventListener("load", function () {
    try {
        if (localStorage.getItem("theme") === "blue") {
            document.body.classList.add("blue");
            const toggle = document.getElementById("themeToggle");
            if (toggle) toggle.checked = true;
        }
    } catch (error) {
        console.warn("Theme preference could not be loaded.", error);
    }
});

/* ==========================================
   PART 2 - FEEDBACK, SEARCH & VOICE SEARCH
   ========================================== */

/* ---------- FEEDBACK SYSTEM ---------- */

let selectedRating = 0;

function openFeedback() {
    closeMenu();

    let popup = document.getElementById("feedbackPopup");

    if (!popup) {
        createFeedbackPopup();
        popup = document.getElementById("feedbackPopup");
    }

    if (popup) popup.style.display = "flex";
}

function closeFeedback() {
    const popup = document.getElementById("feedbackPopup");
    if (popup) popup.style.display = "none";
}

function createFeedbackPopup() {
    if (document.getElementById("feedbackPopup")) return;

    const popup = document.createElement("div");
    popup.id = "feedbackPopup";
    popup.className = "feedback-popup";

    popup.innerHTML = `
        <div class="feedback-card">
            <button type="button" class="feedback-close"
                onclick="closeFeedback()">×</button>

            <h2>💬 Your Feedback Matters</h2>
            <p>How was your experience with PSF?</p>

            <div class="feedback-stars">
                ${[1, 2, 3, 4, 5].map(number =>
                    `<button type="button"
                    class="feedback-star"
                    data-rating="${number}"
                    aria-label="${number} stars">★</button>`
                ).join("")}
            </div>

            <textarea id="feedbackComment"
                placeholder="Write your feedback..."
                rows="4"></textarea>

            <button type="button"
                class="feedback-submit"
                onclick="submitFeedback()">Submit Feedback</button>

            <p id="feedbackMessage" aria-live="polite"></p>
        </div>
    `;

    document.body.appendChild(popup);

    popup.querySelectorAll(".feedback-star").forEach(function (star) {
        star.addEventListener("click", function () {
            selectedRating = Number(this.dataset.rating);
            updateFeedbackStars();
        });
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) closeFeedback();
    });
}

function updateFeedbackStars() {
    document.querySelectorAll(".feedback-star").forEach(function (star) {
        const rating = Number(star.dataset.rating);
        star.style.color = rating <= selectedRating ? "#f5a623" : "#aaa";
    });
}

function submitFeedback() {
    const comment = document.getElementById("feedbackComment");
    const message = document.getElementById("feedbackMessage");

    if (!comment || !message) return;

    if (selectedRating === 0) {
        message.textContent = "Please select a star rating.";
        return;
    }

    const feedbackData = {
        rating: selectedRating,
        comment: comment.value.trim(),
        page: document.title,
        date: new Date().toISOString()
    };

    try {
        const oldFeedback = JSON.parse(
            localStorage.getItem("psfFeedback") || "[]"
        );

        oldFeedback.push(feedbackData);

        localStorage.setItem(
            "psfFeedback",
            JSON.stringify(oldFeedback)
        );

        message.textContent = "Thank you! Your feedback is saved on this device.";

        comment.value = "";
        selectedRating = 0;
        updateFeedbackStars();

        setTimeout(closeFeedback, 1800);

    } catch (error) {
        message.textContent = "Unable to save feedback on this device.";
        console.error("Feedback error:", error);
    }
}

/* ---------- SEARCH SYSTEM ---------- */

function searchFruit() {
    const searchBox = document.getElementById("searchBox");
    if (!searchBox) return;

    const searchValue = searchBox.value.toLowerCase().trim();

    const items = document.querySelectorAll(
        ".fruit-card, .product-card, .feature-card, [data-search]"
    );

    let visibleCount = 0;

    items.forEach(function (item) {
        const text = (
            item.innerText + " " +
            (item.dataset.search || "")
        ).toLowerCase();

        const matched = text.includes(searchValue);

        item.style.display = matched ? "" : "none";

        if (matched) visibleCount++;
    });

    const result = document.getElementById("searchResult");

    if (result) {
        result.textContent = searchValue
            ? visibleCount + " result(s) found"
            : "";
    }
}

/* ---------- SEARCH INPUT ---------- */

document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchBox");
    const micBtn = document.getElementById("micBtn");

    if (searchBox) {
        searchBox.addEventListener("input", function () {
            if (micBtn) {
                micBtn.style.display =
                    this.value.trim() === "" ? "block" : "none";
            }

            searchFruit();
        });

        searchBox.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchFruit();
            }
        });
    }
});

/* ---------- VOICE SEARCH ---------- */

function startVoiceSearch() {
    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Voice search is not supported in this browser.");
        return;
    }

    const searchBox = document.getElementById("searchBox");

    if (!searchBox) {
        alert("Search box not found.");
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function () {
        const micBtn = document.getElementById("micBtn");
        if (micBtn) micBtn.classList.add("listening");
    };

    recognition.onresult = function (event) {
        const spokenText = event.results[0][0].transcript;

        searchBox.value = spokenText;
        searchFruit();
    };

    recognition.onerror = function (event) {
        console.error("Voice search error:", event.error);
    };

    recognition.onend = function () {
        const micBtn = document.getElementById("micBtn");
        if (micBtn) micBtn.classList.remove("listening");
    };

    recognition.start();
}

/* ---------- CLEAR SEARCH ---------- */

function clearSearch() {
    const searchBox = document.getElementById("searchBox");

    if (searchBox) {
        searchBox.value = "";
        searchFruit();
    }

    const result = document.getElementById("searchResult");
    if (result) result.textContent = "";
}

/* ---------- BACK TO TOP ---
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ==========================================
   PART 3 - AUTOMATIC IMAGE SLIDER
   PSF PRODUCT CAROUSEL
   ========================================== */

/*
HTML mein slider ka structure:
<div id="heroImageSlider">
  <img class="hero-fruit-image is-active" src="fresh-fruit.png" alt="Fresh fruits">
  <img class="hero-fruit-image" src="cut-fruits.png" alt="Cut fruits">
  <img class="hero-fruit-image" src="juice.png" alt="Fresh juice">
  <img class="hero-fruit-image" src="gift-hamper.png" alt="Gift hamper">
  <div class="hero-slider-dots">
    <button class="active" aria-label="Slide 1"></button>
    <button aria-label="Slide 2"></button>
    <button aria-label="Slide 3"></button>
    <button aria-label="Slide 4"></button>
  </div>
</div>
*/

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- HERO IMAGE SLIDER ---------- */

    const slider = document.getElementById("heroImageSlider");

    if (slider) {
        const images = slider.querySelectorAll(".hero-fruit-image");
        const dots = slider.querySelectorAll(".hero-slider-dots button");

        if (images.length > 1) {
            let currentSlide = 0;
            let sliderTimer;

            function showSlide(index) {
                currentSlide = (index + images.length) % images.length;

                images.forEach(function (image, i) {
                    image.classList.toggle(
                        "is-active",
                        i === currentSlide
                    );
                });

                dots.forEach(function (dot, i) {
                    dot.classList.toggle(
                        "active",
                        i === currentSlide
                    );
                });
            }

            function nextSlide() {
                showSlide(currentSlide + 1);
            }

            function startSlider() {
                clearInterval(sliderTimer);
                sliderTimer = setInterval(nextSlide, 5000);
            }

            function restartSlider() {
                startSlider();
            }

            dots.forEach(function (dot, index) {
                dot.addEventListener("click", function () {
                    showSlide(index);
                    restartSlider();
                });
            });

            showSlide(0);
            startSlider();

            /* Pause while user hovers */
            slider.addEventListener("mouseenter", function () {
                clearInterval(sliderTimer);
            });

            slider.addEventListener("mouseleave", function () {
                startSlider();
            });
        }
    }

    /* ---------- PRODUCT CATEGORY FILTER ---------- */

    const categoryButtons = document.querySelectorAll(
        "[data-category-filter]"
    );

    const productCards = document.querySelectorAll(
        "[data-category]"
    );

    categoryButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.dataset.categoryFilter;

            categoryButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            productCards.forEach(function (card) {
                const category = card.dataset.category;

                card.style.display =
                    selectedCategory === "all" ||
                    category === selectedCategory
                        ? ""
                        : "none";
            });
        });
    });

    /* ---------- FEEDBACK AUTO POPUP ---------- */

    createFeedbackPopup();

    try {
        const lastFeedback = localStorage.getItem("feedbackDate");
        const now = Date.now();
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;

        if (!lastFeedback || now - Number(lastFeedback) > thirtyDays) {
            setTimeout(function () {
                const popup = document.getElementById("feedbackPopup");

                if (popup) {
                    popup.style.display = "flex";
                }
            }, 20000);
        }
    } catch (error) {
        console.warn("Feedback preference unavailable.", error);
    }

    /* ---------- SAVE FEEDBACK DATE ---------- */

    const feedbackSubmit = document.querySelector(".feedback-submit");

    if (feedbackSubmit) {
        feedbackSubmit.addEventListener("click", function () {
            try {
                localStorage.setItem("feedbackDate", String(Date.now()));
            } catch (error) {
                console.warn("Could not save feedback date.", error);
            }
        });
    }

    /* ---------- LANGUAGE RESTORE ---------- */

    const languageSelect = document.getElementById("language");

    if (languageSelect) {
        try {
            const savedLanguage = localStorage.getItem("psfLanguage");

            if (savedLanguage) {
                languageSelect.value = savedLanguage;
            }
        } catch (error) {
            console.warn("Language preference unavailable.", error);
        }

        changeLanguage();

        languageSelect.addEventListener("change", function () {
            changeLanguage();

            try {
                localStorage.setItem(
                    "psfLanguage",
                    languageSelect.value
                );
            } catch (error) {
                console.warn("Could not save language.", error);
            }
        });
    }

    /* ---------- THEME RESTORE ---------- */

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        try {
            const savedTheme = localStorage.getItem("theme");

            themeToggle.checked = savedTheme === "blue";
            document.body.classList.toggle(
                "blue",
                themeToggle.checked
            );
        } catch (error) {
            console.warn("Theme preference unavailable.", error);
        }
    }

});

/* ==========================================
   PSF WHATSAPP ORDER BUTTON
   ========================================== */

function orderOnWhatsApp(productName) {
    const phone = "918709921210";

    const product = productName || "PSF Products";

    const message =
        "Hello PSF! I want to know more about " +
        product +
        ". Please share details.";

    const whatsappURL =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

/* ==========================================
   PSF LOCATION - COMING SOON
   ========================================== */

function showPSFLocation() {
    alert("PSF Store Location Coming Soon!");
}

/* ==========================================
   PSF NEWSLETTER MESSAGE
   ========================================== */

function subscribePSF() {
    const emailInput = document.getElementById("newsletterEmail");

    if (!emailInput) return;

    const email = emailInput.value.trim();

    if (!email || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for your interest in PSF!");

    emailInput.value = "";
}

/* ==========================================
   PSF YEAR
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

/* ==========================================
   END OF PSF SCRIPT
   ========================================== */
