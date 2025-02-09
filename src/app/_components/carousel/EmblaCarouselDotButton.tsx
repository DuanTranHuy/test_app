'use client'
import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
  } from 'react'
  import { EmblaCarouselType } from 'embla-carousel'
  import { cn } from "@/lib/utils"
  import { type CarouselApi } from "./CustomCarousel"
  
  type UseDotButtonType = {
    selectedIndex: number
    scrollSnaps: number[]
    onDotButtonClick: (index: number) => void
  }
  
  export const useDotButton = (api: CarouselApi | undefined): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
  
    React.useEffect(() => {
      if (!api) return
  
      setScrollSnaps(api.scrollSnapList())
      setSelectedIndex(api.selectedScrollSnap())
  
      api.on("select", () => setSelectedIndex(api.selectedScrollSnap()))
      api.on("reInit", () => {
        setScrollSnaps(api.scrollSnapList())
        setSelectedIndex(api.selectedScrollSnap())
      })
    }, [api])
  
    const onDotButtonClick = React.useCallback(
      (index: number) => {
        if (!api) return
        api.scrollTo(index)
      },
      [api]
    )
  
    return {
      selectedIndex,
      scrollSnaps,
      onDotButtonClick
    }
  }
  
  interface DotButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected: boolean
    vertical?: boolean
  }
  
  export const DotButton: React.FC<DotButtonProps> = ({ selected, vertical, className, ...props }) => {
    return (
      <button
        className={cn(
          "h-2 w-2 rounded-full bg-white/50",
          selected && "bg-white",
          vertical ? "mb-2 last:mb-0" : "mr-2 last:mr-0",
          className
        )}
        {...props}
      />
    )
  }
  