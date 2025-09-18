import { FaYoutube, FaGithub, FaLinkedin, FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    // <main className="min-h-screen flex items-center justify-center px-4">
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Foto */}
        <img
          src="/logo.jpg"
          alt="Tu foto"
          className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-600 shadow-md"
        />

        {/* Nombre */}
        <h1 className="text-3xl font-bold mt-4 text-gray-800">Edynson Coronado</h1>
        <p className="text-gray-500">Software Developer | Data Science | DevOps</p>

        {/* Bio */}
        <p className="mt-4 text-gray-600 leading-relaxed">
        I'm a developer passionate about technology, continuous learning, and creating projects that combine innovation and best practices.
        I share knowledge on the following platforms:
        </p>

            {/* 📑 Listado de posts */}
            <ul className="space-y-4">
                <li
                    className="bg-[#b5a313] p-4 rounded-xl"
                >
                    <Link
                    to="https://youtube.com/@tuusuario"
                    className="text-xl font-semibold text-gray-100 hover:underline"
                    >
                    Youtube
                    </Link>
                </li>
            </ul>
        {/* Enlaces sociales */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          <a
            href="https://youtube.com/@tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-yellow-400 text-gray-900 font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            <FaYoutube className="text-4xl mb-2" />
            YouTube
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-yellow-400 text-gray-900 font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            <FaGithub className="text-4xl mb-2" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-yellow-400 text-gray-900 font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            <FaLinkedin className="text-4xl mb-2" />
            LinkedIn
          </a>
          <a
            href="https://tu-blog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-yellow-400 text-gray-900 font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            <FaBlog className="text-4xl mb-2" />
            Blog
          </a>
        </div>
      </div>
    </main>
  );
}