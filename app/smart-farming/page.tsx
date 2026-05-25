"use client";

import Image from "next/image";
import { Footer } from "@/components/footer";
import { HeaderNav } from "@/components/HeaderNav";

const crops = [
  {
    name: "Wheat",
    image:
      "/wheat.avif",
    soil: "Loamy Soil",
    season: "Winter Season",
    water: "Moderate Water Requirement",
    fertilizer: "Nitrogen Rich Fertilizer",
    details:
      "Wheat grows best in well-drained loamy soil with moderate temperatures and balanced irrigation.",
  },

  {
    name: "Rice",
    image:
      "/rice.avif",
    soil: "Clayey Soil",
    season: "Rainy Season",
    water: "High Water Requirement",
    fertilizer: "Urea & Potassium",
    details:
      "Rice requires water-rich clayey soil and humid climatic conditions for higher productivity.",
  },

  {
    name: "Maize",
    image:
      "/maize.avif",
    soil: "Sandy Loam Soil",
    season: "Summer Season",
    water: "Medium Irrigation",
    fertilizer: "NPK Fertilizer",
    details:
      "Maize performs best in fertile sandy loam soil with proper sunlight and moderate watering.",
  },

  {
    name: "Cotton",
    image:
      "/maize.avif",
    soil: "Black Soil",
    season: "Warm Climate",
    water: "Low to Moderate Water",
    fertilizer: "Phosphorus Rich Fertilizer",
    details:
      "Cotton is highly suitable for black soil regions with warm weather and good drainage.",
  },
];

const fertilizers = [
  {
    name: "Urea",
    image:
      "/wheat.avif",
    type: "Nitrogen Fertilizer",
    usage: "Boosts leaf and stem growth.",
    suitable: "Best for wheat, rice, and maize crops.",
    soil: "Suitable for nitrogen-deficient soil.",
  },

  {
    name: "DAP",
    image:
      "/DAP.avif",
    type: "Phosphorus Fertilizer",
    usage: "Improves root development and flowering.",
    suitable: "Best for vegetables and cereal crops.",
    soil: "Suitable for phosphorus-deficient soil.",
  },

  {
    name: "Potash",
    image:
      "/potash.avif",
    type: "Potassium Fertilizer",
    usage: "Enhances disease resistance and crop quality.",
    suitable: "Best for fruit and flowering crops.",
    soil: "Suitable for potassium-deficient soil.",
  },

  {
    name: "Organic Compost",
    image:
      "/organic.avif",
    type: "Organic Fertilizer",
    usage: "Improves soil fertility naturally.",
    suitable: "Suitable for all crop types.",
    soil: "Works well in all soil conditions.",
  },
];

export default function SmartFarmingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-100">
      
      {/* Header */}
      <HeaderNav forceGradient />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32">
        
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-emerald-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm shadow-sm">
            🌱 AI Smart Farming Knowledge
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight text-green-950 md:text-6xl">
            Smart Crop &
            <span className="block bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
              Fertilizer Guidance
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
            Explore suitable crops for different soil types and discover the
            best fertilizers to improve productivity and soil fertility.
          </p>
        </div>
      </section>

      {/* CROPS SECTION */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4">
          
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-green-950">
              Suitable Crop Types
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600">
              Learn which crops are best suited for different soil conditions and farming environments.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {crops.map((crop, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/40 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={crop.image}
                    alt={crop.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <div className="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-md">
                      🌾 Smart Crop Analysis
                    </div>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {crop.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {crop.details}
                  </p>

                  {/* Details Grid */}
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {[
                      ["🌱 Soil Type", crop.soil],
                      ["☀️ Season", crop.season],
                      ["💧 Water Need", crop.water],
                      ["🧪 Fertilizer", crop.fertilizer],
                    ].map(([title, value], i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-green-50 p-3 transition-all duration-300 hover:bg-green-100"
                      >
                        <p className="text-xs font-semibold text-green-700">
                          {title}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-5 rounded-xl bg-gradient-to-r from-green-700 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105">
                    🌾 Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FERTILIZER SECTION */}
      <section className="relative bg-gradient-to-b from-green-100 to-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-green-950">
              Fertilizer Types
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600">
              Discover different fertilizer categories and soil compatibility.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {fertilizers.map((fertilizer, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/40 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={fertilizer.image}
                    alt={fertilizer.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <div className="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-md">
                      🧪 Fertilizer Insights
                    </div>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {fertilizer.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {fertilizer.usage}
                  </p>

                  {/* Details */}
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {[
                      ["🧪 Fertilizer Type", fertilizer.type],
                      ["🌾 Suitable Crops", fertilizer.suitable],
                      ["🌱 Soil Condition", fertilizer.soil],
                      ["⚡ Usage", fertilizer.usage],
                    ].map(([title, value], i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-green-50 p-3 transition-all duration-300 hover:bg-green-100"
                      >
                        <p className="text-xs font-semibold text-green-700">
                          {title}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105">
                    🧪 Explore Fertilizer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}