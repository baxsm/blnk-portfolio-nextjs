import { caseStudiesList } from "@/constants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface PortfolioAboutProps {
  data: (typeof caseStudiesList)[0];
}

const PortfolioAbout: FC<PortfolioAboutProps> = ({ data }) => {
  return (
    <div className="flex item-center justify-between gap-8 flex-col lg:flex-row">
      <div className="flex flex-col gap-4">
        <Link
          href="/portfolio"
          className="font-semibold text-xl group flex items-center"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="group-hover:ml-1 duration-500">
            All case studies
          </span>
        </Link>
        <h1 className="text-7xl font-bold">{data.title}</h1>
        <p className="text-base text-muted-foreground max-w-prose">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          maiores eius laudantium beatae ipsa officia itaque? Accusamus corporis
          illum nisi, sapiente quod perferendis, esse beatae optio aliquam
          repudiandae adipisci sit.
        </p>
      </div>
      <div className="flex flex-col w-full max-w-sm">
        <div className="flex items-center justify-between py-4 border-b">
          <h5 className="text-md">UI/UX</h5>
          <p className="text-md">Baxsm</p>
        </div>
        <div className="flex items-center justify-between py-4 border-b">
          <h5 className="text-md">Role:</h5>
          <p className="text-md">
            {data.tags[0]}, {data.tags[1]}
          </p>
        </div>
        <div className="flex items-center justify-between py-4 border-b">
          <h5 className="text-md">Date:</h5>
          <p className="text-md">Jan {new Date().getFullYear()}</p>
        </div>
        <div className="flex items-center justify-between py-4 border-b">
          <h5 className="text-md">Preview</h5>
          <Link
            href="https://github.com/baxsm"
            target="_blank"
            className="text-md"
          >
            https://github.com/baxsm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAbout;
