import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Segunda App'
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-center p-6">
      <h1 className="text-5xl font-bold mb-4 text-white">Bienvenidos a la página de búsqueda</h1>
      <p className="text-xl mb-8 text-gray-300">Explora el universo de Rick y Morty con nuestra herramienta de búsqueda interactiva.</p>
      <Image src="/img/buscar.png" width={400} height={400} alt="Sendero" className="rounded-lg shadow-lg mb-8" />
      <Link href="descripcion/" className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-green-600 transition">
        Adelante
      </Link>
    </main>
  );
}
