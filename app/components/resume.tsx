import React from 'react';

const ResumeSection = () => {
    return (
        <div id="resume" className='h-screen'>
            <h1 className="text-(--primary-blue) text-3xl font-bold text-center mb-5">Resume</h1>
            <iframe
                src="/Resume - Robles.pdf"
                width="100%"
                height="90%"
                title="Resume"
            />
        </div>
    );
};

export default ResumeSection;