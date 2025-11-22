import star from "../assets/logos/Star 11.png";
import payImage from "../assets/images/image 12.png";
const Payday = () => {
  return (
    <>
    
        <div
        className="flex flex-row items-center justify-center bg_color mt-20 mb-20 "
      >
        <img
          src={payImage}
          alt="image"
          className="h-[80vh] w-[50vw] hidden xl:block"
        />
        <div className="w-[50vw] bg_color xl:h-[80vh] md:h-[70vh] h-[60vh]">
          <div
            className="bg-white xl:w-[380px] xl:h-[90px] w-[280px] h-[60px] -rotate-2 mt-30 xl:ml-[60px] "
          >
            <div
              className="xl:text-[76px] text-[52px] font-black absolute z-10 rotate-2 left-5"
            >
              PAYDAY
            </div>
          </div>
          <div className="xl:text-[76px] md:text-[52px] text-[38px] font-black ml-6 xl:ml-20 ">SALE NOW</div>
          <div className="xl:text-[22px] md:text-[18px] text-[14px] max-w-[430px] xl:ml-20 ml-8 mt-5">
            Spend minimal $100 get 30% off <span className="hidden xl:block">voucher code for your next purchase</span>
          </div>
          <div className="xl:text-[22px] md:text-[18px] text-[14px] font-bold xl:ml-20 ml-8 mt-5">
            1 June - 10 June 2021
          </div>

          <div className="xl:text-[22px] md:text-[18px] text-[14px] max-w-[400px] xl:ml-20 ml-8">
            *Terms & Conditions apply
          </div>

          <button
            className="bg-black rounded-[7px] text-white xl:w-40 md:w-30 w-22 xl:h-[65px] md:h-12 h-[42px] xl:text-[20px] md:text-[16px] text-[12px] font-semibold ml-20 mt-10 cursor-pointer"
          >
            SHOP NOW
          </button>
        </div>

        <img
          src={star}
          alt="star"
          className="w-[50px] relative opacity-75 rotate-14 right-[1200px] bottom-[230px] hidden xl:block"
        />
        <img
          src={star}
          alt="star"
          className="w-[50px] relative opacity-50 rotate-12 right-[800px] top-[180px] hidden xl:block"
        />
        <img
          src={star}
          alt="star"
          className="w-[50px] relative opacity-75 rotate-16 right-[1340px] top-[110px] hidden xl:block"
        />
        <img
          src={star}
          alt="star"
          className="w-[50px] relative opacity-50 rotate-14 right-[1000px] bottom-60 hidden xl:block"
        />
      </div>
    
    </>
  )
}

export default Payday