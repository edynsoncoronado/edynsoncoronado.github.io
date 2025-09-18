export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Edynson Coronado 👋</h1>
      <img
        src="../public/logo.jpg"
        alt="Photo of Edynson Coronado"
        className="w-52 h-52 mx-auto rounded-full border-4 border-indigo-600 shadow-md"
      />
      <br />
      <p className="text-xl text-gray-100 mb-6">
        Software Developer | DevOps | Machine Learning Enthusiast
      </p>
      <a
        href="#about"
        className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow hover:bg-yellow-600 transition"
      >
        About Me
      </a>
    </section>
  );
}
