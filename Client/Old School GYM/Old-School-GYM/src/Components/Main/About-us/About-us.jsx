const About = () => {
return (
  <section id="Nosotros" className={"text-white bg-Primary-color body-font"}>
    <div className={"container px-5 py-12 mx-auto"}>
      <div className={"flex flex-col text-center w-full mb-20"}>
        <h1 className={"sm:text-3xl text-2xl font-medium title-font mb-4 text-Secundary-color"}>Sobre nostros</h1>
        <p className={"lg:w-2/3 mx-auto text-justify leading-relaxed text-lg"}>Old School GYM rompió el molde de los estándares de gimnasios en El Salvador. En todo siempre llegamos a la misma conclusión: no buscábamos renombre, que es lo más fácil, sino simple y sencillamente que era lo mejor. Somos un GYM, pero más que eso, una familia. Aca no hay fuerzas para rendirse, solo entrenamos campeones.</p>
      </div>

        <div className={"flex flex-wrap -m-4"}>
          <div className={"lg:w-1/3 sm:w-1/2 p-4"}>
            <div className={"flex relative"}>
              <img alt="gallery" className={"absolute inset-0 w-full h-full object-cover object-center rounded-lg"} src="/images/pesas.jpg"/>
              <div className={"px-8 py-2 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 transition ease-in-out duration-700 hover:scale-110 rounded-lg"}>
                <h2 className={"tracking-widest  text-lg title-font font-medium text-Secundary-color mb-1"}>Zona de pesas</h2>
                <h1 className={"title-font text-md font-medium text-Primary-color text-justify mb-3"}>El entrenamiento con pesas es un tipo de entrenamiento de fuerza en el que se utilizan pesas para desarrollar resistencia. Del mismo modo que el acondicionamiento aeróbico fortalece el corazón, el entrenamiento con pesas aporta presión a los músculos.</h1>
              </div>
            </div>
          </div>

          <div className={"lg:w-1/3 sm:w-1/2 p-4"}>
            <div className={"flex relative"}>
              <img alt="gallery" className={"absolute inset-0 w-full h-full object-cover object-center rounded-lg"} src="/images/baile.jpg"/>
              <div className={"px-8 py-2 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 transition ease-in-out duration-700 hover:scale-110 rounded-lg"}>
                <h2 className={"tracking-widest text-lg title-font font-medium text-Secundary-color mb-1"}>Clases de baile</h2>
                <h1 className={"title-font text-md font-medium text-Primary-color text-justify mb-3"}>Por eso tu mejor opción es la zumba, una mezcla de ritmos latinos (salsa, merengue o bachata) y ejercicios aeróbicos que te hará bailar sin parar durante una hora. Con la zumba llegarás a quemar unas 400 calorías haciendo ejercicio casi sin darte cuenta.</h1>
              </div>
            </div>
          </div>

          <div className={"lg:w-1/3 sm:w-1/2 p-4"}>
            <div className={"flex relative"}>
              <img alt="gallery" className={"absolute inset-0 w-full h-full object-cover object-center rounded-lg"} src="/images/cardio.jpg"/>
              <div className={"px-8 py-2 relative z-10 w-full border-4 bg-white opacity-0 hover:opacity-100 transition ease-in-out duration-700 hover:scale-110 rounded-lg"}>
                <h2 className={"tracking-widest text-lg title-font font-medium text-Secundary-color mb-1"}>Clases de cardio</h2>
                <h1 className={"title-font text-md font-medium text-Primary-color text-justify mb-3"}>Dentro del ejercicio considerado como cardio hay varias actividades. Algunas de ellas pueden realizarse al aire libre como correr o ir en bicicleta o también caminar a paso ligero. Dentro de las actividades de cardio indoor destacan algunas como las clases de spinning, body pump, GAP.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;