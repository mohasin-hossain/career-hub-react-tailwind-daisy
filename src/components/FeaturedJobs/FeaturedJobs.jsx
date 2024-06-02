import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <h1 className="text-3xl text-center">Featured Jobs</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div onClick={() => setDataLength(jobs.length)} className={dataLength === jobs.length && 'hidden'}>
                <button className="px-2 py-2 bg-green-600 border-none rounded-lg text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;