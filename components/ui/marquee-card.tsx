import { cn } from "@/lib/utils";
import Image from "next/image";
import { Marquee } from "../magicui/marquee";

const images = [
	{ src: "/images/img1.jpg", alt: "Image 1", title: "Card 1" },
	{ src: "/images/img2.jpg", alt: "Image 2", title: "Card 2" },
	{ src: "/images/img3.jpg", alt: "Image 3", title: "Card 3" },
	{ src: "/images/img4.jpg", alt: "Image 4", title: "Card 4" },
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const ImageCard = ({
	src,
	alt,
	title,
}: {
	src: string;
	alt: string;
	title: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-40 w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<Image
				src={src}
				alt={alt}
				width={240}
				height={160}
				className="rounded-lg object-cover w-full h-full"
			/>
			<figcaption className="mt-2 text-center text-sm font-medium dark:text-white">
				{title}
			</figcaption>
		</figure>
	);
};

export function MarqueeDemo() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((image, index) => (
					<ImageCard key={index} {...image} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((image, index) => (
					<ImageCard key={index} {...image} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
		</div>
	);
}
