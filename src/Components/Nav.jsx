import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/reviews">All Reviews</Link>
      <div id="indicator"></div>
    </nav>
    
  );
}
