export default function Home({ params }: { params: { url: string } }) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
			<h1>Charts for {params.url}</h1>
		</main>
	);
}
