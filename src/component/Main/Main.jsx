import banner from "../../assets/images/banner.jpg";
import banner_sp from "../../assets/images/banner_sp.jpg";
import Advertisement from "./Advertisement";
import Company from "./Company";
import Evaluate from "./Evaluate";
import Flow from "./Flow";
import LastMain from "./LastMain";
import QandA from "./QandA";
import Rate from "./Rate";
import Voices from "./Voices";

export default function Main() {
  return (
    <main>
      <section className="banner">
        <div className="thumb">
          <img
            className="until_pc"
            loading="lazy"
            src={banner}
            width="1920"
            height="874"
            alt="banner"
          />
          <img
            className="until_sp"
            loading="lazy"
            src={banner_sp}
            width="390"
            height="49"
            alt="banner"
          />
        </div>
      </section>
      <Advertisement />
      <Evaluate />
      <Advertisement />
      <Rate/>
      <Voices/>
      <Advertisement />
      <Flow/>
      <QandA/>
      <Advertisement />
      <Company/>
      <LastMain/>
    </main>
  );
}
