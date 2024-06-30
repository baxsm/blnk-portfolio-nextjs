import ImageWrapper from "@/components/image-wrapper";
import { blogPostsList } from "@/constants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";

interface BlogPostProps {
  params: {
    id: string;
  };
}

const BlogPost: FC<BlogPostProps> = ({ params }) => {
  if (!params.id) {
    notFound();
  }

  const post = blogPostsList.find((e) => e.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto w-full flex items-center justify-center">
      <div className="flex flex-col gap-8 max-w-4xl">
        <Link
          href="/blog"
          className="font-semibold text-xl group flex items-center"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="group-hover:ml-1 duration-500">Back to blog</span>
        </Link>
        <h1 className="text-5xl font-bold text-foreground/80">{post.title}</h1>
        <ImageWrapper src={post.bannerUrl} className="h-[500px]" />
        <h5 className="text-xl text-muted-foreground">{post.introduction}</h5>
        {post.content.map((item, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <h5 className="text-3xl font-semibold">{item.headline}</h5>
            <p className="text-xl text-muted-foreground">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
