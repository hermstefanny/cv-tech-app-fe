import Link from 'next/link';
import Image from 'next/image';
import homeImg from '/public/placeholder_inicio.jpg';


export default async function Home() {
  return (
        <div>
          <h1 className = "text-white text-6xl">
            Bienvenidos
            </h1>
          <div className ="pt-48 flex justify-center items-center">
            <Image src={homeImg} 
           alt="imagen de civic tech placeholder"
            />
            </div>
        </div>
  )
}