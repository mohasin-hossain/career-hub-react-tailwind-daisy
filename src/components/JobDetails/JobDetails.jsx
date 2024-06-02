import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const jobs = useLoaderData();
  const specificJobDetails = jobs.find((job) => job.id === parseInt(jobId));
  const { job_title, job_description } = specificJobDetails;

  return (
    <div>
      <h1>{job_title}</h1>
      <p>{job_description}</p>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default JobDetails;
