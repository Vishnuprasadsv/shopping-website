import arrow from '../assets/logos/right-arrow.png';


const NewArrivalCard = (props) => {

    

  return (
    <>
        <div className="w-[400px] mb-10 ">
            <img src={props.image} alt="image" className='xl:w-[400px] md:w-[600px]'/>

            <div className="flex items-center justify-between mt-3">
                <div className="flex flex-col">
                    <span className="font-semibold text-[18px]">
                        {props.productName}
                    </span>
                    <span className="text-[14px] mt-1.5 font-semibold text-gray-600">
                        Explore Now!
                    </span>
                </div>
                <img src={arrow} alt="arrow" className='w-6 h-5 opacity-50 cursor-pointer'/>
            </div>
        </div>
    </>
  )
}

export default NewArrivalCard