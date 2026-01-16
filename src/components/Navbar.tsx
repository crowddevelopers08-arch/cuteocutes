import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="/logo.webp" // replace with your actual logo path
              alt="Cute O Cute Garments"
              className="h-16 w-auto"
            />
            {/* <div className="hidden sm:block">
    <h1 className="text-xl font-bold text-slate-900">Cute O Cute</h1>
    <p className="text-xs text-slate-600">Garments Factory</p>
  </div> */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-slate-700 hover:text-red-600 font-medium transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("why-manufacturer")}
              className="text-slate-700 hover:text-red-600 font-medium transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-slate-700 hover:text-red-600 font-medium transition-colors"
            >
              Testimonials
            </button>
            {/* <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-700 hover:text-red-600 font-medium transition-colors"
            >
              Contact
            </button> */}
            <button
              onClick={() => scrollToSection("quote-form")}
              className="relative bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors overflow-hidden group"
            >
              <a
                href="tel:+917867013553"
                className="relative z-10 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us Directly
                {/* <span className="text-xs font-normal opacity-90">
                  +91 78670 13553
                </span> */}
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("why-manufacturer")}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Testimonials
            </button>
            {/* <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Contact
            </button> */}
            <button
              onClick={() => scrollToSection("quote-form")}
              className="block w-full bg-red-600 text-white px-4 py-3 rounded-lg font-semibold"
            >
              <a
                href="tel:+917867013553"
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
              >
                <ArrowRight className="w-5 h-5" />
                Call Us Directly
              </a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
