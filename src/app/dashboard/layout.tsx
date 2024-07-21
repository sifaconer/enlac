import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Charts",
	description: "Charts for various URLs",
};

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<nav>Menu</nav>
			{children}
		</section>
	);
}
