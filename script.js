
/* PSF WEBSITE MENU FIX */

function openMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar) {
    sidebar.classList.add("menu-open");
  }

  if (overlay) {
    overlay.classList.add("overlay-open");
  }
}

function closeMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar) {
    sidebar.classList.remove("menu-open");
  }

  if (overlay) {
    overlay.classList.remove("overlay-open");
  }
}

const overlay = document.getElementById("overlay");
if (overlay) {
    overlay.onclick = closeMenu;
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeMenu();
    }
});

// ================= TRANSLATIONS =================

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

        aboutHeading: "ℹ️ About PSF",
        aboutTitle: "About Our Website",
        aboutPara: "PSF (Pure Safe Fresh) is a website that provides information about different fruits. You can learn about their health benefits, nutrition, best time to eat and storage tips.",

        missionTitle: "Our Mission",
        missionPara: "Our mission is to spread awareness about healthy eating and encourage people to include fresh fruits in their daily diet.",
        whyTitle: "⭐ Why Choose PSF?",
        why1: "✅ Premium Quality Fruits",
        why2: "✅ 100% Fresh & Hygienic",
        why3: "✅ Carefully Selected Fruits",
        why4: "✅ Safe Packaging",
        why5: "✅ Customer Satisfaction Guaranteed",

        backHome: "🏠 Back to Home",

        pageTitle: "PSF",
        pageTagline: "Freshness You Can Trust",

        qualityTitle: "🍎 Why Fruit Quality Matters",
        qualityText: "Fresh and high-quality fruits are rich in vitamins, minerals, fibre, and antioxidants. They help improve immunity, support digestion, maintain heart health, and provide natural energy. Choosing fresh fruits also ensures better taste, nutrition, and overall well-being.",

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
        healthy3: "⏰ Eat fruits in the morning or as a healthy snack.",
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
        fact1: "🍊 Vitamin C helps strengthen immunity.",
        fact2: "🍌 Bananas provide instant natural energy.",
        fact3: "🍎 Apples are a good source of fibre.",
        fact4: "🍇 Grapes contain powerful antioxidants.",
        fact5: "🥭 Seasonal fruits are usually fresher and more nutritious.",

        promiseTitle: "✅ PSF Safety Promise",

        promiseText: "At PSF (Pure Safe Fresh), we are committed to providing our customers with fresh, safe, hygienic, and premium-quality fruits. Quality, cleanliness, and trust are the core values of our business. We ensure that every customer receives carefully selected, nutritious, and high-quality fruits. Our mission is to build lasting customer trust while promoting a healthy and sustainable lifestyle.",

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
        fruitText: "यहाँ देखें कि हमारी दुकान में इस समय कौन-कौन से फल उपलब्ध हैं।",
        footerText: "™© 2026 PSF<br>ताज़गी जिस पर आप भरोसा करें",

        aboutHeading: "ℹ️ PSF के बारे में",
        aboutTitle: "हमारी वेबसाइट के बारे में",
        aboutPara: "PSF (Pure Safe Fresh) एक ऐसी वेबसाइट है जो विभिन्न फलों की जानकारी प्रदान करती है। यहाँ आप फलों के स्वास्थ्य लाभ, पोषण, खाने का सही समय और उन्हें सुरक्षित रखने के तरीके जान सकते हैं।",

        missionTitle: "हमारा उद्देश्य",
        missionPara: "हमारा उद्देश्य स्वस्थ भोजन के प्रति जागरूकता फैलाना और लोगों को अपने दैनिक आहार में ताज़े फल शामिल करने के लिए प्रेरित करना है।",
        whyTitle: "⭐ PSF क्यों चुनें?",
        why1: "✅ प्रीमियम गुणवत्ता वाले फल",
        why2: "✅ 100% ताज़े और स्वच्छ फल",
        why3: "✅ सावधानीपूर्वक चुने गए फल",
        why4: "✅ सुरक्षित पैकेजिंग",
        why5: "✅ ग्राहक संतुष्टि की गारंटी",

        backHome: "🏠 होम पर वापस जाएँ",

        pageTitle: "PSF",
        pageTagline: "ताज़गी जिस पर आप भरोसा कर सकते हैं",

        qualityTitle: "🍎 फलों की गुणवत्ता क्यों महत्वपूर्ण है",
        qualityText: "ताज़े और उच्च गुणवत्ता वाले फल विटामिन, खनिज, फाइबर और एंटीऑक्सीडेंट से भरपूर होते हैं। ये रोग प्रतिरोधक क्षमता बढ़ाते हैं, पाचन में सुधार करते हैं, हृदय को स्वस्थ रखते हैं और प्राकृतिक ऊर्जा प्रदान करते हैं। ताज़े फल चुनने से बेहतर स्वाद, अधिक पोषण और अच्छा स्वास्थ्य मिलता है।",

        chemicalTitle: "⚠️ रसायनों के हानिकारक प्रभाव",
        chemical1: "❌ फलों की सतह पर कीटनाशकों के अवशेष रह सकते हैं।",
        chemical2: "❌ कृत्रिम रूप से पकाने वाले रसायन पोषण कम कर सकते हैं।",
        chemical3: "❌ रासायनिक अवशेष एलर्जी और पेट की समस्याएँ पैदा कर सकते हैं।",
        chemical4: "❌ लंबे समय तक रसायनों के संपर्क से स्वास्थ्य पर बुरा प्रभाव पड़ सकता है।",
        chemical5: "✅ फल खाने से पहले उन्हें हमेशा अच्छी तरह धोएँ।",

        washTitle: "💧 फलों को सही तरीके से कैसे धोएँ",
         wash1: "🚰 फलों को 20–30 सेकंड तक साफ बहते पानी में धोएँ।",
        wash2: "🍎 फलों की सतह को हाथों से हल्के से रगड़ें।",
        wash3: "🚫 कभी भी साबुन, डिटर्जेंट या ब्लीच का उपयोग न करें।",
        wash4: "🧻 साफ कपड़े या टिश्यू से फलों को सुखाएँ।",
        wash5: "🔪 पहले फल धोएँ, फिर साफ चाकू से काटें।",

        storageTitle: "🧊 सुरक्षित भंडारण के सुझाव",
        storage1: "🥶 मुलायम फलों को फ्रिज में रखें।",
        storage2: "🍌 केले को कमरे के तापमान पर रखें।",
        storage3: "🍎 पके और कच्चे फलों को अलग रखें।",
        storage4: "📦 फलों को साफ और सूखे डिब्बों में रखें।",
        storage5: "❌ खराब फलों को तुरंत हटा दें।",

        healthyTitle: "🥗 स्वस्थ खाने के सुझाव",
        healthy1: "🍽️ प्रतिदिन 2–3 बार फलों का सेवन करें।",
        healthy2: "🌈 अलग-अलग रंगों के फल चुनें।",
        healthy3: "⏰ सुबह या हेल्दी स्नैक के रूप में फल खाएँ।",
        healthy4: "💧 पूरे दिन पर्याप्त मात्रा में पानी पिएँ।",
        healthy5: "🚫 खराब या फफूंदी लगे फल न खाएँ।",

        avoidTitle: "🚫 किन फलों से बचें",
        avoid1: "❌ सड़े या फफूंदी लगे फल।",
        avoid2: "❌ बदबू वाले फल।",
        avoid3: "❌ गहरे कटे या रस निकलते हुए फल।",
        avoid4: "❌ कीड़ों द्वारा खराब किए गए फल।",
        avoid5: "❌ बहुत अधिक दबे या चोट लगे फल।",

        environmentTitle: "🌍 पर्यावरण की रक्षा करें",
        environment1: "♻️ भोजन की बर्बादी कम करें।",
        environment2: "🛍️ पुनः उपयोग होने वाले शॉपिंग बैग का उपयोग करें।",
        environment3: "🌱 जहाँ संभव हो फलों के छिलकों से खाद बनाएँ।",
        environment4: "🍃 स्थानीय और मौसमी फल खरीदें।",
        environment5: "💚 पर्यावरण-अनुकूल खेती का समर्थन करें।",

        factsTitle: "💡 क्या आप जानते हैं?",
        fact1: "🍊 विटामिन C रोग प्रतिरोधक क्षमता बढ़ाने में मदद करता है।",
        fact2: "🍌 केला तुरंत प्राकृतिक ऊर्जा प्रदान करता है।",
        fact3: "🍎 सेब फाइबर का अच्छा स्रोत है।",
        fact4: "🍇 अंगूर शक्तिशाली एंटीऑक्सीडेंट से भरपूर होते हैं।",
        fact5: "🥭 मौसमी फल अधिक ताज़े और पौष्टिक होते हैं।",

        promiseTitle: "✅ PSF सुरक्षा का वादा",

        promiseText: "PSF (Pure Safe Fresh) ग्राहकों को ताज़े, सुरक्षित, स्वच्छ एवं उच्च गुणवत्ता वाले फल उपलब्ध कराने के लिए प्रतिबद्ध है। गुणवत्ता, स्वच्छता और विश्वसनीयता हमारे मूल सिद्धांत हैं। हम सुनिश्चित करते हैं कि प्रत्येक ग्राहक तक सर्वोत्तम गुणवत्ता वाले फल पहुँचें तथा उन्हें सुरक्षित, पौष्टिक और स्वास्थ्यवर्धक उत्पाद प्राप्त हों। हमारा उद्देश्य ग्राहकों का विश्वास बनाए रखना और स्वस्थ जीवनशैली को बढ़ावा देना है।",

        homeButton: "🏠 होम पेज पर वापस जाएँ"
    }

};

