export const Hero = () => {
  return (
    <>
      <hr className="container mx-auto pb-10" />
      <section
        id="home"
        className="container mx-auto px-24 flex justify-between"
      >
        <div className="">
          <img
            src="https://noiceland-project.netlify.app/image/home__img.webp"
            alt="hero_img"
          />
        </div>

        <div className="flex flex-col text-left gap-10">
          <span className="text-light text-xs text-gray-400">ILLUSTRATION</span>
          <h1 className="text-4xl w-[500px] tracking-wider">
            JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY.
          </h1>
          <p className="text-gray-400 w-[500px]">
            Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam
            accusata, hinc justo falli id eum, ferri novum molestie eos cu.
          </p>
          <span className="font-semibold">
            <a href="#home">BY RETA TORPHY</a>
          </span>
        </div>
      </section>
    </>
  );
};
