import ImageWrapper from "@/components/image-wrapper";
import PortfolioAbout from "@/components/portfolio/portfolio-about";
import { caseStudiesList } from "@/constants";
import { notFound } from "next/navigation";
import { FC } from "react";

interface PortfolioSingleProps {
  params: {
    id: string;
  };
}

const PortfolioSingle: FC<PortfolioSingleProps> = ({ params }) => {
  if (!params.id) {
    notFound();
  }

  const portfolio = caseStudiesList.find((e) => e.id === params.id);

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8">
      <PortfolioAbout data={portfolio} />
      <div className="flex flex-col gap-24 mt-8">
        <ImageWrapper
          src="/images/single-1.avif"
          className="h-[800px] w-full"
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <h5 className="text-5xl font-semibold">
            Designing a seamless user experience for AI-Powered job matching
            platform
          </h5>
          <p className="text-base text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis unde quod enim ipsam! Dignissimos placeat nisi nulla
            quaerat? Nihil maxime dignissimos voluptas voluptatibus, ipsam
            commodi distinctio consequuntur quisquam asperiores amet? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ratione, quis?
            Ipsum culpa quisquam consectetur odit. Fugit tempore a molestiae
            eveniet quo odio saepe consequatur ad hic adipisci, mollitia ratione
            harum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
            dolorem molestias omnis libero minima mollitia provident accusamus
            ipsa ipsum, qui fugiat corrupti at ullam quas quam, nam consectetur!
            Esse, facilis.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <ImageWrapper
            src="/images/single-2.avif"
            className="h-[800px] w-full"
          />
          <div className="grid lg:grid-cols-2 gap-8">
            <ImageWrapper
              src="/images/single-3.avif"
              className="h-[600px] w-full"
            />
            <ImageWrapper
              src="/images/single-4.avif"
              className="h-[600px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSingle;
