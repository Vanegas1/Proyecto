const Horario = () => {
  return(
    <section id="Horarios" className={"bg-Primary-color body-font"}>
      <div className={"container px-5 py-10 mx-auto"}>
        <div className={"flex flex-col text-center w-full mb-10"}>
          <h1 className={"text-2xl font-bold title-font mb-4 text-Secundary-color"}>HORARIOS DE ATENCIÓN</h1>
        </div>

        <div className={"flex flex-wrap -m-4 text-center border-2 border-Secundary-color"}>
          <div className={"p-4 md:w-1/3 lg:w-1/3 sm:w-1/3 w-full"}>
              <h2 className={"title-font font-medium text-3xl text-white"}>Clases de baile</h2>
              <span className={"inline-block h-1 w-10 rounded bg-Secundary-color mt-6 mb-4"}></span>
              <p className={"leading-relaxed text-xl text-white py-2"}>Lunes a viernes</p>
              <p className={"leading-relaxed text-xl text-white py-2"}>6:00 pm a 7:00 pm</p>
          </div>

          <div className={"p-4 md:w-1/3 lg:w-1/3 sm:w-1/3 w-full"}>
              <h2 className={"title-font font-medium text-3xl text-white"}>Horarios de pesas</h2>
              <span className={"inline-block h-1 w-10 rounded bg-Secundary-color mt-6 mb-4"}></span>
              <p className={"leading-relaxed text-xl text-white py-2"}>Lunes a viernes</p>
              <p className={"leading-relaxed text-xl text-white py-2"}>6:00 am a 12:00 pm - 3:00 pm a 9:00 pm</p>
              <p className={"leading-relaxed text-xl text-white py-2"}>Sabado</p>
              <p className={"leading-relaxed text-xl text-white py-2"}>7:00 am a 12:00 pm</p>
              <p className={"leading-relaxed text-xl text-white py-2"}>Domingo</p>
              <p className={"{leading-relaxed text-xl text-Secundary-color py-2"}>Cerrado</p>
          </div>

          <div className={"p-4 md:w-1/3 lg:w-1/3 sm:w-1/3 w-full"}>
              <h2 className={"title-font font-medium text-3xl text-white"}>Clases de cardio</h2>
              <span className={"inline-block h-1 w-10 rounded bg-Secundary-color mt-6 mb-4"}></span>
              <p className={"leading-relaxed text-xl text-white py-2"}>Lunes a viernes</p>
              <p className={"leading-relaxed text-xl text-white py-2"}>Clase 1: 6:00 pm a 7:00 pm</p>
              <p className={"leading-relaxed text-xl text-white py-2"}>Clase 2: 7:00 pm a 8:00 pm</p>
              <p className={"leading-relaxed text-xl text-white py-2"}>Clase 3: 8:00 pm a 9:00 pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Horario;