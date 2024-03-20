import cv from "/public/CV.pdf";

const Cv = () => {
	return (
		<main className="grid">
			<h1>Currículum Vitae</h1>
			<a
				href={cv}
				// href="/public/IMG6104.jpg"
				// href="/public/CV.pdf"
				// href="../../public/CV.pdf"
				className="link"
				download="CV.pdf"
			>
				Descargar mi CV
			</a>
		</main>
	);
};

export default Cv;
