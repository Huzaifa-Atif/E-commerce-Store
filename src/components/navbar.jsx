import React from "react";

const Navbar = ({setSearchTerm}) => {
  return (
      <div>
          <div className="m-0 p-0 flex flex-row bg-black h-16">
        <p className=" text-white text-4xl font-bold ml-12 pt-2">Amazon</p>

        <img className="absolute ml-[550px] mt-5 h-6 w-6" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"/>

        <input onChange={(e) => setSearchTerm(e.target.value)} className="ml-20 w-80 mt-3 bg-white h-10 rounded-md cursor-pointer" 
        type="text" placeholder=" search your product!"></input>

        <ul className="text-white flex flex-row ml-48 mt-4 space-x-20 font-bold text-xl cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Pricing</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;