import React from "react";
import { useState } from "react";

export default function MyModal2({ visible, onClose }) {
    const handleOnClose2 = () => {
        onClose()
    }
    if (!visible) return null;

    return (
        <div onClick={handleOnClose2} class="fixed inset-0 bg-Primary-color bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10 px-5">
            <div className={"flex flex-col text-center bg-white body-font overflow-hidden rounded-lg p-3 xl:w-1/2 md:w-1/2 sm:w-1/2 "}>

                <div className={"h-full px-3 pt-1 rounded-lg border-2 border-Dark-blue bg-white flex flex-col  overflow-hidden shadow-2xl"}>
                    <h2 className={"text-black title-font mb-1 font-bold text-center sm:text-4xl text-2xl "}>PREMIUM</h2>
                    <h1 className={"text-2xl text-black py-4 mb-4 border border-Secundary-color-light leading-none text-center "}>$25 <span classNameName={"text-sm"}>/ Mensuales</span></h1>

                    <p className={"flex items-center justify-center text-black mb-2 font-bold text-Secundary-color sm:text-3xl"}>Zona de Pesas
                    </p>
                    <p className={"flex items-center text-center text-black mb-2"}>
                        Zona de pesas con gran variedad de maquinas para cualquier area muscular, especializada para cualquier tipo de entrenamiento.
                    </p>

                    <p className={"flex items-center justify-center text-black mb-2 font-bold text-Secundary-color sm:text-3xl"}>Vestidores
                    </p>
                    <p className={"flex items-center text-center text-black mb-2"}>
                        Vestidores con su adecuacio protocolo de limpieza y bioseguridad.
                    </p>

                    <p className={"flex items-center justify-center text-black mb-2 font-bold text-Secundary-color sm:text-3xl"}>Clases de Baile
                    </p>
                    <p className={"flex items-center text-center text-black mb-2"}>
                        Clases de baile con el proposito de aumento de resistencia y disminucion de grasa corporal de una manera mas movida.
                    </p>

                    <p className={"flex items-center justify-center text-black mb-2 font-bold text-Secundary-color sm:text-3xl"}>Cardio Funcional
                    </p>
                    <p className={"flex items-center text-center text-black mb-2"}>
                        Clases de cardio funcional especializadas en la perdida de grasa y aumento de resistencia, estructurado de manera perfecta para cualquier tipo de personas.
                    </p>
                </div>
            </div>
        </div>
    )
}