import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ArrowDown2 } from "iconsax-react";

interface CustomNavigationMenuTriggerProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuTrigger> {
  showIcon?: boolean;
  active?: boolean;
}

const CustomNavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuTrigger>,
  CustomNavigationMenuTriggerProps
>(({ className, children, showIcon = true, active = false, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), className)}
    {...props}
  >
    <div className="flex items-center gap-2">
      <div className="group flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          {children}
          {showIcon && (
            <ArrowDown2
              variant="Broken"
              size={20}
              className={cn(
                active ? "text-primary-driftwood" : "text-neutralstundora-gray-2"
              )}
            />
          )}
        </div>
        <div
          className={cn(
            "h-px w-[50px] transition-colors duration-300",
            active
              ? "bg-primary-driftwood"
              : "hover:bg-primary-driftwood bg-transparent",
          )}
        />
      </div>
    </div>
  </NavigationMenuPrimitive.Trigger>
));

CustomNavigationMenuTrigger.displayName = "CustomNavigationMenuTrigger";

export { CustomNavigationMenuTrigger };
