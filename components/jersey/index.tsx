import { motion, useScroll, useTransform } from "framer-motion";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "../ui/carousel";
import { useRef } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

export default function Index() {
	const ball = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ball,
		offset: ["start end", "end start"],
	});
	const height = useTransform(scrollYProgress, [0, 1], [100, 0]);

	const images = [
		{ src: "/images/img1.jpg", alt: "GAN356 i3 Front View" },
		{ src: "/images/img2.jpg", alt: "GAN356 i3 Side View" },
		{ src: "/images/img3.jpg", alt: "GAN356 i3 Back View" },
		{ src: "/images/img4.jpg", alt: "GAN356 i3 Another View" },
	];

	const variants = [
		{ name: "Jaket Varsiti / Varsity Jacket (Unisex)", price: "RM95" },
		{ name: "Kemeja Korporat (Lelaki) / Corporate Shirt (Gents)", price: "RM80" },
		{
			name: "Kemeja Korporat (Perempuan) / Corporate Shirt (Ladies)",
			price: "RM85",
		},
	];

	return (
		<>
			<div ref={ball}>
				<div className="grid md:grid-cols-12 grid-cols-1 md:mt-20 pt-32 bg-[#3f3e63]">
					<div className="col-span-5 p-20 py-10">
						<Carousel className="md:w-5/6 mx-auto rounded-lg shadow-xl">
							<CarouselContent>
								{images.map((image, index) => (
									<CarouselItem key={index}>
										<img src={image.src} alt={image.alt} className="w-full rounded-lg" />
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>

					<div className="col-span-7 p-3 md:p-20 text-center text-white">
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl md:mt-20 mb-5">
							FSKTM Merch Preview
						</h1>
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
							Get your exclusive FSKTM merchandise now! 🎉🔥
						</h3>

						<Accordion
							type="single"
							collapsible
							className="max-w-2xl mx-auto md:px-5 rounded-lg mt-10"
						>
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-2xl">Features</AccordionTrigger>
								<AccordionContent>
									<ul className="text-left text-lg ps-5 mt-2 space-y-1 list-disc list-inside">
										<li>
											High-quality material: 60% Cotton, 40% Polyester CVC Fleece 🧵👕
										</li>
										<li>Exclusive varsity design with a stand collar 😎🔥</li>
										<li>
											Oversized fit, comfortable & suitable for all body types 😍💃🕺
										</li>
										<li>Authentic fabric with striped rib-knit cuffs & collar 🎽👌</li>
										<li>Premium satin label for an exclusive touch 🎀💎</li>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="max-w-2xl mx-auto md:px-5 rounded-lg"
						>
							<AccordionItem value="item-2">
								<AccordionTrigger className="text-2xl">Variants</AccordionTrigger>
								<AccordionContent>
									<ul className="text-left text-lg ps-5 mt-2 space-y-1 list-disc list-inside">
										{variants.map((variant, index) => (
											<li key={index}>
												<strong>{variant.name}:</strong> {variant.price}
											</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>

				{/* Scroll Animation Background */}
				<motion.div className="relative" style={{ height }}>
					<div className="absolute h-[1550%] w-[120%] left-[-10%] rounded-b-[2000%] bg-[#3f3e63] shadow-lg"></div>
				</motion.div>
			</div>
		</>
	);
}
