"use client"

import { caseStudiesList } from "@/constants";
import Image from "next/image";
import { FC } from "react";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";

interface CaseStudiesCardsProps {
  limited?: boolean;
}

const CaseStudiesCards: FC<CaseStudiesCardsProps> = ({ limited = false }) => {
  const router = useRouter();

  const filteredList = limited ? caseStudiesList.slice(0, 4) : caseStudiesList;

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {filteredList.map((item) => (
        <article
          className="rounded-[2.5rem] bg-[rgb(242,244,247)] p-8 cursor-pointer group"
          key={item.id}
          onClick={() => router.push(`/portfolio/${item.id}`)}
        >
          <div className="relative h-[450px] w-full">
            <Image
              src={item.bannerUrl}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-[1.05] duration-300"
            />
          </div>
          <div className="flex flex-col gap-4 p-4">
            <h5 className="text-3xl font-bold">{item.title}</h5>
            <div className="flex items-center gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} className="w-fit">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CaseStudiesCards;
