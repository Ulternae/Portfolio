import { useTranslation } from "react-i18next";
import { Link } from "../../assets/Link";
import { CardViewIcon } from "../Card/CardViewIcon";
import { CardViewProjects } from "../Card/ViewProjects";
import { Figma } from "../../assets/Figma";
import { Github } from "../../assets/Github";
import { I_React } from "../../assets/Tech/React";
import { Tailwind } from "../../assets/Tech/Tailwind";
import { SQLite } from "../../assets/Tech/SQLite";
import { Turso } from "../../assets/Tech/Turso";
import { I_Node } from "../../assets/Tech/Node";
import { TECH, IMG_PROJECTS, KC_CHAT_LINKS as LINK } from "../../constant";
import { openNewTab } from "../../utils/openNewTab";

const ProyectChat = ({ changeDirection }) => {
  const { t } = useTranslation();

  return (
    <CardViewProjects
      changeDirection={changeDirection}
      title={t("projects.chat.title")}
      content={t("projects.chat.content")}
      imgSrc={IMG_PROJECTS.KCCHAT}
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
          <CardViewIcon
            icon={<Github className={"fill-lt2-200 dark:fill-eur-300"} />}
            text={`${t("projects.code")} ${t("projects.front")}`}
            color={"text-eur-100 dark:text-lt2-100 font-medium"}
            onClick={() => openNewTab(LINK.CODE_FRONT)}
            className="cursor-pointer"
          />
          <CardViewIcon
            icon={<Github className={"fill-lt2-200 dark:fill-eur-300"} />}
            text={`${t("projects.code")} ${t("projects.back")}`}
            color={"text-eur-100 dark:text-lt2-100 font-medium"}
            onClick={() => openNewTab(LINK.CODE_BACK)}
            className="cursor-pointer"
          />
        </>
      }
      techViews={
        <>
          <CardViewIcon
            icon={I_React}
            text={TECH.REACT}
            color={"text-[#B5FFE2]"}
          />
          <CardViewIcon
            icon={Tailwind}
            text={TECH.TAILWIND}
            color={"text-[#98EAF3]"}
          />
          <CardViewIcon
            icon={I_Node}
            text={TECH.NODE}
            color={"text-[#DEFFBB]"}
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

export { ProyectChat };
