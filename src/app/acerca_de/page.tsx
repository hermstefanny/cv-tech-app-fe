import Image from 'next/image';
import acercaImg from 'public/Academic-about-us.png'


export default async function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-12 bg-white">
      <div className="text-sky-600 text-5xl lg:text-6xl text-left mb-4">
        <h1>
          Acerca de este proyecto
        </h1>
      </div>
      {/* Main Content Wrapper with Border */}
      <div className="w-full lg:max-w-6xl rounded-lg shadow-md overflow-hidden border leading-relaxed mt-4 ">
        <div className="flex flex-col lg:flex-row w-full lg:max-w-6xl items-center  overflow-hidden">
          <div className="lg:w-2/3 w-full flex justify-center p-4 lg:p-4">
            {/* Left section with the image, centered within its container */}
            <Image
              src={acercaImg}
              alt="Ilustracion sobre proyecto acdémico en construcción"
              className="object-contain max-h-96"
            />
          </div>

          {/* Right section with the text */}
          <div className="lg:w-1/3 w-full flex flex-col items-center p-2 lg:p-3 space-y-4">
            {/* Text Blocks */}
            <div className="text-sky-800 text-xs md:text-sm lg:text-base  bg-sky-100/80 p-4 md:p-4 lg:p-6  leading-relaxed shadow-md">
              <p>
                CiviConecta es un  <strong className="font-semibold"> proyecto ciudadano y académico </strong> en construcción.
                No está asociado a ninguna entidad gubernamental o política.
              </p>
            </div>

            <div className="text-sky-800 text-xs md:text-sm lg:text-base  bg-sky-100/90 p-4 md:p-4 lg:p-6  leading-relaxed shadow-md">
              <p>
                Usamos la <strong className="font-semibold">API de OpenAI</strong> para resumir las Actas de las Sesiones del Concejo Metropolitano de Quito del año 2024,
                documentos que se encuentran íntegros en el  <a href="https://gobiernoabierto.quito.gob.ec/sesiones-concejo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline"><b>sitio oficial</b></a>.
              </p>
            </div>
            <div className="text-sky-800 text-xs md:text-sm lg:text-base  bg-sky-100/90 p-4 md:p-4 lg:p-6 leading-relaxed shadow-md">
              <p>
                La página <a href="https://gobiernoabierto.quito.gob.ec/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline"><b>Gobierno Abierto</b></a> incluye
                además, información pública sobre presupuestos, obras y otros temas de interés ciudadano.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Text Block Section */}

        <div className="w-full p-2 lg:p-4">


          <div className="text-sky-800 text-xs md:text-sm lg:text-base border border-rose-400 leading-relaxed shadow-md p-4 md:p-4 lg:p-6 ">
            <p>
              Se han hecho esfuerzos para mantener la integridad de la información presentada, sin embargo, para obtener información verificada,
              <strong className="font-semibold"> se recomienda revisar los documentos originales en la fuente oficial. </strong>
              Si tiene alguna duda sobre el proyecto o el estudio, no dude en contactarnos en
              <a href="mailto:aess504@york.ac.uk" className="text-blue-500 hover:text-blue-700 underline ml-1">aess504@york.ac.uk</a>.
            </p>
          </div>


        </div>
      </div>


    </div>
  );
}

