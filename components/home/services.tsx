"use client";

import { FC } from "react";
import IconHeading from "../icon-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesList } from "@/constants";
import { motion } from "framer-motion";

const Services: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <IconHeading title="Services" />
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
        <Accordion type="single" collapsible>
          {servicesList.map((service) => (
            <AccordionItem key={service.id} value={service.id}>
              <AccordionTrigger
                className="text-3xl font-semibold"
                logo={service.logo}
                rotate={service.rotate}
              >
                {service.title}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {service.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Services;
