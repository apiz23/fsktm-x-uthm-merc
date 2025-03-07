import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

export default function Index() {
	const body = useRef(null);
	const body2 = useRef(null);
	const textRef = useRef(null);
	const textRef2 = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: body.current,
				start: "top top",
				scrub: true,
			},
		});

		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: body.current,
				start: "top top",
				scrub: true,
			},
		});

		tl.to(textRef.current, {
			y: -150,
			opacity: 0,
			duration: 1,
		});
		tl2.to(textRef2.current, {
			y: -150,
			opacity: 0,
			duration: 2,
		});
	}, []);

	return (
		<>
			<div className="bg-white dark:bg-white">
				<div
					className="flex items-center flex-col mt-[200px] relative bg-cover bg-no-repeat"
					style={{ backgroundImage: "url('/images/img7.jpg')" }}
				>
					<div className="bg-slate-400 bg-opacity-70 mb-52 px-5 md:px-0 mt-28 md:mt-10">
						<div ref={body} className="mb-[100px] relative text-4xl mt-20">
							<div ref={textRef} className="col-span-5 mt-10">
								<p className="md:ms-32 ms-10 md:m-0 font-bold text-5xl md:text-8xl">
									FSKTM MERCHANDISE PREORDER! 🔥
								</p>
								<h4 className="scroll-m-20 md:ms-32 ms-10 mt-10 text-xl font-semibold tracking-tight">
									Limited Edition – Order Now! 🛍️
								</h4>
								<h4 className="scroll-m-20 md:ms-32 ms-10 text-lg font-semibold tracking-tight">
									Preorder closes on
									<strong className="text-2xl mx-2 underline">March 17</strong>– Don’t miss out! 🤩
								</h4>
							</div>
						</div>

						<div
							ref={body2}
							className="mb-[100px] md:mb-[200px] ms-[10vw] md:ms-[30vw] relative z-10 max-w-4xl"
						>
							<div ref={textRef2} className="col-span-4 mt-10">
								<p className="ms-10 md:m-0 font-bold text-5xl md:text-8xl">
									Stylish. Exclusive. Yours! ✨
								</p>
								<h4 className="scroll-m-20 md:ms-0 ms-10 mt-10 text-xl font-semibold tracking-tight">
									Be among the first to grab it!
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
