"use client";

import { FC } from "react";
import IconHeading from "../icon-heading";
import CaseStudiesCards from "../case-studies-cards";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudiesProps {}

const CaseStudies: FC<CaseStudiesProps> = ({}) => {
  return (
    <div className="flex flex-col gap-8">
      <IconHeading title="Case Studies" />
      <motion.div
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
      >
        <CaseStudiesCards limited />
      </motion.div>
      <Link
        href="/portfolio"
        className="text-xl border-2 border-black rounded-full w-full text-center p-4 font-semibold hover:bg-[rgb(40,40,40)] hover:border-[rgb(40,40,40)] hover:text-white duration-500 flex items-center justify-center group"
      >
        All case studies
        <ArrowRight className="w-6 h-6 ml-2 group-hover:rotate-[360deg] duration-700" />
      </Link>
    </div>
  );
};

export default CaseStudies;
