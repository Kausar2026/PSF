// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAyJ_WqA7d2i20Yko6oSMPhRabrUVV9U50",
  authDomain: "psf-website-4705b.firebaseapp.com",
  projectId: "psf-website-4705b",
  storageBucket: "psf-website-4705b.firebasestorage.app",
  messagingSenderId: "1081225322203",
  appId: "1:1081225322203:web:c83ea8c805d3acdfda76fe",
  measurementId: "G-CB5LS8Y33B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save Feedback Function
window.saveFeedback = async function (rating, comment, page) {
    try {
        await addDoc(collection(db, "feedback"), {
            rating: rating,
            comment: comment,
            page: page,
            time: serverTimestamp()
        });

        
    } catch (e) {
        alert("❌ Error: " + e.message);
    }
};
console.log("Firebase Loaded");
console.log(window.saveFeedback);