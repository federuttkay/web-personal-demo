const Cv = () => {
	return (
		<main className="grid">
			<h1>Currículum Vitaee</h1>
			<a
				// href="/public/CV.pdf"
				href="../../public/CV.pdf"
				className="link"
				download="CV.pdf"
			>
				Descargar mi CV
			</a>
		</main>
	);
};

export default Cv;
