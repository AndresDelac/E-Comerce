import Image from "next/image";

export default function CarouselImage({ image }: { image: string }) {
  return (
    <div className="duration-700 ease-in-out" data-carousel-item>
      <Image
        src={image}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt={image}
        width={1000}
        height={1000}
        priority
      />
    </div>
  )
}