import React from 'react';

const Letter = () => {
  return (
    <div id="letterContent" className="max-w-[800px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header - Matching the exact blue strip from original */}
      <div className="bg-[#cce7ff] py-12 px-8 flex justify-between items-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <span className="font-serif text-2xl">ED</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-wide text-gray-800">
          EXPERIENCE INDEX
        </h1>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-teal-600">LS</span>
        </div>
      </div>

      {/* Header with contact info and date */}
      <div className="px-8 py-6 space-y-5.5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-base font-medium">Helene Paquet</h2>
            <p className="text-gray-600">HR Manager</p>
            <p className="text-gray-600">123 Anywhere St., Any City</p>
            <p className="text-gray-600">123-456-7890</p>
            <p className="text-base">Dear Helena,</p>
          </div>
          <p className="text-gray-600">15 Dec 2030</p>
        </div>
      </div>

      {/* Letter content */}
      
      <div className="p-8 space-y-6">
       

        <p className="text-gray-800 leading-relaxed text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et luctus sem.
          Suspendisse eu velit gravida, feugiat quam a, consectetur mauris. Cras fermentum a arcu
          quis commodo. Mauris sed rhoncus augue. Nulla sit amet ipsum eros. Pellentesque eu
          velit vehicula, tincidunt erat quis, hendrerit erat.
        </p>

        <p className="text-gray-800 leading-relaxed text-justify">
          Nam congue libero sem, vel malesuada sem mollis in. Praesent congue felis vel magna
          volutpat, vestibulum finibus augue rhoncus. Aliquam at blandit quam. Fusce aliquam
          maximus turpis eu bibendum.
        </p>

        <p className="text-gray-800 leading-relaxed text-justify">
          Donec laoreet sapien ac risus tristique accumsan at vitae neque. Sed accumsan tempor
          luctus. Fusce tincidunt molestie tortor scelerisque tristique.
        </p>
      </div>

      {/* Footer with signature and contact */}
      <div className="px-8 pt-8">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <p>Sincerely,</p>
            <div className="h-16 font-serif italic text-3xl text-gray-600">
              Estelle
            </div>
            <p className="font-medium">Estelle Darcy</p>
          </div>
          <div className="space-y-1 text-gray-600">
            <p>s: @reallygreatsite</p>
            <p>e: hello@reallygreatsite.com</p>
            <p>w: reallygreatsite.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