// ================= LANGUAGE =================

function changeLanguage() {

    let language = document.getElementById("language");

    let lang = language
        ? language.value
        : (localStorage.getItem("language") || "en");

    for (let id in translations[lang]) {

        let element = document.getElementById(id);

        if (element) {
            element.innerHTML = translations[lang][id];
        }

    }

    localStorage.setItem("language", lang);

}

window.onload = function () {

    let language = document.getElementById("language");

    if (language) {
        language.value = localStorage.getItem("language") || "en";
    
    }

    changeLanguage();

};
// =========================
// Feedback System
// =========================

let selectedRating = 0;

// Close Feedback
function closeFeedback() {
    document.getElementById("feedbackPopup").style.display = "none";
}

// Open Feedback (Menu se)
function openFeedback() {
    document.getElementById("feedbackPopup").style.display = "flex";
}

// Rating
function rate(rating) {
    selectedRating = rating;

    const stars = document.querySelectorAll(".stars span");

    stars.forEach((star, index) => {
        if (index < rating) {
            star.innerHTML = "★";
            star.classList.add("active");
        } else {
            star.innerHTML = "☆";
            star.classList.remove("active");
        }
    });
}

// Popup Create
document.addEventListener("DOMContentLoaded", function () {

    const popup = `
    <div id="feedbackPopup" class="feedback-popup" style="display:none;">
        <div class="feedback-box">

            <span class="close-btn" onclick="closeFeedback()">&times;</span>

            <h2>⭐ Rate Your Experience</h2>
            <p>How was your experience with PSF?</p>

            <div class="stars">
                <span onclick="rate(1)">☆</span>
                <span onclick="rate(2)">☆</span>
                <span onclick="rate(3)">☆</span>
                <span onclick="rate(4)">☆</span>
                <span onclick="rate(5)">☆</span>
            </div>

            <textarea id="feedbackText"
            placeholder="Write your feedback (Optional)"></textarea>

            <button onclick="submitFeedback()">
                Submit Feedback
            </button>

        </div>
    </div>

    <div id="successPopup" class="success-popup" style="display:none;">
        <div class="success-box">
            <div class="success-icon">✓</div>
            <h2>Feedback Sent!</h2>
            <p>Thank you for sharing your feedback.</p>
            <button onclick="closeSuccessPopup()">Continue</button>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML("beforeend", popup);

    setTimeout(() => {

        const lastFeedback = localStorage.getItem("feedbackDate");

        if (lastFeedback) {

            const days =
                (Date.now() - Number(lastFeedback)) /
                (1000 * 60 * 60 * 24);

            if (days < 30) return;
        }

        document.getElementById("feedbackPopup").style.display = "flex";

    }, 20000);

});

// Submit Feedback
async function submitFeedback() {

    if (selectedRating === 0) {
        alert("Please select a star rating.");
        return;
    }

    const comment =
        document.getElementById("feedbackText").value;

    try {

        await window.saveFeedback(
            selectedRating,
            comment,
            document.title
        );

        // 30 Days Lock
        localStorage.setItem(
            "feedbackDate",
            Date.now()
        );

        closeFeedback();

        document.getElementById("successPopup").style.display = "flex";

        selectedRating = 0;
        document.getElementById("feedbackText").value = "";

        document.querySelectorAll(".stars span").forEach(star => {
            star.innerHTML = "☆";
            star.classList.remove("active");
        });

    } catch (error) {

        alert(error.message);

    }
}

// Close Success Popup
function closeSuccessPopup() {
    document.getElementById("successPopup").style.display = "none";
}
function toggleTheme(){

    const toggle = document.getElementById("themeToggle");

    if(toggle.checked){
        document.body.classList.add("blue");
        localStorage.setItem("theme","blue");
    }else{
        document.body.classList.remove("blue");
        localStorage.setItem("theme","default");
    }

}

window.addEventListener("load",()=>{

    if(localStorage.getItem("theme")==="blue"){
        document.body.classList.add("blue");
        document.getElementById("themeToggle").checked=true;
    }

});
async function shareQR(image){

    if(navigator.share){

        await navigator.share({
            title:"PSF QR Code",
            text:"Scan this PSF QR Code",
            url:location.origin + "/" + image
        });

    }else{

        alert("Sharing is not supported on this device.");

    }

}
function startVoiceSearch() {

    if (!('webkitSpeechRecognition' in window)) {
        alert("Voice Search is not supported in this browser.");
        return;
    }

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function(){
        alert("Listening...");
    };

    recognition.onresult = function(event){
        const text = event.results[0][0].transcript;
        document.getElementById("searchBox").value = text;
        searchFruit();
    };

    recognition.onerror = function(event){
        alert("Error: " + event.error);
    };

    recognition.start();
}
const searchBox = document.getElementById("searchBox");
const micBtn = document.getElementById("micBtn");

searchBox.addEventListener("input", function () {
    if (this.value.trim() === "") {
        micBtn.style.display = "block";
    } else {
        micBtn.style.display = "none";
    }
});
