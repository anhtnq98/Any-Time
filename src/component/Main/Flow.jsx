import img_flow_1 from '../../assets/images/img_flow_1.png'
import img_flow_2 from '../../assets/images/img_flow_2.png'
import img_flow_3 from '../../assets/images/img_flow_3.png'
import img_flow_4 from '../../assets/images/img_flow_4.png'

export default function Flow() {
  return (
   <section id="flow">
      <div className="inner" >
      <h2>Flow<span>エニタイムご利用の流れ</span></h2>
      <ul>
          <li>
              <span>STEP<strong>1</strong></span>
              <h4>お申込み</h4>
              <div className="thumb">
                  <img loading="lazy" src={img_flow_1} width="328" height="217"
                      alt="img_flow_1" />
              </div>
              <p>お申込みフォームからお申込みください。<br/> ご相談や入金額のお見積は無料です。</p>
          </li>
          <li>
              <span>STEP<strong>2</strong></span>
              <h4>ご本人様確認</h4>
              <div className="thumb">
                  <img loading="lazy"src={img_flow_2} width="328" height="217"
                      alt="img_flow_1" />
              </div>
              <p>初回利用時のみご本人様確認を行います。<br/> 免許証など写真付きの身分証をご用意ください。</p>
          </li>
          <li>
              <span>STEP<strong>3</strong></span>
              <h4>お買い物</h4>
              <div className="thumb">
                  <img loading="lazy" src={img_flow_3} width="328" height="217"
                      alt="img_flow_1" />
              </div>
              <p>当社指定のオンラインショップでカード決済をしていただきます。<br/> ご注文の商品が自宅に届くことはありません。</p>
          </li>
          <li>
              <span>STEP<strong>4</strong></span>
              <h4>指定口座へ入金</h4>
              <div className="thumb">
                  <img loading="lazy" src={img_flow_4} width="328" height="217"
                      alt="img_flow_1" />
              </div>
              <p>カード決済確認後に、お客様指定の口座にお振込みします。<br/> 初めてご利用の場合でも最短3分で入金をご確認いただけます。</p>
          </li>
      </ul>
  </div>
   </section>

  )
}
