// src/pages/ThankYou.tsx
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const ADS_ID = "AW-17656328963";
const SEND_TO = "AW-17656328963/QW8ACJKSibMbEIPmmONB"; // LP - Garments leads

export default function ThankYou() {
  useEffect(() => {
    // Ensure dataLayer
    window.dataLayer = window.dataLayer || [];

    const ensureGtagAndFire = () => {
      // define gtag if missing (safe no-op wrapper)
      window.gtag =
        window.gtag ||
        function () {
          window.dataLayer.push(arguments as unknown as any);
        };

      // init + config (idempotent)
      window.gtag("js", new Date());
      window.gtag("config", ADS_ID);

      // your GA4-style lead event (kept from original)
      window.dataLayer.push({
        event: "generate_lead",
        lead_source: "Cuteocute React LP",
      });

      // Google Ads conversion event
      window.gtag("event", "conversion", { send_to: SEND_TO });
    };

    // If gtag script not present, load it, then fire
    if (!document.getElementById("gtag-js-" + ADS_ID)) {
      const s = document.createElement("script");
      s.id = "gtag-js-" + ADS_ID;
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
      s.onload = ensureGtagAndFire;
      document.head.appendChild(s);
    } else {
      ensureGtagAndFire();
    }
  }, []);

  // Optional: read UTMs / product param to show on page
  const params = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const product = params.get("product");

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">Thank you! 🎉</h1>
        <p className="text-slate-600 mt-2">
          We’ve received your request. Our team will reach out shortly.
        </p>

        {product && (
          <p className="text-slate-500 text-sm mt-2">
            Product selected: <span className="font-medium">{product}</span>
          </p>
        )}

        <a
          href="/"
          className="inline-block mt-6 rounded-lg bg-red-600 text-white px-5 py-3 hover:bg-red-700 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
