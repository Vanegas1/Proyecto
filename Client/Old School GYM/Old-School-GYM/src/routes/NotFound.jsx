import { Link } from "react-router-dom";

import { useUserContext } from '../contexts/UserContext';

const NotFound = () => {

  const { logout, user } = useUserContext();
  return (
    <section className={"text-white body-font bg-white h-screen"}>
      <div className={"container mx-auto flex px-5 py-24 items-center justify-center flex-col"}>
        <img className={"lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"} alt="hero" src="/images/error404.jpg"/>
        <div className={"text-center lg:w-2/3 w-full"}>
          <h1 className={"title-font sm:text-4xl text-3xl mb-4 font-medium text-Primary-color"}>Página no encontrada</h1>
          <div className={"flex justify-center"}>


          {
            !user ? 
            <>
                <Link to={'/'}>
                <button className={"inline-flex text-white bg-Secundary-color border-0 py-2 px-6 focus:outline-none rounded text-lg transition ease-in-out duration-500 hover:scale-110"}>Inicio</button>
              </Link>
              <Link to={'signin'}>
                <button className={"ml-4 inline-flex text-white bg-Secundary-color border-0 py-2 px-6 focus:outline-none rounded text-lg transition ease-in-out duration-500 hover:scale-110"}>Iniciar sesión</button>
              </Link>
            </> :

            <>
            <Link to={'/auth/signin/whoiam'}>
            <button className={"inline-flex text-white bg-Secundary-color border-0 py-2 px-6 focus:outline-none rounded text-lg transition ease-in-out duration-500 hover:scale-110"}>Inicio</button>
          </Link>
            </>
          }
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;