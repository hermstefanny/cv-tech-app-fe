import { useTime } from '@/context/TimeContext';
import Image from 'next/image';
import Link from 'next/link';
import LogoImg from 'public/CiviConectaLogo.png';

export default function Header() {
    const { startTime, setStartTime } = useTime();

    const handleClick = () => {
        console.log('Clicking the header', startTime);
        if (startTime !== null) {
            console.log("Lapse time", Date.now() - startTime);
            setStartTime(null);
        }
    };

    return (
        <div className="w-full absoulte top-0 text-white bg-sky-800 z-50 shadow-md">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-6 ">
                {/* Logo and Text Wrapper */}
                <Link href="/" className="flex items-center space-x-2 font-open-sans font-semibold hover:text-sky-400">
                    <Image src={LogoImg} alt="CiviConecta Logo" width={40} height={40} />
                    <span className="text-2xl font-bold">CiviConecta</span>
                </Link>
                <div className="space-x-3 text-lg">
                    <Link onClick={handleClick} href="/resumenes" className="font-montserrat font-semibold  hover:text-sky-400 ">Actas del Concejo de Quito </Link>
                    <Link href="/acerca_de" className="font-montserrat font-semibold  hover:text-sky-400">Acerca del Proyecto</Link>
                </div>
            </nav>
        </div>

    );
}