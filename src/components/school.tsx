// import { Users, Trophy, Shield, Sparkles, Star, Award } from "lucide-react";
// import { useState } from "react";
// import FloatingForm from "./form";

// export default function SchoolMarathonSpecial() {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState("");

//   const features = [
//     {
//       icon: Shield,
//       title: "Child-Safe Fabrics",
//       description: "Hypoallergenic, breathable cotton blends perfect for sensitive skin.",
//     },
//     {
//       icon: Trophy,
//       title: "Premium Quality",
//       description: "Durable stitching and colorfast fabrics that withstand daily wear.",
//     },
//     {
//       icon: Users,
//       title: "Custom Uniforms",
//       description: "Tailored designs with your school logo, colors, and branding.",
//     },
//     {
//       icon: Sparkles,
//       title: "Quick Delivery",
//       description: "Guaranteed delivery within 15-20 days for bulk school orders.",
//     }
//   ];

//   const uniformTypes = [
//     {
//       name: "School Uniforms",
//       description: "Custom-tailored uniforms with school branding",
//       minOrder: "MOQ: 100 pcs",
//       price: "Starting at ₹299/pc",
//       icon: "🎓",
//     },
//     {
//       name: "Sports Kits",
//       description: "Performance wear for school teams",
//       minOrder: "MOQ: 50 pcs",
//       price: "Starting at ₹399/pc",
//       icon: "⚽",
//     },
//     {
//       name: "Accessories",
//       description: "Ties, belts, socks & school bags",
//       minOrder: "MOQ: 200 pcs",
//       price: "Starting at ₹99/pc",
//       icon: "🎒",
//     }
//   ];

//   const handleSchoolInquiry = () => {
//     setSelectedProduct("School Uniforms");
//     setIsFormOpen(true);
//   };

//   const handleSportsKitQuote = () => {
//     setSelectedProduct("Sports Kits");
//     setIsFormOpen(true);
//   };

//   const handleAccessoriesQuote = () => {
//     setSelectedProduct("Accessories");
//     setIsFormOpen(true);
//   };

//   return (
//     <>
//       <section id="school-uniforms" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 scroll-mt-10">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Header Section */}
//           <div className="text-center mb-8 sm:mb-12">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ebc04a]/20 border border-[#ebc04a]/30 rounded-full mb-4">
//               <Star className="w-4 h-4 text-[#ebc04a]" />
//               <span className="text-[#163962] font-medium text-sm">Premium School Apparel</span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#163962] mb-3 sm:mb-4">
//               Custom School Uniforms & Kits
//             </h1>
//             <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
//               Premium quality uniforms, sports kits, and accessories designed specifically for educational institutions
//             </p>
//           </div>

//           {/* Main Content */}
//           <div className="space-y-8 sm:space-y-12">
            
