// pages/login.tsx
import React from 'react';
import SignupForm from '../components/signupPage/signupForm';
import ProgressBar from '../components/layout/ProgressBar';



const SignupPage: React.FC = () => {
    return (

        <div className="mt-16 flex flex-col justify-center items-center pt-10 w-full">
            <div className="mb-16">
                <ProgressBar stage={1} />
            </div>
            <SignupForm />
        </div>


    );
};

export default SignupPage;
