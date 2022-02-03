import { createPortal } from "react-dom";

import React, { useState, useLayoutEffect } from "react";

function createWrapperAndAppenToBody(wrapperID) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperID);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

function ReactPortal({ children, wrapperId = "react-portal-wrapper" }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppenToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        console.log(systemCreated);
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, document.getElementById(wrapperId));
}

export default ReactPortal;
