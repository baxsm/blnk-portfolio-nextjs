import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface VideoWrapperProps {
  src: string;
  className?: string;
}

const VideoWrapper: FC<VideoWrapperProps> = ({ src, className }) => {
  return (
    <video
      className={cn("relative w-auto h-36 rounded-[2.5rem]", className)}
      controls={false}
      autoPlay
      loop
      muted
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoWrapper;
