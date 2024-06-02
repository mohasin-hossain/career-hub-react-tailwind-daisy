import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Ooppss!!</h1>
            <p>The page you are looking for is not found!</p>
            <Link to="/">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;