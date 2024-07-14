import HorzSocialMedia from "./horz-scl-media";
import { ReactComponent as Logo } from "../home/assets/company-logo.svg";
function Footer() {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#101010",
        height: "725px",
        backgroundImage: 'url("https://i.ibb.co/NZW5wqS/Designfooter-bg.png")',
        backgroundSize: "cover", // or 'contain' depending on your preference
        backgroundPosition: "center", // or any other position
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "100px",
          marginLeft: "80px",
          paddingTop: "65px",
        }}
      >
        <Logo
          style={{
            width: "250px",
            position: "relative",
          }}
        />
        {/* <img
          src="https://s3-alpha-sig.figma.com/img/0a3c/12cc/e656d145a958c979b1f7bd40f73286dc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A9wxiRy3QKNumKqSTFiqqknaWc~dlx6NWC39jU5pR0~NgeFLhsExh0PWrTF616hu3EB1-OliIVdw1XkClPfxQRDSQ75GMflQgzjcJUh~C8FsqnqOvz6mjiHhyJ6BhvL6bIeljLxhb3dk~tHfkiDodp1u0BUkVWb6nwr8YcbuCNSHEFs0w2xoxE~ERXv5qpZXuiejBL7VPOZ~CBr5o66zzaqxmlIGM1TTcarJZ6K1BzZtlXFiRphVMX0qzx1v1xfvADmYRWmL-zz6qNJgu~CRzptiAxW~mK-00aPU8uqbU2KBh4v~V2aqNJFKSwkgl2ymCYCEjZEiaqR5g6oIvvC5Ow__"
          style={{
            width: "250px",
          }}
        ></img> */}
        <HorzSocialMedia />
      </div>
      <div
        style={{
          borderBottom: "0.5px solid #5D5D5D",
          marginRight: "80px",
          marginLeft: "95px",
          marginTop: "55px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "100px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "30.24px",
              textAlign: "left",
              color: "#5D5D5D",
              margin: "0 auto",
            }}
          >
            Lets start working together
          </p>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "60px",
              fontWeight: "800",
              lineHeight: "75.6px",
              textAlign: "left",
              margin: "0 auto",
              color: "white",
            }}
          >
            info@xylosculpt.com
          </p>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "20.16px",
              textAlign: "left",
              color: "#5D5D5D",
              marginTop: "60px",
            }}
          >
            © Copyright 2023 by Xylosculpt Marketing
          </p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              width: "388px",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "20.16px",
              textAlign: "left",
              color: "#5D5D5D",
              justifyContent: "space-between",
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: "0px",
                margin: "0",
                marginBottom: "15px",
              }}
            >
              <li style={{ marginBottom: "15px" }}>Contact Us</li>
              <li style={{ marginBottom: "15px" }}>About Us</li>
              <li style={{ marginBottom: "15px" }}>Services</li>
              <li style={{ marginBottom: "15px" }}>Hiring</li>
              <li style={{ marginBottom: "15px" }}>Our Blog</li>
            </ul>
            <ul style={{ listStyleType: "none", margin: "0" }}>
              <li style={{ marginBottom: "15px" }}>Website Development</li>
              <li style={{ marginBottom: "15px" }}>UI/UX Design</li>
              <li style={{ marginBottom: "15px" }}>Social Media Marketing</li>
              <li style={{ marginBottom: "15px" }}>Google Ads Management</li>
            </ul>
          </div>
          <div style={{ zIndex: "2" }}>
            <input
              style={{
                border: "none",
                borderRadius: "10px 0 0 10px",
                width: "249px",
                height: "66px",
                paddingLeft: "15px",
                outline: "none",
                zIndex: "2",
              }}
              type="text"
              class="rounded-input"
              placeholder="Enter your email to subscribe"
            />
            <style>
              {` 
                    ::placeholder {
                        font-family: Plus Jakarta Sans;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 20.16px;
                        color: #5D5D5D;
                      }`}
            </style>
            <button
              style={{
                border: "none",
                width: "124px",
                height: "68px",
                paddingBottom: "6px",
                backgroundColor: "#47E4BF",
                borderRadius: "0px 10px 10px 0px",
                color: "#FFFFFF",
                fontFamily: "Plus Jakarta Sans",
                fontSize: "16px",
                fontWeight: "800",
                lineHeight: "20.16px",
                zIndex: "2",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          fontFamily: "Plus Jakarta Sans",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "20.16px",
          textAlign: "left",
          color: "#5D5D5D",
          marginTop: "80px",
          marginBottom: "100px",
        }}
      >
        <ul
          style={{
            position: "relative",
            display: "flex",
            padding: "0",
            listStyle: "none",
            margin: "0",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <li
            style={{
              margin: "0 10px",
              listStyleType: "none",
            }}
          >
            Privacy Policy
          </li>
          <li
            style={{
              margin: "0 10px",
              listStyleType: "disc",
              textIndent: "10px",
            }}
          >
            Xylosculpt
          </li>
          <li
            style={{
              margin: "0 10px",
              listStyleType: "disc",
              textIndent: "10px",
            }}
          >
            Terms & Conditions
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
