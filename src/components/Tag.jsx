import React from 'react';

const Tag = ({ text }) => {
    return (
         <div className=" inline-flex items-center justify-center   mb-2">
            <p className=" font-medium text-base bg-[#F8F1E7] text-[#9A8769] px-5 py-3 rounded-full ">{text}</p>
        </div>
    );
  };
  
  export default Tag; 
  