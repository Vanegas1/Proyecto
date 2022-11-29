const AdminVerRutina = () => {
    return (
        <section className="text-White-color bg-black body-font overflow-hidden">

            <div className={"container px-5 py-12 mx-auto"}>
                <div className={"text-center w-full mb-10"}>
                    <h1 className={"sm:text-2xl text-3xl title-font font-bold mb-2 text-Secundary-color"}>RUTINAS</h1>
                </div>

                <div className={"flex flex-wrap -m-4 justify-center items-center z-10 px-5 "}>
                    <div className={"p-4 xl:w-1/3 md:w-1/3 flex flex-wrap justify-center "}>
                        <div className={"h-full rounded-lg border-2 bg-gradient-to-t from-Dark-blue2 to-Light-blue2 border-black bg-white items-center flex flex-col relative overflow-hidden shadow-2xl"}>
                            <h2 className={"text-xl text-white title-font mb-1 font-bold text-center p-6"}>PRINCIPIANTES</h2>

                            <p className={"flex items-center p-6 mb-2"}>
                                <span className={"text-white justify-center text-white flex-shrink-0"}>
                                </span>Rutina de entrenamiento perfectamende adecuada para personas que van iniciando en el mundo del gymnasio.
                            </p>
                            <img src="public/images/pngwing 1.png" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" class="z-10"></img>
                        </div>

                        <button className={"text-White-color items-center bg-Secundary-color-dark border-0 py-1 px-2 hover:bg-Secundary-color transition ease-in-out duration-500 hover:scale-110 rounded text-xl mt-4 mb-5 "}>Conocer más.
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}