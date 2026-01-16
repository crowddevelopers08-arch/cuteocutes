import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Visit Our Factory or Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See our manufacturing process firsthand or reach out to discuss your bulk requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Phone</h3>
            <p className="text-slate-600 mb-2">Sales Enquiry</p>
            <a href="tel:+919876543210" className="text-red-600 font-semibold hover:text-red-700">
              +91 78670 13553

            </a>
            <p className="text-slate-600 mt-4 mb-2">Factory</p>
            <a href="tel:+914421234567" className="text-red-600 font-semibold hover:text-red-700">
              +91 44 2123 4567
            </a>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
            <p className="text-slate-600 mb-2">Bulk Orders</p>
            <a href="mailto:Sudha@cuteocute.in" className="text-blue-600 font-semibold hover:text-blue-700 break-all">
              Sudha@cuteocute.in
            </a>
            <p className="text-slate-600 mt-4 mb-2">General Enquiries</p>
            <a href="mailto:info@cuteocute.com" className="text-blue-600 font-semibold hover:text-blue-700 break-all">
              info@cuteocute.com
            </a>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Factory Location</h3>
            <p className="text-slate-700 leading-relaxed">
              Cute O Cute Garments<br />
              Industrial Estate<br />
              Tirupur, Tamil Nadu<br />
              India - 641604
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Business Hours</h3>
            <div className="space-y-2 text-slate-700">
              <div>
                <p className="font-semibold">Monday - Saturday</p>
                <p className="text-slate-600">9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Sunday</p>
                <p className="text-slate-600">Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Schedule a Factory Visit</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                See our manufacturing process, quality control, and printing facilities.
                Perfect for corporate clients planning large orders.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-slate-300">Tour our production floor</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-slate-300">Meet our quality team</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-slate-300">See fabric & printing samples</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-slate-300">Discuss custom requirements</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg text-center"
              >
                Schedule Visit via Form
              </button>
              <a
                href="https://wa.me/919876543210?text=I%20would%20like%20to%20schedule%20a%20factory%20visit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg text-center"
              >
                Schedule via WhatsApp
              </a>
              <a
                href="tel:+919876543210"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center"
              >
                Call to Schedule
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
