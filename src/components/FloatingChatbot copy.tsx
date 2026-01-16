import { MessageCircle, Phone, X, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  phone: string;
  email: string;
  product: string;
};

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    product: "",
  });
  const [loading, setLoading] = useState(false);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showThanks) setShowThanks(false);
        else setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showThanks]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const tId = toast.loading("Submitting...");

    try {
      await emailjs.send(
        "service_fvogtij",
        "template_zzz32i9",
        formData,
        "aw3zm7Z5ZrkOGellv"
      );

      toast.success("Form submitted successfully!", { id: tId });
      setFormData({ name: "", phone: "", email: "", product: "" });
      setOpen(false); // close the form
      setShowThanks(true); // show the thank-you modal
    } catch (err: unknown) {
      let msg = "❌ Something went wrong. Please try again.";
      if (typeof err === "object" && err && "text" in err) {
        msg = `❌ ${String((err as any).text)}`;
      } else if (typeof err === "string") {
        msg = `❌ ${err}`;
      }
      toast.error(msg, { id: tId });
      console.error("EmailJS error:", err);
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
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-slate-200 md:hidden">
        <div className="flex justify-between">
          {/* WhatsApp Button */}
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

          {/* Get Quote Button */}
          <button
            onClick={() => setOpen(true)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-4 text-center font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Get Quote
          </button>
        </div>
      </div>

      {/* Click-outside overlay for form */}
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
          "bg-white md:max-h-[85vh] max-h-[90vh]",
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
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 md:rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 id="quote-title" className="font-semibold text-lg">
                  Get Factory Quote
                </h3>
                <p className="text-red-100 text-sm">
                  We'll respond within 2 hours
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-1 mb-6">
            <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
              <p className="text-slate-700 text-sm">
                Hello! Let me help you get the best factory price for your bulk
                order. Please fill in the details below.
              </p>
            </div>
            <p className="text-xs text-slate-500 text-right mr-2">Just now</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder-slate-400"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder-slate-400"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder-slate-400"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Product Type *
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white cursor-pointer"
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
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                "Get Instant Quote →"
              )}
            </button>

            <div className="text-center space-y-2">
              <p className="text-sm text-slate-500">
                💬 We'll contact you within 2 hours
              </p>
              <p className="text-xs text-slate-400">
                MOQ: 100 pcs (Marathon: 1000 pcs)
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* THANK YOU MODAL */}
      {showThanks && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 z-[60] bg-black/60"
            onClick={() => setShowThanks(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="thanks-title"
            className="fixed z-[61] inset-0 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-4 flex items-center justify-center relative">
                <h3
                  id="thanks-title"
                  className="font-semibold text-xl text-center"
                >
                  Thank you! 🎉
                </h3>
                <button
                  onClick={() => setShowThanks(false)}
                  aria-label="Close thank you"
                  className="absolute right-4 p-2 rounded-full hover:bg-white/20 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-slate-700">
                  Your request has been submitted. Our team will get back to you
                  shortly.
                </p>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500 mb-2">
                    For more details, contact:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+917867013553"
                      className="flex items-center gap-2 font-medium text-slate-800 hover:underline"
                    >
                      <Phone className="w-4 h-4" /> +91 78670 13553
                    </a>
                    <a
                      href="mailto:Sudha@cuteocute.in"
                      className="flex items-center gap-2 font-medium text-slate-800 hover:underline"
                    >
                      <Mail className="w-4 h-4" /> Sudha@cuteocute.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="tel:+917867013553"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white px-4 py-3 font-semibold hover:bg-green-700 transition"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a
                    href="mailto:Sudha@cuteocute.in?subject=Quote%20Request%20Follow-up"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 text-white px-4 py-3 font-semibold hover:bg-slate-900 transition"
                  >
                    <Mail className="w-4 h-4" /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
