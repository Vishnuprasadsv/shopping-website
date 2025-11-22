import NArrival1 from '../assets/images/NA 1.png';
import NArrival2 from '../assets/images/NA2.png';
import NArrival3 from '../assets/images/NA3.png';
import NewArrivalCard from '../card/NewArrivalCard';
import arrow from '../assets/logos/right-arrow.png';


const NewArrival = () => {

    let product = {
        image:NArrival1,
        productName:"Hoodies & Sweetshirt"
    }
    let product2 = {
        image:NArrival2,
        productName:"Coats & Parkas"
    }
    let product3 = {
        image:NArrival3,
        productName:"Tees & T-Shirt"
    }


  return (
    <>
    <div className="mt-[30px] mb-20">
        <div
          className="w-[140px] bg-[#EBD96B] h-10 absolute rounded-tl-[140%] rotate-1 rounded-br-[130%] rounded-tr-[-20%] ml-[298px] mt-5"
        ></div>
        <div className="font-black text-[45px] relative ml-[70px] mt-[60px]">
          NEW ARRIVALS
        </div>
      </div>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-row-1 md:ml-5 xl:ml-20 justify-center mt-20'>
        <NewArrivalCard image = {product.image} productName={product.productName}/>
        <NewArrivalCard image = {product2.image} productName={product2.productName}/>
        <NewArrivalCard image = {product3.image} productName={product3.productName}/>

        <div className='md:flex justify-center items-center hidden xl:hidden'>
            <div className='flex items-center justify-center flex-col'>
            <div className='h-[100px] w-[100px] rounded-full bg-gray-200 flex justify-center items-center mb-6 cursor-pointer'>
                <img src={arrow} alt="arrow" className='opacity-24'/>
            </div>
            <span className='text-gray-500 font-black text-2xl'>View More...</span>
        </div>
        </div>

        </div>
    </>
  )
}

export default NewArrival