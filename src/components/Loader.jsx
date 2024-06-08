import React from "react";
import { Spinner } from "flowbite-react";

const Loader = () => {
  return (
    <div className="text-center p-2">
      <Spinner aria-label="Center-aligned spinner example"/>
    </div>
  );
};

export default Loader;
