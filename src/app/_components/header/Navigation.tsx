"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { CustomNavigationMenuTrigger } from "@/components/navigation-menu-trigger";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  {
    label: "HOMEPAGE",
    active: true,
    showIcon: false,
  },
  {
    label: "GOURMET CAKES, PASTRIES & BAKED ITEMS",
    active: false,
    showIcon: true,
    content: {
      categories: [
        {
          title: "Signature cakes",
          items: [
            "Black Forest",
            "Opera Cake",
            "Tiramisu",
            "Cheesecake Selection",
          ],
        },
        {
          title: "Chocolates & Others",
          items: [
            "Premium Chocolates",
            "French Macarons",
            "Artisanal Pastries",
            "Seasonal Specials",
          ],
        },
      ],
      viewAll: {
        text: "View all",
        link: "#",
      },
    },
  },
  {
    label: "RESTAURANT TAKEAWAYS & DELIVERY",
    active: false,
    showIcon: true,
    content: {
      categories: [
        {
          title: "Signature cakes",
          items: ["Tiramisu"],
        },
        {
          title: "Chocolates & Others",
          items: ["Seasonal Specials"],
        },
      ],
      viewAll: {
        text: "View all",
        link: "#",
      },
    },
  },
  {
    label: "PREMIUM MARKETPLACE",
    active: false,
    showIcon: true,
    content: {
      categories: [
        {
          title: "Signature cakes",
          items: [
            "Black Forest",
            "Opera Cake",
            "Cheesecake Selection",
          ],
        },
        {
          title: "Chocolates & Others",
          items: [
            "Premium Chocolates",
            "Artisanal Pastries",
            "Seasonal Specials",
          ],
        },
      ],
      viewAll: {
        text: "View all",
        link: "#",
      },
    },
  },
  {
    label: "BRANDED GIFTS & LIFESTYLE ITEMS",
    active: false,
    showIcon: true,
    content: {
      categories: [
        {
          title: "Signature cakes",
          items: [
            "Black Forest",
            "Opera Cake",
            "Tiramisu",
            "Cheesecake Selection",
          ],
        },
        {
          title: "Chocolates & Others",
          items: [
            "Premium Chocolates",
            "French Macarons",
            "Artisanal Pastries",
            "Seasonal Specials",
          ],
        },
      ],
      viewAll: {
        text: "View all",
        link: "#",
      },
    },
  },
];

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setShowContent(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setShowContent(false);
  };

  return (
    <div className="mx-auto w-full" onMouseLeave={handleMouseLeave}>
      <NavigationMenu className="relative mx-auto mt-4 w-[1400px]">
        <NavigationMenuList className="flex w-[1400px] justify-between">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <CustomNavigationMenuTrigger
                showIcon={item.showIcon}
                active={item.active || hoveredIndex === index}
                className={cn(
                  "bg-transparent px-0 font-['SVN-Gotham-Regular'] text-[13px] tracking-[1px] hover:bg-transparent focus:bg-transparent",
                  "text-neutralsdove-gray-gray-3 hover:text-primary-driftwood focus:text-primary-driftwood",
                  (item.active || hoveredIndex === index) &&
                    "text-primary-driftwood",
                )}
              >
                {item.label}
              </CustomNavigationMenuTrigger>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {showContent &&
        hoveredIndex !== null &&
        navigationItems[hoveredIndex]!.content && (
          <div
            className="bg-backgroundmerino absolute left-0 w-full shadow-md"
            onMouseEnter={() => setShowContent(true)}
          >
            <div className="mx-auto max-w-[1400px]">
              <div className="my-10 grid grid-cols-5">
                {navigationItems[hoveredIndex]!.content?.categories.map(
                  (category, idx) => (
                    <div key={idx} className="col-span-1">
                      <h3 className="text-neutralsmine-shaft-gray-1 mb-6 font-['SVN-Gotham'] text-lg font-[450] leading-[30px]">
                        {category.title}
                      </h3>
                      {category.items.length > 0 && (
                        <ul className="flex flex-col gap-4">
                          {category.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="text-neutralsdove-gray-gray-3 hover:text-primary-driftwood cursor-pointer font-['SVN-Gotham'] text-sm"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ),
                )}
              </div>
              <Separator />

              {navigationItems[hoveredIndex]!.content?.viewAll && (
                <div className="my-3 text-center">
                  <a
                    href={navigationItems[hoveredIndex]!.content?.viewAll.link}
                    className="text-primary-driftwood font-['Legend'] text-[18px] leading-[30px] italic hover:opacity-80"
                    style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                  >
                    {navigationItems[hoveredIndex]!.content?.viewAll.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
    </div>
  );
}
