import { ReactComponent as Vector1 } from "../home/assets/vector-1.svg";
import { ReactComponent as Vector2 } from "../home/assets/vector-2.svg";

function PlayBackVideo(props) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src="https://i.ibb.co/j51Rgbm/Video-Image.png"
          alt="video"
          style={{
            mixBlendMode: "luminosity",
            zIndex: 1,
            width: "1280px",
            height: "560px"
          }}
        />
        <Vector1
          style={{
            position: "absolute",
            zIndex: 2,
            left: "925px",
            top: "1px",
          }}
        />
        <Vector2
          style={{
            position: "absolute",
            zIndex: 1,
            left: "1040px",
            top: "-1px",
          }}
        />
      </div>
    </div>
  );
}

export default PlayBackVideo;
