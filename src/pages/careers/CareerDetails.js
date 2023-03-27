import { useLoaderData, useParams } from "react-router-dom";

function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          hic fuga omnis iste, officia illum non asperiores perspiciatis
          quibusdam doloremque odio odit itaque impedit cum accusamus rem
          exercitationem sapiente ea.
        </p>
      </div>
    </div>
  );
}

export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:4000/careers/${id}`);

  return response.json();
};

export default CareerDetails;
