import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "wk-btn-primary",
        brand:
          "wk-btn-primary",
        dark:
          "bg-ink-950 text-cream hover:bg-ink-900 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.4)]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90",
        outline:
          "border border-ink-200 bg-card text-ink-900 hover:border-brand-400 hover:bg-brand-50/50",
        ghost:
          "wk-btn-ghost",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        link:
          "text-brand-700 underline-offset-4 hover:underline rounded-none p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2.5 has-[>svg]:px-5",
        sm: "h-9 px-4 has-[>svg]:px-3",
        lg: "h-13 px-8 text-base has-[>svg]:px-6",
        xl: "h-14 px-10 text-base has-[>svg]:px-8",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
