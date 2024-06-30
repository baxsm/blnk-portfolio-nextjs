import IconHeading from "@/components/icon-heading";
import ImageWrapper from "@/components/image-wrapper";
import { Globe, LucideIcon } from "lucide-react";
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-7xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit..
      </h1>
      <ImageWrapper src="/images/banner-1.jpg" className="h-[800px] w-full" />
      <div className="p-24 rounded-[2.5rem] bg-[#f2f4f7]">
        <h5 className="text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci
          quaerat cum inventore eum quae rem culpa eveniet, amet, aperiam magni
          quia nostrum ullam nesciunt eligendi tempore dolorem omnis. Magnam.
        </h5>
      </div>
      <div className="py-8" />
      <div className="flex items-start justify-between flex-col lg:flex-row gap-8">
        <IconHeading title="Experience" />
        <div className="flex flex-col w-full max-w-2xl">
          <div className="flex items-center py-4 border-b">
            <h5 className="text-base max-w-[300px] w-full">2022 - Current</h5>
            <h5 className="text-base">Lorem ipsum - Vitae</h5>
          </div>
          <div className="flex items-center py-4 border-b">
            <h5 className="text-base max-w-[300px] w-full">2021 - 2022</h5>
            <h5 className="text-base">Lorem ipsum - Dolor sit</h5>
          </div>
          <div className="flex items-center py-4 border-b">
            <h5 className="text-base max-w-[300px] w-full">2020 - 2021</h5>
            <h5 className="text-base">Lorem ipsum - Vitae</h5>
          </div>
          <div className="flex items-center py-4 border-b">
            <h5 className="text-base max-w-[300px] w-full">2018 - 2020</h5>
            <h5 className="text-base">Lorem ipsum - Dolor sit</h5>
          </div>
        </div>
      </div>
      <div className="py-8" />
      <div className="flex items-start justify-between flex-col lg:flex-row gap-8">
        <IconHeading title="Why Choose me" />
        <div className="flex flex-col gap-12 max-w-2xl">
          <h5 className="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <div className="grid md:grid-cols-2 gap-12">
            <ItemContainer title="Working globally" icon={Globe} />
            <ItemContainer title="Working globally" icon={Globe} />
            <ItemContainer title="Working globally" icon={Globe} />
            <ItemContainer title="Working globally" icon={Globe} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemContainer = ({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="p-2 rounded-full bg-[#f9f7f2]">
          <Icon className="w-4 h-4" />
        </div>
        <h5 className="text-xl font-semibold">{title}</h5>
      </div>
      <p className="text-base text-muted-foreground">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem a nam
        totam excepturi modi alias ipsum, cum quas est cupiditate optio officia
        dolores harum. Atque deleniti iste consectetur deserunt voluptas.
      </p>
    </div>
  );
};

export default About;
