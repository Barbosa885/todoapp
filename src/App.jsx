import React from "react";
import Input from "./components/Input.jsx"

function App() {

  return (
    <div className="bg-gray-900 h-screen">
      <h1 className="text-6xl text-white font-SFpro font-semibold p-10">TODO</h1>      
      <div className="flex justify-center ">
        <Input />
      </div>
    </div>
  )
}

export default App;
