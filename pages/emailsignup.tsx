
import React from 'react';
import EmailSignupform from '../components/signupPage/EmailSignupform';
import ProgressBar from '../components/layout/ProgressBar';



const EmailSignupPage: React.FC = () => {
    return (

        <div className="mt-16 flex flex-col justify-center items-center pt-10 w-full">
            <div className="mb-16">
                <ProgressBar stage={1} />
            </div>
            <EmailSignupform />
        </div>


    );
};

export default EmailSignupPage;
