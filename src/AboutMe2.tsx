import { FaYoutube, FaGithub, FaLinkedin, FaBlog } from "react-icons/fa";

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-md p-8 text-center border border-gray-200">
        {/* Foto */}
        <img
          src="https://via.placeholder.com/150"
          alt="Tu foto"
          className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 shadow-md"
        />

        {/* Nombre */}
        <h1 className="text-4xl font-extrabold mt-4 text-yellow-500">Tu Nombre</h1>
        <p className="text-gray-600">Desarrollador de Software | Data Science | DevOps</p>

        {/* Bio */}
        <p className="mt-6 text-gray-700 leading-relaxed">
          Soy un desarrollador apasionado por la tecnología, el aprendizaje continuo y 
          la creación de proyectos que combinan innovación y buenas prácticas. 
          Comparto conocimiento en plataformas como YouTube, GitHub y LinkedIn.
        </p>

        {/* Enlaces sociales */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          <a
            href="https://youtube.com/@tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-yellow-400 text-gray-900 font-bold text-lg shadow-md hover:scale-105 transition"
          >
            <FaYoutube className="text-4xl mb-2" />
            YouTube
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-yellow-400 text-gray-900 font-bold text-lg shadow-md hover:scale-105 transition"
          >
            <FaGithub className="text-4xl mb-2" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-yellow-400 text-gray-900 font-bold text-lg shadow-md hover:scale-105 transition"
          >
            <FaLinkedin className="text-4xl mb-2" />
            LinkedIn
          </a>
          <a
            href="https://tu-blog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-yellow-400 text-gray-900 font-bold text-lg shadow-md hover:scale-105 transition"
          >
            <FaBlog className="text-4xl mb-2" />
            Blog
          </a>
        </div>
      </div>
    </main>
  );
}
