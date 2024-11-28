import React from "react";
import "./App.css";

function SolarSystem() {
  return (
    <>
        <div className="neptuneParent h-[95vh] w-[48vw] flex justify-center items-center border-r-2 rounded-full bg-black">
          <div className="uranusParent h-[80%] w-[80%] flex justify-center items-center border-t-2 rounded-full bg-black">
            <div className="saturnParent h-[80%] w-[80%] flex justify-center items-center border-r-2 rounded-full bg-black">
              <div className="jupiterParent  h-[80%] w-[80%] flex justify-center items-center  border-b-2 rounded-full bg-black">
                <div className="marsParent h-[80%] w-[80%] flex justify-center items-center border-l-2 rounded-full bg-black">
                  <div className="earthParent h-[70%] w-[70%] flex justify-center items-center border-b-2 rounded-full bg-black">
                    <div className="venusParent h-[70%] w-[70%] flex justify-center items-center border-r-2  rounded-full bg-black">
                      <div className="mercuryParent h-[70%] w-[70%] flex justify-center items-center border-b-2 rounded-full bg-black">
                        <div className="sun w-[85%] h-[85%] rounded-full ">
                        </div    >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>

  );
}

export default SolarSystem;
