import compLogo1 from '../assets/logos/complogo1.png';
import compLogo2 from '../assets/logos/complogo2.png';
import compLogo3 from '../assets/logos/complogo3.png';
import compLogo4 from '../assets/logos/complogo4.png';
import compLogo5 from '../assets/logos/complogo5.png';
import compLogo6 from '../assets/logos/complogo6.png';



const Scrollbar = () => {
  return (
    <>
    
       <div className='w-screen xl:h-[100px] h-[200px] bg-[#EBD96B] grid xl:grid-cols-6 grid-cols-3  items-center xl:gap-7  mt-5 xl:pl-5 md:pl-13 mb-3'>

            <div>
                <img src={compLogo1} alt="logo" className='xl:w-[140px] md:w-[120px] w-[100px] ml-10' />
            </div>
            <div>
                <img src={compLogo2} alt="logo" className='xl:w-[100px] md:w-[120px] w-[100px]'  />
            </div>
            <div>
                <img src={compLogo3} alt="logo" className='xl:w-[140px] md:w-[120px] w-[100px]' />
            </div>
            <div>
                <img src={compLogo4} alt="logo" className='xl:w-[180px] md:w-[120px] w-[100px] ml-10' />
            </div>
            <div>
                <img src={compLogo5} alt="logo" className='xl:w-[120px] xl:ml-7 md:w-[120px] w-[100px]' />
            </div>
            <div>
                <img src={compLogo6} alt="logo" className='xl:w-[140px] md:w-[120px] w-[100px]'/>
            </div>

       </div>
    
    </>
  )
}

export default Scrollbar