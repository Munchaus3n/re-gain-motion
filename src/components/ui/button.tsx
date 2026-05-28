import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "group relative overflow-hidden rounded-full text-charcoal tracking-[0.12em] uppercase border border-charcoal/15 bg-charcoal/10 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35),inset_0_-1px_0_hsl(var(--charcoal)/0.15),0_10px_30px_-12px_hsl(var(--charcoal)/0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal/15 hover:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.5),inset_0_-1px_0_hsl(var(--charcoal)/0.25),0_20px_45px_-12px_hsl(var(--charcoal)/0.5)] before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(120%_60%_at_50%_0%,hsl(var(--charcoal)/0.18),transparent_65%)] before:pointer-events-none after:absolute after:inset-x-2 after:top-0 after:h-1/2 after:rounded-t-full after:bg-gradient-to-b after:from-white/40 after:to-transparent after:pointer-events-none [&>*]:relative [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-1",
        heroOutline: "group relative overflow-hidden rounded-full text-charcoal tracking-[0.12em] uppercase border border-sage/25 bg-sage/10 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.5),inset_0_-1px_0_hsl(var(--sage)/0.2),0_8px_24px_-12px_hsl(var(--sage)/0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage/15 hover:border-sage/40 hover:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.7),inset_0_-1px_0_hsl(var(--sage)/0.35),0_16px_36px_-12px_hsl(var(--sage)/0.5)] before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(120%_60%_at_50%_0%,hsl(var(--sage)/0.25),transparent_65%)] before:pointer-events-none after:absolute after:inset-x-2 after:top-0 after:h-1/2 after:rounded-t-full after:bg-gradient-to-b after:from-white/55 after:to-transparent after:pointer-events-none [&>*]:relative [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-1",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
