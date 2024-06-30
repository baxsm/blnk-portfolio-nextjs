import CaseStudiesCards from "@/components/case-studies-cards";
import { FC } from "react";

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = ({}) => {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <h1 className="text-7xl font-bold w-full">Case Studies</h1>
        <p className="text-base text-muted-foreground max-w-prose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi
          veniam minus ipsa vitae cupiditate recusandae tempora! Praesentium,
          expedita sunt. Beatae ut repellendus autem asperiores ea atque ipsum
          illo nesciunt.
        </p>
      </div>
      <CaseStudiesCards />
    </div>
  );
};

export default Portfolio;
