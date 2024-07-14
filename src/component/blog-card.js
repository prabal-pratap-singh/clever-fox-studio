function BlogCard(props) {
  const content = props.content;
  return (
    <div
      style={{
        width: "400px",
        height: "480px",
        display: "inline-block",
        overflow: "hidden",
        position: "relative",
        borderBottom: "1px solid #5D5D5D",
      }}
    >
      <img
        src={content.imageUrl}
        style={{
          width: "100%",
          height: "340px",
          objectFit: "cover",
          mixBlendMode: "luminosity",
        }}
      ></img>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            borderBottom: "1px solid #47E4BF",
            marginRight: "10px",
            width: "40px",
          }}
        ></div>
        <p style={{ color: "#5D5D5D" }}>{content.contentType}</p>
      </div>
      <p
        style={{
          gap: "0px",
          opacity: " 0px",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "24px",
          fontWeight: "800",
          lineHeight: "30.24px",
          textAlign: "left",
          color: "white",
          margin: "0 auto",
        }}
      >
        Lorem ipsum dolor sit amet consectetur
      </p>
    </div>
  );
}

export default BlogCard;
