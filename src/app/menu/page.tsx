import React from "react";
import Menu from "../../components/sidebar/Menu";

const MenuPage = () => {
  return (
<div className="bg-zinc-900 h-screen w-full overflow-x-hidden">

<div className="flex justify-between items-center p-8 h-20  relative">
<h1 className="mt-9 text-white text-2xl ">Akash</h1>
<Menu />
</div>

 <h1 className="flex items-center justify-center text-white h-[80vh] text-[8vw] font-bold ">MENU BAR</h1>

 </div>


  );
};

export default MenuPage;


