"use client";
import React from "react";

import { useCoinMarketCup } from "@/core";
import { NstxLogo } from "@/shared";

interface CoinData {
  currency: string;
  value: number;
}
interface CoinMarketCapBarProps {
	  className?: string;
}
export const CoinMarketCapBar = ({
	className}: CoinMarketCapBarProps ) => {
	const { coinMarketCup, isLoading, isError } = useCoinMarketCup();
	if (isLoading || !coinMarketCup?.data) {
		return null;
	}
	if (isError) {
		return (
			<div className="text-red-500 text-center">Error loading data...</div>
		);
	}
	return (
		<div className="top-0 absolute w-full inset-x-0 p-6">
			<div className={`w-full text-white ${className}`}>
				<div className=" mx-auto flex items-center space-x-4 lg: max-w-7xl ">
					<NstxLogo className="text-white" />
					<div className="flex overflow-x-auto no-scrollbar space-x-4">
						{coinMarketCup?.data.map((coin: CoinData) => (
							<div key={coin.currency} className="flex items-center space-x-2">
								<span>{coin.currency}</span>
								<span className="text-green-400">${coin.value.toFixed(2)}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
