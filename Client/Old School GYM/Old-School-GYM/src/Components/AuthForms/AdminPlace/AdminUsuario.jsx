const AdminUsuario = () => {
    return(
        <section>
      <div>
        <div className='flex-col text-center text-White-color font-bold text-3xl py-5 px-5'>
          <h1>REGISTRAR USUARIO</h1>
        </div>

        <div class="flex justify-center items-center z-10 px-5">
          <div className="flex flex-col  body-font overflow-hidden rounded-lg p-3 xl:w-1/2 md:w-1/2 sm:w-1/2 ">
            <div className="h-full px-3 pt-1 rounded-lg border-2 bg-zinc-800 bg-opacity-1 flex flex-col overflow-hidden shadow-2xl">

              <div class={"mb-4"}>
                <div className={"mb-4"}>
                  <label for="usuario" class={"leading-7 text-lg text-white"}>Nombre:</label>
                  <input type="text" id="Nombre" name="Nombre" className={"w-full rounded bg-white  focus:border-indigo-500 focus:ring-2 focus:ring-Secundary-color text-base outline-none text-Primary-color py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"} />
                </div>

                <div className={"mb-4"}>
                  <label for="contraseña" class={"leading-7 text-lg text-white"}>Contraseña:</label>
                  <input type="text" id="ContraselaU" name="ContraseñaU" className={"w-full rounded bg-white  focus:border-indigo-500 focus:ring-2 focus:ring-Secundary-color text-base outline-none text-Primary-color py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"} />
                </div>

                <label for="email" className={"leading-7 text-md text-white"}>Correo:</label>
                <input type="text" id="CorreoU" name="CorreoU" className={"w-full rounded bg-white focus:border-indigo-500 focus:ring-2 focus:ring-Secundary-color text-base outline-none text-Primary-color py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"} />
              </div>

              <a className="text-White-color inline-flex items-center bg-Secundary-color-dark border-0 py-1 px-2 focus:outline-none hover:bg-Secundary-color transition ease-in-out duration-500 hover:scale-110 rounded text-xl mt-4 mb-5 mr-auto">Registrar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}