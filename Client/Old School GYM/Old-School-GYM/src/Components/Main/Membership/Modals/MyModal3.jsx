import React from "react";
import { useState } from "react";

export default function MyModal3({ visible, onClose }) {
    const handleOnClose3 = () => {
        onClose()
    }
    if (!visible) return null;

    return (
<div onClick={handleOnClose3} class="fixed inset-0 bg-Primary-color bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10 px-5">
            <div className={"flex flex-col text-center bg-white body-font overflow-hidden rounded-lg p-3 xl:w-1/2 md:w-1/2 sm:w-1/2 "}>

                <div className={"h-full px-3 pt-1 rounded-lg border-2 border-Dark-blue bg-white flex flex-col  overflow-hidden shadow-2xl"}>
                    <h2 className={"text-black title-font mb-1 font-bold text-center sm:text-4xl text-2xl bg"}>PROMOCION</h2>
                    <h1 className={"text-2xl text-black py-4 mb-4 border border-Secundary-color-light leading-none text-center "}>$100 <span classNameName={"text-sm"}>/ Tres meses</span></h1>

                    <p className={"flex items-center text-justify text-black mb-2"}>
                        Disfruta de la siguiente promocion de parte de OLD SCHOOL GYM con el motivo de motivarte a iniciar una nueva etapa de tu vida.
                    </p>
                    <p className={"flex items-center text-justify text-black mb-2"}>
                        Promocion que incluye todos los beneficios de un miembro PREMIUM: Clases de baile, zona de pesas, clases de cardio funcional, vestidores y asesoria personal. Todo lo necesario para un perfecto comienzo de tu cambio fisico.
                    </p>
                    <h2 className={"text-Secundary-color title-font mb-1 font-bold text-center sm:text-4xl text-2xl bg pb-2"}>¡TE ESPERAMOS!</h2>
                </div>
            </div>
        </div>
    )
}