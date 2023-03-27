import { Link, useRouteError } from "react-router-dom";

function CareersError() {
  const error = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <p>
        Back to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}

export default CareersError;
