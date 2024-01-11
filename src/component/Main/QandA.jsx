import { useState } from "react";

const itemQA = [
  {
    id: 1,
    question: "個人情報を悪用・流出したりはしませんか？",
    answer:
      "お客様から頂きました個人情報はお手続きのみに利用させていただきますので悪用されることは一切ございません。また、個人情報の流出には特に慎重に対応しており、セキュリティの高い回線で連絡いたしますので個人情報が流出することはございません。",
  },
  {
    id: 2,
    question: "どの後払いアプリが利用できますか？",
    answer:
      "エニタイムではカード情報の表示できる後払いアプリ（Paidy·バンドルカードなど）のすべてに対応しております。またその他の携帯キャリア決済などにも対応しておりますのでお困りの方はぜひお気軽にお問い合わせください。",
  },
  {
    id: 3,
    question: "本当に他社より高い換金率で現金化をしてくれるんですか？",
    answer:
      "エニタイムでは「お客様に1%でも高換金率を」をモットーに営業しております。その一環として人件費·店舗維持費を削減しており、その分をお客様に還元することで高換金率での現金化を実現させているのです。このことから2017年には顧客満足度97.2%を記録しており、多くのお客様にご満足の頂ける取引を提示しております。",
  },
  {
    id: 4,
    question: "クレジットカードが利用停止になったりしませんか？",
    answer:
      "エニタイムではクレジットカードの利用停止のリスクのある商品は一切取り扱わず、安全性の高い当社オリジナル商品でのお取引となります。そのため、創業以来、クレジットカードが利用停止になった方はひとりもおらず、安全な資金調達が可能となっておりますのでご安心ください。",
  },
  {
    id: 5,
    question: "家族·職場に現金化をしたことがバレたりしませんか？",
    answer:
      "エニタイムではご本人様以外に取引内容を口外することは一切ございません。お客様に安心してお手続きをして頂くためにも個人情報に関しましては徹底した管理をおこなっております。",
  },
  {
    id: 6,
    question: "キャンセル可能って本当ですか？？",
    answer:
      "はい、本当です。エニタイムではお客様がご満足して頂ける取引ができるように、たとえ取引の途中であってもキャンセルを承っております。また、キャンセル料を請求するようなことは一切ございませんのでご気軽にお問い合わせください。ただし、ご入金後のキャンセルは承っておりませんのでご了承ください。",
  },
  {
    id: 7,
    question: "支払い方法の変更は可能ですか？",
    answer:
      "はい、可能です。一括払い·分割払い·リボ払い·その他支払い方法への変更もできますので、ぜひご希望の返済プランをお選びください。ただし、稀にクレジットカードの種類によっては変更できない場合もございますので、スタッフにお問い合わせください。",
  },
  {
    id: 8,
    question: "来店しての手続きはできますか？",
    answer:
      "申し訳ございません。エニタイムではお客様に高換金率でお取引をするため経費を限界まで削減しているため店舗を構えておらず、来店でのお取引には対応しておりません。その分、好条件でのお取引を提示させて頂きますので、ぜひお問い合わせください。",
  },
];

export default function QandA() {
  const [clickDropDown, setClickDropDown] = useState()
  const handleClickDropDown = (id)=>{
    if(id===clickDropDown){
      setClickDropDown()
    }else{
      setClickDropDown(id)
    }
  }

  return (
    <section className="section" id="QA">
      <div className="inner">
        <h2>
          Q<strong>&</strong>A<span>エニタイムに関するよくある質問</span>
        </h2>
        <div className="list_faq">
          {itemQA.map((item) => (
            <div key={item.id} className="item_faq">
              <div onClick={()=>handleClickDropDown(item.id)} className={clickDropDown!==item.id?"item_q": "item_q active"}>
                <span>Q.</span>
                <h3>{item.question}</h3>
              </div>
              <div className={clickDropDown!==item.id?"item_a": "item_a active"}>
                <div className="wrapper">
                  <div className="txt_desp">
                    <span>A.</span>
                    <p>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
