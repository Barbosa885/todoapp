import React from "react";

function InputText( ){

  return (
    <label className="relative block">
      <label className="w-10 absolute inset-y-0 left-0 flex bg-blue-400 hover:bg-blue-500 rounded justify-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center text-slate-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </label> 
    <input type="text" placeholder="Add some task..." className="placeholder:text-slate-300 placeholder:italic placeholder:text-base rounded-md sm:text-sm py-2 pl-12 flex focus:outline-none focus:border-0"></input>
    </label>
  );
};

export default InputText;
