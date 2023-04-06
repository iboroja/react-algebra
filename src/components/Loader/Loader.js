import React from "react";
import { LoaderWrapper } from "./LoaderStyles";
import { ThreeCircles } from "react-loader-spinner";
import { colors } from "../../utils/style/theme";

const Loader = () => {
  return (
    <>
      <LoaderWrapper>
        <ThreeCircles
          height="100"
          width="100"
          color={colors.primary}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </LoaderWrapper>
    </>
  );
};

export default Loader;
