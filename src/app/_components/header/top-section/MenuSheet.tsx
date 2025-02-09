"use client";

import React from "react";
import Image from "next/image";
import { HambergerMenu } from "iconsax-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <HambergerMenu variant="Broken" className="cursor-pointer" />
        </button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="max-h-screen overflow-y-scroll bg-backgroundalabaster w-[411px] scrollbar-hide"
      >
        <div className="mt-10 flex flex-col">
          <Image
            className="mx-auto"
            src="/Meu/Logo/Horizon.svg"
            alt="Logo horizon"
            width={89}
            height={92}
          />
          <div className="legend-16 italic text-center mt-6">
            Discover our vibrant French art with elegant Vietnamese flavors
            and enjoy the ambiance.
          </div>
          <Separator className="mt-10 h-px text-dividermercury w-[334px] mx-auto" />
          
          <div className="mt-10 flex flex-col gap-6">
            <h2 className="legend-24">Special Promotions</h2>
            <div className="flex flex-col gap-3">
              <p className="gotham-14-menu">Sit vitae nequa ut dolor erem consequat nisi.</p>
              <p className="gotham-14-menu">Cursus quam ultrices duis.</p>
              <p className="gotham-14-menu">A pulvinar quis eleifend non ut mi moeestie sit amet non nullam</p>
              <p className="gotham-14-menu">Non et lectus tellus ligula in et sit</p>
              <p className="gotham-14-menu">Scelerisque faucibus quis sit et fermentum, eu lectus pretium nec amet se.</p>
            </div>
            <button className="gotham-16-button">VIEW MORE</button>
          </div>

          <Separator className="mt-10 h-px text-dividermercury w-[334px] mx-auto" />
          
          <div className="mt-10 flex flex-col gap-6">
            <h2 className="legend-24">Our Blog</h2>
            <div className="flex flex-col gap-3">
              <p className="gotham-14-menu">Metropole Hanoi introduces special mooncake flavors ahead of 2021</p>
              <p className="gotham-14-menu">Top 5 recommendations for Hanoi must indulgent spa</p>
              <p className="gotham-14-menu">An inside guide to Hanoi`&apos;`s best wine bars</p>
              <p className="gotham-14-menu">Metropole hanoi introduces new takeaway and food delivery services</p>
            </div>
            <button className="gotham-16-button">VIEW MORE</button>
          </div>

          <Separator className="mt-10 h-px text-dividermercury w-[334px] mx-auto" />
          
          <div className="mt-10 flex flex-col gap-6">
            <h2 className="legend-24">Contact Us</h2>
            <div className="flex flex-col">
              <p className="gotham-14-menu">Fax: (+84) 24 3826 6919</p>
              <p className="gotham-14-menu">Hotline: (+84) 24 3826 6919</p>
              <p className="gotham-14-menu">Email: h1555@sofitel.com</p>
              <p className="gotham-14-menu">Add: 15 Ngo Quyen, Hoan Kiem, Hanoi</p>
            </div>
            <div className="flex gap-6 mx-auto">
              <Image src="/logos/FacebookLogo.svg" alt="Facebook" width={24} height={24} />
              <Image src="/logos/InstagramLogo.svg" alt="Instagram" width={24} height={24} />
              <Image src="/logos/TwitterLogo.svg" alt="Twitter" width={24} height={24} />
              <Image src="/logos/YoutubeLogo.svg" alt="Youtube" width={24} height={24} />
            </div>
            <button className="gotham-16-button pb-[68px]">VIEW MORE</button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 