import PageHeading from "../component/page-heading";
import PageHeadingBg from "../component/page-heading-bg";
import ServiceDeck from "../component/service-deck"
import Footer from "../component/footer";
export default function Service() {
  return <section className="service">
    <div>
        <PageHeadingBg pageHeadingBgUrl={"https://i.ibb.co/S7RkcQg/Hero-Image-Contact-Us-bg.png"} />
        <PageHeading pageHeadingText="Services" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "80px"
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
      <div style={{ display: "flex", justifyContent: "space-around", marginTop:"65px", marginBottom: "85px" }}>
        <div>
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
            WHY CHOOSE US
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
            }}
          >
            Providing The <span style={{ color: "#47E4BF" }}>Best</span> <br />
            Services
          </p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              columnGap: "64px",
            }}
          >
            <div
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/TLqyzVv/Contact-Image-4.jpg)",
                // position: "absolute",
                width: "240px",
                height: "500px",
                backgroundSize: "cover", // or 'contain' depending on your preference
                backgroundPosition: "center",
                marginTop: "83px",
              }}
            ></div>
            <div
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/q176wKY/Contact-Image-3.jpg)",
                // position: "absolute",
                width: "240px",
                height: "500px",
                backgroundSize: "cover", // or 'contain' depending on your preference
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
  </section>;
}
