export const Header = () => {
  return (
    <>
      <header className="container mx-auto sticky top-0 right-0 left-0 px-24 py-10 bg-white flex justify-between items-center">
        <div>
          <h1 className="font-bold text-xl hover:text-gray-500 active:opacity-70 duration-200 outline-none">
            <a href="#" className="outline-none">
              NOICELAND
            </a>
          </h1>
        </div>

        <div>
          <ul className="flex gap-10 items-center">
            <li>
              <a
                href="#home"
                className="text-black hover:text-gray-500 active:opacity-70 duration-200 outline-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#photo"
                className="text-black hover:text-gray-500 active:opacity-70 duration-200 outline-none"
              >
                Photo
              </a>
            </li>
            <li>
              <a
                href="#latest"
                className="text-black hover:text-gray-500 active:opacity-70 duration-200 outline-none"
              >
                Latest
              </a>
            </li>
            <li>
              <a
                href="#featured"
                className="text-black hover:text-gray-500 active:opacity-70 duration-200 outline-none"
              >
                Featured
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="text-black hover:text-gray-500 active:opacity-70 duration-200 outline-none"
              >
                Footer
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
