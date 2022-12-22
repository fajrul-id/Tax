import Link from "next/link";

export default function Navbar() {
  const menus = [
    {
      name: "layanan",
      path: "/#layanan",
    },
    {
      name: "lokasi",
      path: "/#lokasi",
    },
    {
      name: "tentang kami",
      path: "/#tentang_kami",
    },
    {
      name: "artikel",
      path: "/#artikel",
    },
    {
      name: "kontak",
      path: "/#kontak",
    },
  ];
  return (
    <nav className="sticky top-0 z-30 bg-white bg-opacity-[95%] w-full max-h-16 min-h-16">
      <div className="flex flex-row justify-between items-center px-10 shadow-md">
        <div id="logo">
          <h1 className="text-md md:text-2xl ">Ana Christyawati</h1>
        </div>
        <div id="menu" className="hidden md:flex space-x-10 items-center">
          <menu className="flex h-full space-x-10 ">
            {menus.map((e, i) => (
              <Link
                key={e.name}
                href={e.path}
                className="link capitalize text-gray-700 py-4 ::after"
              >
                {e.name}
              </Link>
            ))}
          </menu>
          <Link
            href="/contact_us"
            id="contact_us"
            className="p-3 rounded-lg bg-blue-400 text-slate-50 border bo capitalize hover:bg-white hover:text-gray-800"
          >
            hubungi kami
          </Link>
        </div>
      </div>
    </nav>
  );
}
