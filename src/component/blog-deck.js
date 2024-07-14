import BlogCard from "./blog-card";
import "./attributeDeck.css";

function BlogDeck() {
    const content = {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/329d/675d/8a2f7df3e63a41131742810007923d97?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nAyW~9B4suWlIgxn6APwaHg6~aWLue7AcASh43wsdMdXz2YM5IACmXRrbMasPgmVX1AJdpr~z~u6VhwKtXEnGIpStmcVc6TcL-NqaHuMMC0Mtrj~QZR7cd6S-yzBtOXIrAyXgNuCsbkXbnM4a3zU3DWUrkM1gGSPFdIh2Z1NXYwfQX9l1~vnuzbPFqFQH7-fSFoTUL3ETQCC4Y0ei3ejE7crPxMvTmaY2fOYkWnPFH7vGNiBTna~eiR6rxWAOtftKpcvzpThR27cOF3vQRPzXlQdBC3WJVsH94vop7RD-EKGz-uD4o35F6Ak7ilvBe2331SbD5M91RU~~0YaiovRmw__",
        contentType: "Design",
        heading: "Lorem ipsum dolor sit amet consectetur",
      };
  return (
    <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        marginTop: "50px",
        marginBottom: "120px",
        padding: "0px 40px 0px 50px",
    }}>
      <BlogCard content={content} />
      <BlogCard content={content} />
      <BlogCard content={content} />
    </div>
  );
}

export default BlogDeck;
