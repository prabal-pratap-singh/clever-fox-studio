import PageHeading from "../component/page-heading";
import PageHeadingBg from "../component/page-heading-bg";
import ContactUsForm from "../component/contact-us-form";
import Footer from "../component/footer";

function ContactUs() {
  return (
    <section className="contactUs">
      <div>
        <PageHeadingBg pageHeadingBgUrl={"https://i.ibb.co/S7RkcQg/Hero-Image-Contact-Us-bg.png"} />
        <PageHeading pageHeadingText="Contact Us" />
      </div>
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
            FILL UP THE FORM AND OUR TEAM WILL GET BACK TO WITHIN 24 HRS
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
            Have a Question ? <br />
            Get in <span style={{ color: "#47E4BF" }}>Touch</span> with us 👋
          </p>
          <ContactUsForm />
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
    </section>
  );
}
export default ContactUs;
