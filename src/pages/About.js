import { useState } from "react";
import { Navigate } from "react-router-dom";

function About() {
  const [user, setUser] = useState("mario");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
        laudantium harum? Ab nihil numquam vero beatae nesciunt deserunt, sint
        eveniet iusto? Eius nostrum quos aspernatur nesciunt fugiat perferendis?
        Ab, minus!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
        laudantium harum? Ab nihil numquam vero beatae nesciunt deserunt, sint
        eveniet iusto? Eius nostrum quos aspernatur nesciunt fugiat perferendis?
        Ab, minus!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
        laudantium harum? Ab nihil numquam vero beatae nesciunt deserunt, sint
        eveniet iusto? Eius nostrum quos aspernatur nesciunt fugiat perferendis?
        Ab, minus!
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default About;
