import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Headers from "@/components/header";
import { Toaster } from "sonner";

const Poppin = Poppins({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "FSKTM X UTHM Merchandise",
	description: "FSKTM X UTHM Merchandise Tshirt Corporate & Jacket",
	icons: [
		{ rel: "icon", url: "/images/favicon.png" },
		{ rel: "apple", url: "/images/favicon.png" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/images/pltw.png" sizes="any" />
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					Poppin.variable
				)}
			>
				<Headers />
				<Toaster richColors />
				{children}
			</body>
		</html>
	);
}
