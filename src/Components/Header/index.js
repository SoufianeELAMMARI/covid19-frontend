import React, { useState, useEffect } from "react";
import _ from "lodash";
import { api } from "../../_config/config";

export const options = [
  { id: 1, value: "en", label: "English" },
  { id: 2, value: "ar", label: "العربية" },
  { id: 3, value: "fr", label: "Francais" },
  { id: 5, value: "es", label: "Spaniolă" },
];

export const Header = ({ onChange, setLanguage, language, image, t, i18n }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`${api}/all/countries`)
      .then(response => response.json())
      .then(data => {
        setCountries(_.sortBy(data, "Country"));
      });
  }, []);

  const changeLang = lang => {
    i18n.changeLanguage(lang.target.value);
    setLanguage(lang.target.value);
  };

  const changeCountry = country => {
    onChange(country.target.value);
  };
  return (
    <div>
      <header
        style={{
          backgroundImage: `url(${image})`
        }}
        className="header"
      >
        <div className="select-language">
          <select
            className="custom-option"
            value={language}
            onChange={changeLang}
          >
            {options.map(l =>
              <option value={l.value}>
                {l.label}
              </option>
            )}
          </select>
        </div>
        <div className="text-box ">
          <h1 className="heading-primary">
            <span className="heading-primary-main">
              {t("main.header.title")}
            </span>
            <span className="heading-primary-sub">
              {t("main.header.description")}
            </span>
          </h1>

          <div className="select-country">
            <select
              defaultValue={t("main.header.select.country")}
              className="custom-option"
              onChange={changeCountry}
            >
              <option style={{ display: "none" }} disabled>
                {t("main.header.select.country")}
              </option>
              {countries.map(c =>
                <option value={c.Slug}>
                  {c.Slug}
                </option>
              )}
            </select>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
