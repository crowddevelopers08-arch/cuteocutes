import {
  Star,
  Quote,
  Building2,
  Award,
  Users as Users2,
  Play,
} from "lucide-react";
import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  // Load Elfsight script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
    };
  }, []);

  const videoTestimonials = [
    {
      name: "Suresh Patel",
      role: "HR Manager",
      company: "TechCorp India",
      thumbnail:
        "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "#",
      quote: "Factory-direct pricing saved us 30% on our uniform costs",
    },
    {
      name: "Meena Reddy",
      role: "Event Manager",
      company: "Mumbai Marathon",
      thumbnail:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "#",
      quote: "2000+ tees delivered on time with perfect quality",
    },
    {
      name: "Rahul Verma",
      role: "Purchase Manager",
      company: "Global Solutions",
      thumbnail:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "#",
      quote: "Best quality t-shirts for our corporate events",
    },
    {
      name: "Priya Nair",
      role: "HR Director",
      company: "Startup Valley",
      thumbnail:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "#",
      quote: "Reliable manufacturer for all our bulk orders",
    },
  ];

  const clients = [
    {
      name: "NICHIAS",
      logo: "/clogos/1.svg",
    },
    {
      name: "Kongu Kitchen",
      logo: "/clogos/2.webp",
    },
    {
      name: "Airpack Gases",
      logo: "/clogos/3.png",
    },
    {
      name: "Penta Laser",
      logo: "/clogos/4.png",
    },
    {
      name: "First Step Preschool",
      logo: "/clogos/5.png",
    },
    {
      name: "Powergrid Private Limited",
      logo: "/clogos/6.png",
    },
    {
      name: "Digital Triumph",
      logo: "/clogos/7.png",
    },
    {
      name: "Prowin Corporation",
      logo: "/clogos/8.png",
    },
    {
      name: "Dynamic Kitchen Equipments",
      logo: "/clogos/9.png",
    },
    {
      name: "AcurAA",
      logo: "/clogos/10.png",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by 500+ Companies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what our corporate clients and event organizers say about our
            factory-direct service
          </p>
        </div>

        {/* Video Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Video Testimonials
          </h3>

          {/* Desktop Grid - 2 columns */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-200 group flex flex-col h-full"
              >
                <div className="relative aspect-[9/16] bg-slate-200 flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <button
                    onClick={() => setPlayingVideo(index)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <p className="text-sm font-medium">{video.quote}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      🎥
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900 truncate">
                        {video.name}
                      </div>
                      <div className="text-sm text-slate-600">{video.role}</div>
                      <div className="text-sm text-red-600 font-medium">
                        {video.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Grid - 1 column */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 flex flex-col h-full"
              >
                <div className="relative aspect-[9/16] bg-slate-200 flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <button
                    onClick={() => setPlayingVideo(index)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <p className="text-sm font-medium">{video.quote}</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      🎥
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900 text-sm truncate">
                        {video.name}
                      </div>
                      <div className="text-xs text-slate-600">{video.role}</div>
                      <div className="text-xs text-red-600 font-medium">
                        {video.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Testimonials Carousel */}
        <div className="">
          {/* <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"> */}
          {/* <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            What Our Clients Say
          </h3> */}
          <div className="min-h-[400px] flex items-center justify-center">
            <div
              className="elfsight-app-6bc95662-f1f4-4179-a9be-2e6ada9eb205 w-full"
              data-elfsight-app-lazy
            ></div>
          </div>
          {/* </div> */}
        </div>

        {/* Clients Logo Carousel */}
        {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 mb-16">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            Trusted by Leading Corporates & Events
          </h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="clients-swiper"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center gap-3 p-4 md:p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors h-32">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        {/* CTA Section */}
        {/* <div className="relative mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.png')" }}
          />
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative p-8 md:p-10 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience Factory-Direct Quality?
              </h3>
              <p className="text-red-100 text-lg mb-8">
                Join 500+ satisfied clients who trust our Tirupur factory for
                their bulk t-shirt needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("quote-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white text-red-600 hover:bg-slate-50 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-colors shadow-lg"
                >
                  Get Your Quote Now
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-colors shadow-lg"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .video-testimonials-swiper,
        .video-testimonials-swiper-mobile,
        .text-testimonials-swiper,
        .clients-swiper {
          padding-bottom: 40px;
        }

        .video-testimonials-swiper :global(.swiper-pagination-bullet),
        .video-testimonials-swiper-mobile :global(.swiper-pagination-bullet),
        .text-testimonials-swiper :global(.swiper-pagination-bullet) {
          background: #64748b;
          opacity: 0.5;
        }

        .video-testimonials-swiper :global(.swiper-pagination-bullet-active),
        .video-testimonials-swiper-mobile
          :global(.swiper-pagination-bullet-active),
        .text-testimonials-swiper :global(.swiper-pagination-bullet-active) {
          background: #ef4444;
          opacity: 1;
        }

        .video-testimonials-swiper :global(.swiper-button-prev),
        .video-testimonials-swiper :global(.swiper-button-next),
        .text-testimonials-swiper :global(.swiper-button-prev),
        .text-testimonials-swiper :global(.swiper-button-next) {
          color: #ef4444;
          top: 40%;
        }

        .video-testimonials-swiper :global(.swiper-button-prev:after),
        .video-testimonials-swiper :global(.swiper-button-next:after),
        .text-testimonials-swiper :global(.swiper-button-prev:after),
        .text-testimonials-swiper :global(.swiper-button-next:after) {
          font-size: 1.5rem;
        }
      `}</style>
    </section>
  );
}
