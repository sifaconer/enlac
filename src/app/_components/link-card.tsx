"use client";
import { Badge } from "@/components/ui/badge";
import { LuCheck, LuCopy, LuMousePointerClick, LuQrCode } from "react-icons/lu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FaChartSimple } from "react-icons/fa6";
import { LuMoreVertical } from "react-icons/lu";
import { MdOutlineShortcut } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import Copy from "./copy";
import { QrCode } from "./qrcode";

type LinkCardProps = {
	originalUrl: string;
	shortUrl: string;
	logo: string;
	totalClicks: number;
};

export default function LinkCard({
	originalUrl,
	shortUrl,
	logo,
	totalClicks,
}: LinkCardProps) {
	const pathname = new URL(shortUrl).pathname;

	return (
		<div>
			<Card className="flex px-4 py-3 gap-4 hover:shadow-sm">
				<CardHeader className="flex flex-row items-center p-0">
					<Avatar className="w-14 h-14">
						<AvatarImage src={logo} />
						<AvatarFallback>LN</AvatarFallback>
					</Avatar>
				</CardHeader>
				<CardContent className="flex flex-col p-0 mr-10 mb-0">
					<CardHeader className="flex flex-row gap-2 items-center p-0">
						<CardTitle className="p-0 m-0">
							<Link href={originalUrl} target="_blank">
								<Button
									className="hover:no-underline p-0 m-0 text-base leading-3"
									variant={"link"}
								>
									{shortUrl.replace("https://", "")}
								</Button>
							</Link>
						</CardTitle>
						<div className="flex gap-2 !mt-0">
							<Copy shortUrl={shortUrl} />
							<QrCode logo={logo} qrCode={shortUrl} />
							<Link href={`/dashboard/${pathname}`}>
								<Badge
									variant="outline"
									className="p-2 flex items-center justify-center border border-slate-200 bg-white rounded-xl hover:bg-slate-50 gap-2 text-slate-500 cursor-pointer"
								>
									<LuMousePointerClick className="h-4 w-4 text-slate-900" />
									<p className="text-slate-600 ">
										{totalClicks.toLocaleString()} clicks
									</p>
								</Badge>
							</Link>
						</div>
					</CardHeader>
					<CardFooter className="flex items-left gap-1 text-gray-400 p-0 mt-[-6px]">
						<MdOutlineShortcut className="h-5 w-5 [transform:rotateX(-180deg)]" />
						<Link href={originalUrl} target="_blank">
							<Button
								className="text-sm text-gray-400 m-0 p-0 hover:text-gray-600 hover:no-underline leading-none"
								variant={"link"}
							>
								{originalUrl}
							</Button>
						</Link>
					</CardFooter>
				</CardContent>
				<CardFooter className="flex items-left gap-1 text-gray-400 p-0 mr-0">
					<DropdownMenu>
						<DropdownMenuTrigger
							asChild
							className="hover:text-gray-600 cursor-pointer"
						>
							<LuMoreVertical className="h-5 w-5 [transform:rotateX(-180deg)]" />
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<Link href={`/dashboard/${pathname}`}>
									<DropdownMenuItem className="flex gap-2 items-center text-slate-900 cursor-pointer">
										<FaChartSimple />
										<p>Charts</p>
									</DropdownMenuItem>
								</Link>
								<DropdownMenuItem className="flex gap-2 items-center text-red-400 cursor-pointer focus:text-red-400">
									<RiDeleteBin5Line /> <p>Delete</p>
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</CardFooter>
			</Card>
		</div>
	);
}
