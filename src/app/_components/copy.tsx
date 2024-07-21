"use client";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import { toast } from "sonner";

export default function Copy({ shortUrl }: { shortUrl: string }) {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
		toast.success("Copied to clipboard", {
			description: `URL: ${shortUrl}`,
			duration: 1000,
		});
		setIsCopied(true);
		navigator.clipboard.writeText(shortUrl).then(() => {
			setIsCopied(true);
		});
		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<div
						onClick={handleCopy}
						onKeyUp={() => {}}
						className={clsx(
							"flex justify-center items-center border-b rounded-full border-slate-200  hover:bg-slate-50 border w-8 h-8 cursor-pointer animate-in",
							isCopied &&
								"bg-slate-900 border-slate-200 hover:bg-slate-900 animate-in cursor-auto",
							!isCopied && "bg-white",
						)}
					>
						{isCopied ? (
							<LuCheck className="h-4 w-4 text-white " />
						) : (
							<LuCopy className="h-4 w-4 text-slate-900" />
						)}
					</div>
				</TooltipTrigger>
				<TooltipContent>
					{isCopied ? "Copied to clipboard" : "Copy to clipboard"}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
