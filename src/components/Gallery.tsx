import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Gallery() {
const galleryImages = [
  { id: 1, src: "/gallery/1.jpg", alt: "Factory Production Line" },
  { id: 2, src: "/gallery/2.jpg", alt: "Quality Control Process" },
  { id: 3, src: "/gallery/3.jpg", alt: "Screen Printing" },
  { id: 4, src: "/gallery/10.jpg", alt: "Bulk Packaging" },
  { id: 5, src: "/gallery/11.jpg", alt: "Bulk Packaging" },
  { id: 6, src: "/stone.png", alt: "Embroidery Work" },
  { id: 7, src: "/sttwo.jpg", alt: "Finished T-shirts" },
  { id: 8, src: "/stthree.jpg", alt: "Bulk Packaging" },
  { id: 9, src: "/st4.jpg", alt: "Finished T-shirts" },
  { id: 10, src: "/st5.jpg", alt: "Bulk Packaging" },
  { id: 11, src: "/Wha2.jpg", alt: "Bulk Packaging" },
  { id: 12, src: "/WhatsAp1.jpg", alt: "Finished T-shirts" },
  { id: 13, src: "/WHA3.jpg", alt: "Bulk Packaging" }, // removed stray backtick
];

  return (
    <section id="gallery" className="max-sm:pt-0 py-12 max-[470px]:py-6 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-sm:mb-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Gallery
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
