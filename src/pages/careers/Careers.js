import { Link, useLoaderData } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");

  if (!response.ok) {
    throw Error("Couldn't fetch the careers!");
  }

  return response.json();
};

export default Careers;
