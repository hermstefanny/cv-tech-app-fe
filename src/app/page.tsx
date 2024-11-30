'use client';
import Image from 'next/image';
import homeImg from 'public/civic-home.png';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from "@/context/SessionContext";

export default function Home() {
  const router = useRouter();
  const { sessionId } = useSession();

  useEffect(() => {
    if (sessionId === null) {
      return
    }
    const landingTime = new Date().toISOString();

    fetch("/api/actions", {
      body: JSON.stringify({
        sessionId,
        date: landingTime,
        action: "PAGINA DE INICIO CARGADA",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }, [sessionId]);

  const handleClick = async () => {
    const date = new Date().toISOString();
    const action = "Click on LEER_ resúmenes";
    const sessionId = localStorage.getItem("sessionId");
    await fetch("/api/actions", {
      body: JSON.stringify({
        sessionId,
        date,
        action,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    router.push('/resumenes');
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-8 bg-white">
      <div className="text-sky-600 text-5xl lg:text-6xl text-left mb-4">
        <h1>
          ¿Qué es CiviConecta?
        </h1>
      </div>
     
      <div className="w-full lg:max-w-6xl rounded-lg shadow-md overflow-hidden border leading-relaxed mt-4 ">
        <div className="flex flex-col lg:flex-row w-full lg:max-w-6xl items-center  overflow-hidden">
          <div className="lg:w-2/3 w-full flex justify-center p-4 lg:p-4">

            <Image
              src={homeImg}
              alt="Ilustración que muestra a una persona en un podio con un peródico que dice Transparencia detrás"
              className="object-contain max-h-96"
            />
          </div>

     
          <div className="lg:w-1/3 w-full flex flex-col items-center p-2 lg:p-4 space-y-4">

            <div className="text-sky-800 text-xs md:text-sm lg:text-base  bg-sky-100/80 p-4 md:p-6 lg:p-8  leading-relaxed shadow-md">
              <p>
                <span className="font-semibold">CiviConecta </span>es un proyecto cívico que quiere establecer un puente entre los gobiernos locales y sus ciudadanos.
              </p>
            </div>
            <div className="text-sky-800 text-xs md:text-sm lg:text-base  bg-sky-100/90 p-4 md:p-6 lg:p-8  leading-relaxed shadow-md">
              <p>
                Deseamos impulsar la transparencia de la gestión pública a través de tecnología,
                desarrollando herramientas para interpretar los datos que provienen de fuentes oficiales,
                contribuyendo a la vida democrática de una ciudadanía mejor informada y más participativa.
              </p>
            </div>
          </div>
        </div>



        <div className="w-full p-2 lg:p-4">
          <div className="text-sky-800 text-xs md:text-sm lg:text-base border border-sky-600 leading-relaxed shadow-md p-4 md:p-4 lg:p-6">
            <p>
              Para esta primera etapa, hemos desarrollado un prototipo que resume con Inteligencia Artificial las Actas de las Sesiones del Concejo Metropolitano de Quito,
              con la finalidad de dar a conocer de manera más accesible y comprensible la información que se discute en el Concejo.
              Te invitamos a leer estos resúmenes.
            </p>
          </div>
        </div>
      </div>


      <div className="flex justify-center mt-6 p-4">
        <button onClick={handleClick} className="border rounded p-2 bg-sky-600 text-white mb-2 hover:bg-sky-700 transition">
          Leer resúmenes
        </button>
      </div>


      <div className="text-center p-4 ">
        <p className="text-sm text-gray-600 border border-rose-400 leading-relaxed shadow-md mt-2 p-2">
          <strong className="font-bold">Nota:</strong> Este proyecto es un <span className="font-semibold">prototipo en desarrollo</span>. Consulta la sección
          <span className="mr-1"> </span>
          <a href="/acerca_de" className="text-sky-600 hover:text-blue-700 underline">Acerca del Proyecto</a> para obtener más información al respecto.
        </p>
      </div>
    </div>
  );
}
