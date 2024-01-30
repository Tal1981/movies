// import { useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const override = {
  display: "block",
  margin: "auto",
  borderColor: "#F1C202",
};

const Loading = () => {

  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column spinnar_loading_box">
      <GridLoader
        color="#F1C202"
        loading={true}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;