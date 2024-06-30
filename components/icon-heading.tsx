import { CornerDownRight } from "lucide-react";
import { FC } from "react";

interface IconHeadingProps {
  title: string;
}

const IconHeading: FC<IconHeadingProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-4">
      <CornerDownRight className="w-5 h-5 text-muted-foreground" />
      <h1 className="text-base tracking-[0.35em] uppercase">{title}</h1>
    </div>
  );
};

export default IconHeading;
