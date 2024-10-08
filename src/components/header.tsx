import Link from 'next/Link';

export default function Header(){
    return(
        <div>
            <Link href="/">Inicio</Link>
            <Link href="/acerca_de">Acerca del Proyecto</Link>
            <Link href="/resumenes">Resumenes</Link>
        </div>
    );  
}