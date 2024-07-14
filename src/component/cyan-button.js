function CyanButton(props) {
  const buttonText = props.text ? props.text : "Let's Talk";
  return (
    <button
      style={{
        border: "none",
        position: props.position,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        background: "#47e4bf",
        left: props.left,
        top: props.top,
        width: props.width,
        height: props.height,
        ...props.style
      }}
    >
      <span
        style={{
          color: "#fff",
          textAlign: "center",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "normal",
        }}
      >
        {buttonText}
      </span>
    </button>
  );
}

export default CyanButton;
