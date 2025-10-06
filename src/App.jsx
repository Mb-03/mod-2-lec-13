import React from "react";

const App = () => {
  return (
    <div>
      App
      <div className="text-[#6b4a3a] bg-[#3b98fb] border border-green-700 hover:border-green-400">
        Colours
      </div>
      <div className="text-[32px] font-[600] italic uppercase line-through text-center">
        Texts
      </div>
      <div className="bg-blue-600 mx-auto my-40 px-10 py-5 w-[400px] ">
        Margin/Padding
      </div>
      <div className="w-[400px] bg-amber-500 h-[400px]  ">Width/Height</div>
      <div className=" max-w-[1440px] h-screen w-full bg-amber-500 min-h-screen flex">
        Width/Height
      </div>
    </div>
  );
};

export default App;
