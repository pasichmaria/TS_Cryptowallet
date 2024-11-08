import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

import {Layout} from "@/shared";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "NSTX",
	description: "NSTX",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Layout>
				 {children}
				</Layout>
			</body>
		</html>
	);
}
