const Hero = () => {
  return (
    <>
      <section className="">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover h-[92vh]"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              'url("https://t3.ftcdn.net/jpg/00/84/71/02/360_F_84710252_ZrquscCqzOdXW00o6wMebF1TUp3wjkq9.jpg")',
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <div id="logo" className="text-6xl text-slate-100 m-4 ">
                Ana Christyawati
              </div>
              <div className="text-center text-white px-6 md:px-12 leading-none max-w-2xl">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight">
                  Tax and Accounting
                </h1>
                <a
                  href="#about_us"
                  id="button"
                  className="mt-8 shadow-md bg-blue-400 inline-block px-7 py-3 border-2
                border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-white hover:text-gray-800 hover:bg-opacity-8 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
