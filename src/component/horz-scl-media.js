import { ReactComponent as InstaLogo } from "../home/assets/insta-logo.svg";
import { ReactComponent as FacebookLogo } from "../home/assets/facebook-logo.svg";
import { ReactComponent as TwitterLogo } from "../home/assets/twitter-logo.svg";
import { ReactComponent as Linkdin } from "../home/assets/linkdin-logo.svg";

function HorzSocialMedia() {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "40px"
      }}
    >
      <TwitterLogo style={{width:"22px", height:"22px"}}/>
      <FacebookLogo style={{width:"22px", height:"22px"}}/>
      <Linkdin style={{width:"22px", height:"22px"}}/>
      <InstaLogo style={{width:"22px", height:"22px"}}/>
    </div>
  );
}

export default HorzSocialMedia;
