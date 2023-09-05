const MakeThemeClassName = (className: string, isDark: boolean) => (
  isDark ? `${className} ${className}--dark` : `${className}`);

export default MakeThemeClassName;
