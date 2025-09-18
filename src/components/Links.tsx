// import { Link } from "react-router-dom";

type Linke = {
  name: string;
  url: string;
  color: string;
};

export default function Links() {
  const links: Linke[] = [
    { name: "YouTube", url: "https://www.youtube.com/channel/UCcBV4B4S4T3amgVREnd6zGw", color: "bg-red-500" },
    { name: "GitHub", url: "https://github.com/edynsoncoronado", color: "bg-green-800" },
    { name: "Blog", url: "https://edynsoncoronado.github.io/blog/", color: "bg-yellow-500" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/edynson-coronado-icochea/", color: "bg-blue-600" },
  ];

  return (
    <section className="py-20">
        <h2 className="text-4xl font-bold mb-6">Find Me Online</h2>
        {links.map((link) => (
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`${link.color} px-6 py-3 rounded-2xl shadow-md text-lg font-semibold text-gray-900 transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}>
                {link.name}
              </button>
            </a>
          </div>
        ))}
    </section>
  );
}
