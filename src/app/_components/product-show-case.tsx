import Image from "next/image";
import Link from "next/link";

export default function ProductShowcase() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="legend-36 mb-4">OUR SIGNATURE PRODUCTS</h1>
        <p className="text-neutralsdove-gray-gray-3 mx-auto max-w-[926px] text-center font-['SVN-Gotham'] text-[18px] font-normal leading-[150%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
        </p>
      </div>

      {/* Main Grid */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Gourmet Cakes Section */}
        <Link
          href="#"
          className="group relative block h-[387px] w-[687px] overflow-hidden"
        >
          <Image
            src="/1.png"
            alt="Gourmet cakes and pastries display"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <div
              className="text-backgroundalabaster px-4 text-center font-['SVN-Gotham'] text-[28px] font-normal uppercase leading-[150%]"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              GOURMET CAKES, PASTRIES & <br />
              BAKED ITEMS
            </div>
          </div>
        </Link>

        {/* Restaurant Takeaways Section */}
        <Link
          href="#"
          className="group relative block h-[387px] w-[687px] overflow-hidden"
        >
          <Image
            src="/2.png"
            alt="Gourmet cakes and pastries display"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <div
              className="text-backgroundalabaster px-4 text-center font-['SVN-Gotham'] text-[28px] font-normal uppercase leading-[150%]"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              RESTAURANT TAKEAWAYS & <br />
              DELIVERY
            </div>
          </div>
        </Link>
      </div>

      {/* Secondary Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Premium Marketplace Section */}
        <Link
          href="#"
          className="group relative block h-[254px] w-[450px] overflow-hidden"
        >
          <Image
            src="/2.png"
            alt="Gourmet cakes and pastries display"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <div
              className="text-backgroundalabaster px-4 text-center font-['SVN-Gotham'] text-[28px] font-normal uppercase leading-[150%]"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              PREMIUM <br />
              MARKETPLACE
            </div>
          </div>
        </Link>

        {/* Branded Gifts Section */}
        <Link
          href="#"
          className="group relative block h-[254px] w-[450px] overflow-hidden"
        >
          <Image
            src="/4.png"
            alt="Gourmet cakes and pastries display"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <div
              className="text-backgroundalabaster px-4 text-center font-['SVN-Gotham'] text-[28px] font-normal uppercase leading-[150%]"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              BRANDED GIFTS & <br />
              LIFESTYLE ITEMS
            </div>
          </div>
        </Link>

        {/* Special Promotions Section */}
        <Link
          href="#"
          className="group relative block h-[254px] w-[450px] overflow-hidden"
        >
          <Image
            src="/5.png"
            alt="Gourmet cakes and pastries display"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <div
              className="text-backgroundalabaster px-4 text-center font-['SVN-Gotham'] text-[28px] font-normal uppercase leading-[150%]"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              SPECIAL
              <br />
              PROMOTIONS
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
