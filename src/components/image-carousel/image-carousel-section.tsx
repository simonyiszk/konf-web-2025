"use client";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import { PrevConfData } from "@/models/models";

import NextJsImage from "../next-js-image";
import { Carousel, CarouselItem } from "./carousel";

type Props = {
  data: PrevConfData;
};

export function ImageCarouselSection({
  data: { conferences, sectionTitle },
}: Props) {
  const [index, setIndex] = useState(-1);
  const sortedConferences = conferences.sort((a, b) => b.priority - a.priority);
  return (
    <div className="my-8 sm:my-20">
      <h1 className="flex justify-center mb-4">{sectionTitle}</h1>
      <div className="w-full max-w-6xl px-4 sm:px-6 xl:px-0">
        <Carousel
          items={sortedConferences}
          renderItem={({ item, isSnapPoint, index: i }) => (
            <CarouselItem key={item.priority} isSnapPoint={isSnapPoint}>
              <div className="flex flex-col items-center">
                <Image
                  onClick={() => setIndex(i)}
                  src={item.imageUrls[0]}
                  key={item.priority}
                  alt="Kép korábbi konferenciáról"
                  className="h-full cursor-pointer rounded-[30px]"
                  height={200}
                  width={300}
                />
                <h1 className="text-2xl font-semibold mt-2">{item.priority}</h1>
                <h1 className="mt-1 text-md sm:text-sm font-medium text-md">
                  {item.title}
                </h1>
              </div>
            </CarouselItem>
          )}
        />
      </div>
      <Lightbox
        open={index > -1}
        plugins={[Captions]}
        close={() => setIndex(-1)}
        slides={
          index > -1
            ? conferences[index].imageUrls.map((i) => ({
                src: i,
                title: conferences[index].title,
              }))
            : []
        }
        render={{ slide: NextJsImage }}
      />
    </div>
  );
}
