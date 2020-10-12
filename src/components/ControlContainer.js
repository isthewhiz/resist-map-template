import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
/*
export default (props) => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    return(
        <div class="leaflet-top leaflet-right">
            <div class="leaflet-control-layers leaflet-control-layers-expanded leaflet-control" aria-haspopup="true">
            <a class="leaflet-control-layers-toggle" href="#" title="Layers"></a>
            <section class="leaflet-control-layers-list">
                <div class="leaflet-control-layers-base"></div>
                <div class="leaflet-control-layers-separator" style="display: none;"></div> 
                <div class="leaflet-control-layers-overlays">
                    <label>
                        <div>
                            <span> 
                                ::before
                                City Protections
                            </span>
                        </div>
                    </label>
                    <label>
                    <div>
                        <span>
                         ::before
                         County Protections    
                        </span>
                    </div>
 
                    </label>
                    <label>
                   <div>
                        <span>
                         ::before
                         State/Province Protections
                        </span>
                    </div>
                    </label>
                    <label>
                   <div>
                        <span>
                         ::before
                         National Protections
                        </span>
                    </div>
                    </label>
                    <label>
                   <div>
                        <span>
                         ::before
                         Housing Justice Actions 
                        </span>
                    </div>
                    </label>
                </div>
            </section>
           </div>
        </div>
    )
}
            <div>
                <h4 data-i18n="modal.title" dangerouslySetInnerHTML={{__html: t("modal.title")}}></h4>
                <a onClick={e => dispatch({ type: "ui:modal:hide" })}
                   href="#close" className="modal-close">×</a>
            </div>
            */
          