import { Users, Trophy, Shield, Sparkles, Star, Award } from "lucide-react";
import { useState } from "react";
import FloatingForm from "./form";

export default function SchoolMarathonSpecial() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const features = [
    {
      icon: Shield,
      title: "Child-Safe Fabrics",
      description: "Hypoallergenic, breathable cotton blends perfect for sensitive skin.",
    },
    {
      icon: Trophy,
      title: "Premium Quality",
      description: "Durable stitching and colorfast fabrics that withstand daily wear.",
    },
    {
      icon: Users,
      title: "Custom Uniforms",
      description: "Tailored designs with your school logo, colors, and branding.",
    },
    {
      icon: Sparkles,
      title: "Quick Delivery",
      description: "Guaranteed delivery within 15-20 days for bulk school orders.",
    }
  ];

  const uniformTypes = [
    {
      name: "School Uniforms",
      description: "Custom-tailored uniforms with school branding",
      minOrder: "MOQ: 100 pcs",
      price: "Starting at ₹299/pc",
      icon: "🎓",
    },
    {
      name: "Sports Kits",
      description: "Performance wear for school teams",
      minOrder: "MOQ: 50 pcs",
      price: "Starting at ₹399/pc",
      icon: "⚽",
    },
    {
      name: "Accessories",
      description: "Ties, belts, socks & school bags",
      minOrder: "MOQ: 200 pcs",
      price: "Starting at ₹99/pc",
      icon: "🎒",
    }
  ];

  const handleSchoolInquiry = () => {
    setSelectedProduct("School Uniforms");
    setIsFormOpen(true);
  };

  const handleSportsKitQuote = () => {
    setSelectedProduct("Sports Kits");
    setIsFormOpen(true);
  };

  const handleAccessoriesQuote = () => {
    setSelectedProduct("Accessories");
    setIsFormOpen(true);
  };

  return (
    <>
      <section id="school-uniforms" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 scroll-mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ebc04a]/20 border border-[#ebc04a]/30 rounded-full mb-4">
              <Star className="w-4 h-4 text-[#ebc04a]" />
              <span className="text-[#163962] font-medium text-sm">Premium School Apparel</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#163962] mb-3 sm:mb-4">
              Custom School Uniforms & Kits
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality uniforms, sports kits, and accessories designed specifically for educational institutions
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8 sm:space-y-12">
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const bgColors = [
                  "bg-[#163962]/10 border-[#163962]/20",
                  "bg-[#d82226]/10 border-[#d82226]/20",
                  "bg-[#163962]/10 border-[#163962]/20",
                  "bg-[#ebc04a]/10 border-[#ebc04a]/30"
                ];
                const iconBgColors = [
                  "bg-[#163962]",
                  "bg-[#d82226]",
                  "bg-[#163962]",
                  "bg-[#ebc04a]"
                ];
                return (
                  <div 
                    key={index}
                    className={`text-center p-4 sm:p-6 border-2 rounded-xl ${bgColors[index]} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${iconBgColors[index]} mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-lg shadow-sm`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#163962] mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Uniform Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {uniformTypes.map((type, index) => {
                const bgColors = [
                  "bg-[#163962]/5 border-[#163962]/20",
                  "bg-[#d82226]/5 border-[#d82226]/20",
                  "bg-[#ebc04a]/5 border-[#ebc04a]/30"
                ];
                const buttonColors = [
                  "bg-[#163962] hover:bg-[#163962]/90",
                  "bg-[#d82226] hover:bg-[#d82226]/90",
                  "bg-[#ebc04a] hover:bg-[#ebc04a]/90 text-gray-900"
                ];
                return (
                  <div 
                    key={index}
                    className={`border-2 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${bgColors[index]}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{type.icon}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#163962]">{type.name}</h3>
                      </div>
                      <Award className="w-5 h-5 text-[#ebc04a]" />
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Minimum Order:</span>
                        <span className="font-semibold text-[#163962]">{type.minOrder}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Price:</span>
                        <span className="font-bold text-[#d82226]">{type.price}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedProduct(type.name);
                        setIsFormOpen(true);
                      }}
                      className={`w-full mt-6 ${buttonColors[index]} text-white py-2.5 px-4 font-semibold text-sm hover:shadow-lg transition-all rounded-lg`}
                    >
                      Get Quote for {type.name}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Stats and CTA Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Stats Block */}
              <div className="bg-[#163962] p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-[#ebc04a]" />
                  Trusted by 100+ Schools
                </h3>
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">50K+</div>
                    <div className="text-xs sm:text-sm text-[#ebc04a] font-medium uppercase tracking-wider leading-tight">
                      Student Kits
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">100+</div>
                    <div className="text-xs sm:text-sm text-[#ebc04a] font-medium uppercase tracking-wider leading-tight">
                      Partner Schools
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">98%</div>
                    <div className="text-xs sm:text-sm text-[#ebc04a] font-medium uppercase tracking-wider leading-tight">
                      Satisfaction
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Sparkles className="w-4 h-4 text-[#ebc04a]" />
                    <span>ISO 9001:2015 Certified Manufacturing</span>
                  </div>
                </div>
              </div>

              {/* CTA Block */}
              <div className="bg-gradient-to-br from-[#163962] to-[#163962]/90 p-6 sm:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Start Your Order</h3>
                <div className="space-y-3 sm:space-y-4">
                  <button 
                    onClick={handleSchoolInquiry}
                    className="w-full bg-[#ebc04a] hover:bg-[#ebc04a]/90 text-[#163962] py-3 sm:py-4 px-4 sm:px-6 font-bold text-base sm:text-lg hover:shadow-lg transition-all rounded-lg flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">🎓</span>
                    School Uniform Inquiry
                  </button>
                  <button 
                    onClick={handleSportsKitQuote}
                    className="w-full bg-[#d82226] hover:bg-[#d82226]/90 text-white py-3 sm:py-4 px-4 sm:px-6 font-bold text-base sm:text-lg hover:shadow-lg transition-all rounded-lg flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">⚽</span>
                    Sports Kit Quote
                  </button>
                  <button 
                    onClick={handleAccessoriesQuote}
                    className="w-full bg-white hover:bg-gray-100 text-[#163962] border-2 border-[#163962] py-3 sm:py-4 px-4 sm:px-6 font-bold text-base sm:text-lg hover:shadow-lg transition-all rounded-lg flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">🎒</span>
                    Accessories Package
                  </button>
                </div>
                <p className="mt-6 text-white/70 text-sm text-center">
                  Free design consultation included with every order
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Form */}
      <FloatingForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        defaultProduct={selectedProduct}
      />
    </>
  );
}