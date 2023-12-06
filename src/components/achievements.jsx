import React from 'react';

function Achievements() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h2 className="mb-2 text-4xl font-semibold text-gray-900">Accolades and Rankings</h2>
        <div className='flex flex-wrap justify-center'>
            
        <div className="w-full md:w-1/2 mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 md:mb-0">
          <div className="flex mb-4 items-center">
            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
              <img
                src="https://vignan.ac.in/blog/images/nov/nirf-img1.png"
                alt=""
              />
            </div>
            <div className="flex-grow pl-3">
              <h6 className="font-bold text-sm uppercase text-gray-600">
                NIRF 8th Rank
              </h6>
            </div>
          </div>
          <div className="w-full">
            <p className="text-xl leading-tight">
              Ranked 8th in NIRF Innovation ranking under the category in 2023.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light">
          <div className="flex mb-4 items-center">
            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxx4SKGeDD0zBcABzykDgxPBr5fwa10zbSMwg8ulOhXCW77nBVxC5p_F6qXUbK7mAWyc&usqp=CAU"
                alt=""
              />
            </div>
            <div className="flex-grow pl-3">
              <h6 className="font-bold text-sm uppercase text-gray-600">
                Categorized under Band-Excellent
              </h6>
            </div>
          </div>
          <div className="w-full">
            <p className="text-xl leading-tight">
              Categorized under Band-Excellent among Institutes of National
              Importance in ARIIA 2021.
            </p>
          </div>
        </div>
        
        </div>
    </div>
  );
}

export default Achievements;
