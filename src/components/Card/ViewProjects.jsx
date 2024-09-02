import { useEffect, useState } from "react";

const CardViewProjects = ({ title, content, imgSrc, linksViews, techViews, changeDirection = false }) => {
  const [isLTR, setIsLTR] = useState(document.documentElement.dir === "ltr");

  useEffect(() => {
    const handleDirectionChange = () => {
      setIsLTR(document.documentElement.dir === "ltr");
    };

    const observer = new MutationObserver(handleDirectionChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  const changeDirectionLTR = isLTR ? !changeDirection : changeDirection;

  return (
    <div className="w-full h-full">
      <div
        className={`${
          changeDirectionLTR
            ? "rtl:mr-auto rtl:ml-0 md:ml-auto md:grid-cols-[40px_1fr]"
            : "rtl:ml-auto rtl:mr-0 md:mr-auto md:grid-cols-[1fr_40px]"
        } bg-lt2-500 dark:bg-eur-600 rounded-lg min-h-[438px] h-auto w-full px-6 py-8 flex flex-col gap-8 md:grid md:w-2/3 lg:w-[55%]`}
      >
        <h1
          className={`${
            changeDirectionLTR ? "md:col-start-2" : ""
          } text-eur-100 dark:text-lt2-100 font-medium text-2xl leading-none`}
        >
          {title}
        </h1>
        <div
          className={`${
            changeDirectionLTR
              ? "md:col-start-1 md:col-end-2 md:row-start-1 relative"
              : "md:w-[300px] lg:w-[470px]"
          } md:row-span-4 md:h-full h-auto rounded-lg`}
        >
          <div
            className={`${
              changeDirectionLTR
                ? "md:min-w-[300px] lg:min-w-[470px] md:absolute ltr:right-0 rtl:left-0"
                : ""
            }`}
          >
            <img
              className={"rounded-t-lg object-fill"}
              src={imgSrc}
            />
            <div className="w-full h-auto px-4 py-6 rounded-b-lg dark:bg-eur-500 bg-lt2-400 flex flex-wrap justify-center gap-x-8 gap-y-2">
              {linksViews}
            </div>
          </div>
        </div>

        <p
          className={`${
            changeDirectionLTR ? "md:col-start-2" : "md:col-start-1"
          } text-lg font-medium text-pretty text-lt2-200 dark:text-eur-200`}
        >
          {content}
        </p>
        <div
          className={`${
            changeDirectionLTR ? "md:col-start-2" : "md:col-start-1"
          } w-full h-1 dark:bg-eur-400 bg-lt2-300`}
        />
        <div
          className={`${
            changeDirectionLTR ? "md:col-start-2" : "md:col-start-1"
          } flex flex-wrap gap-x-4 gap-y-2 justify-center`}
        >
          {techViews}
        </div>
      </div>
    </div>
  );
};

export { CardViewProjects };
