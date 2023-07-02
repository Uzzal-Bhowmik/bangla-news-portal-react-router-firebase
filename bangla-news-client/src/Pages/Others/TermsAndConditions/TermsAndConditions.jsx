import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>This is our Terms and Conditions Page</h1>
            <Link to="/register">Go Back to Registration</Link>
        </div>
    );
};

export default TermsAndConditions;
