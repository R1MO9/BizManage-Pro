import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <InfinitySpin width="200" color="#000" />
        </div>
    );
};

export default Loader;
