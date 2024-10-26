import React from 'react';

const WordCountProgress = ({ sidebarExpanded }) => {
  const progressValue = 220;
  const progressMax = 1000;
  const progressPercentage = (progressValue / progressMax) * 100;

  return (
    <div className={`bg-white ${sidebarExpanded ? 'block' : 'hidden'}  py-2 rounded-md transition-all 
    duration-200 ${sidebarExpanded ? 'w-full px-4' : 'w-16 px-2'}`}>
      <div className={`text-[#2B3A67] text-sm font-semibold `}>Generated words</div>
      <div className={`text-[#2B3A67] text-lg font-semibold `}>{`${progressValue}/${progressMax} words`}</div>
      <div className="relative mt-2 h-2 bg-[#E4E7F1] rounded-full overflow-hidden">
        <div
          className="bg-[#4758A8] h-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className={`text-[#B7B7B7] text-xs mt-2 `}>Credits reset every month</div>
    </div>
  );
};

export default WordCountProgress;
