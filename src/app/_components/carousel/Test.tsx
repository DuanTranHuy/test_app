'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  CustomCarousel,
  CustomCarouselContent,
  CustomCarouselItem,
  CustomCarouselNext,
  CustomCarouselPrevious,
  CustomCarouselDots,
} from "./CustomCarousel"
import Autoplay from "embla-carousel-autoplay"

export function CarouselSize() {
  return (
    <CustomCarousel className="w-full relative" opts={{ loop: true }}>
      <CustomCarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CustomCarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="relative aspect-[2.5/1] p-0">
                <Image
                  src="/Image.png"
                  alt="Mooncake Banner"
                  fill
                  className="object-fit"
                  priority={index === 0}
                />
              </CardContent>
            </Card>
          </CustomCarouselItem>
        ))}
      </CustomCarouselContent>
      <CustomCarouselPrevious />
      <CustomCarouselNext />
      <CustomCarouselDots vertical />
    </CustomCarousel>
  )
}
