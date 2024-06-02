import { useEffect, useState } from "react";
import { getStoredData } from "../../Utlities/localStorage";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobsId = getStoredData();
    if (jobs.length > 0) {
      // Two approach
      // First
      const jobsApplied = jobs.filter((job) => storedJobsId.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);

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

  const handleJobFilter = (jobType) => {
    if (jobType === "All") {
      setDisplayJobs(appliedJobs);
    } else if (jobType === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === jobType
      );
      setDisplayJobs(remoteJobs);
    } else if (jobType === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === jobType
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <h1>Jobs that you have Applied: {appliedJobs.length}</h1>

      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1"
        >
          Filter Applied Jobs
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
        >
          <li onClick={() => handleJobFilter("All")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobFilter("Remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobFilter("Onsite")}>
            <a>On-Site</a>
          </li>
        </ul>
      </div>

      <ul>
        {displayJobs.map((job) => (
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
