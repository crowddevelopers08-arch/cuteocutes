// src/components/GoogleAdsPhoneSwap.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGtag, enablePhoneSwap } from "../lib/gtag";

const SEND_TO = "AW-17656328963/xlJ0COC8_LIbEIPmmONB";
const DISPLAY_PHONE = "78670 13553"; // keep formatting exactly as shown on the site

export default function GoogleAdsPhoneSwap() {
  const { pathname } = useLocation();

  useEffect(() => {
    initGtag();
    enablePhoneSwap(SEND_TO, DISPLAY_PHONE);
  }, [pathname]);

  return null;
}
