import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import Header from "./_components/header";
import { CarouselSize } from "./_components/carousel/Test";
import ProductShowcase from "./_components/product-show-case";
import { FoodCarousel } from "./_components/food-carousel";
export default async function Home() {

  return (
    <HydrateClient>
        <Header />
        <CarouselSize />
        <ProductShowcase />
        {/* <FoodCarousel /> */}
    </HydrateClient>
  );
}
