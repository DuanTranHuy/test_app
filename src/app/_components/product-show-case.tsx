import Image from "next/image"
import Link from "next/link"

export default function ProductShowcase() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="legend-36 mb-4">OUR SIGNATURE PRODUCT</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Gourmet Cakes Section */}
        <Link href="#" className="relative group block aspect-[4/3] overflow-hidden">
          <Image
            src="/1.png"
            alt="Gourmet cakes and pastries display"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <h2 className="text-white text-center text-xl md:text-2xl font-medium px-4">
              GOURMET CAKES, PASTRIES & BAKED ITEMS
            </h2>
          </div>
        </Link>

        {/* Restaurant Takeaways Section */}
        <Link href="#" className="relative group block aspect-[4/3] overflow-hidden">
          <Image
            src="/2.png"
            alt="Restaurant takeaways and delivery"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <h2 className="text-white text-center text-xl md:text-2xl font-medium px-4">
              RESTAURANT TAKEAWAYS & DELIVERY
            </h2>
          </div>
        </Link>
      </div>

      {/* Secondary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Premium Marketplace Section */}
        <Link href="#" className="relative group block aspect-square overflow-hidden">
          <Image
            src="/3.png"
            alt="Premium marketplace products"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <h2 className="text-white text-center text-lg md:text-xl font-medium px-4">PREMIUM MARKETPLACE</h2>
          </div>
        </Link>

        {/* Branded Gifts Section */}
        <Link href="#" className="relative group block aspect-square overflow-hidden">
          <Image
            src="/4.png"
            alt="Branded gifts and lifestyle items"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <h2 className="text-white text-center text-lg md:text-xl font-medium px-4">
              BRANDED GIFTS & LIFESTYLE ITEMS
            </h2>
          </div>
        </Link>

        {/* Special Promotions Section */}
        <Link href="#" className="relative group block aspect-square overflow-hidden">
          <Image
            src="/5.png"
            alt="Special promotions"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <h2 className="text-white text-center text-lg md:text-xl font-medium px-4">SPECIAL PROMOTIONS</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

