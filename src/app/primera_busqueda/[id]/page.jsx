import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export async function getServerSideProps(context) {
  const { id } = context.params;
  
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!res.ok) {
      throw new Error('Error al obtener los datos');
    }
    const character = await res.json();
    return { props: { character } };
  } catch (error) {
    console.error(error);
    return { props: { character: null } };
  }
}

export default function CharacterDetail({ character }) {
  const router = useRouter();
  
  if (!character) {
    return <p>No se encontró el personaje.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-center text-3xl mt-10">{character.name}</h1>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Image 
          src={character.image} 
          alt={character.name} 
          width={400} 
          height={400} 
          className="rounded-lg shadow-md"
        />
        <p className="text-center mt-4">Episodios:</p>
        <ul className="list-disc p-4">
          {character.episode.map((episode) => (
            <li key={episode}>{episode}</li>
          ))}
        </ul>
      </div>
      <div className="text-center mb-10">
        <Link href="/buscar" className="text-blue-500">Atrás</Link>
      </div>
    </div>
  );
}
