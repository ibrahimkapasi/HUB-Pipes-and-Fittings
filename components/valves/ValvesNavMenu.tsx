"use client"

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDownIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { valveCategories, valvesTabHref } from "@/lib/valves"

// Top-level "Valves" navbar item. Hovering opens the category list; clicking "Valves" itself goes
// straight to Products → Valves tab → All Valves. The Radix trigger is rendered on an <a> so the
// click navigates instead of only toggling the dropdown.
export function ValvesNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuPrimitive.Trigger asChild>
            <a
              href={valvesTabHref()}
              className="group inline-flex items-center text-sm font-medium text-muted-foreground outline-none hover:text-primary focus-visible:text-primary data-[state=open]:text-primary"
            >
              Valves
              <ChevronDownIcon
                className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </a>
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuContent className="border bg-white shadow-lg dark:bg-slate-950">
            <ul className="grid w-[460px] grid-cols-2 gap-1 p-3">
              {valveCategories.map((c) => (
                <li key={c.slug}>
                  {/* className goes on NavigationMenuLink so tailwind-merge drops its white hover:text-accent-foreground */}
                  <NavigationMenuLink
                    asChild
                    className="flex flex-row items-center gap-3 rounded-md p-2 text-slate-900 hover:bg-slate-100 hover:text-primary focus:bg-slate-100 focus:text-primary dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    <a href={valvesTabHref(c.slug)}>
                      <img src={c.image} alt="" className="size-10 shrink-0 rounded border bg-white object-contain" />
                      <span className="text-sm font-medium leading-tight">{c.name}</span>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
              <li className="col-span-2">
                <NavigationMenuLink
                  asChild
                  className="block rounded-md bg-slate-50 p-3 text-slate-900 hover:bg-slate-100 hover:text-primary focus:bg-slate-100 focus:text-primary dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  <a href={valvesTabHref()}>
                    <div className="text-sm font-medium leading-none">View All Valves</div>
                    <p className="mt-1 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Needle, manifold, monoflange, ball, check, high pressure and relief valves.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
