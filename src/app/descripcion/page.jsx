import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Descripción'
};

export default function Descripcion() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-5">
            <h1 className="text-4xl font-bold mb-5">Descripción</h1>
            <p className="max-w-lg mb-10 leading-relaxed">
                Esta es la página sobre la API de Rick y Morty. Rick y Morty (Rick and Morty en Estados Unidos)
                es una serie animada de televisión estadounidense para adultos creada por Dan Harmon y Justin Roiland,
                cuyo estreno tuvo lugar el 2 de diciembre de 2013 en Adult Swim.
            </p>
            <Image 
                src="/img/rick_and_morty.jpeg" 
                width={300} 
                height={300} 
                alt="Rick and Morty" 
                className="rounded-lg shadow-lg mb-10"
            />
            <div className="flex space-x-5">
                <Link href="primera_busqueda/" className="text-blue-500 font-semibold hover:underline">Adelante</Link>
                <Link href="/" className="text-blue-500 font-semibold hover:underline">Atrás</Link>
            </div>
        </div>
    );
}
