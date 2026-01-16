import { MessageCircle, Phone } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-slate-200 md:hidden">
      <div className="flex justify-between">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-1 text-center font-semibold flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>

        {/* Divider */}
        <div className="w-px bg-slate-200" />

        {/* Get Quote Button */}
        <button
          onClick={() =>
            document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-1 text-center font-semibold flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Get Quote
        </button>
      </div>
    </div>
  );
}
