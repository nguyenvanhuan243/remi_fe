import React, { useState } from 'react';
import Header from 'components/Header/Loadable';
import Modal from 'components/Modal/Loadable';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import QRCode from "react-qr-code";

export default function WalletPage() {
  const [depositModalOpen, setDepositModalOpen] = useState(false);

  const copyAccountAddress = () => {
    const accountAddress = document.getElementById("AccountAddress").innerText;
    navigator.clipboard.writeText(accountAddress);
    console.log(accountAddress);
    Swal.fire({
      icon: 'success',
      text: 'Copied',
      position: 'top-right',
      timer: 500,
      toast: true,
      showConfirmButton: false,
    });
  };

  const handleDeposit = () => {
    setDepositModalOpen(true);
  };

  const DepositContent = () => {
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
        {
          depositModalOpen && <Modal
            isOpen={depositModalOpen}
            setIsOpen={setDepositModalOpen}
            title="Deposit"
            html={<DepositContent />}
          />
        }
        <div className="col-md-9">
          <div className="WalletPage-content">
            <div className="asset-overview_wrapper__ZvHi9">
              <div className="asset-overview_head__wVm1a">
                <h1>Crypto Wallet</h1>
                <div className="asset-overview_right__XFuMn">
                  <button
                    className="ant-btn ant-btn-primary"
                    onClick={handleDeposit}
                  >
                    <span>Deposit</span>
                  </button>
                  <button type="button" className="ant-btn ant-btn-default">
                    <span>Withdraw</span>
                  </button>
                  <button type="button" className="ant-btn ant-btn-default">
                    <span>Send</span>
                  </button>
                  <span className="MBiz__transfetFill___D60r6">
                    <button type="button" className="ant-btn ant-btn-default">
                      <span>Transfer</span>
                    </button>
                  </span>
                </div>
              </div>
              <div className="asset-overview_asset__MCWHh">
                <div className="asset-overview_title__yJgwU">
                  <span>Estimated Balance</span>
                </div>
                <div className="asset-overview_total__C3nmE">
                  <strong>0 USDT</strong>
                  <span>
                    ≈ 0.00 USD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
