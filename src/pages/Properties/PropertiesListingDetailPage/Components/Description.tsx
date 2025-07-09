import React, { useRef, useEffect } from 'react';

const description = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\nThe point of using is that it has a more or less normal distribution of letters, as opposed to using content here making it look like readable English.`;

const Description = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset height
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [description]);

    return (
        <div className="mb-2">
            <textarea
                ref={textareaRef}
                value={description}
                readOnly
                style={{
                    width: '100%',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    padding: '16px 18px',
                    fontSize: 18,
                    color: '#444',
                    background: '#fff',
                    resize: 'none', // User can't resize
                    minHeight: 60,
                    boxSizing: 'border-box',
                    overflow: 'hidden', // Hide scroll
                }}
            />
        </div>
    );
};

export default Description;