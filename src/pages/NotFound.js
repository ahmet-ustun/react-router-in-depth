import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit
        voluptate laudantium! Ipsam labore alias illum nulla tempora quis nisi
        expedita accusantium. Quisquam, nesciunt quia ad ratione consequatur at
        neque?
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}

export default NotFound;
