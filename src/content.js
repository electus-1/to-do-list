export default function contentComp() {
  const content = document.createElement("div");
  content.id = "content";
  const html = document.querySelector("html");
  const sidebarWidth = document.querySelector("#sidebar").offsetWidth;
  const headerHeight = document.querySelector("#header").offsetHeight;
  content.style.width = `${html.scrollWidth - sidebarWidth}px`;
  content.style.height = `${html.scrollHeight - headerHeight}px`;
  content.style.display = "flex";
  content.style.justifyContent = "center";
  content.style.alignItems = "center";
  content.style.position = "absolute";
  content.style.left = `${sidebarWidth}px`;
  content.style.top = `${headerHeight}px`;
  return content;
}
