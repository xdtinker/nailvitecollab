import Webcam from "react-webcam";
import { useRef } from "react";

const ARCam = () => {
  const webcamRef = useRef(null);

  return (
    <>
      <Webcam
        className="rounded-lg left-0 right-0 text-center z-10 w-full h-full"
        ref={webcamRef}
      />
    </>
  );
};

export default ARCam;
