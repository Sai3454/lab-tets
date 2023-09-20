import { MdPerson, MdPhone, MdLocationPin, MdStarRate, MdMenu, MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import woman from './woman.png'
import logo from './logo.png'
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'
import lines from './lines.png'
import woman2 from './woman2.png'
import { useState } from 'react';

export default function App() {

  const [activeMenu, setActivemenu] = useState(false)

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 265;
  }
  const scrollRight = () => {
      document.getElementById("content").scrollLeft += 265;
  }


  return (
  <div className=''>

    <div className='flex justify-between md:justify-around items-center p-3'>
      <div className='basis-6/12 md:basis-3/12 flex items-center'>
        <img src={logo} alt="logo" className='w-32 md:w-44 p-1 '/>
      </div>
      <div className='basis-6/12 flex justify-end items-center md:hidden'>
        {activeMenu ? (
        <div className='' onClick={() => setActivemenu(!activeMenu)}>
          <MdClose className='cursor-pointer text-3xl p-1'/>
        </div>
        ) : (
          <div className='' onClick={() => setActivemenu(!activeMenu)}>
            <MdMenu className='cursor-pointer text-3xl p-1'/>
          </div>
        )
        }
      </div>
      <div className='basis-5/12 p-1 mx-2 hidden md:block'>
        <div className='flex justify-around'>
          <p className='text-sm text-gray-800 p-1 font-semibold'>Home</p>
          <p className='text-sm text-gray-800 p-1 font-semibold'>Health conditions</p>
          <p className='text-sm text-[#138ED1] p-1 font-semibold'>Lab tests</p>
          <p className='text-sm text-gray-800 p-1 font-semibold'>Medicines</p>
        </div>
      </div>
      <div className='basis-3/12 p-1 items-center hidden md:block'>
        <div className='flex justify-around'>
          <button type='button' className='px-3 py-2 m-1 text-center text-white text-xs bg-[#00486C] rounded-md'>For patients</button>
          <button type='button' className='px-3 py-2 m-1 text-center text-white text-xs bg-[#00486C] rounded-md'>For hospitals</button>
        </div>
      </div>
      <div className='basis-1/12 hidden md:block'>
        <button type='button' className='px-3 py-2 text-center text-white text-xs bg-gray-800 rounded-md'>Play Store</button>
      </div>
    </div>

    <div className='md:hidden bg-sky-50 bg-transparent flex flex-col'>
      {activeMenu && (
        <div>
          <div className='flex flex-col justify-around items-center p-5'>
            <p className='text-sm text-gray-800 p-1 font-semibold'>Home</p>
            <p className='text-sm text-gray-800 p-1 font-semibold'>Health conditions</p>
            <p className='text-sm text-[#138ED1] p-1 font-semibold'>Lab tests</p>
            <p className='text-sm text-gray-800 p-1 font-semibold'>Medicines</p>
          </div>
          <div className='flex justify-around items-center mb-3'>
            <button type='button' className='px-3 py-1.5 m-1 text-center text-white text-xs bg-[#00486C] rounded-md'>For patients</button>
            <button type='button' className='px-3 py-1.5 m-1 text-center text-white text-xs bg-[#00486C] rounded-md'>For hospitals</button>
            <button type='button' className='px-3 py-1.5 text-center text-white text-xs bg-gray-800 rounded-md'>Play Store</button>
          </div>
        </div>
      )}
    </div>

    <div className="h-5/6 flex flex-col md:flex-row justify-center items-center p-3 bg-gradient-to-r from-sky-200 to-white md:rounded-bl-[250px]">
      <div className="flex flex-col justify-between items-center p-3 order-2 md:order-1 m-3">
        <div className="card flex flex-col justify-evenly items-center order-2 md:order-1 bg-slate-100 rounded-3xl p-5 mb-3">
          <h1 className="text-xl text-black p-2">Fill in the details to get a call!</h1>
          <div className="flex justify-between p-2 m-1">
            <MdPerson className='m-2 text-2xl'/>
            <input type='text' className='p-2 rounded-md bg-slate-50' placeholder='Enter Full Name'/>
          </div>
          <div className="flex justify-between p-3 m-1">
            <MdPhone  className='m-2 text-2xl'/>
            <input type='text' className='p-2 rounded-md bg-slate-50' placeholder='Enter Phone Number'/>
          </div>
          <div className="flex justify-between p-3 m-1">
            <MdLocationPin  className='m-2 text-2xl'/>
            <input type='text' className='p-2 rounded-md bg-slate-50' placeholder='Enter location'/>
          </div>
          <button type='button' className='p-2 text-md text-white bg-[#00486C] rounded-md m-1'>Proceed</button>
        </div>
        <div className="flex flex-col md:flex-row p-5 order-1 md:order-2">
          <button type="button" className="text-md mb-1 md:mb-0 text-white bg-[#00486C] rounded-2xl z-40 p-2">Get a Full Body Checkup Now at <span className='line-through'>₹5999</span> ₹999</button>
          <button type="button" className="text-md text-white bg-[#00A6FF] rounded-2xl z-20 md:-ml-5 md:pl-6 p-2">70% OFF</button>
        </div>
      </div>
      <div className='flex flex-col justify-around items-center p-3 order-1 md:order-2 m-3'>
      <div className='flex'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-xl md:text-3xl text-[#00A6FF] p-1 font-bold'>Best in class</h1>
          <img src={lines} alt="lines" className='p-1 w-[100px] md:w-[180px]'/>
        </div>
        <h1 className='text-xl md:text-3xl text-black font-bold p-1'> lab tests!</h1>
      </div>
        <img src={woman} alt='woman-doctor' className='hidden md:block h-96 w-80 m-3' />
      </div>
    </div>
    <div className=' flex justify-center items-center p-3'>
      <div className='h-1/6 flex flex-col md:flex-row justify-around items-center p-3 md:w-2/3'>
          <div className="flex justify-between p-2 m-1">
            <img src={logo1} className='h-10 w-10 p-1' alt="logo" />
            <h1 className='p-2 text-lg'>NABL Accredited Labs</h1>
          </div>
          <div className="flex justify-between p-2 m-1">
            <img src={logo2} className='h-10 w-10 p-1' alt="logo" />
            <h1 className='p-2 text-lg'>NABL Accredited Labs</h1>
          </div>
      </div>
    </div>
    <div className='flex flex-col items-center p-1  m-3'>
      <div className='flex'>
        <h1 className='text-xl md:text-3xl text-black font-bold p-1'>We keep</h1>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-xl md:text-3xl text-[#00A6FF] p-1 font-bold'>expanding!</h1>
          <img src={lines} alt="lines" className='p-1 w-[100px] md:w-[150px]'/>
        </div>
      </div>
      <div className='flex flex-wrap p-3 justify-around'>
        <div className='px-2 py-3 bg-[#00A6FF] text-sm md:text-md text-white m-2 md:m-3 text-center w-24 md:w-32 rounded-md'>5+<br/>Labs</div>
        <div className='px-2 py-3 bg-[#00A6FF] text-sm md:text-md text-white m-2 md:m-3 text-center w-24 md:w-32 rounded-md'>100+<br/>Collection centers</div>
        <div className='px-2 py-3 bg-[#00A6FF] text-sm md:text-md text-white m-2 md:m-3 text-center w-24 md:w-32 rounded-md'>1000+<br/>Monthly tests</div>
        <div className='px-2 py-3 bg-[#00A6FF] text-sm md:text-md text-white m-2 md:m-3 text-center w-24 md:w-32 rounded-md'>2200<br/>Test menu</div>
        <div className='px-2 py-3 bg-[#00A6FF] text-sm md:text-md text-white m-2 md:m-3 text-center w-24 md:w-32 rounded-md'>5+<br/>Cities present in</div>
      </div>
    </div>

    <div className='flex flex-col items-center p-3 bg-gradient-to-b from-white to-sky-200 mt-3'>
      <div className='flex'>
        <h1 className='text-xl md:text-3xl text-black font-bold p-1'>Top</h1>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-xl md:text-3xl text-[#00A6FF] p-1 font-bold'>packages</h1>
          <img src={lines} alt="lines" className='p-1 w-[100px] md:w-[150px]'/>
        </div>
      </div>
      <p className='text text-gray-400 text-sm text-center md:w-2/5 m-2 p-2'>Explore our wide range of tests! We ensure that you don’t miss out on any chance to keep yourself healthy.</p>
    </div>


    <div className="md:p-5 bg-sky-200">
      <div className="grid grid-rows-1 grid-flow-col">
        <button onClick={scrollLeft} className="cursor-pointer p-2 m-2 place-self-center col-span-1 rounded-full bg-white">
          <MdChevronLeft />
        </button>
        
      <div id="content" className="col-span-4 md:p-2 flex items-center justify-start  scroll-smooth  overflow-hidden">
        <div className='flex flex-col justify-around bg-slate-100 rounded-lg p-4 m-3'>
          <h1 className='text-sm md:text-md m-1 p-1 font-bold w-[200px]'>Basic Full Body Checkup</h1>
          <div className='flex'>
            <p className='text-sm m-1 p-1 font-semibold'>4.3</p>
            <MdStarRate className='text-yellow-400 mt-3 text-lg'/>
            <p className='font-normal mt-2 text-sm'>  (705 reviews)</p>
          </div>  
          <p className='text-sm md:text-md m-1 p-1 font-semibold'>Number of tests - 73</p>
          <p className='text-sm md:text-md m-1 p-1 font-normal'>MRP ₹4999</p>
          <button type='button' className='bg-[#00A6FF] text-md m-1 px-2 py-1 text-center rounded-md'>Book Now</button>
        </div>
        <div className='flex flex-col justify-around bg-slate-100 rounded-lg p-4 m-3'>
          <h1 className='text-sm md:text-md m-1 p-1 font-bold w-[200px]'>Liver Function Test (LFT)</h1>
          <div className='flex'>
            <p className='text-sm m-1 p-1 font-semibold'>4.7</p>
            <MdStarRate className='text-yellow-400 mt-3 text-lg'/>
            <p className='font-normal mt-2 text-sm'>  (715 reviews)</p>
          </div>  
          <p className='text-sm md:text-md m-1 p-1 font-semibold'>Number of tests - 53</p>
          <p className='text-sm md:text-md m-1 p-1 font-normal'>MRP ₹7599</p>
          <button type='button' className='bg-[#00A6FF] text-md m-1 px-2 py-1 text-center rounded-md'>Book Now</button>
        </div>
        <div className='flex flex-col justify-around bg-slate-100 rounded-lg p-4 m-3'>
          <h1 className='text-sm md:text-md m-1 p-1 font-bold w-[200px]'>Basic Full Body Checkup</h1>
          <div className='flex'>
            <p className='text-sm m-1 p-1 font-semibold'>4.1</p>
            <MdStarRate className='text-yellow-400 mt-3 text-lg'/>
            <p className='font-normal mt-2 text-sm'>  (425 reviews)</p>
          </div>  
          <p className='text-sm md:text-md m-1 p-1 font-semibold'>Number of tests - 27</p>
          <p className='text-sm md:text-md m-1 p-1 font-normal'>MRP ₹8499</p>
          <button type='button' className='bg-[#00A6FF] text-md m-1 px-2 py-1 text-center rounded-md'>Book Now</button>
        </div>
        <div className='flex flex-col justify-around bg-slate-100 rounded-lg p-4 m-3'>
          <h1 className='text-sm md:text-md m-1 p-1 font-bold w-[200px]'>Basic Full Body Checkup</h1>
          <div className='flex'>
            <p className='text-sm m-1 p-1 font-semibold'>4.3</p>
            <MdStarRate className='text-yellow-400 mt-3 text-lg'/>
            <p className='font-normal mt-2 text-sm'>  (705 reviews)</p>
          </div>  
          <p className='text-sm md:text-md m-1 p-1 font-semibold'>Number of tests - 73</p>
          <p className='text-sm md:text-md m-1 p-1 font-normal'>MRP ₹4999</p>
          <button type='button' className='bg-[#00A6FF] text-md m-1 px-2 py-1 text-center rounded-md'>Book Now</button>
        </div>
        <div className='flex flex-col justify-around bg-slate-100 rounded-lg p-4 m-3'>
          <h1 className='text-sm md:text-md m-1 p-1 font-bold w-[200px]'>Basic Full Body Checkup</h1>
          <div className='flex'>
            <p className='text-sm m-1 p-1 font-semibold'>4.3</p>
            <MdStarRate className='text-yellow-400 mt-3 text-lg'/>
            <p className='font-normal mt-2 text-sm'>  (705 reviews)</p>
          </div>  
          <p className='text-sm md:text-md m-1 p-1 font-semibold'>Number of tests - 73</p>
          <p className='text-sm md:text-md m-1 p-1 font-normal'>MRP ₹4999</p>
          <button type='button' className='bg-[#00A6FF] text-md m-1 px-2 py-1 text-center rounded-md'>Book Now</button>
        </div>
        <div className='flex flex-col justify-around bg-slate-100 rounded-lg p-4 m-3'>
          <h1 className='text-sm md:text-md m-1 p-1 font-bold w-[200px]'>Liver Function Test (LFT)</h1>
          <div className='flex'>
            <p className='text-sm m-1 p-1 font-semibold'>4.7</p>
            <MdStarRate className='text-yellow-400 mt-3 text-lg'/>
            <p className='font-normal mt-2 text-sm'>  (715 reviews)</p>
          </div>  
          <p className='text-sm md:text-md m-1 p-1 font-semibold'>Number of tests - 53</p>
          <p className='text-sm md:text-md m-1 p-1 font-normal'>MRP ₹7599</p>
          <button type='button' className='bg-[#00A6FF] text-md m-1 px-2 py-1 text-center rounded-md'>Book Now</button>
        </div>
        <div className='flex flex-col justify-around bg-slate-100 rounded-lg p-4 m-3'>
          <h1 className='text-sm md:text-md m-1 p-1 font-bold w-[200px]'>Basic Full Body Checkup</h1>
          <div className='flex'>
            <p className='text-sm m-1 p-1 font-semibold'>4.1</p>
            <MdStarRate className='text-yellow-400 mt-3 text-lg'/>
            <p className='font-normal mt-2 text-sm'>  (425 reviews)</p>
          </div>  
          <p className='text-sm md:text-md m-1 p-1 font-semibold'>Number of tests - 27</p>
          <p className='text-sm md:text-md m-1 p-1 font-normal'>MRP ₹8499</p>
          <button type='button' className='bg-[#00A6FF] text-md m-1 px-2 py-1 text-center rounded-md'>Book Now</button>
        </div>
      </div>
      <button onClick={scrollRight} className="cursor-pointer col-span-1 p-2 m-2 place-self-center  rounded-full bg-white">
          <MdChevronRight />
        </button>
      </div>
    </div>

    <div className='flex flex-col justify-around items-center p-3 pb-0 bg-sky-200 h-5/6'>
      <div className='flex'>
        <h1 className='text-xl md:text-3xl text-black font-bold p-1'>Why</h1>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-xl md:text-3xl text-[#00A6FF] p-1 font-bold'>choose</h1>
          <img src={lines} alt="lines" className='p-1 w-[90px] md:w-[110px]'/>
        </div>
        <h1 className='text-3xl text-black font-bold p-1'>us?</h1>
      </div>
      <p className='text text-gray-500 text-sm text-center md:w-2/5 m-2 p-2'>We want you and your heart to be healthy so you can live a happy life!</p>
      <div className='flex flex-col md:flex-row p-2 pb-0'>
        <div className='grid md:grid-rows-2 grid-rows-4 grid-flow-col gap-2 md:gap-4 p-1'>
          <div className='relative p-2 bg-white rounded-xl mb-5 mt-10'>
            <div className=' flex flex-col justify-around p-1'>
              <h1 className='text-lg font-bold p-1 m-1'>NABL Accredited Labs</h1>
              <p className='text-sm p-1 m-1'>Get accurate and safe results from our NABL-certified lab partners.  </p>
            </div>
            <img className='absolute -top-5 right-0 h-14 w-14 rounded-full' src={logo1} alt="logo" />
          </div>
          <div className='relative p-2 bg-white rounded-xl mb-5 mt-10'>
            <div className='flex flex-col justify-around p-1'>
              <h1 className='text-lg font-bold p-1 m-1'>NABL Accredited Labs</h1>
              <p className='text-sm p-1 m-1'>Get accurate and safe results from our NABL-certified lab partners.  </p>
            </div>
            <img className='absolute -top-5 right-0 h-14 w-14 rounded-full' src={logo1} alt="logo" />
          </div>
          <div className='relative p-2 bg-white rounded-xl  mb-5 mt-10'>
            <div className='flex flex-col justify-around p-1'>
              <h1 className='text-lg font-bold p-1 m-1'>NABL Accredited Labs</h1>
              <p className='text-sm p-1 m-1'>Get accurate and safe results from our NABL-certified lab partners.  </p>
            </div>
            <img className='absolute -top-5 right-0 h-14 w-14 rounded-full' src={logo1} alt="logo" />
          </div>
          <div className='relative p-2 bg-white rounded-xl mb-5 mt-10'>
            <div className=' flex flex-col justify-around p-1'>
              <h1 className='text-lg font-bold p-1 m-1'>NABL Accredited Labs</h1>
              <p className='text-sm p-1 m-1'>Get accurate and safe results from our NABL-certified lab partners.  </p>
            </div>
            <img className='absolute -top-5 right-0 h-14 w-14 rounded-full' src={logo1} alt="logo" />
          </div>
        </div>
        <img src={woman2} alt="woman" className='w-1/3 h-2/3 self-end'/>
      </div>
    </div>

    <div className='grid grid-rows-2 grid-flow-col md:grid-rows-1 p-3 bg-gray-800'>
      <div className='md:col-span-1 flex flex-col justify-around items-center p-1 m-1'>
        <img src={logo3} alt="logo" className='self-start' />
        <p className='text-slate-50 text-sm p-1 m-1'>Book doctor appointments online and get your ailments treated in no time with our expert medical support systems. Get rid of all your medical problem with our expert panel of doctors who guide you towards a healthier life.</p>
      </div>
      <div className='grid grid-cols-3 gap-2 p-1 m-1 md:col-span-2'>
        <div className='flex flex-col justify-around p-1 m-1'>
          <h1 className='text-md text-white font-bold p-1 m-1'>Services</h1>
          <p className='text-xs text-slate-50 md:p-1 m-1'>Appointments</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>Lab tests</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>A-Z medicine</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>Doctor support</p>
        </div>
        <div className='flex flex-col justify-around p-1 m-1'>
          <h1 className='text-md text-white font-bold p-1 m-1'>Legal</h1>
          <p className='text-xs text-slate-50 md:p-1 m-1'>General info</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>Privacy policy</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>Terms of services</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>Consultation</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>How it works</p>
        </div>
        <div className='flex flex-col justify-around p-1 m-1'>
          <h1 className='text-md text-white font-bold p-1 m-1'>Talk to us</h1>
          <p className='text-xs text-slate-50 md:p-1 m-1'>support</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>appointment</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>+91 12345 67899</p>
          <p className='text-xs text-slate-50 md:p-1 m-1'>+91 97642 09752</p>
        </div>
      </div>
    </div>
    <div className='bg-gray-800 p-3 flex flex-col justify-center'>
        <hr className='border-solid border-2 border-gray-600' />
        <p className='text-gray-600 m-5'>© 2021-2023 All Rights Reserved</p>
    </div>
    
    
  </div>
  )
}