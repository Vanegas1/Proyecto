import React from "react";
import MyModal from "./Modals/MyModal";
import { useState } from "react";
import MyModal2 from "./Modals/MyModal2";
import MyModal3 from "./Modals/MyModal3";

const Membership = () => {
  const [showMyModal, setShowMyModal] = useState(false);
  const [showMyModal2, setShowMyModal2] = useState(false);
  const [showMyModal3, setShowMyModal3] = useState(false);

  const handleOnClose = () => setShowMyModal(false);
  const handleOnClose2 = () => setShowMyModal2(false);
  const handleOnClose3 = () => setShowMyModal3(false);

  return(
    <section id="Membresia" className="text-White-color bg-white body-font overflow-hidden">

      {/* Primera card */}
      <div className={"container px-5 py-12 mx-auto"}>
        <div className={"flex flex-col text-center w-full mb-10"}>
          <h1 className={"sm:text-2xl text-3xl title-font font-bold mb-2 text-Secundary-color"}>MEMBRESIAS</h1>
        </div>

        <div className={"flex flex-wrap -m-4"}>
          <div className={"p-4 xl:w-1/3 md:w-1/3 w-full"}>
            <div className={"h-full p-6 rounded-lg border-2 border-Dark-blue bg-white  flex flex-col relative overflow-hidden shadow-2xl"}>
              <h2 className={"text-xl text-black title-font mb-1 font-bold text-center "}>NORMAL</h2>
              <h1 className={"text-2xl text-black py-4 mb-4 border border-Secundary-color-light leading-none text-center "}>$25 <span classNameName={"text-sm"}>/ Mensuales</span></h1>

              <p className={"flex items-center text-black mb-2"}>
                <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-black rounded-full flex-shrink-0"}>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Zona de pesas.
              </p>

              <p className={"flex items-center text-black mb-2"}>
                <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-black rounded-full flex-shrink-0"}>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vestidores.
              </p>

              <p className={"flex items-center text-black mb-6"}>
                <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-black rounded-full flex-shrink-0"}>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Clases de baile.
              </p>
          
              <button onClick={() => setShowMyModal(true)} className={"inline-flex items-center text-center mt-auto text-white bg-Dark-blue border-0 py-2 px-4 w-full focus:outline-none hover:bg-Light-blue rounded transition ease-in-out duration-500 hover:scale-110"}>Conocer más.
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className={"w-4 h-4 ml-auto"} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Segunda card */}
          <div className={"p-4 xl:w-1/3 md:w-1/3 w-full shadow-2xl rounded-lg bg-white"}>
            <div className={"h-full p-6 rounded-lg border-2 border-Secundary-color bg-white flex flex-col relative overflow-hidden"}>

              <span className={"bg-Secundary-color text-Primary-color px-3 tracking-widest text-xs absolute right-0 top-0 rounded-bl "}>OFERTA</span>
              <h2 className={"text-xl text-black title-font mb-1 font-bold text-center "}>PROMOCION</h2>
              <h1 className={"text-2xl text-Primary-color py-6 mb-4 border border-Secundary-color leading-none  text-center"}>$100 <span classNameName={"text-xl "}>/ Tres meses</span></h1>
              <p className={"flex items-center text-Primary-color mb-2"}>
                <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-Primary-color rounded-full flex-shrink-0"}>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Zona de pesas.
              </p>

              <p className={"flex items-center text-Primary-color mb-2"}>
                <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-Primary-color rounded-full flex-shrink-0"}>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vestidores.
              </p>

              <p className={"flex items-center text-Primary-color mb-2"}>
                <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-Primary-color rounded-full flex-shrink-0"}>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Clases de baile.
              </p>

              <p className={"flex items-center text-Primary-color mb-2"}>
                <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-Primary-color rounded-full flex-shrink-0"}>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Clases de cardio funcional.
              </p>
        
              <button onClick={() => setShowMyModal3(true)} className={"flex items-center mt-auto text-white bg-Dark-blue border-0 py-2 px-4 w-full focus:outline-none hover:bg-Secundary-color rounded transition ease-in-out duration-500 hover:scale-110"}>Conocer más
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className={"w-4 h-4 ml-auto"} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Tercera card */}
          <div className={"p-4 xl:w-1/3 md:w-1/3 w-full"}>
            <div className={"h-full p-6 rounded-lg border-2 border-black bg-white flex flex-col relative overflow-hidden shadow-2xl"}>

              <h2 className={"text-xl text-black title-font mb-1 font-bold text-center"}>PREMIUM</h2>
                <h1 className={"text-2xl text-black py-4 mb-4 border border-Secundary-color leading-none text-center "}>$40 <span classNameName={"text-2xl "}>/ Mensuales</span></h1>
                <p className={"flex items-center text-black mb-2"}>
                  <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-black rounded-full flex-shrink-0"}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Zona de pesas.
                </p>

                <p className={"flex items-center text-black mb-2"}>
                  <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-black rounded-full flex-shrink-0"}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vestidores.
                </p>

                <p className={"flex items-center text-black mb-2"}>
                  <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-black rounded-full flex-shrink-0"}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Clases de baile.
                </p>

                <p className={"flex items-center text-black mb-6"}>
                  <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center bg-Secundary-color text-black rounded-full flex-shrink-0"}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className={"w-3 h-3"} viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Clases de cardio funcional.
                </p>

                <button onClick={() => setShowMyModal2(true)} className={"flex items-center mt-auto text-white bg-Dark-blue border-0 py-2 px-4 w-full focus:outline-none hover:bg-Light-blue rounded transition ease-in-out duration-500 hover:scale-110"}>Conocer más
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className={"w-4 h-4 ml-auto"} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
            </div>
          </div>
        </div>
        <MyModal onClose={handleOnClose} visible={showMyModal}/>
        <MyModal2 onClose={handleOnClose2} visible={showMyModal2}/>
        <MyModal3 onClose={handleOnClose3} visible={showMyModal3}/>
      </div>
    </section>
  );
}

export default Membership;