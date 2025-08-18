// src/recaptcha.js
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "./db";

/**
 * Membuat reCAPTCHA untuk elemen tertentu.
 * @param {string} elementId - ID elemen HTML tempat reCAPTCHA dirender.
 * @param {boolean} invisible - Jika true, pakai invisible reCAPTCHA.
 */
export const setupRecaptcha = (elementId = "recaptcha-container", invisible = true) => {
    if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
            elementId,
            {
                size: invisible ? "invisible" : "normal",
                callback: response => {
                    console.log("reCAPTCHA sukses");
                },
                "expired-callback": () => {
                    console.warn("reCAPTCHA kadaluarsa, silakan ulangi.");
                },
            },
            auth
        );

        console.log(`reCAPTCHA dibuat di #${elementId}`);
    }
    return window.recaptchaVerifier;
};
