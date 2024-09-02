const CardViewIcon = ({ className = '', icon: Icon, text, color, ...props }) => {
  return (
    <div {...props} className={`${className} flex items-center gap-2`}>
      {typeof Icon === 'function' ? <Icon /> : Icon}
      <p className={color}>{text}</p>
    </div>
  );
};

export { CardViewIcon };
