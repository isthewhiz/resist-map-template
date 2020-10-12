import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export default (props) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  return (
    <div className="aemp-popupopen">
      <header id="aemp-titlebox" className="">
        <details open="">
          <h1 id="modal.title" data-i18n="modal.title">
            COVID-19 Global Housing Protetion Legislation and Housing Justice
            Action
          </h1>
          <summary data-i18n="titlebox.about-map">Map Key</summary>
          <div class="title-content-wrapper">
            <h2 data-i18n="titlebox.about-protections">
              Housing Protection Legislation
            </h2>
            <p data-i18n="titlebox.about-description">
              Where officials have passed (or tenants are working to pass)
              housing protection legislation during the COVID-19 crisis.
            </p>
            <div class="legendgrid">
              <div class="legendbox scale3"></div>
              <p class="legendlabel" data-i18n="policy-strength.3">
                Many tenant protections
              </p>
              <div class="legendbox scale2"></div>
              <p class="legendlabel" data-i18n="policy-strength.2">
                Some tenant protections
              </p>
              <div class="legendbox scale1"></div>
              <p class="legendlabel" data-i18n="policy-strength.1">
                Few tenant protections
              </p>
              <div class="legendbox missingdata"></div>
              <p class="legendlabel" data-i18n="policy-strength.missingData">
                Missing data
              </p>
              <div class="legendbox expired"></div>
              <p class="legendlabel" data-i18n="policy-strength.expired">
                Stripes indicate expired policies and evictions
              </p>
              <div class="legendbox-icons">
                <div class="rent-strike-icon"></div>
                <svg width="40" height="40">
                  <circle cx="20" cy="20" r="20"></circle>
                  <text x="12" y="25" class="cluster-svg-text">
                    19
                  </text>
                </svg>
              </div>
              <p
                class="legendlabel"
                data-i18n="layer-select.housingJusticeAction"
              >
                Housing Justice Actions
              </p>
            </div>
            <div class="legendgrid submissions">
              <h3 data-i18n="titlebox.submit">Submit data</h3>
              <h3 data-i18n="titlebox.resources.title">Resources</h3>
              <p>
                <a
                  href="https://airtable.com/shrMi8xtGqFIXtFyy"
                  target="_blank"
                  data-i18n="titlebox.legislation-form-intl"
                >
                  Global Housing Protection Legislation.
                </a>
              </p>
              <p>
                <a
                  href="https://cancelrent.us/"
                  target="_blank"
                  data-i18n="titlebox.resources.right-to-the-city"
                >
                  Demands from Right To The City Alliance and Homes For All.
                </a>
              </p>
              <p>
                <a
                  href="https://airtable.com/shrI5HxbTqEFbk89Y"
                  target="_blank"
                  data-i18n="titlebox.housing-action-form"
                >
                  Housing justice actions around the world.
                </a>
              </p>
              <p>
                <a
                  href="https://housingnotprofit.org/"
                  target="_blank"
                  data-i18n="titlebox.resources.hashtag-cancel-rent"
                >
                  Rent Strike resources for #CancelRent.
                </a>
              </p>
              <p></p>
              <a
                href="https://antievictionmap.com/"
                data-i18n="titlebox.aemp-name"
                class="aemp-logo"
              >
                The Anti-Eviction Mapping Project
              </a>
            </div>
          </div>
        </details>
      </header>
    </div>
  );
};

/*
    return(
        <div id="modal-container">
            <div className="modal">
            <div>
                <h4 data-i18n="modal.title" dangerouslySetInnerHTML={{__html: t("modal.title")}}></h4>
                <a onClick={e => dispatch({ type: "ui:modal:hide" })}
                   href="#close" className="modal-close">×</a>
            </div>
            <aside>
                <p>
                    <span data-i18n="modal.warning" dangerouslySetInnerHTML={{__html: t("modal.warning")}}></span>
                </p>
                <p data-i18n="modal.content.paragraph-1" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-1")}}></p>
                <p data-i18n="modal.content.paragraph-2" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-2")}}></p>
                {/* {<!-- This next paragraph can be added once the data is ready.
                This is a placeholder for now -->
                <!-- <p data-i18n="modal.content.paragraph-3"></p> -->} }
                <p data-i18n="modal.content.paragraph-4" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-4")}}></p>
                <p data-i18n="modal.content.paragraph-5" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-5")}}></p>
                <p data-i18n="modal.content.paragraph-6" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-6")}}></p>
            </aside>
            </div>
        </div>
    )
} 
*/
