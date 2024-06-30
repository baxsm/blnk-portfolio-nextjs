import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="p-24 rounded-[2.5rem] bg-[rgb(40,40,40)] grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2 text-white">
          <h1 className="text-7xl font-bold">
            Have an idea?
            <br />
            Let&apos;s connect.
          </h1>
          <h5 className="text-xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            praesentium autem consequatur temporibus nulla placeat sunt harum
            consectetur delectus accusamus esse eveniet iure, perspiciatis
            aspernatur fugit nihil soluta. Ad, nostrum.
          </h5>
        </div>
        <div className="flex flex-col gap-8 border-l p-8">
          <div className="flex flex-col gap-2 text-white">
            <h5 className="text-xl font-semibold">BAXSM</h5>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              architecto quod, expedita doloremque consequatur voluptatibus
              tempora explicabo quas in maxime illum dicta perspiciatis, eius
              aut, saepe vero ipsam nostrum alias!
            </p>
          </div>
          <Link
            href="https://github.com/baxsm"
            className="text-xl bg-white text-foreground rounded-full text-center p-4 px-8 font-semibold duration-500 flex items-center justify-center group w-full"
          >
            Schedule a call
            <ArrowRight className="w-6 h-6 ml-2 group-hover:rotate-[360deg] duration-700" />
          </Link>
        </div>
      </div>
      <div className="p-24 rounded-[2.5rem] bg-[#eaecf0]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 text-center">
            <h5 className="text-xl font-medium">Prefer text instead?</h5>
            <h5 className="text-3xl font-semibold">
              Send me message, I&apos;ll reply
              <br />
              within 12 hours
            </h5>
          </div>
          <div className="grid gap-8 grid-cols-2">
            <input
              placeholder="Name"
              className="bg-white border rounded-xl p-4 outline-none"
            />
            <input
              placeholder="Email"
              className="bg-white border rounded-xl p-4 outline-none"
            />
            <textarea
              placeholder="Message"
              className="bg-white border rounded-xl p-4 outline-none min-h-[250px] col-span-2"
            />
            <div className="col-span-2">
                <Button className="bg-black hover:bg-black/80 text-white w-full text-base font-semibold h-auto py-4">Send message</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
