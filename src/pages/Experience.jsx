import { useTranslation } from "react-i18next";
import { Backpack } from "../assets/Backpack";

const Experience = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className="sm:col-span-2 flex gap-6 items-center">
        <Backpack
          className={"fill-lt2-200 dark:fill-eur-500 w-10 h-10"}
          secondaryColor={"fill-lt2-300 dark:fill-eur-200"}
        />
        <h1 className=" text-eur-100 dark:text-lt2-100 font-semibold text-3xl">
          {t("experience.workExperience")}
        </h1>
      </div>
      <div className="flex gap-2">
        <div className="relative w-10">
          <div className="mx-auto rounded-lg h-full w-2 bg-lt2-200 dark:bg-eur-500" />
          <div className="absolute top-6 left-[10px] w-5 h-5 rounded-full bg-lt2-100 dark:bg-eur-100" />
        </div>
        <div className="pt-5 flex flex-col sm:gap-2">
          <h1 className="text-eur-100 dark:text-lt2-100 font-medium text-2xl leading-none">{t('experience.developed')}</h1>
          <h3 className="text-eur-100 dark:text-lt2-100 font-medium text-lg">{t('experience.enterprise')}</h3>
        </div>
      </div>
      <div>
        <p className="max-sm:pl-3 text-pretty text-lg font-medium text-lt2-200 dark:text-eur-200 pt-5">
          {t("experience.description")}
        </p>
      </div>
    </div>
  );
};

export { Experience };
