import "./Structure.scss";

import profile from "../../img/Profile.svg";
import profile_muted from "../../img/Profile_Muted.svg";
import avatar from "../../img/Avatar.svg";

import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar";

function Structure() {
  return (
    <div className="structure">
      <Navbar />  
      <div className="smt">
        <Sidebar />  
        <div className="my_structure">
            <h1>Моя структура</h1>
            <div className="my_structure__profile">
              <img src={profile} alt="" />
              <h3>KRIS_ANFALOVA</h3>
              <div className="sum_of_structure">
                  <p>Всего в структуре <strong>56467</strong></p>
              </div>
            </div>
            <div className="my_structure__blocks">
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>1</strong></p>
                    <p><strong>133</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={avatar} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>2</strong></p>
                    <p><strong>129</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>3</strong></p>
                    <p><strong>5455</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>4</strong></p>
                    <p><strong>43233</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>5</strong></p>
                    <p><strong>4500</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>6</strong></p>
                    <p><strong>43233</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>7</strong></p>
                    <p><strong>4500</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>14</strong></p>
                    <p><strong>43233</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>13</strong></p>
                    <p><strong>4500</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>12</strong></p>
                    <p><strong>43233</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>11</strong></p>
                    <p><strong>4500</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>10</strong></p>
                    <p><strong>43233</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>9</strong></p>
                    <p><strong>4500</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            <div className="block_structure">
                <div className="block_structure__numbers">
                    <p><strong>8</strong></p>
                    <p><strong>43233</strong></p>
                </div>
                <div className="line"></div>
                <div className="block_structure__letters">
                    <p>Уровень выплат</p>
                    <p>Активных партнеров</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
                <div className="partner">
                    <img src={profile_muted} alt="" />
                    <p>kris_anfalova</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Structure;
