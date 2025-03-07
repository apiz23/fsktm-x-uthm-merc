import { Github, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";

export default function Index() {
	return (
		<>
			<div className="min-h-screen bg-black">
				<div className="text-white p-5 md:px-48 pt-52 md:pb-20">
					<Link
						href="https://docs.google.com/forms/d/e/1FAIpQLSeziz1jwuEXFqqbW6y5jnHSw1O0mfr0GMsFyU5pIQBOi8bPEA/viewform"
						target="_blank"
						className="flex flex-col items-center justify-center hover:text-blue-200 max-w-4xl md:mt-0 mt-20 mx-auto"
					>
						<div className="rounded-full p-5 bg-white">
							<ShoppingBag className="w-20 h-20 md:w-32 md:h-32 text-black" />
						</div>
						<h1 className="scroll-m-20 mt-5 text-4xl text-center font-extrabold tracking-wider lg:text-7xl">
							Click here to BUY
						</h1>
					</Link>
				</div>
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-white my-5">
					Contact
				</h1>
				<div className="grid grid-cols-2 max-w-3xl mx-auto p-4">
					<div className="block text-center">
						<Avatar className="mx-auto">
							<AvatarFallback>AH</AvatarFallback>
						</Avatar>
						<div className="text-white my-4 space-y-2">
							<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
								Aiman
							</h3>
							<Link
								target="_blank"
								href="https://wa.me/60102336374"
								className="scroll-m-20 text-xl font-semibold tracking-tight underline"
							>
								+6010-233 6374
							</Link>
						</div>
					</div>
					<div className="block text-center">
						<Avatar className="mx-auto">
							<AvatarFallback>AT</AvatarFallback>
						</Avatar>
						<div className="text-white my-4 space-y-2">
							<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
								Atiqah
							</h3>
							<Link
								target="_blank"
								href="https://wa.me/601159527650"
								className=" scroll-m-20 text-xl font-semibold tracking-tight underline"
							>
								+6011-5952 7650
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center text-white border-t-2 border-purple-400 bg-black">
				<div className="pt-4">
					<section className="mb-4 flex justify-center space-x-7">
						<Link href="https://github.com/apiz23" className="hover:text-blue-400">
							<Github />
						</Link>
					</section>
				</div>

				<div className="text-center p-3">
					Tech Ventura © 2024 Tech Ventura. All rights reserved.
				</div>
			</div>
		</>
	);
}
