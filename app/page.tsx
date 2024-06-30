import Banner from "@/components/home/banner";
import Blog from "@/components/home/blog";
import CaseStudies from "@/components/home/case-studies";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="md:py-16" />
      <Services />
      <div className="md:py-16" />
      <CaseStudies />
      <div className="md:py-16"/>
      <Blog />
    </div>
  );
}
