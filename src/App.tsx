// src/App.tsx (your file)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyManufacturer from "./components/WhyManufacturer";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingChatbot from "./components/FloatingChatbot";
import Gallery from "./components/Gallery";
import PrivacyPolicy from "./components/Privacypolicy";
import ThankYou from "./pages/ThankYou";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GoogleAdsPhoneSwap from "./components/GoogleAdsPhoneSwap"; // <-- add
import SchoolMarathonSpecial from "./components/school";
// import SchoolMarathonSpecial from "./components/school";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <SchoolMarathonSpecial />
      <WhyManufacturer />
      <Testimonials />
      <Gallery />
    </>
  );
}

function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-slate-600 mt-2">
          The page you’re looking for doesn’t exist.
        </p>
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Google Ads call tracking (phone swap) */}
      <GoogleAdsPhoneSwap />

      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
        <FloatingChatbot />
      </div>
    </Router>
  );
}

export default App;
