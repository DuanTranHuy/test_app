"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FoodCategory {
  title: string;
  image: string;
}

const categories: FoodCategory[] = [
  {
    title: "Salads and Staters",
    image: "/6.png",
  },
  {
    title: "Pasta",
    image: "/7.png",
  },
  {
    title: "Meat and Fish",
    image: "/8.png",
  },
  {
    title: "Vietnamese Dishes",
    image: "/9.png",
  },
  {
    title: "Grilled and Roasted",
    image: "/10.png",
  },
  {
    title: "Cheese and Desserts",
    image: "/11.png",
  },
  {
    title: "Salads and Staters",
    image: "/6.png",
  },
  {
    title: "Pasta",
    image: "/7.png",
  },
  {
    title: "Meat and Fish",
    image: "/8.png",
  },
];

export function FoodCarousel() {
  return (
    <div className="bg-backgroundmerino flex h-[464px] w-full items-center">
      <Carousel className="w-full" opts={{ align: "start" }}>
        <CarouselContent className="-ml-1">
          {categories.map((category, index) => (
            <CarouselItem key={index} className="basis-1/6 pl-8">
              <Card className="border-none">
                <CardContent className="flex flex-col items-center p-0">
                  <div className="relative h-[268px] w-[280px] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={280}
                      height={268}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className=" text-xl font-legend text-neutralsmine-shaft-gray-1">
                    {category.title}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
