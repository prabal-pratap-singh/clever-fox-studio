import AttributeCard from "./attribute-card";
import "./attributeDeck.css";

function AttributeDeck(props) {
  const commonProps = {
    imagePath: "https://i.ibb.co/4SJqz3k/BG-Attribute.png",
    attributeContentHeading: "Creative Agency",
    attributeContentBody:
      "we create path-breaking work that challenges the status qua and positively impact our client's ubsiness. We make sure how we communicate, and design helps our brand stand out",
    badge: {
      imagePath:
        "https://s3-alpha-sig.figma.com/img/65e4/2701/d8f30521b0c55d6a21f1b3f29b4d0509?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSv-icYw3RAA~oLSuFp~Ycys8iRKvotLa1VBbeJY0RPvnhU~3h1tNapfOGwrCARUVlXMvrlB9JanHT3gcioTea1R6haC6zMZc4-nF7rCuacWOAuKhpXlcnygc4DjvsjPwB25dcI-3lyNb05GxHRurmLFXwt6uCmgvSRhVWDYkSgrIvatW34BNQPGospAQ010QU7hjdk7Y1zDSMo63NkGYuIM~POXAW-Fu9vweNqsZH6Q0TugrkBrlzUNo3i~TLgNKtZS3LYRB0dJuAe2P2vu9ZqYRzce-gZZBEZgySHu4Q5Opj4f8XgODbIyM2syEG84o1jlWdEv8btih9pPRz~34A__",
    },
    altName: "altName",
  };
  return (
    <div className="attributeDeck">
      <AttributeCard commonProps={commonProps} />
      <AttributeCard commonProps={commonProps} />
      <AttributeCard commonProps={commonProps} />
    </div>
  );
}

export default AttributeDeck;
