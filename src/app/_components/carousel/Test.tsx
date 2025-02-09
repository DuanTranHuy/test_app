"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  CustomCarousel,
  CustomCarouselContent,
  CustomCarouselItem,
  CustomCarouselNext,
  CustomCarouselPrevious,
  CustomCarouselDots,
  CustomCarouselScrollDown,
} from "./CustomCarousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselSize() {
  return (
    <CustomCarousel className="relative w-full" opts={{ loop: true }}>
      <CustomCarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CustomCarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="relative h-[800px] p-0">
                <Image
                  src="/Image.png"
                  alt="Mooncake Banner"
                  fill
                  className="object-fit"
                  priority={index === 0}
                />
                <div className="absolute inset-0 left-[260px] flex items-center">
                  <div className="max-w-[720px] text-[#FCFCFC]">
                    <h3 className="font-['SVN-Gotham'] text-[20px] tracking-[2px] mb-4"
                        style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
                      Our Collection
                    </h3>
                    <div className="font-[legend] text-[70px] text-backgroundalabaster leading-[130%] tracking-[1px] uppercase mb-6 whitespace-pre-line"
                        style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
                      SPECIAL FLAVORs <br /> OF autumn
                    </div>
                    <p className="mb-10 max-w-[520px] font-['SVN-Gotham'] text-base font-normal leading-6 text-[#FCFCFC]"
                       style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
                      Our mission is to create a bakery that makes the best
                      quality baked goods on site from scratch, and where both
                      employees and customers would feel comfortable.
                    </p>
                    <div className="flex gap-4">
                      <button className="font-['SVN-Gotham'] bg-primary-driftwood px-16 py-4 text-white text-center text-base font-normal tracking-[0.8px] uppercase hover:bg-[#8d7a59] transition-colors">
                        EXPLORE
                      </button>
                      <button className="font-['SVN-Gotham'] border border-white px-16 py-4 text-white text-center text-base font-normal tracking-[0.8px] uppercase hover:bg-white/10 transition-colors">
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CustomCarouselItem>
        ))}
      </CustomCarouselContent>
      <CustomCarouselPrevious />
      <CustomCarouselNext />
      <CustomCarouselDots vertical />
      <CustomCarouselScrollDown />
    </CustomCarousel>
  );
}
