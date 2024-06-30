/*
    Hamburger concept from https://konradstaniszewski.com/blog/tailwind-hamburger
*/

"use client";

import { FC, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: FC = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const genericHamburgerLine = `h-[2px] w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div
      className={cn(
        "fixed w-screen bg-background/[0.98] h-16 top-0 border-b flex flex-col items-start justify-start z-[200] duration-300 transition-all",
        {
          "h-screen max-h-screen": isNavActive,
        }
      )}
    >
      <div className="px-4 md:px-16 flex justify-between items-center w-full py-4 h-16">
        <Link className="font-bold text-xl antialiased" href="/">
          BLNK.
        </Link>
        <Button
          className="group hover:bg-transparent duration-300"
          variant="ghost"
          onClick={() => setIsNavActive(!isNavActive)}
        >
          <div className="flex flex-col rounded justify-center items-center group p-0 opacity-50 group-hover:opacity-100 duration-300">
            <div
              className={cn(genericHamburgerLine, {
                "rotate-45 translate-y-2": isNavActive,
              })}
            />
            <div
              className={cn(genericHamburgerLine, {
                "opacity-0": isNavActive,
              })}
            />
            <div
              className={cn(genericHamburgerLine, {
                "-rotate-45 -translate-y-3": isNavActive,
              })}
            />
          </div>
        </Button>
      </div>
      <div className="w-full px-4 md:px-16 md:py-4">
        <div
          className={cn(
            "flex-col w-full opacity-0 h-0 hidden duration-300 transition-all overflow-hidden",
            {
              "flex opacity-100 h-full": isNavActive,
            }
          )}
        >
          {navLinks.map((item, index) => {
            const delay = index * 0.05;

            return (
              <motion.a
                className="py-4 border-b flex gap-2 hover:border-b-black/40 duration-300 items-center lg:items-start"
                href={item.href}
                key={item.id}
                onClick={() => setIsNavActive(false)}
                initial={{ opacity: 0, marginLeft: "-500px" }}
                animate={{
                  opacity: isNavActive ? 1 : 0,
                  marginLeft: isNavActive ? "0" : "-500px",
                }}
                transition={{ delay }}
              >
                <p className="text-muted-foreground">0{index + 1}</p>
                <h5 className="text-sm lg:text-6xl text-stone-800 font-bold">
                  {item.title}
                </h5>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
