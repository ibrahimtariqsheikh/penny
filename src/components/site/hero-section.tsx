"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import XTwitterIcon from "../icons/x-icon";
import { Copy, Send } from "lucide-react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import TelegramIcon from "../icons/telegram-icon";

interface HeroTextProps {
  children: ReactNode;
  className: string;
}

interface HeroImageProps {
  src: string;
  alt: string;
}

interface HeroButtonProps {
  children: ReactNode;
}

const HeroSection = () => {
  const HeroText = ({ children, className }: HeroTextProps) => (
    <div className={`${className} text-center py-1 max-w-3xl`}>{children}</div>
  );

  const HeroImage = ({ src, alt }: HeroImageProps) => (
    <Image
      src={src}
      width={200}
      height={200}
      className="object-fit rounded-3xl backdrop-blur-xl blur-corner"
      alt={alt}
    />
  );

  const HeroButton = ({ children }: HeroButtonProps) => (
    <button className="flex justify-center items-center">{children}</button>
  );

  return (
    <main>
      <div className="py-20 px-10 z-50 w-full">
        <div className="flex flex-col gap-5 items-center justify-center">
          <HeroText className="text-5xl font-bold text-white">Hi ~</HeroText>
          <HeroImage src="/assets/images/quby_main.gif" alt="quby_main" />
          <HeroText className="text-3xl font-bold text-black">
            Join us in the whimsical world of PandaPenny, where finance meets
            fun!
          </HeroText>
          <HeroText className="text-muted-foreground font-sm max-w-xl ">
            Penny the Panda invites you on a crypto journey like no other. Get
            ready for a delightful adventure!
          </HeroText>
          <div className="flex justify-center gap-10">
            <HeroButton>
              <XTwitterIcon className="w-6 h-6" />
            </HeroButton>
            <HeroButton>
              <TelegramIcon className="w-6 h-6 " />
            </HeroButton>
          </div>
        </div>
      </div>

      <div className="flex bg-black w-full h-32 justify-center items-center">
        <HeroText className="text-white font-bold text-3xl">
          Join the Panda Playground
        </HeroText>
      </div>
      <div className="px-10">
        {/* Repeated sections are now using the HeroText and HeroImage components for better readability and reusability */}
        <div className="flex flex-col items-center justify-center mt-20 gap-5">
          <HeroText className="text-3xl font-bold text-black">
            Explore the Panda Playground
          </HeroText>
          <HeroText className="text-muted-foreground font-sm max-w-xl">
            Panda Playground is a virtual space where our community gathers.
            Engage in fun activities, learn about crypto, and connect with
            fellow enthusiasts in a setting filled with joy and camaraderie.
          </HeroText>
        </div>

        {/* Additional sections */}
        <div className="flex flex-col items-center justify-center mt-20 gap-5">
          <HeroText className="text-2xl font-bold text-gray-900">
            Bamboo Bonuses
          </HeroText>
          <HeroText className="text-muted-foreground font-sm max-w-xl">
            Unlock Bamboo Bonuses as you participate and contribute to the
            PandaPenny community. These special rewards symbolize our commitment
            to making crypto fun and rewarding for everyone.
          </HeroText>
        </div>

        {/* More sections */}
        {/* Simplified by using the newly created components */}
        <div className="flex justify-center items-center">
          <HeroImage src="/assets/images/bamboo.webp" alt="quby_main" />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center mt-20 gap-5">
            <HeroText className="text-2xl font-bold text-gray-900">
              Join the Panda Revolution
            </HeroText>
            <HeroText className="text-muted-foreground font-sm max-w-xl">
              Be part of a movement that blends the charm of pandas with the
              power of cryptocurrency. PandaPenny is more than just a token;
              it&apos;s a community where everyone&apos;s welcome to make crypto
              great!
            </HeroText>
            <HeroImage src="/assets/images/panda_back.gif" alt="panda_back" />

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-black font-bold p-6 rounded-xl mb-40 border-2 border-white text-white mt-10 w-full">
                  Press for Penny
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[400px] h-96 rounded-2xl">
                <div className="text-3xl font-bold flex items-center justify-center">
                  Coming Soon...
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
