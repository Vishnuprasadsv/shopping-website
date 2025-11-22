import logo from "../assets/logos/logo.png";
import menu from "../assets/logos/menu.png"


const Navbar = () => {
  return (
    <>
    
<div className="flex flex-row justify-between md:px-[30px] px-[18px]">
    <div className="p-3">
        <img src={logo} alt="logo" className="lg:w-[190px] lg:h-12 w-[110px] h-8 "/>
    </div>
    <div className="flex items-center gap-11">
          <ul className="md:text-[12px] md:font-bold lg:text-[16px] xl:text-[20px] md:flex md:gap-6 lg:gap-12 cursor-pointer hidden">
            <li>CATALOGUE</li>
            <li>FASHION</li>
            <li>FAVOURITE</li>
            <li>LIFESTYLE</li>
          </ul>
          <button
            className="hidden sm:block w-20  xl:W-[134px] h-8 xl:h-11 bg-black text-white text-[12px] rounded-md px-4 py-2 cursor-pointer"
          >
            SIGN UP
          </button>

        <img src={menu} alt="menu" className="w-7 mr-3 md:hidden"/>

        </div>
</div>

    </>
  )
}

export default Navbar