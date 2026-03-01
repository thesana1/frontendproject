import leftTop from "../img/left_top.png";
import rightBottom from "../img/right_bottom.png";
import Cards from "./cards";
import ThemeToggle from "./ThemeToggle";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import accessibility from "../img/acc.png";
import CustomText from "./CustomText";

function Lobby({ darkMode, toggleDarkMode }) {

  const leftShapeStyle = {
    WebkitMaskImage: `url(${leftTop})`,
    maskImage: `url(${leftTop})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "top left",
    maskPosition: "top left",
  };

  const rightShapeStyle = {
    WebkitMaskImage: `url(${rightBottom})`,
    maskImage: `url(${rightBottom})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "bottom right",
    maskPosition: "bottom right",
  };

  return (
    <div className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-background text-text-main transition-colors duration-300">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-1/2 left-0 z-0 aspect-[438/564] w-[78vw] max-w-[438px] -translate-y-1/2 bg-image-accent transition-colors duration-300 md:top-0 md:translate-y-0"
        style={leftShapeStyle}
      />

      <header className="w-full px-6 py-6 md:px-12 lg:px-20">
        <div className="relative z-10 mx-auto flex w-full max-w-[1160px] justify-end">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>

      <div className="relative z-10 mt-[99px] mx-auto flex w-full max-w-[1360px] flex-col gap-10 px-6 pb-10 sm:gap-12 sm:px-8 md:flex-row md:items-start md:justify-between md:gap-[131px] md:px-12 ">
        <div className="flex flex-col gap-2 md:max-w-[465px]">
          <CustomText text={" Welcome to the"} />
          <h1 className="text-[40px] leading-[1.05] text-text-main font-bold sm:text-[56px] md:text-[64px] mb-[38px]">
            Frontend Quiz!
          </h1>
          <p className="mt-2 text-text-muted">Pick a subject to get started.</p>
        </div>

        <div className="flex w-full flex-col gap-4 mt-2 md:max-w-[564px] md:gap-6 [&>div]:max-w-[564px] [&>div]:!w-full">
          <Cards img={html} title="HTML" />
          <Cards img={css} title="CSS" />
          <Cards img={js} title="Javascript" />
          <Cards img={accessibility} title="Accessibility" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-0 bottom-0 z-0 hidden aspect-[540/608] w-[74vw] max-w-[540px] bg-image-accent transition-colors duration-300 md:block"
        style={rightShapeStyle}
      />
    </div>
  );
}

export default Lobby;
