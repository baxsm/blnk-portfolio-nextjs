"use client"

import { FC } from "react";
import { Badge } from "../ui/badge";
import ImageWrapper from "../image-wrapper";
import VideoWrapper from "../video-wrapper";
import { motion } from "framer-motion";

const Banner: FC = () => {
  return (
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
      className="w-full h-full flex flex-col gap-24 mx-auto"
    >
      {/* Title and Description */}
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          Baxsm. <br />
          Software eng.
        </h1>
        <div className="flex flex-col gap-4 lg:max-w-lg">
          <p className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            laborum illo delectus in eum quo earum omnis ab accusantium fugiat
            officia distinctio dolore modi odit accusamus rerum nobis.
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Dribbble</Badge>
            <Badge variant="outline">Behance</Badge>
            <Badge>Figma</Badge>
          </div>
        </div>
      </div>
      {/* Images & Videos */}
      <div className="flex flex-col gap-4">
        <ImageWrapper src="/images/banner-1.jpg" />
        <div className="flex items-center gap-4">
          <VideoWrapper src="/videos/banner-1.mp4" />
          <ImageWrapper className="flex-1" src="/images/banner-2.jpg" />
        </div>
        <ImageWrapper src="/images/banner-3.jpg" />
        <div className="flex items-center gap-4">
          <ImageWrapper className="flex-1" src="/images/banner-4.jpg" />
          <VideoWrapper src="/videos/banner-2.mp4" />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
