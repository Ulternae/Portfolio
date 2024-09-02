import { Trans, useTranslation } from "react-i18next";
import { User } from "../assets/User";

const AboutMe = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className="sm:col-span-2 flex gap-6 items-center">
        <User className={"fill-lt2-200 dark:fill-eur-200 w-10 h-10"} />
        <h1 className=" text-eur-100 dark:text-lt2-100 font-semibold text-3xl">
          {t("aboutMe.name")}
        </h1>
      </div>
        <div className="grid gap-4 max-sm:pl-3 text-pretty text-lg font-medium text-lt2-200 dark:text-eur-200">
          <Trans
            i18nKey="aboutMe.description"
            components={{
              span: <span className="text-lt2-100 dark:text-eur-100" />,
              div: <div />,
            }}
          />
        </div>
    </div>
  );
};

export { AboutMe };
