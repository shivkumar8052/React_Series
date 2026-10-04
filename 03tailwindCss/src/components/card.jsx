
import React from 'react'

function Shiv({UserTitle="Ahir",iconText ="SHIV"}) {
   
  return (
   <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
            <p>{iconText}</p>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            {UserTitle}
          </h6>
          <div className="mb-2 text-gray-400">
           Hello my name is SHIV and I am currently pursuing B.tech from IET Lucknow.
          </div>
        </div>
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
            <p>{iconText}</p>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
             {UserTitle}
          </h6>
          <div className="mb-2 text-gray-400">
           Hello my name is SHIV and I am currently pursuing B.tech from IET Lucknow.
          </div>
        </div>
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
            <p>{iconText}</p>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            {UserTitle}
          </h6>
          <div className="mb-2 text-gray-400">
            Hello my name is SHIV and I am currently pursuing B.tech from IET Lucknow.
          </div>
        </div>
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
            <p>{iconText}</p>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            {UserTitle}
          </h6>
          <div className="mb-2 text-gray-400">
           Hello my name is SHIV and I am currently pursuing B.tech from IET Lucknow.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shiv


