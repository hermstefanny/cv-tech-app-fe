'use client';
import Link from 'next/link';
import Image from 'next/image';
import homeImg from 'public/civic-home.png';
import { useTime } from '@/context/TimeContext';
import { useEffect } from 'react';


export default function Home() {
  const {startTime, setStartTime} = useTime();

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleClick = () => {
    if (startTime) {
      const timeElapsed = Date.now() - startTime;
      setStartTime(null);
      console.log(`Time elapsed since page render: ${timeElapsed} ms`);
      // You can also send this data to an analytics service or perform any other action
    }
  };



  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-8 bg-white">
      <div className="text-sky-600 text-5xl lg:text-6xl text-left mb-4">
        <h1>
          ¿Qué es CiviConecta?
        </h1>
      </div>
      {/* Main Content Wrapper with Border */}
      <div className="w-full lg:max-w-6xl rounded-lg shadow-md overflow-hidden border leading-relaxed mt-4 ">
            <div className="flex flex-col lg:flex-row w-full lg:max-w-6xl items-center  overflow-hidden">
        <div className="lg:w-2/3 w-full flex justify-center p-4 lg:p-4">
          {/* Left section with the image, centered within its container */}
          <Image
            src={homeImg}
            alt="Ilustracion sobre transparencia a través de medios tecnológicos"
            className="object-contain max-h-96"
          />
        </div>

        {/* Right section with the text */}
        <div className="lg:w-1/3 w-full flex flex-col items-center p-2 lg:p-4 space-y-4">
          {/* Text Blocks */}
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
      
      {/* Additional Text Block Section */}
      
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

      {/* Button Section */}
      <div className="flex justify-center mt-6 p-4">
        <button onClick={handleClick} className="border rounded p-2 bg-sky-600 text-white mb-2 hover:bg-sky-700 transition">
          <Link href="/resumenes">Leer resúmenes</Link>
        </button>
      </div>

      {/* Footer Note */}
      <div className="text-center p-4 ">
        <p className="text-sm text-gray-600 border border-rose-400 leading-relaxed shadow-md mt-2 p-2">
          <strong className = "font-bold">Nota:</strong> Este proyecto es un <span className="font-semibold">prototipo en desarrollo</span>. Consulta la sección
          <span className="mr-1"> </span>
          <a href="/acerca_de" className="text-sky-600 hover:text-blue-700 underline">Acerca del Proyecto</a> para obtener más información al respecto.
        </p>
      </div>
    </div>
  );
}
