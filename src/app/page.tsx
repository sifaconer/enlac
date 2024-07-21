"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoLinkSharp } from "react-icons/io5";
import { MdOutlineShortcut } from "react-icons/md";
import { Toaster, toast } from "sonner";
import LinkCard from "./_components/link-card";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
			<form className="relative w-full max-w-sm">
				<Input
					type="url"
					placeholder="Enter url here"
					className="pl-10 pr-10 py-2 border rounded-lg focus:border-primary"
				/>
				<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
					<IoLinkSharp className="h-5 w-5 text-gray-400" />
				</div>
				<Button
					type="submit"
					variant={"ghost"}
					className="border-none transparent absolute inset-y-0 right-0 flex items-center pointer-events-none"
				>
					<MdOutlineShortcut className="h-5 w-5 text-gray-400 rotate-180" />
				</Button>
			</form>
			<LinkCard
				originalUrl="https://news.google.com/"
				shortUrl="https://enla.c/qwerty"
				logo="https://github.com/shadcn.png"
				totalClicks={12500}
			/>
		</main>
	);
}
