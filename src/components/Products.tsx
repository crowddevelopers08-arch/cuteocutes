import { ShoppingBag, Package, Trophy, Users, Check } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "Polo T-Shirts",
      badge: "BUY 1 GET 1 FREE",
      offer: "Just for ₹499",
      price: "₹280",
      originalPrice: "₹499",
      moq: "100 pcs",
      imageSrc: "/polo.jpg",
      features: [
        "Premium micro polyester fabric",
        "Corporate collar design",
        "Logo embroidery & printing",
        "Ideal for office staff & management",
        "Multiple color options available",
        "Durable & professional look",
      ],
      icon: ShoppingBag,
      highlight: true,
      tagline: "Limited Time Offer",
    },
     {
      title: "Schools Uniforms",
      badge: "WINTER SPECIAL",
      offer: "Premium Quality",
      price: "₹199",
      originalPrice: "₹799",
      moq: "100 pcs",
      imageSrc: "/ChatGP.png",
      features: [
        "Premium fleece fabric",
        "Kangaroo pocket design",
        "Custom embroidery & printing",
        "Ribbed cuffs and hem",
        "Unisex sizing available",
        "Perfect for corporate events",
      ],
      icon: Package,
      highlight: true,
      tagline: "Winter Collection",
    },
    {
      title: "Marathon T-Shirts",
      badge: "MADE FOR CHAMPIONS",
      offer: "Starting at ₹150",
      price: "₹150",
      moq: "1000 pcs",
      imageSrc: "/marathon-tees.jpg",
      features: [
        "Breathable dry-fit technology",
        "Moisture wicking fabric",
        "Lightweight & comfortable",
        "Event logo printing",
        "Quick drying material",
        "Ideal for sports & outdoor events",
      ],
      icon: Trophy,
      highlight: true,
      tagline: "Bulk Event Special",
    },
    {
      title: "Round Neck Tees",
      badge: "STAFF UNIFORM",
      offer: "Economical Pricing",
      price: "₹199",
      moq: "100 pcs",
      imageSrc: "/round.jpg",
      features: [
        "Soft combed cotton fabric",
        "Perfect for daily staff uniforms",
        "Screen printing and embroidery",
        "Cost-effective bulk solution",
        "Comfortable for long hours",
        "Easy maintenance & care",
      ],
      icon: Users,
      highlight: true,
      tagline: "Corporate Choice",
    },
   
  ];

  return (
    <section id="products" className="py-12 max-[470px]:py-6 max-[470px]:mt-0 bg-white scroll-mt-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center max-[470px]:mb-8 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Factory Direct Offers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Limited time specials from our Tirupur manufacturing unit
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isLastCard = index === products.length - 1; // Check if it's the last card
            return (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 flex flex-col h-full ${
                  product.highlight
                    ? "border-red-500 shadow-xl relative"
                    : "border-slate-200"
                }`}
              >
                {/* Special Offer Ribbon */}
                {product.badge === "BUY 1 GET 1 FREE" && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                      <div className="text-sm font-bold whitespace-nowrap">
                        BUY 1 GET 1 FREE
                      </div>
                    </div>
                  </div>
                )}

                {/* image section */}
                <div className="relative">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={product.imageSrc}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block backdrop-blur px-3 py-1 rounded-full text-[11px] font-semibold shadow ${
                        product.badge === "BUY 1 GET 1 FREE"
                          ? "bg-green-500 text-white"
                          : product.badge === "MADE FOR CHAMPIONS"
                          ? "bg-blue-500 text-white"
                          : product.badge === "WINTER SPECIAL"
                          ? "bg-purple-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* gradient overlay */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* title and tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">
                      {product.tagline}
                    </p>

                    {/* Special pricing for Buy 1 Get 1 Free */}
                    {product.badge === "BUY 1 GET 1 FREE" ? (
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-green-600">
                          {product.offer}
                        </span>
                        <span className="text-sm text-slate-500">/ piece</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-slate-900">
                          {product.price}
                        </span>
                        <span className="text-sm text-slate-500">
                          / {isLastCard ? "set" : "piece"} {/* Changed here */}
                        </span>
                      </div>
                    )}

                    {/* Original price strike-through for special offer */}
                    {product.originalPrice && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-slate-400 line-through">
                          {product.originalPrice}
                        </span>
                        <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                          Save 25%
                        </span>
                      </div>
                    )}

                    <div className="mt-2 flex items-center gap-2 text-slate-600">
                      <Package className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        MOQ: {product.moq}
                      </span>
                    </div>
                  </div>

                  {/* offer banner */}
                  {product.offer && product.badge !== "BUY 1 GET 1 FREE" && (
                    <div
                      className={`rounded-lg px-4 py-2 mb-4 text-center ${
                        product.offer.includes("Starting at")
                          ? "bg-blue-50 border border-blue-200 text-blue-700"
                          : product.offer.includes("Premium")
                          ? "bg-purple-50 border border-purple-200 text-purple-700"
                          : "bg-orange-50 border border-orange-200 text-orange-700"
                      }`}
                    >
                      <span className="font-semibold text-sm">
                        {product.offer}
                      </span>
                    </div>
                  )}

                  {/* features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* button */}
                  {/* <button
                    onClick={() =>
                      document
                        .getElementById("quote-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                      product.badge === "BUY 1 GET 1 FREE"
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-lg"
                        : product.badge === "MADE FOR CHAMPIONS"
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                        : product.badge === "WINTER SPECIAL"
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                        : "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    Get Quote
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact & Location Banner */}
        {/* <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              CUTE O CUTE Garment Manufacturer
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col items-center">
                <Package className="w-8 h-8 text-red-400 mb-2" />
                <p className="text-sm text-slate-300">Factory Direct</p>
                <p className="font-semibold">Pricing</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-red-400 mb-2" />
                <p className="text-sm text-slate-300">Minimum Order</p>
                <p className="font-semibold">100 pcs</p>
              </div>
              <div className="flex flex-col items-center">
                <Trophy className="w-8 h-8 text-red-400 mb-2" />
                <p className="text-sm text-slate-300">Made for</p>
                <p className="font-semibold">Champions</p>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-6">
              <p className="text-slate-300 mb-2">
                18/2, Ayyan Nagar, Karuvampalayam, Tirupur
              </p>
              <a
                href="tel:+917867013553"
                className="text-white font-semibold hover:text-red-400 transition-colors text-lg"
              >
                +91 78670 13553
              </a>
              <p className="text-slate-300 mt-2">www.cuteocute.in</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}