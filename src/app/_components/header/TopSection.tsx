"use client";

import React from "react";
import {
  Global,
  ShoppingBag,
  SearchNormal1,
  Box,
  ArrowDown2,
} from "iconsax-react";
import Image from "next/image";
import { MenuSheet } from "./top-section/MenuSheet";
import { LanguageSelect } from "./top-section/LanguageSelect";

export default function TopSection() {
  return (
    <div className="flex items-center justify-between pt-11 max-w-[1400px] mx-auto">
      <MenuSheet />

      <div className="absolute left-1/2 top-2.5 -translate-x-1/2">
        <Image
          src="/Meu/Logo/Horizon.svg"
          alt="Logo horizon"
          width={89}
          height={92}
        />
      </div>

      <div className="flex items-center gap-6">
        <ShoppingBag variant="Broken" className="text-neutralstundora-gray-2" />
        <SearchNormal1
          variant="Broken"
          className="text-neutralstundora-gray-2"
        />
        <Box variant="Broken" className="text-neutralstundora-gray-2" />
        <LanguageSelect />
      </div>
    </div>
  );
}
