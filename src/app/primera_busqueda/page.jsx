import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Buscar'
}

export default async function PrimeraBusqueda() {
    const data = await getData();

    return (
        <div className="flex flex-col min-h-screen">
            <h1 className="text-center text-3xl mt-10">Nombre e imagen de los personajes</h1>
            <p className="text-center mt-2">Este es el contenido</p>
            <div className="flex-1 flex flex-col items-center justify-center">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {data.results.map(({ id, name, image }) => (
                        <li key={id} className="text-center">
                            <h3 className="text-lg font-bold">{id} - {name}</h3>
                            <Link href={`/personajes/${id}`} passHref>
                                <Image 
                                    src={image} 
                                    alt={name} 
                                    width={200} 
                                    height={200} 
                                    className="rounded-lg shadow-md cursor-pointer"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text-center mb-10">
                <Link href="/descripcion" className="text-blue-500">Atrás</Link>
            </div>
        </div>
    );
}

async function getData() {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character/");
        if (!res.ok) {
            throw new Error('Hubo un error en la red');
        }
        const primerasbusquedas = await res.json();
        return primerasbusquedas;
    } catch (error) {
        console.error(error);
    }
}
