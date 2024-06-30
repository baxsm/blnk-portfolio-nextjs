"use client";

import { navLinks } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

const Footer: FC = () => {
  return (
    <div className="p-4 md:p-16">
      <div className="flex-col gap-8 bg-black flex items-center justify-center p-24 rounded-[2.5rem]">
        <div className="overflow-hidden py-4">
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {
                x: 0,
                y: 100,
                opacity: 0,
              },
              show: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  type: "tween",
                  duration: 0.3,
                  delay: 0.2,
                  ease: "easeOut",
                },
              },
            }}
            className="text-7xl font-bold text-white max-w-xl text-center leading-[1.2]"
          >
            Let&apos;s create your next big idea.
          </motion.h1>
        </div>
        <Link
          href="https://github.com/baxsm"
          className="text-xl bg-white text-foreground rounded-full text-center p-4 px-8 font-semibold duration-500 flex items-center justify-center group w-fit"
        >
          Schedule a call
          <ArrowRight className="w-6 h-6 ml-2 group-hover:rotate-[360deg] duration-700" />
        </Link>
        <div className="flex items-center gap-8 mt-12">
          {navLinks.map((nav) => (
            <Link
              href={nav.href}
              key={nav.id}
              className="text-md text-white capitalize font-bold"
            >
              {nav.id}
            </Link>
          ))}
        </div>
        <h5 className="text-sm text-muted-foreground">&copy; BAXSM.</h5>
      </div>
    </div>
  );
};

export default Footer;
