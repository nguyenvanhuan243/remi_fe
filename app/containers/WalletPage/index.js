import React, { useState } from 'react';
import Header from 'components/Header/Loadable';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TextField from '@material-ui/core/TextField';
import MovieAPI from '../../api/backend/movies';
import UserUtils from '../../utils/user/UserUtils';
export default function WalletPage() {
  const [movieUrl, setMovieUrl] = useState("")
  const onSubmit = e => {
    e.preventDefault();
    const params = {
      url: movieUrl
    };
    MovieAPI.create(params, UserUtils.getAccessToken()).then(res => {
      if (res.status === 201) Swal(res.statusText, 'Success.', 'success');
    }).catch(e => Swal(e.response.statusText, e.message, 'warning'));
  }
  return (
    <React.Fragment>
      <Header />
      <div className="WalletPage-container container">
        <div className="col-md-9">
          <div className="WalletPage-content">
            <div className="layout_container___Dq4R">
              <div className="spot_wrapper__ATz3a">
                <div className="asset-overview_wrapper__ZvHi9">
                  <div className="asset-overview_head__wVm1a">
                    <h1>
                      Crypto Wallet
                    </h1>
                    <div className="asset-overview_right__XFuMn">
                      <button type="button" className="ant-btn ant-btn-primary">
                        <span>Deposit</span>
                      </button>
                      <button type="button" className="ant-btn ant-btn-default">
                        <span>Withdraw</span></button><button type="button" className="ant-btn ant-btn-default">
                        <span>Send</span>
                      </button>
                        <span className="undefined MBiz__transfetFill___D60r6">
                          <button type="button" className="ant-btn ant-btn-default">
                            <span>Transfer</span>
                          </button>
                        </span>
                    </div>
                  </div>
                  <div className="asset-overview_asset__MCWHh">
                    <div>
                      <div className="asset-overview_title__yJgwU">
                        <span>Estimated Balance </span>
                        <svg className="sc-eqUAAy cMqsAc mx-icon" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="EyeFilled">
                          <path d="M378.94053807 503.95578476a130.64915101 130.64915101 0 1 0 261.29830205 0 130.64915101 130.64915101 0 0 0-261.29830205 0z m637.10184727-30.12419915C905.47603376 240.88220762 738.32278873 123.65857446 514.24978618 123.65857446 290.06582896 123.65857446 123.02353863 240.88220762 12.34623236 473.9425403a70.34527536 70.34527536 0 0 0 0 60.08196627c110.62182893 232.94937797 277.77507395 350.17301114 501.84807649 350.17301112 224.12847988 0 391.22624756-117.22363318 501.79259915-350.28396582 8.98733013-18.86229781 8.98733013-40.83132702 0-60.08196626z m-506.50817359 235.39038121a205.26618207 205.26618207 0 1 1 0-410.58784147 205.26618207 205.26618207 0 0 1 0 410.58784147z" />
                        </svg>
                      </div>
                      <div className="asset-overview_total__C3nmE">
                        <div className="asset-overview_totalSymbol__CwWhp">
                          <strong data-testid="total">0 USDT</strong>
                          <div className="ant-dropdown-trigger asset-overview_assetDropdown__6yJjC">
                            <svg className="sc-eqUAAy cMqsAc mx-icon" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="CaretDownOutlined">
                              <path d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z" />
                            </svg>
                          </div>
                        </div>
                        <div className="asset-overview_fiat__LKJ3G">
                          <span className><span style={{ marginInlineEnd: '4px' }}>≈</span><span dir="ltr"><span dir="ltr">0.00</span></span></span> <span className="asset-overview_baseFiat__pvfSb">USD</span>
                          <div className="ant-dropdown-trigger select-fiat_dropdown__Xx_oK">
                            <svg className="sc-eqUAAy cMqsAc mx-icon" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="CaretDownOutlined">
                              <path d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}