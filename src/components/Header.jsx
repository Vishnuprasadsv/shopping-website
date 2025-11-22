import landingImage from "../assets/images/landing image.png"
import star from "../assets/logos/Star 11.png"

const Header = () => {
  return (
    <>

     <div className="flex items-center justify-center">
        <div className="w-[92vw] h-[90vh] md:h-[80vh] lg:h-[85vh] bg-[#F4F6F5] rounded-[50px] mt-10 lg:flex-none flex justify-center lg:justify-start items-center lg:items-start">
            <div >
          <div
            className="bg-white w-40 sm:w-[200px] md:w-[280px] md:h-[90px] h-[72px] -rotate-2 mt-10 md:ml-[60px] "
          >
            <div
              className="text-[48px] sm:text-[58px] md:text-[70px] font-black absolute z-10 rotate-3 md:left-5 left-1 sm:top-2.9 mt-2 sm:mt-0"
            >
            LET’S
            </div>
          </div>
          <div className="text-[48px] sm:text-[58px] md:text-[70px] font-black md:ml-20">EXPLORE</div>

          <div className="bg-[#EBD96B] w-[250px] md:w-[420px] sm:w-[320px] h-[72px] md:h-[100px] sm:h-[83px] -rotate-3 md:ml-[60px]">
            <div
              className="text-[48px] sm:text-[58px] md:text-[70px] font-black absolute z-10 rotate-3 md:left-5 left-1 top-2"
            >
              UNIQUE
            </div>
          </div>

          <div className="text-[48px] sm:text-[58px] md:text-[70px] font-black md:ml-20">CLOTHES.</div>

          <div className="font-regular md:text-[24px] sm:text-[18px] text-[12px] md:ml-20 mt-5">
            Live for Influential and Innovative fashion!
          </div>

          <button
            className="bg-black rounded-[7px] text-white w-20 sm:w-[100px] sm:h-10 h-8 xl:w-[130px] lg:w-[110px] xl:h-[50px] lg:h-[46px] xl:text-[20px] lg:text-[16px] text-[12px] ml-20 mt-10 cursor-pointer"
          >
            Shop Now
          </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="absolute xl:right-[200px] lg:right-[110px]  md:top-[200px] xl:top-[185px] hidden lg:block">
            {/* <div className="mt-[200px] xl:mt-0"> */}
              <img
              src={landingImage}
              alt="image"
              className="xl:w-[650px] lg:w-[540px] xl:h-[570px] md:mt-[100px] 2xl:mt-0 z-40"
            />
            {/* </div> */}
          </div>
          <img
            src={star}
            alt="star"
            className="xl:w-[50px] lg:w-10  hidden lg:block absolute xl:right-[800px] lg:right-[600px] xl:top-[140px] lg:top-[220px]"
          />
          <img
            src={star}
            alt="star"
            className="xl:w-[50px] lg:w-10 absolute hidden lg:block xl:right-[300px] lg:right-[220px] top-[180px]"
          />
          <img
            src={star}
            alt="star"
            className="xl:xl:w-[50px] lg:w-10 absolute hidden lg:block xl:right-[140px] lg:right-[60px] top-[380px]"
          />
          <img
            src={star}
            alt="star"
            className="xl:w-[50px] lg:w-10 absolute hidden lg:block xl:right-[800px] lg:right-[600px] bottom-10"
          />
          <img
            src={star}
            alt="star"
            className="xl:w-[50px] lg:w-10 absolute hidden lg:block xl:right-[200px] lg:right-[110px] bottom-10"
          />
          </div>
      </div>
    
    </>
  )
}

export default Header