"use client";

import { blogPostsList } from "@/constants";
import { FC } from "react";
import ImageWrapper from "./image-wrapper";
import { useRouter } from "next/navigation";

interface BlogCardsProps {
  limited?: boolean;
}

const BlogCards: FC<BlogCardsProps> = ({ limited }) => {
  const router = useRouter();

  const filteredList = limited ? blogPostsList.slice(0, 3) : blogPostsList;

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {filteredList.map((post) => (
        <article
          key={post.id}
          className="flex flex-col gap-4 cursor-pointer group"
          onClick={() => router.push(`/blog/${post.id}`)}
        >
          <div className="h-[350px] w-full overflow-hidden rounded-[2.5rem]">
            <ImageWrapper
              src={post.bannerUrl}
              className="h-[350px] group-hover:scale-[1.05] duration-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">
              Jan, {new Date().getFullYear()}
            </p>
            <h5 className="text-3xl font-bold">{post.title}</h5>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogCards;
