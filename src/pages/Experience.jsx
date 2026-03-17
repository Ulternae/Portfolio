import { useTranslation } from "react-i18next";

const EXPERIENCE_YEAR = ["2023", "2025"]

const Experience = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className="flex flex-col gap-8 sm:gap-0">

        <div className="sm:col-span-2 flex gap-6 items-center mb-8">

          <h1 className="text-eur-100 dark:text-lt2-100 font-semibold text-3xl">
            {t("experience.workExperience")}
          </h1>
        </div>

        {EXPERIENCE_YEAR.map((year) => {
          return (
            <div key={year} className="grid sm:grid-cols-[2fr_3fr] -mt-1">
              <div className="flex gap-2">
                <div className="relative w-10">
                  <div className="mx-auto rounded-lg h-full w-2 bg-lt2-200 dark:bg-eur-500" />
                  <div className="absolute top-[30px] sm:top-[70px] left-[10px] w-5 h-5 rounded-full bg-lt2-100 dark:bg-eur-100" />
                </div>
                <div className="pt-[20px] sm:pt-[60px] flex flex-col 1">
                  <h1 className="text-eur-100 dark:text-lt2-100 font-medium text-2xl leading-none">{t(`experience.${year}.developed`)}</h1>
                  <h3 className="text-eur-100 dark:text-lt2-100 font-medium text-lg">{t(`experience.${year}.enterprise`)}</h3>
                </div>
              </div>
              <div className="pt-[40px]">
                <p className="max-sm:pl-3 text-pretty text-lg font-medium text-lt2-200 dark:text-eur-200">
                  {t(`experience.${year}.description`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Experience };
