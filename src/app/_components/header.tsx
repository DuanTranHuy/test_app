import React from "react";
import TopSection from "./header/TopSection";
import Navigation from "./header/Navigation";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="h-[173px] mx-auto">
        <TopSection/>
        <Separator className="mt-11 max-w-[1400px] mx-auto" />
        <Navigation />
      </div>
    </header>
  );
}
