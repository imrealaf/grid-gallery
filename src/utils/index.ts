export const setRouteClass = (path: string) => {
  const className: string = path.replace("/", "");
  document.body.setAttribute("route", className === "" ? "home" : className);
};

export const getTransitionDuration = (element: HTMLElement) => {
  const style = window.getComputedStyle(element);
  if (!style) {
    return;
  }

  const duration = parseFloat(
    style.getPropertyValue("transition-duration").replace("s", "")
  );
  const delay = style.getPropertyValue("transition-delay")
    ? parseFloat(style.getPropertyValue("transition-delay").replace("s", ""))
    : 0;

  const val = duration + delay;
  return val * 1000;
};

export const onTransitionEnd = (element: HTMLElement, callback: any) => {
  const duration = getTransitionDuration(element);
  setTimeout(() => {
    callback(element, duration);
  }, duration);
};
