const starPositions = {
  blue: "top-[28%] left-[80%] -rotate-12 md:w-30",
  pink: "top-[25%] left-[18%] rotate-12 md:w-36",
  purple: "top-[36%] left-[84%] rotate-6",
  yellow: "top-[34%] left-[14%] -rotate-6",
};

export default function Star({ url, color = "blue" }) {
  return (
    <img
      src={url}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`
        pointer-events-none absolute z-10 md:w-20 h-auto
        ${starPositions[color]}
      `}
    />
  );
}