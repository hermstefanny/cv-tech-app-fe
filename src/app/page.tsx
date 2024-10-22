import Link from 'next/link';
import Image from 'next/image';
import homeImg from 'public/civic-home.png';


export default async function Home() {
    return (
      <div className="relative h-screen flex flex-col p-12">
        <div className = "flex flex-col lg:flex-row  p-2"> 
          {/* Left section with the image, taking up one part of the layout */}
        <div className="lg:w-2/3 w-full flex flex-col justify-center p-12 ">
          <Image
            src={homeImg}
            alt="imagen de civic tech placeholder"
            className="object-contain max-h-full"
          />
        </div>
  
        {/* Right section with the title and text, divided into two parts */}
        <div className="lg:w-1/3 w-full flex flex-col justify-center ">
          {/* Upper right section for the title */}
          <div className=" text-sky-600 text-5xl lg:text-6xl text-left mb-4 ">
            Bienvenidos
          </div>
  
          {/* Lower right section for the text */}
          <div className="text-wrap text-sky-800 text-base md:text-lg lg:text-xl">
            <p>
            Esta aplicación web es un proyecto ciudadano y académico en construcción.
            
            Se han hecho esfuerzos para mantener la integridad de la información presentada, sin embargo, para obtener información verificada,
            se recomienda revisar los documentos originales en la fuente oficial.

            
            Cualquier duda o comentario, por favor no dude en contactarnos.
            </p>
          </div>
        </div>
       </div>

<div className="flex justify-center mt-4 p-4">
<button className="border rounded p-4 bg-sky-600 text-white mb-2  ">
    
  <Link href="/resumenes">Leer resúmenes</Link>
</button>
</div>
</div>
    );
  }
  