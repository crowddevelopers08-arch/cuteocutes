import { MessageCircle, Phone, X, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// If you're using react-router, you can swap the hard redirect for useNavigate()

type FormData = {
  name: string;
  phone: string;
  email: string;
  product: string;
};

const THANK_YOU_URL = "/thank-you"; // change to full URL if needed

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    product: "",
  });
  const [loading, setLoading] = useState(false);

  // ESC to close panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const redirectToThankYou = (product?: string) => {
    // keep source params for attribution
    const qs = new URLSearchParams(window.location.search);
    qs.set("lead", "1"); // optional flag

    // fire GTM/GA4 event before redirect
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "lead_submit",
      lead_source: "Cuteocute React LP",
      lead_product: product || undefined,
    });

    const target = `${THANK_YOU_URL}?${qs.toString()}`;
    // small delay so GTM catches the event
    setTimeout(() => window.location.assign(target), 150);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const tId = toast.loading("Submitting...");

    try {
      const res = await fetch(
        "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/hKAvMr1f",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            // store product + page URL in Privyr notes
            notes: `Product: ${formData.product} | Page: ${window.location.href}`,
            source: "Cuteocute React Landing Page",
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Form submitted successfully!", { id: tId });

      // optional: clear + close before redirect
      setFormData({ name: "", phone: "", email: "", product: "" });
      setOpen(false);

      // redirect to thank-you page
      redirectToThankYou(formData.product);
    } catch (err) {
      toast.error("❌ Something went wrong. Please try again.", { id: tId });
      console.error("Privyr error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating CTA Button — hidden on mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:flex hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-3 group hover:shadow-xl hover:scale-105"
          aria-label="Open quote form"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-300 whitespace-nowrap">
            Get Quote
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-slate-200 md:hidden">
        <div className="flex justify-between">
          {/* WhatsApp */}
          <a
            href="https://wa.link/lw77w6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 text-center font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>

          {/* Divider */}
          <div className="w-px bg-slate-200" />

          {/* Get Quote */}
          <button
            onClick={() => setOpen(true)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-4 text-center font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Get Quote
          </button>
        </div>
      </div>

      {/* Click-outside overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:bg-black/20"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Form Panel */}
      <div
        className={[
          "fixed z-50",
          "md:bottom-24 md:right-6 md:left-auto md:w-96",
          "md:rounded-2xl md:shadow-2xl",
          "bottom-0 left-0 right-0",
          "bg-white md:max-h-[68vh] max-h-[90vh]", // compact height
          "transition-all duration-300 ease-out",
          "overflow-hidden",
          "border border-slate-200",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto md:scale-100"
            : "opacity-0 translate-y-full md:translate-y-4 md:scale-95 pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (compact) */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-2.5 md:rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 id="quote-title" className="font-semibold text-base">
                  Get Factory Quote
                </h3>
                <p className="text-red-100 text-xs">
                  We'll respond within 2 hours
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact Form Content */}
        <div className="flex-1 overflow-y-auto p-3">
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Product Type *
              </label>
              <select
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white cursor-pointer"
                value={formData.product}
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
              >
                <option value="" disabled className="text-slate-400">
                  Select your product
                </option>
                <option value="Round Neck T-Shirt (MOQ 100 pcs)">
                  Round Neck T-Shirt (MOQ 100 pcs)
                </option>
                <option value="Polo T-Shirt (MOQ 100 pcs)">
                  Polo T-Shirt (MOQ 100 pcs)
                </option>
                <option value="Marathon T-Shirt (MOQ 1000 pcs)">
                  Marathon T-Shirt (MOQ 1000 pcs)
                </option>
                <option value="Staff Uniforms (MOQ 100 pcs)">
                  Staff Uniforms (MOQ 100 pcs)
                </option>
                <option value="Promotional / Event Tees (MOQ 100 pcs)">
                  Promotional / Event Tees (MOQ 100 pcs)
                </option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold text-sm transition-all duration-200"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                "Get Instant Quote →"
              )}
            </button>

            <p className="text-[11px] text-slate-500 text-center">
              💬 We'll contact you within 2 hours — MOQ 100 pcs
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
