export function loadExternalStyles(url: string) {
  return new Promise((resolve, reject) => {
    const styleElement = document.createElement('link');
    styleElement.href = url;
    styleElement.onload = resolve;
    document.head.appendChild(styleElement);
  });
}

export function loadExternalScripts(url: string) {
  return new Promise((resolve) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = url;
    scriptElement.onload = resolve;
    document.body.appendChild(scriptElement);
  });
}
