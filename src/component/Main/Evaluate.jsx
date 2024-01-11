import img_left from "../../assets/images/img_left.png";
import img_left_1 from "../../assets/images/img_left_1.png";
import img_right from "../../assets/images/img_right.png";
import img_right_1 from "../../assets/images/img_right_1.png";
import img_evaluate_1 from "../../assets/images/img_evaluate_1.png";
import conversion from "../../assets/images/conversion.png";
import pay from "../../assets/images/pay.png";
import time from "../../assets/images/time.png";
import shield from "../../assets/images/shield.png";
import holiday from "../../assets/images/holiday.png";
import point1 from "../../assets/images/point1.png";
import point2 from "../../assets/images/point2.png";
import point3 from "../../assets/images/point3.png";

export default function Evaluate() {
  return (
    <section className="section" id="evaluate">
      <div className="inner">
        <div className="thumb_list">
          <div className="thumb">
            <div className="thumb_left">
              <img
                loading="lazy"
                src={img_left}
                width="741"
                height="280"
                alt="img_left"
              />
            </div>
            <div className="thumb_right">
              <img
                loading="lazy"
                src={img_right}
                width="800"
                height="280"
                alt="img_right"
              />
            </div>
          </div>
        </div>
        <div className="list_evaluate">
          <ul>
            <li>
              <h4>
                <strong>1</strong>
                <span>初回</span>換金率UP
              </h4>
              <div className="thumb">
                <img
                  loading="lazy"
                  src={img_evaluate_1}
                  width="800"
                  height="280"
                  alt="img_evaluate_1"
                />
              </div>
              <p>
                どなたでも初回換金率が3％アップします。2回目は3万円キャッシュバックも！
              </p>
            </li>
            <li>
              <h4>
                <strong>2</strong>
                <span>後払いアプリ</span>対応
              </h4>
              <div className="thumb">
                <img
                  loading="lazy"
                  src={pay}
                  width="800"
                  height="280"
                  alt="pay"
                />
              </div>
              <p>
                ペイディやバンドルカードなどの後払いアプリの現金化にも対応しています。
              </p>
            </li>
            <li>
              <h4>
                <strong>3</strong>換金率<span>80％以上</span>保証
              </h4>
              <div className="thumb">
                <img
                  loading="lazy"
                  src={conversion}
                  width="800"
                  height="280"
                  alt="conversion"
                />
              </div>
              <p>
                クレジットカードは換金率80％を保証！後払いアプリは換金率70％を保証します。
              </p>
            </li>
            <li>
              <h4>
                <strong>4</strong>最短<span>3分</span>で振込
              </h4>
              <div className="thumb">
                <img
                  loading="lazy"
                  src={time}
                  width="800"
                  height="280"
                  alt="time"
                />
              </div>
              <p>
                初めての方でも最短3分でのお振込が可能！お急ぎの場合は気軽にお伝えください。
              </p>
            </li>
            <li>
              <h4>
                <strong>5</strong>カード事故<span>なし</span>
              </h4>
              <div className="thumb">
                <img
                  loading="lazy"
                  src={shield}
                  width="800"
                  height="280"
                  alt="shield"
                />
              </div>
              <p>
                営業開始以来カード事故は1件も発生していません。安心してご利用ください。
              </p>
            </li>
            <li>
              <h4>
                <strong>6</strong>
                <span>土日祝日</span>も営業
              </h4>
              <div className="thumb">
                <img
                  loading="lazy"
                  src={holiday}
                  width="800"
                  height="280"
                  alt="holiday"
                />
              </div>
              <p>
                土日祝日も通常通り営業します。年末年始や大型連休もご利用いただけます。
              </p>
            </li>
          </ul>
        </div>
        <div className="bg_inner">
          <div className="tlt_section">
            <h2>
              ANYTIME<span>エニタイム</span>
            </h2>
            <p>は誰でも利用OK!</p>
          </div>
          <div className="thumb">
            <div className="thumb_left">
              <img
                loading="lazy"
                src={img_left_1}
                width="937"
                height="293"
                alt="img_left_1"
              />
            </div>
            <div className="thumb_right">
              <img
                loading="lazy"
                src={img_right_1}
                width="961"
                height="357"
                alt="img_right_1"
              />
            </div>
          </div>
        </div>
        <div className="point">
          <ul>
            <li>
              <div className="thumb">
                <img
                  loading="lazy"
                  src={point1}
                  width="961"
                  height="357"
                  alt="point1"
                />
              </div>
            </li>
            <li>
              <div className="thumb">
                <img
                  loading="lazy"
                  src={point2}
                  width="961"
                  height="357"
                  alt="point2"
                />
              </div>
            </li>
            <li>
              <div className="thumb">
                <img
                  loading="lazy"
                  src={point3}
                  width="961"
                  height="357"
                  alt="point3"
                />
              </div>
            </li>
          </ul>
          <p>
            エニタイムのご利用に際して審査は行いません。
            <br />
            成人以上でカードの利用枠があれば、誰でも利用可能です。
            <br />
            商品送付もないので、家族にバレる心配はありません。
          </p>
        </div>
      </div>
    </section>
  );
}
