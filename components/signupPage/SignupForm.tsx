// components/SignupForm.tsx

import React from 'react';
import Link from 'next/link';


const SignupForm: React.FC = () => {
    return (
        <div className="">
            {/* Header */}
            <div className="pb-9 text-[#FFFFFFEB] w-full h-[49px] flex items-center justify-center text-4xl font-semibold" style={{ lineHeight: '49px', letterSpacing: '-0.015em' }}>
                Create your account
            </div>

            {/* Terms and Privacy Links */}
            <div className="pb-12 text-[#FFFFFFEB] w-full text-center">
                <p className="text-sm">
                    By continuing, you agree to our
                    <a href="/terms" className="text-custom-orange hover:underline font-semibold"> Terms of Service</a> and
                    <a href="/privacy" className="text-custom-orange hover:underline font-semibold"> Privacy Policy</a>.
                </p>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-col items-center gap-[16px]">
                <button
                    type="button"
                    className="w-[256px] h-[48px] bg-[#222222] text-[#FFFFFFEB] text-center font-normal rounded-md border-2 border-[#FFFFFFEB] flex items-center justify-center gap-3 text-lg"
                    style={{ letterSpacing: '0.005em', lineHeight: '22px' }}
                >
                    <img src="/apple-logo.svg" alt="Apple" style={{ width: '16px', height: '19px' }} />
                    Continue with Apple
                </button>
                <button
                    type="button"
                    className="w-[256px] h-[48px] bg-[#222222] text-[#FFFFFFEB] text-center font-normal rounded-md border-2 border-[#FFFFFFEB] flex items-center justify-center gap-3 text-lg"
                    style={{ letterSpacing: '0.005em', lineHeight: '22px' }}
                >
                    <img src="/google-logo.svg" alt="Google" style={{ width: '16px', height: '19px' }} />
                    Continue with Google
                </button>
                <button
                    type="button"
                    className="w-[256px] h-[48px] bg-[#222222] text-[#FFFFFFEB] text-center font-normal rounded-md border-2 border-[#FFFFFFEB] flex items-center justify-center gap-3 text-lg mb-4"
                    style={{ letterSpacing: '0.005em', lineHeight: '22px' }}
                >
                    <img src="/fb-logo.svg" alt="Facebook" style={{ width: '16px', height: '19px' }} />
                    Continue with Facebook
                </button>
                <Link href="/emailsignup" passHref>
                    <button
                        type="button"
                        className="mb-10 w-[256px] h-[48px] bg-[#222222] text-[#FFFFFFEB] text-center font-normal rounded-md border-2 border-[#FFFFFFEB] flex items-center justify-center gap-3 text-lg"
                        style={{ letterSpacing: '0.005em', lineHeight: '22px' }}
                    >
                        Continue with Email
                    </button>
                </Link>
            </div>

            <div className="flex flex-col items-center">
                {/* ... your previous buttons ... */}

                <div className="mb-14 text-[#FFFFFFEB] text-center mt-4">
                    <p>
                        Don't have an account? <a href="/login" className="text-custom-orange hover:underline font-semibold">Log in</a>
                    </p>
                </div>

                <button
                    type="button"
                    className="w-[256px] h-[48px] bg-[#222222] text-[#FFFFFFEB] rounded-md border-2 border-[#FFFFFFEB] flex items-center justify-center"
                    style={{ fontSize: '16px', fontWeight: '500', lineHeight: '22px', letterSpacing: '0.005em' }}
                >
                    Cancel
                </button>
            </div>











        </div>
    );
};

export default SignupForm;



