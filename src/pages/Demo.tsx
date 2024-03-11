import WebExample from "../components/WebExample";
import imgUrlShortening from "../assets/images/url-shortening.jpeg";
import imgAdviceGenerator from "../assets/images/advice-generator.jpg";
import imgLandingPage from "../assets/images/landing-page.jpg";
import imgFaqAccordion from "../assets/images/faq-accordion.jpg";

const Demo = () => {
	return (
		<main>
			<div className="main-title main-title-dark">
				<h1>Portfolio</h1>
				<p>
					Los siguientes ejemplos han sido desarrollados en base a ejercicios de
					la web Front End Mentor. Si bien los diseños son obtenidos de esa web,
					y como verán el código (principalmente las clases y los nombre de las
					funciones) está en inglés, todo ello fue escrito por mi. Esto se debe
					a que los cursos que he hecho siempre fueron en inglés, y dado que los
					tags de los elementos están en inglés, me acostumbré a escribir el
					resto del código tabién de esa manera.
				</p>
			</div>
			<WebExample
				title="• URL Shortening App"
				description="Reproducción en React de una aplicación de reducción de URL (ejercicio de Front End Mentor). La funcionabilidad está implementada pero puede que los permisos de la API no estén funcionales."
				github="https://github.com/federuttkay/react_url-shortening-app"
				image={imgUrlShortening}
				url="https://url-shortening-app-federico.netlify.app/"
			/>
			<WebExample
				title="• Landing Page con Menús"
				description="Reproducción en React de una página principal (ejercicio de Front End Mentor), incluyendo los menús de la barra de navegación."
				github="https://github.com/federuttkay/landing-page"
				image={imgLandingPage}
				url="https://landing-page-federico.netlify.app/"
			/>
			<WebExample
				title="• Advice Generator"
				description="Componente hecho usando React que se comunica con una API y muestra el consejo recibido, junto con su id. Incluye un botón para refrescar el resultado."
				github="https://github.com/federuttkay/advice-generator"
				image={imgAdviceGenerator}
				url="https://advice-generator-federico.netlify.app/"
			/>
			<WebExample
				title="• FAQ Accordion"
				description="Componente hecho usando React en el cual se muestran preguntas y respuestas de manera animada al usuario seleccionar cada una."
				github="https://github.com/federuttkay/faq-accordion"
				image={imgFaqAccordion}
				url="https://faq-accordion-federico.netlify.app/"
			/>
		</main>
	);
};

export default Demo;
