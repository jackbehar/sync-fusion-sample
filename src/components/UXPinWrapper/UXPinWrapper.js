// eslint-disable-next-line no-unused-vars
import React from "react";

if (!document.getElementById("sync-fusion-css")) {
  let css = document.createElement("link");
  css.setAttribute("href", "https://cdn.syncfusion.com/ej2/material.css");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("id", "sync-fusion-css");
  document.head.appendChild(css);
}

if (!document.getElementById("sync-fusion-icons")) {
  let icons = document.createElement("link");
  icons.setAttribute("href", "https://cdn.syncfusion.com/ej2/ej2-icons/styles/material.css");
  icons.setAttribute("rel", "stylesheet");
  icons.setAttribute("id", "sync-fusion-icons");
  document.head.appendChild(icons);
}

export default function UXPinWrapper({ children }) {
  return <>{children}</>;
}
