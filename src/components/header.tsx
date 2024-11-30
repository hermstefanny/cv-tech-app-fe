import Image from 'next/image';
import Link from 'next/link';
import LogoImg from 'public/CiviConectaLogo.png';

export default function Header() {

    const handleClickActas = async () => {
        const date = new Date().toISOString();
        const action = "Click on menu_ACTAS-DEL-CONCEJO-DE-QUITO";
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

    }

    const handleClickInicio = async () => {
        const date = new Date().toISOString();
        const action = "Click on menu_inicio";
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

    }

    const handleClickAcercaDe = async () => {
        const date = new Date().toISOString();
        const action = "Click on menu_acerca_de";
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

    }


    return (
        <div className="w-full absoulte top-0 text-white bg-sky-800 z-50 shadow-md">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-6 ">
                
                <Link onClick={handleClickInicio} href="/" className="flex items-center space-x-2 font-open-sans font-semibold hover:text-sky-400">
                    <Image src={LogoImg} alt="CiviConecta Logo" width={40} height={40} />
                    <span className="text-2xl font-bold">CiviConecta</span>
                </Link>
                <div className="space-x-3 text-lg">
                    <Link onClick={handleClickActas} href="/resumenes" className="font-montserrat font-semibold  hover:text-sky-400 ">Actas del Concejo de Quito </Link>
                    <Link onClick={handleClickAcercaDe} href="/acerca_de" className="font-montserrat font-semibold  hover:text-sky-400">Acerca del Proyecto</Link>
                </div>
            </nav>
        </div>

    );
}