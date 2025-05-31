import React from 'react'
import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  return createPortal(
    <section>
        {copied && (
            <div style={{marginTop: "1rem", bottom: "3rem"}}>
                Copied to Clipboard
            </div>
        )}
    </section>,
    document.querySelector("#popup-content")
  )
}

export default PopupContent