import Link from 'next/Link';

export default function Header(){
    return(
        <div className = "w-full absolute text-white bg-sky-800 z-10">
            <nav className = "container relative flex flex-wrap items-center justify-between mx-auto p-8 ">
            <Link href="/" className = "font-bond text-3xl">Inicio</Link>
            <div className = "space-x-4 text-xl">
            <Link href="/resumenes">Resumenes</Link>
            <Link href="/acerca_de">Acerca del Proyecto</Link>
            </div>
            </nav>
        </div>
            
    );  
}