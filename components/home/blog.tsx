import { FC } from "react";
import IconHeading from "../icon-heading";
import BlogCards from "../blog-cards";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Blog: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <IconHeading title="Journal" />
      <BlogCards limited />
      <Link
        href="/blog"
        className="text-xl border-2 border-black rounded-full w-full text-center p-4 font-semibold hover:bg-[rgb(40,40,40)] hover:border-[rgb(40,40,40)] hover:text-white duration-500 flex items-center justify-center group"
      >
        All blog posts
        <ArrowRight className="w-6 h-6 ml-2 group-hover:rotate-[360deg] duration-700" />
      </Link>
    </div>
  );
};

export default Blog;
