import img_2 from "../../assets/images/img_2.png";

export default function MailButton(props) {
  // eslint-disable-next-line react/prop-types
  const thumb = props.thumb;
  return (
    <div className="mail">
      <div
        style={{ display: thumb === "thumb" ? "flex" : "none" }}
        className="thumb"
      >
        <img loading="lazy" src={img_2} width="297" height="106" alt="img_2" />
      </div>
      <a href="">オンライン申込み</a>
    </div>
  );
}
