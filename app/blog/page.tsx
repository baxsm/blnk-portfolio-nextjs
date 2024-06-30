import BlogCards from "@/components/blog-cards";
import { FC } from "react";

const Blog: FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between gap-8 lg:flex-row flex-col mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Journal</h1>
          <p className="text-base text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius fugit
            similique officiis numquam, harum neque expedita repellendus magni
            libero nesciunt molestiae. Rem velit tempore reprehenderit animi hic
            aut veritatis maiores?
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full max-w-xl">
          <h5 className="text-xl text-semibold">Categories</h5>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Staff Picks",
              "Design Tools",
              "Inspiration",
              "AI Tools",
              "Coding",
              "Productivity",
              "Resources",
              "Tips",
            ].map((e) => (
              <p
                key={e}
                className="text-sm text-muted-foreground border-b py-2 cursor-pointer hover:border-b-black/50 duration-500"
              >
                {e}
              </p>
            ))}
          </div>
        </div>
      </div>
      <BlogCards />
    </div>
  );
};

export default Blog;
