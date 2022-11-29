import logo from '../../assets/logoWT.png';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from '../../contexts/UserContext';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const { logout, user,} = useUserContext();

  return (
    <section >
      <nav id="Inicio" className="w-full shadow">
        <div className=" justify-between bg-Primary-color px-4 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block flex-wrap text-White-color">
              <div href="javascript:void(0) text-White-color">
                <img src={logo} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-20 h-20 inline-flex" />
                <span className="text-2xl font-bold txt-white">OLD SCHOOL GYM</span>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-White-color outline-none duration-500"
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}>
              {
                !user ?
                  <>
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-White-color text-xl duration-500 hover:text-Secundary-color">
                      <a href="#Nosotros">Nosotros</a>
                    </li>
                    <li className="text-White-color text-xl duration-500 hover:text-Secundary-color">
                      <a href="#Membresia">Membresias</a>
                    </li>
                    <li className="text-White-color text-xl duration-500 hover:text-Secundary-color">
                      <a href="#Horarios">Horarios</a>
                    </li>
                    <li className="text-White-color text-xl duration-500 hover:text-Secundary-color transition-">
                      <a href="#Ubicacion">Ubicación</a>
                    </li>
                    <Link to={'auth/signin'}>
                      <a className={"text-White-color inline-flex items-center bg-Secundary-color-dark border-0 py-1 px-2 focus:outline-none hover:bg-Secundary-color transition ease-in-out duration-500 hover:scale-110 rounded text-xl mt-4 md:mt-0"}>Iniciar sesión
                      </a>
                    </Link>
                  </ul>
                </> :
                <>    
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">   
                      {/* <li className="text-White-color text-xl duration-500 hover:text-Secundary-color">
                        <a href="#Nosotros">Inicio</a>
                      </li>
                      <li className="text-White-color text-xl duration-500 hover:text-Secundary-color">
                        <a href="#Membresia">Registrar usuario</a>
                      </li>
                      <li className="text-White-color text-xl duration-500 hover:text-Secundary-color">
                        <a href="#Horarios">Horarios</a>
                      </li>
                      <li className="text-White-color text-xl duration-500 hover:text-Secundary-color transition-">
                        <a href="#Ubicacion">Ubicación</a>
                      </li> */}
                      <Link to={'/'}>
                        <button onClick={() => { logout() }} className={"text-White-color inline-flex items-center bg-Secundary-color-dark border-0 py-1 px-2 focus:outline-none hover:bg-Secundary-color transition ease-in-out duration-500 hover:scale-110 rounded text-xl mt-4 md:mt-0"}>Cerrar sesión
                        </button>
                      </Link>
                  </ul>      
                </>
              }
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;




