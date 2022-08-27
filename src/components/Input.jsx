import React from "react";

function InputText( ){

  return (
    <label class="relative block">
      <span class="sr-only">Search</span>
        <button class="w-10 absolute inset-y-0 left-0 flex bg-blue-400 active:bg-blue-500 rounded justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center text-slate-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <input class="placeholder:italic placeholder:text-slate-400 bg-white w-full border border-slate-300 rounded-md py-2 pl-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Add some task..." type="text" name="search"/>
    </label>
  );

};

export default InputText;
