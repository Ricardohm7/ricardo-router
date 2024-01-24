import { Link } from "../Link";

export default function Page404() {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src="https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif" alt="This is fine" />
      </div>
      <Link to="/">Go back home</Link>
    </>
  )
}