// src/components/MainContent.js
import React from 'react';
import Footer from './Footer';
import MainContentIndicators from './MainContentIndicators';
import MainContentFunds from './MainContentFunds';

const MainContent = ({fundsAll,loadingC,vincularFondo,funds,desvincularFondo,bitacora,datauser}) => {
  return (
    <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-sm-12">
                <div class="home-tab">
                  <div class="d-sm-flex align-items-center justify-content-between border-bottom">
                     
                    <div>
                      <div class="btn-wrapper">
                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-content tab-content-basic">
                    <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                      <div class="row">
                        <div class="col-sm-12">
                            {/* Indicadores */}
                           {/*  <MainContentIndicators /> */}
                            {/* FIN Indicadores */}
                        </div>
                      </div>
                        
                       
                    {/* Fondos */}
                    <MainContentFunds fundsAll={fundsAll} loadingC={loadingC} vincularFondo={vincularFondo} funds={funds} desvincularFondo={desvincularFondo} bitacora={bitacora} datauser={datauser} />
                    {/* FIN Fondos */}
                       
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
          {/* partial:partials/_footer.html */}
          <Footer />
          {/* partial */}
        </div>
  );
};

export default MainContent;
