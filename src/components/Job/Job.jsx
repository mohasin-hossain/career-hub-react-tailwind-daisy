import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;    

    return (
        <div className="border-2 border-blue-500 text-center">
            <img src={logo} alt="" />
            <h3>{job_title}</h3>
            <Link to={`/job/${id}`}>View Details</Link>
        </div>
    );
};

export default Job;