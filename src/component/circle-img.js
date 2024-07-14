function CircleImg(props) {
  const imgProps = props.imgProps;
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        width: `${imgProps.width}`,
        height: `${imgProps.height}`,
        position: "relative"
      }}
    >
      <img
        src={imgProps.imageUrl}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          clipPath: "circle(50%)",
          objectFit: "cover",
          mixBlendMode: "luminosity"
        }}
      />
    </span>
  );
}

export default CircleImg;
