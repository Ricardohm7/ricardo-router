import { Link } from "../Link";
console.log("about page");
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>¡Hola! Me llamo Ricardo y estoy creando un clon de Ract Router </p>
      <Link to="/">Ir a home</Link>
    </>
  )
}

export default AboutPage;