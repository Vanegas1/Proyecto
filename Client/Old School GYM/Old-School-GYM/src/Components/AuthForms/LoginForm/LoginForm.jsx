import { useState } from 'react';
import { toast } from 'react-toastify';

const LoginForm = ({ onLogin = () => { } }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const errors = {
    "identifier": !identifier,
    "password": !password,
  }
  
  const hasErrors = () => Object.values(errors).some(error => error);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (hasErrors()) {
      toast.warn("Campos incorrectos");
      return;
      
    }

    onLogin(identifier, password);
  }

  return(
    <section>
      <div className={"bg-[url('/images/LoginBG.jpg')] bg-cover bg-center relative"}>
        <div className={"w-full object-cover h-screen"}>

        <form onSubmit={onSubmitHandler}>
          <div className={"container mx-auto pt-28  flex flex-wrap items-center"}>
              <div className={"xxl:w-80 xl:w-80 lg:w-80 md:w-80 sm:w-80 ssm:w-80 md:mx-auto sm:mx-auto md:bg-left rounded-xl p-12 flex flex-col w-full bg-opacity-80 bg-Light-blue"}>    
                <label className={"text-white text-2xl text-center font-medium mb-5"}>Iniciar sesión</label>

                <div class={"mb-4"}>
                  <label for="email" className={"leading-7 text-md text-white"}>Usuario:</label>
                  <input 
                    className={errors["identifier"]  ? " outline outline-offset outline-Mcrimson w-full rounded-3xl py-1 px-3 leading-8" : "w-full rounded-3xl bg-white focus:ring-2 text-base outline-none text-Primary-color py-1 px-3 leading-8"}
                    type="text" 
                    name="identifier"
                    autoComplete='username'
                    values={identifier}
                    onChange={({target}) => {setIdentifier(target.value) }}/>
                </div>

                <div className={"mb-4"}>
                  <label for="email" class={"leading-7 text-lg text-white"}>Contraseña:</label>
                  <input
                    className={errors["password"]  ? " outline outline-offset outline-Mcrimson w-full rounded-3xl py-1 px-3 leading-8" : "w-full rounded-3xl bg-white focus:ring-2 text-base outline-none text-Primary-color py-1 px-3 leading-8"}
                    type="password" 
                    name="password"
                    autoComplete='current-password'
                    values={password}
                    onChange={({target}) => {setPassword(target.value) }}/>
                </div>

                <p className={"text-sm text-white text-justify mt-3 pb-4"}>Para obtener una cuenta en <u>OLD SCHOLL GYM</u>, necesitas obtener una membresia activa.</p>

                <button 
                type="submit"
                disabled={hasErrors()}
                className={"bg-Primary-color text-white focus:ring focus:ring-Secundary-color focus:outline-none disabled:bg-gray-200 disabled:text-gray-500 px-4 py-2 rounded-md uppercase text-sm tracking-wider font-semibold"}
                >Ingresar</button>
              </div>
            </div>  
          </form>
        </div>   
      </div>
    </section>
  );
}

export default LoginForm;