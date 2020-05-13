import React from "react";
import * as moment from "moment";
import "moment/locale/ar-ma";
import "moment/locale/fr";
import "moment/locale/es";

const sign = x => {
  return x > 0 ? `+${x}` : x;
};
export const Cases = ({ t, language, statistics }) => {
  if (!statistics.old || !statistics.current) {
    return <div>Not Data</div>;
  }
  const date = moment(statistics.current.Date).locale(
    language === "ar" ? (language = "ar-ma") : language
  );
  return (
    <div>
      <div className="main">
        <div className="hide-main">
          <h1>
            {t("main.global.statistics")}
          </h1>
          <h2>
            {t("main.global.statistics.date", {
              day: date.format("Do"),
              month: date.format("MMMM"),
              year: date.format("YYYY"),
              time: date.format("HH:mm")
            })}
          </h2>
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img alt="" src="./img/test.jpg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    {t("main.total.cases", {
                      total:
                        statistics.current.Negative > 0
                          ? statistics.current.Negative
                          : "🆘"
                    })}
                  </h2>

                  <p className="card_text">
                    {statistics.current.Negative > 0
                      ? t("main.evolution.cases", {
                          rate: sign(
                            statistics.current.Confirmed +
                              statistics.current.Negative -
                              statistics.old.Confirmed -
                              statistics.old.Negative
                          ),
                          total:
                            statistics.old.Confirmed + statistics.old.Negative
                        })
                      : t("main.header.results.unavailable")}
                  </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img alt="" src="./img/confirmed.jpg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    {t("main.confirmed.cases", {
                      total: statistics.current.Confirmed
                    })}
                  </h2>
                  <p className="card_text">
                    {t("main.evolution.cases", {
                      rate: sign(
                        statistics.current.Confirmed - statistics.old.Confirmed
                      ),
                      total: statistics.old.Confirmed
                    })}
                  </p>
                </div>1
              </div>
            </li>

            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img alt="" src="./img/actif.jpg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    {t("main.active.cases", {
                      total: statistics.current.Active
                    })}
                  </h2>
                  <p className="card_text">
                    {t("main.evolution.cases", {
                      rate: sign(
                        statistics.current.Active - statistics.old.Active
                      ),
                      total: statistics.old.Active
                    })}
                  </p>
                </div>
              </div>
            </li>

            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img alt="" src="./img/death.jpg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    {t("main.deaths.cases", {
                      total: statistics.current.Deaths
                    })}
                  </h2>
                  <p className="card_text">
                    {t("main.evolution.cases", {
                      rate: sign(
                        statistics.current.Deaths - statistics.old.Deaths
                      ),
                      total: statistics.old.Deaths
                    })}
                  </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img alt="" src="./img/negatif.jpg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    {t("main.negative.cases", {
                      total:
                        statistics.current.Negative > 0
                          ? statistics.current.Negative
                          : "🆘"
                    })}
                  </h2>
                  <p className="card_text">
                    {statistics.current.Negative > 0
                      ? t("main.evolution.cases", {
                          rate: sign(
                            statistics.current.Negative -
                              statistics.old.Negative
                          ),
                          total: statistics.old.Negative
                        })
                      : t("main.header.results.unavailable")}
                  </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img alt="" src="./img/cure.jpg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    {t("main.recovered.cases", {
                      total: statistics.current.Recovered
                    })}
                  </h2>
                  <p className="card_text">
                    {t("main.evolution.cases", {
                      rate: sign(
                        statistics.current.Recovered - statistics.old.Recovered
                      ),
                      total: statistics.old.Recovered
                    })}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cases;
