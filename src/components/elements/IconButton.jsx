import React from 'react';

const IconButton = ({ iconClass }) => {
  return (
    <div className="bg-[#f5f5f5] rounded-full shadow-md h-10 w-10 flex items-center justify-center">
      <i className={`${iconClass} text-[#282828] p-2`}></i>
    </div>
  );
};

export default IconButton;
