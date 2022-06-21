import React from "react";
import "./styles.css";
import { CKEditor } from "ckeditor4-react";

function Complaints() {
  return (
    <div className="row">
      <h5>Chief Complaints &amp; History of Present Illness</h5>
      <div className="container-fluid">
        <CKEditor
          initData={<p>Enter something....</p>}
        />
      </div>
    </div>
  );
}

export default Complaints;
