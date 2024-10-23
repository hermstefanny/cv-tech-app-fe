import Image from 'next/image';
import acercaImg from 'public/Academic-about-us.png'

export default function AboutUs(){
    return(
      <div className="relative h-screen flex flex-col p-12">
         <div className = "flex flex-col lg:flex-row  p-2"> 
        {/* Left section with the image, taking up one part of the layout */}
        <div className="lg:w-2/3 w-full flex flex-col justify-center p-12">
          <Image
            src={acercaImg}
            alt="imagen de civic tech placeholder"
            className="object-contain max-h-full"
          />
        </div>
  
        {/* Right section with the title and text, divided into two parts */}
        <div className="lg:w-1/3 w-full flex flex-col justify-center">
          {/* Upper right section for the title */}
          <div className=" text-sky-600 text-4xl md:text-4xl lg:text-5xl text-left mb-4">
            <h1> Acerca de este proyecto</h1>
            
          </div>
  
          {/* Lower right section for the text */}
          <div className="text-wrap text-sky-800 text-base md:text-lg lg:text-xl">
            <p>
            Esta aplicación web es un proyecto ciudadano y académico que está en construcción.
            Es parte de un estudio para analizar si herramientas de inteligencia artificial pueden contribuir a la vida cívica,
            facilitando la interpretación de datos abiertos del gobierno local.
            La aplicación usa la tecnología de ChatGPT para resumir las Actas de las Sesiones del Concejo Metropolitano de la ciudad de Quito, 
            documentos que se encuentran íntegros en la página web: <a href="https://gobiernoabierto.quito.gob.ec/" target="_blank" rel="noopener noreferrer"><b>Gobierno Abierto</b> </a>.
            Se han hecho esfuerzos para mantener la integridad de la información presentada, sin embargo, para obtener información verificada,
            se recomienda revisar los documentos originales en la fuente oficial.  
            Si tiene alguna duda sobre el proyecto o el estudio, no dude en contactarnos a 
        <a href="mailto:aess504@york.ac.uk" className="text-blue-500 hover:text-blue-700 underline ml-1">aess504@york.ac.uk</a>.   
            </p>
          </div>
        </div>
        </div>
        </div>
    );  
}