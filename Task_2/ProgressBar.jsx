import React, { useState } from "react";
import "./Style.css";
import ProgressPopup from "./ProgressPopup";

export default function ProgressBar() {
	const [showModal, setShowModal]=useState(false);
  return (
    <div className="progressbar_wrapper text-center p-5">
      <button className="btn btn-primary" onClick={()=>setShowModal(true)}>Start</button>
      { showModal && <ProgressPopup />}
    </div>
  );
}
