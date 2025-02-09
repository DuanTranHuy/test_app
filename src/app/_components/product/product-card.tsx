"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  originalPrice: string
  salePrice?: string
  image: string
  label?: "Sale" | "Label" | "Promotion"
}

export default function ProductCard({ name, originalPrice, salePrice, image, label }: ProductCardProps) {
  return (
    <div className="relative max-w-md mx-auto group">
      {/* Label Badge */}
      {label && (
        <div className="absolute right-6 top-5 z-20">
          <Badge className="bg-[#A68E67] hover:bg-[#9a866c] rounded-none text-white px-6 py-2 font-['Legend'] text-base tracking-[1px]"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
            {label}
          </Badge>
        </div>
      )}

      {/* Product Image Container with Hover Effect */}
      <div className="relative mb-6 overflow-hidden bg-zinc-50">
        <div className="aspect-square">
          <Image
            src={image}
            alt={name}
            height={400}
            width={332}
            className="object-cover"
            style={{ backgroundPosition: '50%', backgroundRepeat: 'no-repeat' }}
            priority
          />
        </div>
        {/* Hover Overlay with Select Button */}
        <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
          <Button className="bg-[#A68E67] font-gotham-14-reg-body rounded-none hover:bg-[#9a866c] text-white w-full mx-10 py-5">
            SELECT
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-left">
        <h2 className="text-neutralstundora-gray-2 font-['SVN-Gotham'] text-base font-[450] leading-[100%] tracking-[2px] uppercase mb-4"
            style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
          {name}
        </h2>
        <div className="flex items-center justify-start gap-4">
          <span className="text-secondarynapal font-['Legend'] text-xl leading-[100%] tracking-[2px] line-through"
                style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
            {originalPrice}
          </span>
          {salePrice && (
            <span className="text-secondarynapal font-['Legend'] text-xl leading-[100%] tracking-[2px]"
                  style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
              {salePrice}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

