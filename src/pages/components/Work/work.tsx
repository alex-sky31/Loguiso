import React, { Suspense } from "react";
import Loading from '../Loading/loading'

function work() {
  console.log()
  return (
    <div className="w-full md:px-[100px] flex flex-col">
      <div
        id="WORK"
        className="font-black text-4xl not-italic font-poppins text-white tracking-[0.06em] mb-[80px]"
      >
        &clubs; WORK
      </div>
      <div className="flex md:flex-row flex-col w-full h-full gap-x-10">
        <div className="md:w-1/2 w-full flex flex-col md:px-0 px-2">
          <Suspense fallback={<Loading/>}>
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/850839871?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay;"
              title="CardiMessika">

            </iframe>
          </Suspense>
          <div className="text-white mt-5 font-poppins font-medium text-3xl text-center md:text-left">
            VIDEO
          </div>
        </div>
        <div className="md:w-1/2 w-full md:px-0 px-2 flex flex-col">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="grid grid-cols-2 h-full gap-2">
              <div>
                <img
                  className="h-full max-w-full rounded-lg object-cover"
                  src={require("../../../asset/work1.jpg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-full max-w-full rounded-lg object-cover"
                  src={require("../../../asset/work2.jpg")}
                  alt=""
                />
              </div>
            </div>
          </Suspense>
          <div className="text-white mt-5 font-poppins font-medium text-3xl text-center md:text-left">
            PHOTO
          </div>
        </div>
      </div>
    </div>
  );
}

export default work;
