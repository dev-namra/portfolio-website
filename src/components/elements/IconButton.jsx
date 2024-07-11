import React from 'react';

const IconButton = ({ iconClass }) => {
  return (
    <div className="bg-[#f5f5f5] rounded-full shadow-inner-outer size-6 md:size-14 flex items-center justify-center flex-wrap">
      <i className={`${iconClass} text-[#282828] text-base md:text-2xl`}></i>
    </div>
  );
};

export default IconButton;
