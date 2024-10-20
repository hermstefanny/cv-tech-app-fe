import Link from 'next/link';
import Image from 'next/image';
import homeImg from 'public/placeholder_inicio.png';


export default async function Home() {
    return (
      <div className="relative h-screen flex flex-col p-12">
        <div className = "flex flex-col lg:flex-row border rounded p-2"> {/*eventually erase border and rounded*/}
          {/* Left section with the image, taking up one part of the layout */}
        <div className="lg:w-1/3 w-full flex flex-col justify-center p-12 ">
          <Image
            src={homeImg}
            alt="imagen de civic tech placeholder"
            className="object-contain max-h-full"
          />
        </div>
  
        {/* Right section with the title and text, divided into two parts */}
        <div className="lg:w-2/3 w-full flex flex-col justify-center ">
          {/* Upper right section for the title */}
          <div className=" text-sky-600 text-5xl lg:text-6xl text-left mb-4 ">
            Bienvenidos
          </div>
  
          {/* Lower right section for the text */}
          <div className="text-wrap text-sky-800 text-base md:text-lg lg:text-xl">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas risus elit, semper nec egestas sit amet, tristique vel dui. 
                Maecenas tellus nibh, tempor et nibh non, tempus tincidunt ipsum. 
                Donec lacus nisl, cursus quis congue sed, vehicula ac eros. 
                Nullam iaculis lacinia mi vel accumsan. Vivamus egestas mollis sodales. 
                Quisque elementum maximus diam non ultricies. 
                Vivamus id neque vel felis tempus congue. 
                Maecenas dictum posuere accumsan. Nullam eget mi eu mauris vehicula tincidunt. Nam vitae venenatis massa.
            </p>
          </div>
        </div>
       </div>

<div className="flex justify-center mt-4 border rounded p-4">
<button className="border rounded p-4 bg-sky-600 text-white mb-2  ">
    
  <Link href="/resumenes">Leer resúmenes</Link>
</button>
</div>
</div>
    );
  }
  