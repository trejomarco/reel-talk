// components/Button.tsx
import React from 'react'

interface ButtonProps {
    provider: 'google' | 'facebook' | 'email';
}

const Button: React.FC<ButtonProps> = ({ provider }) => {
    return (
        <button
            className={`w-full mb-4 p-2 rounded-lg text-lg font-medium ${getButtonStyles(provider)}`}
            onClick={() => handleAuth(provider)}
        >
            {`Continue with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
        </button>
    )
}

function getButtonStyles(provider: 'google' | 'facebook' | 'email'): string {
    switch (provider) {
        case 'google':
            return 'bg-red-500 hover:bg-red-600 text-white';
        case 'facebook':
            return 'bg-blue-500 hover:bg-blue-600 text-white';
        case 'email':
            return 'bg-gray-500 hover:bg-gray-600 text-white';
        default:
            return '';
    }
}


function handleAuth(provider: string): void {
    // Implement authentication logic
}

export default Button
