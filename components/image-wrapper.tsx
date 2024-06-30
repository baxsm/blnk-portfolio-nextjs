import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface ImageWrapperProps {
  src: string;
  className?: string;
}

const ImageWrapper: FC<ImageWrapperProps> = ({ src, className }) => {
  return (
    <div className={cn("relative w-full h-36 rounded-[2.5rem]", className)}>
      <Image
        src={src}
        fill
        alt="image"
        aria-hidden="true"
        className="w-full h-full rounded-[2.5rem] object-cover"
      />
    </div>
  );
};

export default ImageWrapper;
