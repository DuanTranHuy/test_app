"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function NewsletterModal() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "100%" }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 right-0 z-50 flex h-[359px] overflow-hidden rounded-none shadow-lg"
        >
          <div className="flex bg-white">
            <div>
              <Image
                src="/news.png"
                alt="Elegant seafood dish"
                width={273}
                height={359}
                className="object-cover"
              />
            </div>
            <div className=" bg-[#B5A36A] max-w-[438px] p-10 text-white">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute right-2 top-2 rounded-full bg-white/10 p-1.5 opacity-70 ring-offset-background transition-opacity hover:bg-white/20 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                aria-label="Close newsletter popup"
              >
                <X className="h-4 w-4 text-white" />
              </button>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-wide">NEWSLETTERS</h2>
                <p className="text-sm">Be the first who learns about our great promotions!</p>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded border-0 bg-white/10 px-3 py-2 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <Button variant="ghost" className="absolute right-0 top-0 h-full px-3 text-white hover:bg-white/10">
                    SUBSCRIBE
                  </Button>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="newsletter"
                    className="mt-1 border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-[#B5A36A]"
                  />
                  <label htmlFor="newsletter" className="text-xs leading-tight">
                    I would like to receive weekly and monthly newsletter from Sofitel Legend Metropole Hanoi
                  </label>
                </div>

                <p className="text-[10px] text-white/70">
                  By clicking on `&apos;`Subscribe`&apos;`, I have read and accept Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

