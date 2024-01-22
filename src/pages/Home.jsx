import { Link, navigate } from "../Link"

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es un pagina de ejemplo para crear un React Router desde cero</p>
      <Link to='/about'>Ir a sobre nosotros</Link>
    </>
  )
}

export default HomePage
