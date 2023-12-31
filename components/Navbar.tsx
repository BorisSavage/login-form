"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { BarsArrowDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const HOME_ROUTE = "/";
const BUY_ROUTE = "/buy";
const SELL_ROUTE = "/sell";
const ABOUT_ROUTE = "/about";
const LOGIN_ROUTE = "/login";
const REGISTER_ROUTE = "/register";

export function Navbar() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 640) {
        setShow(true);
        setIsMobile(false);
      } else setIsMobile(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed transition hidden duration-500 top-0 left-0 h-[100dvh] w-[100dvw] z-10",
          "sm:hidden",
          {
            "backdrop-blur-sm block": show,
            "transition-none": !isMobile,
          },
        )}
        onClick={() => setShow(!show)}
      />
      <div
        className={cn(
          "z-50 top-0 fixed backdrop-blur-md -left-full transition-all opacity-0 blur-lg duration-500 ease-in-out w-fit flex flex-col h-[100svh] items-center sm:w-full justify-start space-y-2 px-2 pt-1 pb-8 text-sm",
          "sm:flex-row sm:top-0 sm:pt-0 sm:items-end sm:space-x-2 sm:justify-between sm:h-fit sm:text-base sm:pb-2 sm:w-full",
          "after:absolute after:right-0 after:top-0 after:block after:w-[1px] after:h-full after:bg-gradient-to-t after:from-neutral-900 after:via-neutral-900/50 after:to-neutral-900 after:opacity-80 after:transition after:duration-500 after:content-['']",
          "after:sm:h-[1px] after:sm:w-full after:sm:top-full after:sm:bg-gradient-to-r after:sm:from-transparent after:sm:from-35% after:sm:via-current after:sm:to-neutral-900",
          "after:hover:opacity-100",
          {
            "left-0 opacity-100 blur-none": show,
            "transition-none": !isMobile,
          },
        )}
      >
        <div className="flex h-10 pr-2 items-center justify-start text-sm">
          <Link
            className="flex items-center justify-start font-bold text-slate-900 transition duration-500 dark:text-slate-100"
            href="/"
          >
            <Logo />
            ACME
          </Link>
        </div>
        <NavigationMenu
          className={cn("items-stretch max-w-full w-full", "sm:block")}
        >
          <NavigationMenuList
            className={cn(
              "flex flex-col h-full space-x-0 justify-between items-center",
              "sm:flex-row sm:flex-1 sm:w-full sm:grow sm:min-w-full",
            )}
          >
            <div
              className={cn("space-y-2", "sm:flex sm:space-y-0 sm:space-x-2")}
            >
              <NavigationMenuItem>
                <Link href={HOME_ROUTE} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent",
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={BUY_ROUTE} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent",
                    )}
                  >
                    Buy
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={SELL_ROUTE} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent",
                    )}
                  >
                    Sell
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={ABOUT_ROUTE} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent",
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
            <div
              className={cn(
                "space-y-2 text-center",
                "sm:flex sm:space-y-0 sm:space-x-2",
              )}
            >
              <NavigationMenuItem>
                <Link href={REGISTER_ROUTE} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "border border-neutral-200 bg-neutral-100",
                    )}
                  >
                    Register
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={LOGIN_ROUTE} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "border border-neutral-400 bg-neutral-300",
                    )}
                  >
                    Login
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
        <XMarkIcon
          className={cn(
            "absolute top-1/2 right-0 -translate-y-1/2 translate-x-[200%] transition duration-500 blur-lg opacity-0 pointer-events-none h-10 w-10",
            "sm:hidden",
            {
              "opacity-100 blur-none translate-x-[150%]": show,
            },
          )}
        />
      </div>
      <div
        className={cn(
          "flex rounded-sm items-center fixed transition-all duration-500 bottom-4 left-4 backdrop-blur-md z-40 justify-center p-0.5",
          "sm:hidden",
          {
            "opacity-0 -translate-y-4 blur-lg": show,
          },
        )}
      >
        <BarsArrowDownIcon
          onClick={() => setShow(true)}
          className={cn("h-10 w-10 text-neutral-900")}
        />
      </div>
    </>
  );
}
