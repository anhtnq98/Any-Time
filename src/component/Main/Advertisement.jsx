import img_advertisement from "../../assets/images/img_advertisement.png";
import img_advertisement_sp from "../../assets/images/img_advertisement_sp.png";
import MailButton from "./MailButton";
import PhoneButton from "./PhoneButton";

export default function Advertisement() {
  return (
    <div className="advertisement">
      <div className="inner">
        <div className="tlt_section">
          <h4>
            ANYTIME<span>エニタイム</span>
          </h4>
          <div className="dot">
            <span className="util_pc">.....</span>
            <span className="util_sp">......</span>
            <p>には嬉しいキャンペーンがいっぱい！</p>
          </div>
        </div>
        <div className="content">
          <div className="txt_desp">
            <div className="frist">
              <span>初 回</span>
              <h2>3</h2>
              <span className="percent">%</span>
              <span className="conversion">
                換金率<strong>UP!</strong>
              </span>
            </div>
            <div className="last">
              <span>
                <strong style={{ color: "white" }}>2</strong>回 目
              </span>
              <h2>3</h2>
              <p>
                <span>万円</span>キャッシュバック!
              </p>
            </div>
          </div>
          <p className="txt_note">
            個人事業主・経営者はいつでも換金率<span>3</span>
            <strong>%</strong>
            <span className="up">UP!</span>
          </p>
          <div className="thumb">
            <img
              className="util_pc"
              loading="lazy"
              src={img_advertisement}
              width="270"
              height="291"
              alt="img advertisement"
            />
            <img
              className="util_sp"
              loading="lazy"
              src={img_advertisement_sp}
              width="270"
              height="291"
              alt="img advertisement"
            />
          </div>
        </div>
        <div className="btn">
          <PhoneButton />
          <MailButton />
        </div>
      </div>
    </div>
  );
}
