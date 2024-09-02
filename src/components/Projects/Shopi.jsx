import { useTranslation } from "react-i18next";
import { Link } from "../../assets/Link";
import { CardViewIcon } from "../Card/CardViewIcon";
import { CardViewProjects } from "../Card/ViewProjects";
import { Github } from "../../assets/Github";
import { I_React } from "../../assets/Tech/React";
import { Tailwind } from "../../assets/Tech/Tailwind";
import { TECH, IMG_PROJECTS, SHOPI_LINKS as LINK } from "../../constant";
import { openNewTab } from "../../utils/openNewTab";

const ProyectShopi = ({ changeDirection }) => {
  const { t } = useTranslation();

  return (
    <CardViewProjects
      changeDirection={changeDirection}
      title={t("projects.shopi.title")}
      content={t("projects.shopi.content")}
      imgSrc={IMG_PROJECTS.SHOPI}
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
            icon={<Github className={"fill-lt2-200 dark:fill-eur-300"} />}
            text={t("projects.code")}
            color={"text-eur-100 dark:text-lt2-100 font-medium"}
            onClick={() => openNewTab(LINK.CODE)}
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
        </>
      }
    ></CardViewProjects>
  );
};

export { ProyectShopi };
