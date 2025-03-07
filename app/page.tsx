"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
import Section3 from "@/components/section3";
import Jersey from "@/components/jersey";
import Contact from "@/components/contact";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Carouselv2 } from "@/components/ui/carousel-v2";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Home() {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;
	const description = useRef(null);

	useEffect(() => {
		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);

		gsap.ticker.add((time: any) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * -1),
			},
			x: "-500px",
		});
		requestAnimationFrame(animate);
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		requestAnimationFrame(animate);
		xPercent += 0.1 * direction;
	};

	return (
		<>
			<div className="overflow-x-hidden">
				<main className="relative flex h-[100vh] overflow-hidden">
					<div className="min-h-screen mx-auto">
						<img
							src="/images/img1.jpg"
							alt="background"
							className="md:w-full md:h-[60vh] md:px-0 px-5 md:pt-10 h-[50vh]"
						/>
					</div>
					<div
						className="absolute w-full flex justify-center"
						style={{ top: `calc(100vh - 400px)` }}
					>
						<div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10">
							<VelocityScroll
								numRows={1}
								className="text-[120px] md:text-[220px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6a698c] via-[#6b7486] to-[#210c55]"
							>
								Corporate & Varsity Jacket
							</VelocityScroll>

							<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
							<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
						</div>
					</div>
				</main>
				<div className="h-[80vh] md:h-[120vh] p-10 md:pt-32 pt-28 text-white">
					<TextAnimate
						animation="fadeIn"
						by="line"
						as="h1"
						className="text-6xl md:text-7xl text-center mb-10 text-black"
					>
						NEW DROP WITH NEW DESIGN
					</TextAnimate>
					<div className="mx-auto text-5xl">
						<div className="relative w-full">
							<div className="mx-auto max-w-screen-md md:max-w-screen-lg p-4">
								<Carouselv2 />
							</div>
						</div>
					</div>
				</div>
				<Section3 />
				<Jersey />
				<Contact />
			</div>
		</>
	);
}
