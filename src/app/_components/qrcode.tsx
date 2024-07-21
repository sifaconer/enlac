"use client";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar } from "@radix-ui/react-avatar";
import { useRef } from "react";
import { FiShare2 } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import { LuQrCode } from "react-icons/lu";
import QRCode from "react-qr-code";
import toImg from "react-svg-to-image";
import { toast } from "sonner";

type QrCodeProps = {
	logo: string;
	qrCode: string;
};

export function QrCode({ logo, qrCode }: QrCodeProps) {
	const qrRef = useRef<HTMLDivElement>(null);

	const handleDownload = () => {
		toImg("#qr-code", "qr-code");
	};

	const handleShare = async () => {
		if (typeof window === "undefined" || !window.navigator.share) {
			toast.warning("Share is not supported", {
				description: "This browser does not support share",
				action: {
					label: "Close",
					onClick: () => {},
				},
				duration: 2000,
			});
			return;
		}
		try {
			await window.navigator.share({
				title: "Share this QR Code",
				text: "Check out this QR Code",
				url: logo,
			});
			toast.success("Share is successful", {
				duration: 2000,
			});
		} catch (error) {
			toast.error("Share is not supported", {
				description: "This browser does not support share",
				action: {
					label: "Close",
					onClick: () => {},
				},
				duration: 2000,
			});
		}
	};

	return (
		<Dialog>
			<DialogTrigger className="flex justify-center items-center border-b rounded-full border-slate-200 bg-white hover:bg-slate-50 border w-8 h-8 cursor-pointer">
				<LuQrCode className="h-4 w-4 text-slate-900" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="flex flex-col items-center justify-center p-0">
					<Avatar className="w-14 h-14">
						<AvatarImage src={logo} className="rounded-full" />
						<AvatarFallback>LN</AvatarFallback>
					</Avatar>
					<DialogTitle className="text-slate-900">Download QR Code</DialogTitle>
				</DialogHeader>
				<DialogDescription className="flex flex-col items-center justify-center p-0 gap-4">
					<Card>
						<CardContent className="p-10" ref={qrRef}>
							<QRCode value={qrCode} className="w-full h-full" id="qr-code" />
						</CardContent>
					</Card>
					<div className="flex w-full gap-2 justify-center items-center">
						<Button onClick={handleShare}>
							<FiShare2 className="h-4 w-4 mr-2" /> Shared
						</Button>
						<Button onClick={handleDownload}>
							<HiOutlineDownload className="h-4 w-4 mr-2" /> Download
						</Button>
					</div>
				</DialogDescription>
			</DialogContent>
		</Dialog>
	);
}
