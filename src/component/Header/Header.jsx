import { useState } from "react";

export default function Header() {
  const [activeMenusp, setActiveMenusp] = useState(false);

  return (
    <header id="header">
      <div className="wrap">
        <div className="header-top">
          <div className="logo">
            <h1>
              ANYTIME
              <p>エニタイム</p>
            </h1>
          </div>

          <div className="util_pc_flex">
            <nav className="nav_pc util_pc">
              <ul>
                <li>
                  <a href="#evaluate">現金化が不安な方へ</a>
                </li>
                <li>
                  <a href="#flow">申込手順</a>
                </li>
                <li>
                  <a href="#rate">換金率</a>
                </li>
                <li>
                  <a href="#voices">お客様の声</a>
                </li>
                <li>
                  <a href="#QA">よくある質問</a>
                </li>
              </ul>
            </nav>

            <nav className="nav_sp util_sp">
              <div className="inner">
                <ul>
                  <li>
                    <a href="#evaluate">現金化が不安な方へ</a>
                  </li>
                  <li>
                    <a href="#flow">申込手順</a>
                  </li>
                  <li>
                    <a href="#rate">換金率</a>
                  </li>
                  <li>
                    <a href="#voices">お客様の声</a>
                  </li>
                  <li>
                    <a href="#QA">よくある質問</a>
                  </li>
                </ul>

                <div className="list_sns">
                  <a href="#">お申込みはこちら</a>
                </div>
              </div>
            </nav>
            <a href="#" className="btn_contact">
              お申込みはこちら
            </a>
          </div>

          <div className="util_sp">
            <div
              onClick={() => setActiveMenusp(!activeMenusp)}
              className={activeMenusp ? "menusp active" : "menusp"}
            >
              <div className="line">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <nav
          className={activeMenusp ? "nav_sp util_sp active" : "nav_sp util_sp"}
        >
          <div className="inner">
            <ul>
              <li>
                <a href="#evaluate">現金化が不安な方へ</a>
              </li>
              <li>
                <a href="#flow">申込手順</a>
              </li>
              <li>
                <a href="#rate">換金率</a>
              </li>
              <li>
                <a href="#voices">お客様の声</a>
              </li>
              <li>
                <a href="#QA">よくある質問</a>
              </li>
            </ul>

            <div className="list_sns">
              <a href="#">お申込みはこちら</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
