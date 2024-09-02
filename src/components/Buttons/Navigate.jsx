const ButtonNavigate = ({ className = '', text = "", icon, ...props }) => {
  return (
    <button
      className={`${className} leading-none font-medium px-4 h-auto rounded-lg bg-lt2-700 dark:bg-eur-500 text-lt2-200 dark:text-eur-200 flex items-center gap-3`}
      {...props}
    >
      {text}
      {icon && (icon)}
    </button>
  );
};

export { ButtonNavigate };
