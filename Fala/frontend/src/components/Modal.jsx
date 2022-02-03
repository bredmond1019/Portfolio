import React from "react";
import ReactPortal from "./ReactPortal";

import { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Modal({ children, isOpen, handleClose }) {
  const nodeRef = useRef(null);
  // if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">
            <button onClick={handleClose} className="close-btn">
              CLOSE
            </button>
            {children}
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}

export default Modal;
