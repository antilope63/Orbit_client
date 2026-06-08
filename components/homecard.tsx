"use client";

interface StepCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export default function StepCard({ image, alt, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center w-full md:w-1/3">
      <img
        src={image}
        alt={alt}
        className="rounded-xl shadow-md mb-4 w-full max-w-xs object-cover"
      />
      <h3 className="font-bold text-[28px] mb-2">{title}</h3>
      <p className="text-[#6A6A73] text-[22px] font-medium max-w-s">{description}</p>
    </div>
  );
}
