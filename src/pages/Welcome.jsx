import { Trans, useTranslation } from "react-i18next";
import { NAVIGATE as NV, NETWORK as NT } from "../constant";
import { ButtonNavigate } from "../components/Buttons/Navigate";
import { Github } from "../assets/Github";
import { Linkedin } from "../assets/Linkedin";
import { Whatsapp } from "../assets/Whatsapp";
import { Logo } from "../assets/Logo";
import { openNewTab } from "../utils/openNewTab";

const Welcome = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h1 className="col-span-2 text-eur-100 dark:text-lt2-100 font-semibold text-4xl">
        {t("welcome.name")}
      </h1>
      <p className="text-pretty col-span-2 text-lg font-medium text-lt2-200 dark:text-eur-200">
        <Trans
          i18nKey="welcome.description"
          components={{
            span: <span className="text-lt2-100 dark:text-eur-100" />,
          }}
        />
      </p>
      <div className="max-sm:col-start-1 max-sm:col-end-3 max-sm:row-start-4 sm:col-start-1 sm:col-span-2 w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] lg:flex gap-2 mt-auto sm:mt-8 lg:mt-16">
        <ButtonNavigate
          className="h-8 w-full lg:w-auto py-2 justify-center"
          onClick={() => openNewTab(NV[NT.LINKEDIN])}
          text={t("welcome.openForWork")}
        />
        <div className="grid-cols-[repeat(auto-fit,minmax(44px,1fr))] w-full lg:w-auto lg:flex gap-2 grid">
          <ButtonNavigate
            className="lg:min-w-9 h-8 px-0 justify-center"
            onClick={() => openNewTab(NV[NT.GITHUB])}
            icon={<Github className="fill-lt2-200 dark:fill-eur-200 w-5 h-5" />}
          />
          <ButtonNavigate
            className="lg:min-w-9 h-8 px-0 justify-center"
            onClick={() => openNewTab(NV[NT.LINKEDIN])}
            icon={
              <Linkedin className="fill-lt2-200 dark:fill-eur-200 w-5 h-5" />
            }
          />
          <ButtonNavigate
            className="lg:min-w-9 h-8 py-2 px-0 justify-center"
            onClick={() => openNewTab(NV[NT.WHATSAPP])}
            icon={
              <Whatsapp className="fill-lt2-200 dark:fill-eur-200 w-5 h-5" />
            }
          />
        </div>
      </div>
      <div className="max-sm:col-start-1 max-sm:col-end-3 sm:row-start-1 sm:row-end-4 sm:col-start-3 grid place-content-center">
        <Logo className={"max-sm:max-w-[100px] w-full min-w-44 max-w-[240px] min-h-20 max-h-[260px]"} />
      </div>
    </div>
  );
};

export { Welcome };
