import React, { useState } from 'react';
import Header from 'components/Header/Loadable';
import Button from '@material-ui/core/Button';
import Modal from 'components/Modal/Loadable';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TextField from '@material-ui/core/TextField';
import MovieAPI from '../../api/backend/movies';
import UserUtils from '../../utils/user/UserUtils';
import QRCode from "react-qr-code";
export default function WalletPage() {

  function copyAccountAddress() {
    let AccountAddress = document.getElementById("AccountAddress").innerText;
    navigator.clipboard.writeText(AccountAddress);
    console.log(AccountAddress);
    toast.success("Copied", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  const [movieUrl, setMovieUrl] = useState("")
  const [deposit, setDeposit] = useState(false)
  const onSubmit = e => {
    e.preventDefault();
    const params = {
      url: movieUrl
    };
    MovieAPI.create(params, UserUtils.getAccessToken()).then(res => {
      if (res.status === 201) Swal(res.statusText, 'Success.', 'success');
    }).catch(e => Swal(e.response.statusText, e.message, 'warning'));
  }

  const DepositHTML = () => {
    return (
      <div
        data-v-29a6915a=""
        data-v-161fb8e9=""
        className="address-panel flex-box flex-column items-start"
        id="btn_copy_0"
        data-v-6d2b2fb8=""
      >
        <span data-v-29a6915a="" class="time">
          Let choose right BSC(BEP 20) Network and address
        </span>
        <div data-v-29a6915a="" class="address-qr-box">
          <div
            data-v-7bd56927=""
            data-v-29a6915a=""
            value="0xaE61A6a0ca00D12d6f8192ea93F25fd3573c36C5"
            level="Q"
            background="#fff"
            foreground="#000"
            class="wallet-qrcode address-qr"
          >
            <QRCode
              size={256}
              style={{
                height: 'auto',
                maxWidth: '100%',
                width: '100%',
              }}
              value="0x5987d95D485B7a8aB8BB736c081434cbAf7e9C62"
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
        <div data-v-29a6915a="" class="address-box">
          <span data-v-29a6915a="" class="title">
            Address
          </span>
          <div data-v-29a6915a="" class="address-wrap">
            <div data-v-29a6915a="" class="address">
              <span data-v-29a6915a="" id="AccountAddress">
                0x5987d95D485B7a8aB8BB736c081434cbAf7e9C62
              </span>
            </div>
            <div
              data-v-ff97a62a=""
              data-v-f5e83265=""
              data-v-29a6915a=""
              class="wrapper tooltip-wrap tip copy first cursor-question"
            >
              <div onClick={() => { copyAccountAddress() }} data-v-ff97a62a="" class="content">
                <button
                  data-v-38303e38=""
                  data-v-f5e83265=""
                  class="primary-regular icon-button small input-copy"
                  data-v-ff97a62a=""
                >
                  <div data-v-38303e38="" class="icon">
                    <div
                      data-v-f5e83265=""
                      data-v-38303e38=""
                      class="button-wrapper"
                    >
                      <svg
                        data-v-3ca17537=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        role="presentation"
                        fill="currentColor"
                        fill-rule="evenodd"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        aria-label="Copy Icon"
                        class="svg-icon"
                        data-v-f5e83265=""
                        data-v-38303e38=""
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.4171 1H4.40857C4.08571 1 3.82571 1.26 3.82571 1.58286V3.30571H1.58286C1.26 3.30571 1 3.56571 1 3.88857V14.4171C1 14.74 1.26 15 1.58286 15H11.5914C11.9143 15 12.1743 14.74 12.1743 14.4171V12.6943H14.4171C14.74 12.6943 15 12.4343 15 12.1114V1.58286C15 1.26 14.7371 1 14.4171 1ZM11.006 13.8344H2.16602V4.47156H11.006V13.8344ZM12.1711 11.5289H13.8283V2.16602H4.98828V3.30602H11.5883C11.9111 3.30602 12.1711 3.56602 12.1711 3.88887V11.5289ZM4.13461 8.25483H8.64033C8.96319 8.25483 9.22319 7.99483 9.22319 7.67197C9.22319 7.34911 8.96319 7.08911 8.64033 7.08911H4.13461C3.81176 7.08911 3.55176 7.34911 3.55176 7.67197C3.55176 7.99483 3.81176 8.25483 4.13461 8.25483ZM8.64033 11.5258H4.13461C3.81176 11.5258 3.55176 11.263 3.55176 10.943C3.55176 10.6201 3.81176 10.3601 4.13461 10.3601H8.64033C8.96319 10.3601 9.22319 10.6201 9.22319 10.943C9.22319 11.2658 8.96319 11.5258 8.64033 11.5258Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
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
                    {
                      deposit ? <Modal
                      isOpen={deposit}
                      setIsOpen={setDeposit}
                      title="Deposit"
                      html={DepositHTML()}
                    /> : null
                    } 
                    <div className="asset-overview_right__XFuMn">
                      <button onClick={() => setDeposit(true)} type="button" className="ant-btn ant-btn-primary">
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
    </div>
  );
}