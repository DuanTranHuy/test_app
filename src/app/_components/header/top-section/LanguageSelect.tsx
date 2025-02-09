"use client";

import * as React from "react";
import { Global, ArrowDown2 } from "iconsax-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/custom-select";

export function LanguageSelect() {
  return (
    <Select defaultValue="eng">
      <SelectTrigger 
        className="flex items-center w-auto border-none shadow-none focus:ring-0 focus:ring-offset-0 p-0 h-auto bg-transparent"
      >
        <Global variant="Broken" className="text-neutralstundora-gray-2" />
        <div className="flex items-center ml-6 gap-1.5">
          <SelectValue>
            <span className="gotham-14">ENG</span>
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent className="p-2">
        <SelectGroup>
          <SelectItem value="eng" className="gotham-14 w-[180px] h-[42px]">ENGLISH</SelectItem>
          <SelectItem value="vie" className="gotham-14 w-[180px] h-[42px]">VIETNAMESE</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
} 