"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { FuturCardVacation } from "./FuturCardVacation";

export const GridCard = () => {
  const arrayImages = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <FuturCardVacation />
      {Array.from({ length: 5 }).map((_, index) => (
        <Card key={index} className="w-96">
          <CardHeader className="px-6">
            <CardTitle>Avignon 2024</CardTitle>
            <CardDescription className="w-60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
              eligendi modi.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {arrayImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <CardContent className="flex aspect-square items-center justify-center px-6 py-0">
                        <Image
                          src={image}
                          alt="image"
                          className="rounded-md"
                          width={200}
                          height={200}
                        />
                      </CardContent>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button>
              <Link href={"/home"}>Visualisez</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
