import React, { useState, useEffect } from "react";
import Header from "../Header";
import Cases from "../Cases";
import { withTranslation } from "react-i18next";
import _ from "lodash";
import { api, pexelsApi, pexelsToken } from "../../_config/config";
const App = ({ t, i18n }) => {
  const [country, setCountry] = useState("morocco");
  const [statistics, setStatistics] = useState({});
  const [language, setLanguage] = useState("en");
  const [Image, setImage] = useState("/img/sud.jpg");

  useEffect(
    () => {
      const header = {
        headers: {
          Authorization: pexelsToken
        }
      };
      fetch(`${pexelsApi}/v1/search?query=${country}`, header)
        .then(response => response.json())
        .then(data => {
          if (country === "morocco" || _.isEmpty(data.photos)) {
            setImage("/img/sud.jpg");
          } else {
            setImage(
              data.photos[Math.floor(Math.random() * (data.photos.length - 1))]
                .src.landscape
            );
          }
        });

      fetch(`${api}/live/covid/${country}`)
        .then(response => response.json())
        .then(data => {
          let obj = {};
          obj.current = _.last(data);
          obj.old = data[data.length - 2];
          setStatistics(obj);
        });
    },
    [country]
  );

  return (
    <div className="App">
      <Header
        onChange={setCountry}
        setLanguage={setLanguage}
        language={language}
        image={Image}
        t={t}
        i18n={i18n}
      />
      <Cases t={t} language={language} statistics={statistics} />
    </div>
  );
};

export default withTranslation()(App);
