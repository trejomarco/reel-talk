import React, { useState, useEffect } from 'react';

const EmailSignupForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Effect hook to enable or disable the "Next" button based on form fields
    useEffect(() => {
        setIsNextButtonDisabled(!(firstName && email && password));
    }, [firstName, email, password]);

    return (
        <div className="flex flex-col items-center justify-center bg-black gap-y-14"
            style={{
                width: '544px',
                height: '683px',
                left: '448px',
                padding: '48px 0'
            }}>
            {/* Header with Terms and Privacy Links Nested */}
            <div className="gap-4 w-full flex flex-col items-center justify-center text-4xl font-semibold text-[#FFFFFFEB]" style={{ lineHeight: '49px', letterSpacing: '-0.015em' }}>
                <div className="h-[49px] flex items-center justify-center">
                    Create your account
                </div>

                {/* Terms and Privacy Links */}
                <div className="text-center text-sm">
                    By continuing, you agree to our
                    <a href="/terms" className="font-semibold text-custom-orange hover:underline"> Terms of Service</a> and
                    <a href="/privacy" className="font-semibold text-custom-orange hover:underline"> Privacy Policy</a>.
                </div>
            </div>


            {/* Input Fields */}
            <div className="flex flex-col items-center gap-y-6 w-full">
                {/* First Name Input */}
                <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-[320px] h-[48px] px-[24px] py-0 bg-transparent border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-white"
                />
                {/* Email Input */}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[320px] h-[48px] px-[24px] py-0 bg-transparent border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-white"
                />

                {/* Password input */}
                <div className="relative w-[320px] h-[48px]">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-full pl-[24px] pr-10 py-0 bg-transparent border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-white"
                    />
                    {/*Password visibility toggle*/}
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                    >
                        {showPassword ? (
                            <img src="/EyeSlashIcon.svg" alt="Hide password" />
                        ) : (
                            <img src="/EyeIcon.svg" alt="Show password" />
                        )}
                    </button>
                </div>
            </div>

            {/* Additional Links and Buttons */}
            <div className="flex items-center text-[#FFFFFFEB] space-x-1"> {/* Added space-x-1 for a small gap */}
                <span>Already have an account?</span>
                <a href="/login" className="font-semibold text-custom-orange hover:underline">Log in</a>
            </div>


            <div className="flex items-center space-x-8"> {/* Container with horizontal spacing */}
                {/* Cancel Button */}
                <button
                    type="button"
                    className="w-[256px] h-[48px] bg-[#222222] text-[#FFFFFFEB] rounded-md border-2 border-[#FFFFFFEB] flex items-center justify-center"
                    style={{ fontSize: '16px', fontWeight: '500', lineHeight: '22px', letterSpacing: '0.005em' }}
                >
                    Cancel
                </button>

                {/* Next Button */}
                <button
                    type="button"
                    disabled={isNextButtonDisabled}
                    className={`w-[256px] h-[48px] rounded-md flex items-center justify-center ${isNextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    style={{
                        backgroundColor: isNextButtonDisabled ? '#6D6D6D' : '#FFA724', // Background color changes based on button state
                        color: isNextButtonDisabled ? '#FFFFFFEB' : '#222222', // Text color is #222222 when button is enabled
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '22px',
                        letterSpacing: '0.005em'
                    }}
                >
                    Next
                </button>




            </div>

        </div>
    );
};

export default EmailSignupForm;
