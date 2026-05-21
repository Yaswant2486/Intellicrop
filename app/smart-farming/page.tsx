"use client";

import Image from "next/image";
import { Footer } from "@/components/footer";
import { HeaderNav } from "@/components/HeaderNav";

const crops = [
  {
    name: "Wheat",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1601593768799-76b7f35d2f7f?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
    type: "Nitrogen Fertilizer",
    usage: "Boosts leaf and stem growth.",
    suitable: "Best for wheat, rice, and maize crops.",
    soil: "Suitable for nitrogen-deficient soil.",
  },

  {
    name: "DAP",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    type: "Phosphorus Fertilizer",
    usage: "Improves root development and flowering.",
    suitable: "Best for vegetables and cereal crops.",
    soil: "Suitable for phosphorus-deficient soil.",
  },

  {
    name: "Potash",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
    type: "Potassium Fertilizer",
    usage: "Enhances disease resistance and crop quality.",
    suitable: "Best for fruit and flowering crops.",
    soil: "Suitable for potassium-deficient soil.",
  },

  {
    name: "Organic Compost",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
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
      <HeaderNav forceGradient/>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-36">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 shadow-sm">
            🌱 AI Smart Farming Knowledge
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-green-950 md:text-7xl">
            Smart Crop &
            <span className="block bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
              Fertilizer Guidance
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Explore suitable crops for different soil types and discover the
            best fertilizers to improve productivity, soil fertility, and crop
            quality using smart agricultural insights.
          </p>
        </div>
      </section>

      {/* CROPS SECTION */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-extrabold text-green-950">
              Suitable Crop Types
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Learn which crops are best suited for different soil conditions,
              climate, irrigation requirements, and farming environments.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-10 lg:grid-cols-2">
            {crops.map((crop, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-white/50 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-green-200"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={crop.image}
                    alt={crop.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <div className="rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-md">
                      🌾 Smart Crop Analysis
                    </div>

                    <h3 className="mt-4 text-4xl font-extrabold text-white">
                      {crop.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-lg leading-relaxed text-slate-600">
                    {crop.details}
                  </p>

                  {/* Details Grid */}
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {[
                      ["🌱 Soil Type", crop.soil],
                      ["☀️ Season", crop.season],
                      ["💧 Water Need", crop.water],
                      ["🧪 Fertilizer", crop.fertilizer],
                    ].map(([title, value], i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-green-50 p-5 transition-all duration-300 hover:bg-green-100"
                      >
                        <p className="text-sm font-semibold text-green-700">
                          {title}
                        </p>

                        <p className="mt-2 text-lg font-bold text-slate-800">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">
                    🌾 Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FERTILIZER SECTION */}
      <section className="relative bg-gradient-to-b from-green-100 to-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-extrabold text-green-950">
              Fertilizer Types
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Discover different fertilizer categories, their usage, soil
              compatibility, and which crops benefit the most from them.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-10 lg:grid-cols-2">
            {fertilizers.map((fertilizer, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-white/50 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-green-200"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={fertilizer.image}
                    alt={fertilizer.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <div className="rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-md">
                      🧪 Fertilizer Insights
                    </div>

                    <h3 className="mt-4 text-4xl font-extrabold text-white">
                      {fertilizer.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-lg leading-relaxed text-slate-600">
                    {fertilizer.usage}
                  </p>

                  {/* Details */}
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {[
                      ["🧪 Fertilizer Type", fertilizer.type],
                      ["🌾 Suitable Crops", fertilizer.suitable],
                      ["🌱 Soil Condition", fertilizer.soil],
                      ["⚡ Usage", fertilizer.usage],
                    ].map(([title, value], i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-green-50 p-5 transition-all duration-300 hover:bg-green-100"
                      >
                        <p className="text-sm font-semibold text-green-700">
                          {title}
                        </p>

                        <p className="mt-2 text-lg font-bold text-slate-800">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">
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