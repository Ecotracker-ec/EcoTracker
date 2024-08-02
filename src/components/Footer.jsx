import React from 'react'

function Footer() {
  return (
    <div className="relative w-full bg-black text-white">
        <div className='grid grid-cols-2 gap-4'>
            <div className='text-[25px] md:text-[45px] mt-14 ml-5 md:ml-20'>EcoTracker</div>
            <div className='text-[18px] text-left mt-14 md:text-[30px]'>Every step counts towards a greener future.</div>
        </div>
        <div className='mt-10 md:mt-20 ml-5 md:ml-20 text-[15px] md:text-[25px]'>
          CONTACT US <br />ecotracker.ec@gmail.com <br />ABV-IIITM, <br />Gwalior-475014
        </div><br /><br /><br />
      </div>
  )
}

export default Footer