//             {/* Features Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//               {features.map((feature, index) => {
//                 const Icon = feature.icon;
//                 const bgColors = [
//                   "bg-[#163962]/10 border-[#163962]/20",
//                   "bg-[#d82226]/10 border-[#d82226]/20",
//                   "bg-[#163962]/10 border-[#163962]/20",
//                   "bg-[#ebc04a]/10 border-[#ebc04a]/30"
//                 ];
//                 const iconBgColors = [
//                   "bg-[#163962]",
//                   "bg-[#d82226]",
//                   "bg-[#163962]",
//                   "bg-[#ebc04a]"
//                 ];
//                 return (
//                   <div 
//                     key={index}
//                     className={`text-center p-4 sm:p-6 border-2 rounded-xl ${bgColors[index]} hover:shadow-lg transition-all duration-300`}
//                   >
//                     <div className={`w-12 h-12 sm:w-16 sm:h-16 ${iconBgColors[index]} mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-lg shadow-sm`}>
//                       <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//                     </div>
//                     <h3 className="text-base sm:text-lg font-bold text-[#163962] mb-2 sm:mb-3">
//                       {feature.title}
//                     </h3>
//                     <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Uniform Types Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
//               {uniformTypes.map((type, index) => {
//                 const bgColors = [
//                   "bg-[#163962]/5 border-[#163962]/20",
//                   "bg-[#d82226]/5 border-[#d82226]/20",
//                   "bg-[#ebc04a]/5 border-[#ebc04a]/30"
//                 ];
//                 const buttonColors = [
//                   "bg-[#163962] hover:bg-[#163962]/90",
//                   "bg-[#d82226] hover:bg-[#d82226]/90",
//                   "bg-[#ebc04a] hover:bg-[#ebc04a]/90 text-gray-900"
//                 ];
//                 return (
//                   <div 
//                     key={index}
//                     className={`border-2 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${bgColors[index]}`}
//                   >
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <span className="text-3xl">{type.icon}</span>
//                         <h3 className="text-lg sm:text-xl font-bold text-[#163962]">{type.name}</h3>
//                       </div>
//                       <Award className="w-5 h-5 text-[#ebc04a]" />
//                     </div>
//                     <p className="text-gray-600 text-sm mb-4">{type.description}</p>
//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-gray-500">Minimum Order:</span>
//                         <span className="font-semibold text-[#163962]">{type.minOrder}</span>
//                       </div>
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-gray-500">Price:</span>
//                         <span className="font-bold text-[#d82226]">{type.price}</span>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={() => {
//                         setSelectedProduct(type.name);
//                         setIsFormOpen(true);
//                       }}
//                       className={`w-full mt-6 ${buttonColors[index]} text-white py-2.5 px-4 font-semibold text-sm hover:shadow-lg transition-all rounded-lg`}
//                     >
//                       Get Quote for {type.name}
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Stats and CTA Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
//               {/* Stats Block */}
//               <div className="bg-[#163962] p-6 sm:p-8 rounded-xl shadow-lg">
//                 <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2">
//                   <Trophy className="w-6 h-6 text-[#ebc04a]" />
//                   Trusted by 100+ Schools
//                 </h3>
//                 <div className="grid grid-cols-3 gap-4 sm:gap-6">
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">50K+</div>
//                     <div className="text-xs sm:text-sm text-[#ebc04a] font-medium uppercase tracking-wider leading-tight">
//                       Student Kits
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">100+</div>
//                     <div className="text-xs sm:text-sm text-[#ebc04a] font-medium uppercase tracking-wider leading-tight">
//                       Partner Schools
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">98%</div>
//                     <div className="text-xs sm:text-sm text-[#ebc04a] font-medium uppercase tracking-wider leading-tight">
//                       Satisfaction
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-6 pt-6 border-t border-white/20">
//                   <div className="flex items-center gap-2 text-white/90 text-sm">
//                     <Sparkles className="w-4 h-4 text-[#ebc04a]" />
//                     <span>ISO 9001:2015 Certified Manufacturing</span>
//                   </div>
//                 </div>
//               </div>

//               {/* CTA Block */}
//               <div className="bg-gradient-to-br from-[#163962] to-[#163962]/90 p-6 sm:p-8 rounded-xl shadow-lg">
//                 <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Start Your Order</h3>
//                 <div className="space-y-3 sm:space-y-4">
//                   <button 
//                     onClick={handleSchoolInquiry}
//                     className="w-full bg-[#ebc04a] hover:bg-[#ebc04a]/90 text-[#163962] py-3 sm:py-4 px-4 sm:px-6 font-bold text-base sm:text-lg hover:shadow-lg transition-all rounded-lg flex items-center justify-center gap-2"
//                   >
//                     <span className="text-xl">🎓</span>
//                     School Uniform Inquiry
//                   </button>
//                   <button 
//                     onClick={handleSportsKitQuote}
//                     className="w-full bg-[#d82226] hover:bg-[#d82226]/90 text-white py-3 sm:py-4 px-4 sm:px-6 font-bold text-base sm:text-lg hover:shadow-lg transition-all rounded-lg flex items-center justify-center gap-2"
//                   >
//                     <span className="text-xl">⚽</span>
//                     Sports Kit Quote
//                   </button>
//                   <button 
//                     onClick={handleAccessoriesQuote}
//                     className="w-full bg-white hover:bg-gray-100 text-[#163962] border-2 border-[#163962] py-3 sm:py-4 px-4 sm:px-6 font-bold text-base sm:text-lg hover:shadow-lg transition-all rounded-lg flex items-center justify-center gap-2"
//                   >
//                     <span className="text-xl">🎒</span>
//                     Accessories Package
//                   </button>
//                 </div>
//                 <p className="mt-6 text-white/70 text-sm text-center">
//                   Free design consultation included with every order
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating Form */}
//       <FloatingForm 
//         isOpen={isFormOpen} 
//         onClose={() => setIsFormOpen(false)}
//         defaultProduct={selectedProduct}
//       />
//     </>
//   );
// }
'use client'

import { Users, Trophy, Shield, Sparkles, Star, Award, Check, Truck, Palette, Heart } from "lucide-react";
import { useState } from "react";
import FloatingForm from "./form";

