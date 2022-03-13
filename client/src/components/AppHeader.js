import React, { Fragment } from "react";

function AppHeader() {
  return (
    <Fragment>
      <div className="secondary row justify-content-start p-5 vh-20">
        <div className="col-1">
          <img
            src="images/parrot_logo.svg"
            class="img-fluid"
            alt="parrot_logo.svg"
            style={{ height: "64px" }}
          ></img>
        </div>
        <div className="col-11">
          <h1 className="text-start">Parrot</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default AppHeader;
