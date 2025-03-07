"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";

type Card = {
	title: string;
	src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<Carousel className="mx-auto rounded-lg shadow-x w-full">
			<CarouselContent className="-ml-2 md:-ml-4">
				{cards.map((card, index) => (
					<CarouselItem key={card.title} className="pl-2 md:pl-4 md:basis-1/3">
						<div
							onMouseEnter={() => setHovered(index)}
							onMouseLeave={() => setHovered(null)}
							className={cn(
								"rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-[60vh] md:h-[80vh] w-full transition-all duration-300 ease-out",
								hovered !== null && hovered !== index && "md:blur-sm md:scale-[0.98]"
							)}
						>
							<Image
								src={card.src}
								alt={card.title}
								fill
								className="object-cover absolute inset-0 md:w-[80%] h-auto"
							/>
							<div
								className={cn(
									"absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
									hovered === index ? "opacity-100" : "opacity-0"
								)}
							>
								<div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
									{card.title}
								</div>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="text-black" />
			<CarouselNext className="text-black" />
		</Carousel>
	);
}
