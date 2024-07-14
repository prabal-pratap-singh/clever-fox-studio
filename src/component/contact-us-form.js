import CyanButton from "./cyan-button";

export default function ContactUsForm(props) {
  const formStyles = {
    container: {
      maxWidth: "600px",
    },
    input: {
      width: "100%",
      padding: "20px",
      margin: "0",
      border: "1px solid #47E4BF40",
      borderRadius: "1px",
      boxSizing: "border-box",
      fontSize: "16px",
      background: "none",
      color: "white",
      margin: "0"
    },
    textarea: {
      width: "100%",
      marginTop: "25px",
      height: "147px",
      padding: "20px",
      margin: "20px 0",
      border: "1px solid #47E4BF40",
      borderRadius: "4px",
      boxSizing: "border-box",
      fontSize: "16px",
      background: "none",
      resize: "None",
      color: "white",
    },
  };
  return (
    <div style={formStyles.container}>
      <form
        target="_blank"
        action="https://formsubmit.co/pratapsinghprabal516@gmail.com"
        method="POST"
      >
        <div style={{maxWidth: "623px", width:"623px"}}>
          <div
            style={{
              display: "flex",
              columnGap: "30px",
              flexDirection: "row",
            }}
          >
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              style={formStyles.input}
            />

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
              style={formStyles.input}
            />
          </div>
          <div>
          <textarea
            placeholder="Message"
            name="message"
            rows="5"
            required
            style={formStyles.textarea}
          ></textarea>
        </div>
        </div>
        <CyanButton
          type="submit"
          position={"relative"}
          height={"60px"}
          width={"274px"}
          text={"Submit Your Response"}
          style={{
            marginTop: "12px",
          }}
        />
      </form>
      <style>
          {` 
            input:focus::placeholder {
              color: transparent;
            }

            textarea:focus::placeholder {
              color: transparent;
            }

            input::placeholder { 
                color: white; 
                padding: 0px 0px 0px 10px;
                font-family: Poppins;
                font-size: 16px;
                font-weight: 400;
                line-height: 28px;
                text-align: left;

            }
            textarea::placeholder { 
              color: white; 
              padding: 0px 0px 0px 10px;
              font-family: Poppins;
              font-size: 16px;
              font-weight: 400;
              line-height: 28px;
              text-align: left;

          }
            input:focus {
              outline: none;
              
            } 
            textarea:focus {
              outline: none;
              
            }`}
        </style>
    </div>
  );
}
