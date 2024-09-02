import { useTranslation } from "react-i18next";
import { Code } from "../assets/Code";
import { ProyectChat } from "../components/Projects/Chat";
import { ProyectPomodoro } from "../components/Projects/Pomodoro";
import { useState } from "react";
import { ArrowBottom } from "../assets/ArrowBottom";
import { ProyectShopi } from "../components/Projects/Shopi";
import { ProyectReactTodo } from "../components/Projects/ReactTodo";

const Projects = ({ className }) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const toogleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className={className}>
      <div className="flex gap-6 items-center">
        <Code className={"fill-lt2-200 dark:fill-eur-200 w-10 h-10"} />
        <h1 className=" text-eur-100 dark:text-lt2-100 font-semibold text-3xl">
          {t("projects.name")}
        </h1>
      </div>
      <div className="grid gap-32">
        <ProyectChat />
        <ProyectPomodoro changeDirection={true} />
        {showMore && (
          <>
            <ProyectShopi />
            <ProyectReactTodo changeDirection={true} />
          </>
        )}
        <div className="group flex justify-center gap-3 items-center">
          <ArrowBottom
            onClick={toogleShowMore}
            className={`${
              showMore ? "rotate-180" : ""
            } cursor-pointer fill-lt2-200 dark:fill-eur-200 group-hover:fill-lt2-100 group-hover:dark:fill-eur-100 transition-all duration-300`}
          />
          <p
            onClick={toogleShowMore}
            className="cursor-pointer text-lg font-medium text-lt2-200 dark:text-eur-200 group-hover:text-lt2-100 group-hover:dark:text-eur-100 transition-colors duration-300"
          >
            {!showMore ? t("projects.seeMore") : t("projects.seeLess")}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Projects };
