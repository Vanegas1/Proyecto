const Ubicacion = () => {
  return(
    <section id="Ubicacion" className={"bg-white body-font relative"}>
      <div className={"container px-5 py-10 mx-auto"}>
      <div className={"flex flex-col text-center w-full"}>
        <h1 className={"sm:text-2xl text-3xl font-bold title-font mb-2 text-Secundary-color"}>UBICACIÓN</h1>
      </div>
      </div>

      <div className={"xl:p-10 lg:p-10 md:p-10 sm:p-20 flex"}>
        <div className={"w-full xl:w-full h-screen  md:w-full rounded-lg overflow-hidden flex items-center justify-start relative"}>
          <iframe title="map" className={"absolute inset-0"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.6344214357873!2d-89.27401398519206!3d13.679979790393977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f632f77b6e64aa7%3A0xabc389dd4571ac00!2sGYM%20Old%20School!5e0!3m2!1ses-419!2ssv!4v1668819591132!5m2!1ses-419!2ssv" width="100%" height="100%" frameborder="0"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;

