import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Cute O Cute Garments
            </h3>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Direct manufacturer of premium t-shirts from Tirupur. Specializing
              in bulk orders for corporates, events, and brands with
              factory-direct pricing.
            </p>
          </div>

          {/* Contact Info - Compact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>

            <div className="flex items-start gap-3 group">
              <Phone className="w-4 h-4 text-red-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <a
                  href="tel:+917867013553"
                  className="text-slate-300 hover:text-white transition-colors font-medium block"
                >
                  +91 78670 13553
                </a>
                <p className="text-slate-400 text-sm">Sales</p>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <Mail className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <a
                  href="mailto:Sudha@cuteocute.in?subject=Bulk Order Inquiry&body=Hello, I'm interested in placing a bulk order. Please contact me with more information."
                  className="text-slate-300 hover:text-white transition-colors font-medium block text-sm"
                >
                  Sudha@cuteocute.in
                </a>
                <p className="text-slate-400 text-sm">Bulk Orders</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3 group">
              <Clock className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-slate-300 font-medium">Mon – Sat</p>
                <p className="text-slate-400 text-sm">10am – 7pm</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Factory</h4>

            <div className="flex items-start gap-3 group">
              <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <a
                  href="https://www.google.com/maps/dir//1st+floor+5th,+18%2F2,+Ayyan+nagar,+Street,+KTC+School+Rd,+Karuvampalayam,+Tiruppur,+Tamil+Nadu+641604/@11.0918911,77.2662378,12.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba9073c7de71ba1:0xc4f55cfdeb5dcb4!2m2!1d77.3294915!2d11.0884901?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors text-sm leading-relaxed block"
                >
                 1st floor 5th, 18/2, 
                  <br />
                  3Ayyan nagar, Street, KTC School Rd,
                  <br />
                   Karuvampalayam, Tiruppur, Tamil Nadu 641604
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Cute O Cute Garments. All rights reserved.
            </p>

            <div className="flex gap-6 mb-12 sm:mb-0">
              <a
                href="/privacy"
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
