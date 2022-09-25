const theme = {
  black: "#000000",
  white: "#FFFFFF",
  sideColor: "#EDEDED",
  mainColor: "#3B55E6", // main color
  keyColor: "#3B55E6", // key color 중복
  footerColor: "#3B3B3B",
  ligthGrey: "#F4F4F4",
  grey: "#e5e4e4",
  deepGrey: "#3B3B3B",
  background: "#FAFAFC",
  defaultText: "#101010",
  hoverBlue: "#2542E6",
  bordeRadius: "6px",
  highModalShdow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;;",
  lowModalShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",

  flexMixin: (align = "center", justify = "center") => `
  display:flex;
  align-items:${align};
  justify-content:${justify};
  `,
};

export default theme;
