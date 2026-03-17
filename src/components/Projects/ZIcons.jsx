import { useTranslation } from "react-i18next";
import { Link } from "../../assets/Link";
import { CardViewIcon } from "../Card/CardViewIcon";
import { CardViewProjects } from "../Card/ViewProjects";
import { Figma } from "../../assets/Figma";
import { TypeScript } from "../../assets/Tech/TypeScript";
import { NextJS } from "../../assets/Tech/NextJS";
import { Tailwind } from "../../assets/Tech/Tailwind";
import { SQLite } from "../../assets/Tech/SQLite";
import { Turso } from "../../assets/Tech/Turso";
import { TECH, IMG_PROJECTS, ZICONS_LINKS as LINK } from "../../constant";
import { openNewTab } from "../../utils/openNewTab";

const ProyectZIcons = ({ changeDirection }) => {
  const { t } = useTranslation();

  return (
    <CardViewProjects
      changeDirection={changeDirection}
      title={t("projects.zicons.title")}
      content={t("projects.zicons.content")}
      imgSrc={IMG_PROJECTS.ZICONS}
      linksViews={
        <>
          <CardViewIcon
            icon={<Link className={"fill-lt2-200 dark:fill-eur-300"} />}
            text={t("projects.preview")}
            color={"text-eur-100 dark:text-lt2-100 font-medium"}
            onClick={() => openNewTab(LINK.PAGE)}
            className="cursor-pointer"
          />
          <CardViewIcon
            icon={Figma}
            text={t("projects.design")}
            color={"text-eur-100 dark:text-lt2-100 font-medium"}
            onClick={() => openNewTab(LINK.FIGMA)}
            className="cursor-pointer"
          />
        </>
      }
      techViews={
        <>
          <CardViewIcon
            icon={NextJS}
            text={TECH.NEXTJS}
            color={"text-[#9F9F9F]"}
          />
          <CardViewIcon
            icon={TypeScript}
            text={TECH.TYPESCRIPT}
            color={"text-[#00C8FF]"}
          />
          <CardViewIcon
            icon={Tailwind}
            text={TECH.TAILWIND}
            color={"text-[#98EAF3]"}
          />
          <CardViewIcon
            icon={SQLite}
            text={TECH.SQLITE}
            color={"text-[#A6E0FF]"}
          />
          <CardViewIcon
            icon={Turso}
            text={TECH.TURSO}
            color={"text-[#4FF8D2]"}
          />
        </>
      }
    ></CardViewProjects>
  );
};

export { ProyectZIcons };