export default function SchoolMarathonSpecial() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Shield,
      title: "Child-Safe Fabrics",
      description: "Hypoallergenic, breathable cotton blends perfect for sensitive skin.",
      color: "#163962",
      iconBg: "bg-gradient-to-br from-blue-500 to-[#163962]",
      badge: "Parent Approved"
    },
    {
      icon: Trophy,
      title: "Premium Quality",
      description: "Durable stitching and colorfast fabrics that withstand daily wear.",
      color: "#d82226",
      iconBg: "bg-gradient-to-br from-red-500 to-[#d82226]",
      badge: "Long Lasting"
    },
    {
      icon: Users,
      title: "Custom Uniforms",
      description: "Tailored designs with your school logo, colors, and branding.",
      color: "#163962",
      iconBg: "bg-gradient-to-br from-blue-600 to-[#163962]",
      badge: "Unique Design"
    },
    {
      icon: Sparkles,
      title: "Quick Delivery",
      description: "Guaranteed delivery within 15-20 days for bulk school orders.",
      color: "#ebc04a",
      iconBg: "bg-gradient-to-br from-yellow-400 to-[#ebc04a]",
      badge: "On Time"
    }
  ];

  const uniformTypes = [
    {
      name: "School Uniforms",
      description: "Custom-tailored uniforms with school branding",
      minOrder: "MOQ: 100 pcs",
      price: "Starting at ₹299/pc",
      icon: "🎓",
      color: "#163962",
      gradient: "from-[#163962] to-blue-700",
      features: ["Custom Logo", "Multiple Sizes", "Free Mockup"]
    },
    {
      name: "Sports Kits",
      description: "Performance wear for school teams",
      minOrder: "MOQ: 50 pcs",
      price: "Starting at ₹399/pc",
      icon: "⚽",
      color: "#d82226",
      gradient: "from-[#d82226] to-red-600",
      features: ["Moisture Wicking", "Team Branding", "Durable Fabric"]
    },
  ];

  const stats = [
    { value: "50K+", label: "Student Kits", icon: "👕" },
    { value: "100+", label: "Partner Schools", icon: "🏫" },
    { value: "98%", label: "Satisfaction", icon: "⭐" },
    { value: "15-20", label: "Days Delivery", icon: "🚚" }
  ];

  const handleButtonClick = (product: string) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  return (
    <>
      <section id="school-uniforms" className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 scroll-mt-10 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#163962]/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#ebc04a]/5 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section with Enhanced Visual */}
          <div className="text-center mb-10 max-sm:mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ebc04a]/20 via-[#ebc04a]/10 to-[#163962]/10 border border-[#ebc04a]/30 rounded-full mb-4 animate-pulse">
              <Sparkles className="w-4 h-4 text-[#ebc04a] animate-spin-slow" />
              <span className="text-[#163962] font-semibold text-sm tracking-wide">Premium School Apparel</span>
              <Star className="w-4 h-4 text-[#d82226]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#163962] mb-4 leading-tight">
              Custom School Uniforms <span className="text-[#d82226]">&</span> Kits
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Premium quality uniforms, sports kits, and accessories designed specifically for educational institutions
            </p>
            
            {/* Trust Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">ISO 9001:2015 Certified</span>
            </div> */}
          </div>

          {/* Main Content */}
          <div className="space-y-12 sm:space-y-16">
            
            {/* Features Grid with Enhanced Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 hover:border-transparent overflow-hidden"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.iconBg} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${feature.iconBg} text-white`}>
                        {feature.badge}
                      </span>
                    </div>
                    
                    <div className={`w-16 h-16 ${feature.iconBg} mx-auto mb-6 flex items-center justify-center rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#163962] mb-3 text-center group-hover:text-gray-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center text-sm">
                      {feature.description}
                    </p>
                    
                    {/* Hover Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.iconBg} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                );
              })}
            </div>

            {/* Uniform Types with Enhanced Design */}
            <div className="mt-0">
              <div className="text-center  mb-4">
                <h2 className="text-3xl font-bold text-[#163962] mb-3">Explore Our Collections</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Choose from our premium range of school apparel</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {uniformTypes.map((type, index) => (
                  <div 
                    key={index}
                    className={`group relative border-2 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden ${
                      index === 0 
                        ? "bg-white border-gray-200" 
                        : "bg-gradient-to-br from-white via-white to-gray-50 border-gray-200 shadow-xl hover:shadow-2xl"
                    }`}
                  >
                    {index === 1 ? (
                      // Sports Kits Card - Matching Ready to Order design
                      <>
                        {/* Corner Decoration for Sports Kits */}
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${type.gradient} opacity-5 rounded-full -translate-y-12 translate-x-12`}></div>
                        
                        <div className="text-center mb-8">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className={`w-14 h-14 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                              <span className="text-2xl">{type.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#163962]">{type.name}</h3>
                          </div>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                        
                        {/* Features List */}
                        <div className="mb-6 space-y-2">
                          {type.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${type.gradient} flex items-center justify-center`}>
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Pricing and Order Info */}
                        <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-xl p-4 lg:mt-12 mb-6">
                          <div className="flex items-center justify-between  mb-2">
                            <span className="text-gray-500 text-sm">Minimum Order</span>
                            <span className="font-bold text-[#163962]">{type.minOrder}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-sm">Starting Price</span>
                            <span className="text-2xl font-black text-[#d82226]">{type.price.split('/')[0]}</span>
                          </div>
                          <div className="text-xs text-gray-400 text-right">per piece</div>
                        </div>
                        
                        <button 
                          onClick={() => handleButtonClick(type.name)}
                          className="group w-full bg-gradient-to-r from-[#d82226] to-red-600 text-white py-4 px-6 font-bold text-lg hover:shadow-xl transition-all rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02]"
                        >
                          <span className="text-2xl">{type.icon}</span>
                          Get Quote
                          <Trophy className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </>
                    ) : (
                      // Original School Uniforms Card
                      <>
                        {/* Corner Decoration */}
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${type.gradient} opacity-5 rounded-full -translate-y-12 translate-x-12`}></div>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                              <span className="text-2xl">{type.icon}</span>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-[#163962]">{type.name}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Truck className="w-4 h-4 text-gray-400" />
                                <span className="text-xs text-gray-500">Fast Delivery</span>
                              </div>
                            </div>
                          </div>
                          <Award className="w-6 h-6 text-[#ebc04a]" />
                        </div>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                        
                        {/* Features List */}
                        <div className="mb-6 space-y-2">
                          {type.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${type.gradient} flex items-center justify-center`}>
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Pricing and Order Info */}
                        <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-xl p-4 mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-500 text-sm">Minimum Order</span>
                            <span className="font-bold text-[#163962]">{type.minOrder}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-sm">Starting Price</span>
                            <span className="text-2xl font-black text-[#d82226]">{type.price.split('/')[0]}</span>
                          </div>
                          <div className="text-xs text-gray-400 text-right">per piece</div>
                        </div>
                        
                        <button 
                          onClick={() => handleButtonClick(type.name)}
                          className={`w-full bg-gradient-to-r from-[#d82226] to-red-600 text-white py-4 font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all rounded-xl group/btn`}
                        >
                          <span className="flex items-center justify-center gap-3">
                            Get Quote
                            <Palette className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                ))}
                
                {/* Ready to Order Card */}
                <div className="bg-gradient-to-br from-white via-white to-gray-50 border-2 border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#163962] mb-2">Ready to Order?</h3>
                    <p className="text-gray-600">Get started with your custom school apparel</p>
                  </div>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleButtonClick("School Uniforms")}
                      className="group w-full bg-gradient-to-r from-[#163962] to-blue-700 text-white py-4 px-2 font-bold text-lg hover:shadow-xl transition-all rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                      <span className="text-2xl">🎓</span>
                      School Uniform Inquiry
                      <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    
                    <button 
                      onClick={() => handleButtonClick("Sports Kits")}
                      className="group w-full bg-gradient-to-r from-[#d82226] to-red-600 text-white py-4 px-0 font-bold text-lg hover:shadow-xl transition-all rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                      <span className="text-2xl">⚽</span>
                      Sports Kit Quote
                      <Trophy className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    
                    <button 
                      onClick={() => handleButtonClick("Accessories")}
                      className="group w-full bg-gradient-to-r from-[#ebc04a] to-yellow-500 text-gray-900 py-4 px-2 font-bold text-lg hover:shadow-xl transition-all rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                      <span className="text-2xl">🎒</span>
                      Accessories Package
                      <Star className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-3 text-gray-600">
                      <Users className="w-5 h-5 text-[#163962]" />
                      <span className="text-sm font-medium">Free design consultation included with every order</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and CTA Section - Enhanced */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Stats Block */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#163962] via-[#163962] to-blue-900 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <Trophy className="w-8 h-8 text-[#ebc04a]" />
                    <h3 className="text-2xl font-bold text-white">Trusted by 100+ Schools Nationwide</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div className="text-3xl sm:text-4xl font-black text-white mb-2 flex items-center justify-center gap-2">
                          <span className="text-2xl">{stat.icon}</span>
                          {stat.value}
                        </div>
                        <div className="text-sm text-[#ebc04a] font-semibold uppercase tracking-wider group-hover:text-white transition-colors">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <div className="flex items-center gap-2 text-white/90">
                        <Sparkles className="w-5 h-5 text-[#ebc04a]" />
                        <span>ISO 9001:2015 Certified</span>
                      </div>
                      <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                      <div className="flex items-center gap-2 text-white/90">
                        <Heart className="w-5 h-5 text-red-400" />
                        <span>Child-Safe Materials</span>
                      </div>
                    </div>
                  </div>
                </div>
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