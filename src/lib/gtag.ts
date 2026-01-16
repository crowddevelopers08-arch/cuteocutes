// src/lib/gtag.ts
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_ADS_ID = "AW-17656328963";

// Load gtag.js once and init Ads property
export function initGtag() {
  if (!window.dataLayer) window.dataLayer = [];

  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments as unknown as any);
    };
  }

  // Load script if not present
  if (!document.getElementById("gtag-js-" + GA_ADS_ID)) {
    const s = document.createElement("script");
    s.id = "gtag-js-" + GA_ADS_ID;
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ADS_ID}`;
    document.head.appendChild(s);
  }

  // Safe to call repeatedly
  window.gtag("js", new Date());
  window.gtag("config", GA_ADS_ID);
}

/**
 * Ask Google Ads to swap/track calls to a specific phone number.
 * Keep the number string EXACTLY as it’s rendered on the page (spaces included).
 */
export function enablePhoneSwap(sendTo: string, phoneNumber: string) {
  // give the DOM a tick so phone number exists
  setTimeout(() => {
    window.gtag?.("config", sendTo, {
      phone_conversion_number: phoneNumber,
    });
  }, 0);
}
