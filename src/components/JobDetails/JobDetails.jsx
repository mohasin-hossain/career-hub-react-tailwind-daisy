import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveToLocalStorage } from "../../Utlities/localStorage";

const JobDetails = () => {
  const { jobId } = useParams();
  const jobs = useLoaderData();
  const specificJobDetails = jobs.find((job) => job.id === parseInt(jobId));
  const { job_title, job_description } = specificJobDetails;

  const handleApplyNow = () => {
    toast("Successfully applied to the job!");
    saveToLocalStorage(parseInt(jobId));
    
  };

  return (
    <div className="text-center">
      <h1>{job_title}</h1>
      <p>{job_description}</p>
      <Link to="/">Go Back</Link>
      <br />
      <button onClick={handleApplyNow}>Apply Now</button>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
