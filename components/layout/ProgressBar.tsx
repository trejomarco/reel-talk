// components/ProgressBar.tsx

import React from 'react';

interface ProgressBarProps {
    stage: number; // This prop will determine which SVG is displayed
}

const ProgressBar: React.FC<ProgressBarProps> = ({ stage }) => {
    // A helper function to determine the correct SVG based on the stage prop
    const getProgressImage = () => {
        switch (stage) {
            case 1:
                return '/progress-bar-1.svg';
            case 2:
                return '/progress-bar-2.svg';
            case 3:
                return '/progress-bar-3.svg';
            case 4:
                return '/progress-bar-4.svg';
            case 5:
                return '/progress-bar-5.svg';
            case 6:
                return '/progress-bar-6.svg';
            default:
                return '/progress-bar-1.svg'; // Default to the first stage
        }
    };

    return (
        <div className="flex justify-center items-center">
            <img src={getProgressImage()} alt={`Progress Bar Stage ${stage}`} />
        </div>
    );
};

export default ProgressBar;
