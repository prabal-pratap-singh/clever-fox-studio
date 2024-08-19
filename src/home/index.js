import "./index.css";
import female from "./images/female-img.svg";
import male from "./images/male-img.svg";
import { ReactComponent as InstaLogo } from "./assets/insta-logo.svg";
import { ReactComponent as FacebookLogo } from "./assets/facebook-logo.svg";
import { ReactComponent as TwitterLogo } from "./assets/twitter-logo.svg";
import { ReactComponent as Linkdin } from "./assets/linkdin-logo.svg";
import AttributeDeck from "../component/attribute-deck";
import CircleImg from "../component/circle-img";
import CyanButton from "../component/cyan-button";
import ScrollingText from "../component/scrolling-text";
import PlayBackVideo from "../component/playback-video";
import ServiceDeck from "../component/service-deck";
import Testimonials from "../component/testimonials";
import BlogDeck from "../component/blog-deck";
import Footer from "../component/footer";
import ArrowCircle from "../component/arrowCircle";

function Home() {
  const common = {
    imageUrl: "https://i.ibb.co/Gk1vbr9/About-Image1.png",
    width: "588px",
    height: "588px",
  };
  return (
    <section className="home">
      <h1 id="heading1">More than just a design agency</h1>
      <img src={female} className="female image" alt="img" />
      <img src={male} className="male image" alt="img" />
      <CyanButton
            position={"absolute"}
            height={"64px"}
            width={"174px"}
            left={"135px"}
            top={"529px"}
            hyperlink={'/contact'}
          />
      <div id="socialMediaHandles">
        <TwitterLogo style={{ width: "16px", height: "16px" }} />
        <FacebookLogo style={{ width: "10px", height: "16px" }} />
        <Linkdin style={{ width: "16px", height: "16px" }} />
        <InstaLogo style={{ width: "16px", height: "16px" }} />
      </div>
      <div id="contactNumber">
        <b>
          <span id="ContactNumberStyling">+919109864543</span>
        </b>
      </div>
      <AttributeDeck />
      <div className="about">
        <div className="rightSide">
          <div
            style={{
              width: "190px",
              height: "190px",
              background: "#101010",
              borderRadius: "50%",
              position: "absolute",
              left: "80px",
              top: "25px",
            }}
          ></div>
          <CircleImg imgProps={common} />
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#47E4BF",
              borderRadius: "50%",
              position: "relative",
              left: "-7px",
              top: "-26px",
            }}
          ></div>
        </div>
        <div className="leftSide">
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#47E4BF",
              borderRadius: "50%",
              position: "relative",
            }}
          ></div>
          <span
            style={{
              top: "16px",
              position: "relative",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#5D5D5D",
              width: "139px",
              height: "18px",
            }}
          >
            ABOUT THE AGENCY
          </span>
          <p
            style={{
              top: "-20px",
              position: "relative",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "50px",
              fontWeight: "800",
              lineHeight: "63px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#FFFFFF",
              width: "580px",
              height: "189px",
            }}
          >
            We’re Top Notch & Best{" "}
            <span style={{ color: "#47E4BF" }}>Web Design & Social</span> Media
            Agency
          </p>
          <p
            style={{
              position: "relative",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "22px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#47E4BF",
              width: "580px",
              height: "46px",
              top: "-30px",
            }}
          >
            Transforming the Landscape of Your Product Development Experience
          </p>
          <p
            style={{
              position: "relative",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "15px",
              fontWeight: "500",
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#5D5D5D",
              width: "580px",
              height: "57px",
              top: "-10px",
            }}
          >
            We transform visions into digital realities. We're more than just a
            digital agency; we're your growth catalyst. With a passion for
            innovation and a commitment to excellence, we offer a comprehensive
            suite of services that empower businesses to thrive in the digital
            age.
          </p>
          <CyanButton
            position={"relative"}
            height={"64px"}
            width={"174px"}
            top={"20px"}
            hyperlink={'/contact'}
          />
        </div>
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          marginTop: "-120px",
        }}
      >
        <ScrollingText
          behavior="alternate"
          text="Web Design - Web Development - Social Media Marketer Agency -"
        />
      </div>

      <PlayBackVideo />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            background: "#47E4BF",
            borderRadius: "50%",
            alignContent: "center",
            position: "relative",
          }}
        ></div>
        <p
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "15px",
            fontWeight: "500",
            lineHeight: "17.64px",
            color: "#5D5D5D",
          }}
        >
          WHAT WE’RE OFFERING
        </p>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              display: "inline-block",
              maxWidth: "654px",
              // maxHeight: "176px",
              fontFamily: "Plus Jakarta Sans",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "50px",
              lineHeight: "63px",
              color: "#FFFFFF",
              margin: "0 auto",
            }}
          >
            <span style={{ color: "#47E4BF" }}>Services</span> We’re Providing
            To Our Customers
          </p>
        </div>
      </div>
      <ServiceDeck />
      <Testimonials />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "250px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            background: "#47E4BF",
            borderRadius: "50%",
            alignContent: "center",
            position: "relative",
          }}
        ></div>
        <p
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "15px",
            fontWeight: "500",
            lineHeight: "17.64px",
            color: "#5D5D5D",
          }}
        >
          OUR RECENT POST
        </p>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              display: "inline-block",
              maxWidth: "654px",
              // maxHeight: "176px",
              fontFamily: "Plus Jakarta Sans",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "50px",
              lineHeight: "63px",
              color: "#FFFFFF",
              margin: "0 auto",
            }}
          >
            Our Latest <span style={{ color: "#47E4BF" }}>News & Articles</span>{" "}
            From the <span style={{ color: "#47E4BF" }}>Blog</span>
          </p>
        </div>
      </div>
      <BlogDeck />
      <Footer />
    </section>
  );
}

export default Home;
