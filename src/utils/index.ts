export const setRouteClass = (path: string) => {
  const className: string = path.replace("/", "");
  document.body.setAttribute("route", className === "" ? "home" : className);
};
