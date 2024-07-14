import CircleImg from "./circle-img";
import { ReactComponent as DoubleInvertedComma } from "../home/assets/double-inv-comma.svg";
import { ReactComponent as BgTestimonial } from "../home/assets/bg-testimonial.svg";
function Testimonials() {
  const common = {
    imageUrl: "https://i.ibb.co/Gk1vbr9/About-Image1.png",
    width: "256px",
    height: "256px",
  };
  const props = {
    badge: {
      imagePath:
        "https://s3-alpha-sig.figma.com/img/65e4/2701/d8f30521b0c55d6a21f1b3f29b4d0509?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSv-icYw3RAA~oLSuFp~Ycys8iRKvotLa1VBbeJY0RPvnhU~3h1tNapfOGwrCARUVlXMvrlB9JanHT3gcioTea1R6haC6zMZc4-nF7rCuacWOAuKhpXlcnygc4DjvsjPwB25dcI-3lyNb05GxHRurmLFXwt6uCmgvSRhVWDYkSgrIvatW34BNQPGospAQ010QU7hjdk7Y1zDSMo63NkGYuIM~POXAW-Fu9vweNqsZH6Q0TugrkBrlzUNo3i~TLgNKtZS3LYRB0dJuAe2P2vu9ZqYRzce-gZZBEZgySHu4Q5Opj4f8XgODbIyM2syEG84o1jlWdEv8btih9pPRz~34A__",
    },
  };
  return (
    <div style={{
      position: "relative"
    }}>
      <BgTestimonial
        style={{
          position: "absolute",
          top: "-1px",
          left: "-1px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "60px 40px 0px 70px",
          position: "relative",
        }}
      >
        <div>
          <div
            style={{
              width: "90px",
              height: "90px",
              background: "#47E4BF",
              borderRadius: "50%",
              position: "relative",
              left: "167px",
              top: "256px",
              zIndex: "2",
            }}
          >
            <DoubleInvertedComma
              style={{
                width: "42px",
                height: "42px",
                top: "25%",
                position: "absolute",
                left: "25%",
                zIndex: "2",
              }}
            />
          </div>
          <CircleImg imgProps={common} style={{ zIndex: "2" }} />
        </div>
        <div
          style={{
            maxWidth: "968px",
            marginTop: "50px",
            zIndex: "2",
          }}
        >
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "30px",
              fontWeight: "300",
              lineHeight: "50px",
              textAlign: "left",
              color: "#5D5D5D",
            }}
          >
            “Lorem Ipsum has consistently delivered high-quality outputs on
            time. Their team impressed us with their Flutter development skills,
            capability to handle complex UI design, and ability to produce the
            features we'd requested. We decided to continue our partnership.”
          </p>
          <p
            style={{
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontFamily: " Plus Jakarta Sans",
                fontSize: "24px",
                fontWeight: "800",
                lineHeight: "30.24px",
                textAlign: "left",
              }}
            >
              Vishakha Katoch
            </span>{" "}
            <span
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "16.38px",
                textAlign: "left",
                color: "#47E4BF",
                paddingLeft: "20px",
              }}
            >
              Lab Technician
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
