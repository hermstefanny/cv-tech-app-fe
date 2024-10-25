import Image from 'next/image';
import LogoImg from 'public/CiviConectaLogo.png';

export default function Footer() {
    return (
      <footer className="w-absolute bg-sky-800 text-white py-6 mt-12">
        <div className="container relative flex flex-wrap items-center justify-center mx-auto p-2"> 
        
          {/* Credits and Legal Information */}
          <p className="flex items-center space-x-2">
          <Image src={LogoImg} alt="CiviConecta Logo" width={30} height={30} />
          <span className="text-xs text-gray-300"> © 2024 CiviConecta. Todos los derechos reservados. Proyecto académico en construcción.</span>

          </p>
        </div>
      </footer>
    );
  }
  