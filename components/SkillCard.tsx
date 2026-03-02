import Image from "next/image";
import React from "react";
import Card from "./Card";

type SkillCardProps = {
  image: string;
  title: string;
};

export default function SkillCard({ image, title }: SkillCardProps) {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center space-y-3">
        <div className="p-3 bg-background/40 rounded-lg transition-colors duration-300">
          <Image
            className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
            src={image}
            width={48}
            height={48}
            alt={title}
          />
        </div>
        <div className="text-secondary text-center font-semibold text-sm group-hover:text-white transition-colors duration-300">
          {title}
        </div>
      </div>
    </Card>
  );
}
