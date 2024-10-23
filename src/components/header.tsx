import Link from 'next/link';

export default function Header(){
    return(
        <div className = "w-full absolute text-white bg-sky-800 z-10">
            <nav className = "container relative flex flex-wrap items-center justify-between mx-auto p-6 ">
            <Link href="/" className = "font-bond text-2xl font-montserrat font-semibold hover:text-sky-400 ">Inicio</Link>
            <div className = "space-x-3 text-lg">
            <Link href="/resumenes" className = "font-montserrat font-semibold  hover:text-sky-400 ">Resúmenes</Link>
            <Link href="/acerca_de" className = "font-montserrat font-semibold  hover:text-sky-400">Acerca del Proyecto</Link>
            </div>
            </nav>
        </div>
            
    );  
}