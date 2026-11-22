import blueStar from "../../assets/scraps/blue_star.png";
import pinkStar from "../../assets/scraps/pink_star.png";
import purpleStar from "../../assets/scraps/purple_star.png";
import yellowStar from "../../assets/scraps/yellow_star.png";
import Star from "../sub/star";

import { useState } from "react";

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const letters = [
  { letter: "c", color: "text-[#ffbd59]" },
  { letter: "r", color: "text-[#38b6ff]" },
  { letter: "e", color: "text-[#5170ff]" },
  { letter: "a", color: "text-[#8c52ff]" },
  { letter: "t", color: "text-[#ff914d]" },
  { letter: "i", color: "text-[#d068a7]" },
  { letter: "v", color: "text-[#ffde59]" },
  { letter: "e", color: "text-[#7ed957]" },
];

export default function Headline() {
  const [delays] = useState(() =>
    letters.map(() => getRandomIntInclusive(100, 700))
  );

  return (
    <>
    <Star url={blueStar} color="blue" />
    <Star url={pinkStar} color="pink"/>
    <Star url={purpleStar} color="purple"/>
    <Star url={yellowStar} color="yellow"/>
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="font-bowl">
        Illustration | Graphic Design | Social Media
      </span>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-row justify-center items-center *:text-[300px]/60 *:font-bowl">
          {letters.map(({ letter, color }, index) => (
            <span
              key={index}
              className={`${color} animate-enter motion-reduce:animate-none`}
              style={{ animationDelay: `${delays[index]}ms` }}
            >
              {letter}
            </span>
          ))}
        </div>

        <span className="text-[300px]/60 text-[#fd97bf] font-bowl animate-enter [animation-delay:900ms]">
          Portfolio!
        </span>
      </div>
    </div>
    </>
  );
}