import { useEffect, useState } from "react";
import { getStoredData } from "../../Utlities/localStorage";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobsId = getStoredData();
    if (jobs.length > 0) {
      // Two approach
      // First
      const jobsApplied = jobs.filter((job) => storedJobsId.includes(job.id));
      setAppliedJobs(jobsApplied);

      //second
      //   let jobsApplied = [];
      //   for (const id of storedJobsId) {
      //     const foundAppliedJob = jobs.find((job) => job.id === id);
      //     if (foundAppliedJob) {
      //       jobsApplied.push(foundAppliedJob);
      //     }
      //   }
      //   setAppliedJobs(jobsApplied);
    }
  }, []);

  return (
    <div>
      <h1>Jobs that you have Applied: {appliedJobs.length}</h1>
      <ul>
        {appliedJobs.map((job) => (
          <li key={job.id}>
            Title: {job.job_title}; Company: {job.company_name}; Type: 
             {job.remote_or_onsite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
