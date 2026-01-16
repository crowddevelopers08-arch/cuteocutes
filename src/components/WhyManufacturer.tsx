import { Factory, DollarSign, Shield, Zap, Ruler } from "lucide-react";

export default function WhyManufacturer() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Direct Factory Pricing",
      description:
        "No middlemen, no markups. Get the best bulk rates directly from our Tirupur manufacturing facility.",
      color: "text-green-500",
    },
    {
      icon: Factory,
      title: "In-House Production",
      description:
        "Polo, Round Neck, Marathon Tees all stitched & printed in our own facility with complete quality control.",
      color: "text-blue-500",
    },
    {
      icon: Shield,
      title: "Quality Control",
      description:
        "Every piece is checked before dispatch. We maintain strict quality standards for corporate & event requirements.",
      color: "text-red-500",
    },
    {
      icon: Zap,
      title: "Customization at Scale",
      description:
        "Logos, colors, events — delivered your way. From screen printing to embroidery, we handle it all.",
      color: "text-orange-500",
    },
  ];

  const images = [
    {
      src: "/gallery/4.jpg",
      alt: "Factory Production",
    },
    {
      src: "/gallery/8.jpg",
      alt: "Quality Check",
    },
    {
      src: "/gallery/5.jpg",
      alt: "Printing Process",
    },
    {
      src: "/gallery/7.jpg",
      alt: "Finished Products",
    },
    {
      src: "/gallery/6.jpg",
      alt: "Fabric Cutting",
    },
    {
      src: "/gallery/9.jpg",
      alt: "Packaging",
    },
  ];

  return (
    <section id="why-manufacturer" className="py-12 max-[470px]:py-6 bg-white max-[470px]:mt-0 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Buy Direct from Manufacturer?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Cut costs, maintain quality, and get your bulk orders delivered on time — every time.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">100%</div>
                <div className="text-sm text-slate-600">In-House Production</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">7 Days</div>
                <div className="text-sm text-slate-600">Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">MOQ 100</div>
                <div className="text-sm text-slate-600">Minimum Order</div>
              </div>
            </div>
          </div>

          {/* Right Side - 6 Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium text-center">{image.alt}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}