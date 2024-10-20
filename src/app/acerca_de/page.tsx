import Image from 'next/image';
import acercaImg from 'public/placeholder-acerca-de.png'

export default function AboutUs(){
    return(
        <div className="relative h-screen flex flex-col lg:flex-row p-12">
        {/* Left section with the image, taking up one part of the layout */}
        <div className="lg:w-1/3 w-full flex flex-col justify-center p-12">
          <Image
            src={acercaImg}
            alt="imagen de civic tech placeholder"
            className="object-contain max-h-full"
          />
        </div>
  
        {/* Right section with the title and text, divided into two parts */}
        <div className="lg:w-2/3 w-full flex flex-col justify-center p-12">
          {/* Upper right section for the title */}
          <div className=" text-sky-600 text-4xl md:text-5xl lg:text-6xl text-left mb-4">
            Acerca de este proyecto
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
    );  
}