import WebExample from "../components/WebExample";
import imgUrlShortening from "../assets/images/url-shortening.jpeg";

const Demo = () => {
	return (
		<main>
			<h1>Portfolio</h1>
			<WebExample
				title="URL Shortening App"
				description="Reproducción en React de una aplicación de reducción de URL (ejercicio de Front End Mentor). La funcionabilidad está implementada pero puede que los permisos de la API no estén funcionales."
				github="https://github.com/federuttkay/react_url-shortening-app"
				image={imgUrlShortening}
				url="https://url-shortening-app-federico.netlify.app/"
			/>
		</main>
	);
};

export default Demo;
