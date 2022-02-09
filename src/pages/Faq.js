import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../myimgs/Logo-trans.png";
import ProfileImage from "../myimgs/account-pic.png";

const Faq = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <div className="aboutpage">
      <div className="mblnavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-pri shadow-md">
          <div className="navmain">
            <a className="navbar-brand text-primary mr-0">
              <img className="logo2" src={logo} alt={"logo"} />
            </a>
            <div className="form-inline ml-auto">
              <div
                className="btn btn-primary btntoggle"
                onClick={ToggleSidebar}
              >
                <i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <a className="">
              <img className="logo2" src={logo} alt={"logo"} />
            </a>
            <div className="btn btn-primary btntoggle" onClick={ToggleSidebar}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a className="sd-link">Menu Item 1</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 2</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 3</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 4</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 5</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 6</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 7</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 8</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
      <div className="topbarpage">
        <div className="logodiv">
          <img src={logo} alt={"logo"} />
          <span className="line1"></span>
        </div>
        <div className="search_field">
          <i className="fas fa-search searchico"></i>
          <input
            type="text"
            className="inputsearch"
            placeholder="Search names or addresses"
          />
          <select
            className="form-select select1"
            aria-label="Default select example"
          >
            <option selected>EN</option>
            <option value="1">ES</option>
            <option value="2">JN</option>
          </select>
          <button className="searchbtn">Search</button>
        </div>
      </div>
      <div className="container-fluid mtop1">
        <div className="row mainrow">
          <div className="col-md-2">
            <div className="sidenavbarfix">
              <div className="accountprof">
                <div>
                  <img
                    className="profilepic"
                    src={ProfileImage}
                    alt={"ProfileImage"}
                  />
                </div>
                <div>
                  <h1>0xF7f...3c2A</h1>
                  <h2>
                    <span></span> Main Network
                  </h2>
                  <button>Disconnected</button>
                </div>
              </div>

              <div className="navtabslink">
                <ul>
                  <li>
                    <NavLink exact to="/my-account">
                      <svg
                        width="21"
                        height="19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill-rule="evenodd">
                          <rect width="18" height="5" rx="2.5"></rect>
                          <rect y="14" width="14" height="5" rx="2.5"></rect>
                          <rect y="7" width="21" height="5" rx="2.5"></rect>
                        </g>
                      </svg>
                      <span>My Account</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/favourites">
                      <svg width="23" height="21">
                        <path
                          d="M10.369 1.737a5.771 5.771 0 0 0-8.253 0l-.184.187C-.644 4.54-.643 8.787 1.931 11.402l8.834 8.977a1.002 1.002 0 0 0 1.429 0l8.834-8.977c2.575-2.616 2.576-6.859-.002-9.478l-.183-.187a5.77 5.77 0 0 0-8.253 0l-.75.763a.504.504 0 0 1-.72 0l-.751-.763z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Favourites</span>
                    </NavLink>
                  </li>
                  <li className="activeme">
                    <NavLink exact to="/faq">
                      <svg width="22px" height="22px">
                        <title>Fill 1</title>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="2.4:-My-Account---Point-/-Reverse-Record-is-Set-Copy"
                            transform="translate(-81.000000, -423.000000)"
                            fill="#C7D3E3"
                          >
                            <g
                              id="Side-Nav"
                              transform="translate(80.000000, 292.000000)"
                            >
                              <path d="M15.4276146,141.217892 C15.2318393,141.599157 14.9979392,141.90829 14.7259145,142.147354 C14.4538897,142.387447 14.1798042,142.626511 13.9026275,142.865574 C13.6244204,143.105667 13.3884596,143.393162 13.1926842,143.730117 C12.9969088,144.068103 12.8979907,144.45452 12.8979907,144.889368 L11.2019578,144.872881 C11.2019578,144.296862 11.2998454,143.796066 11.4956208,143.371522 C11.6913962,142.946979 11.9283874,142.611054 12.2055641,142.359625 C12.4827409,142.110258 12.7568264,141.876347 13.0288511,141.657892 C13.3008758,141.440468 13.5347759,141.188009 13.7305513,140.899485 C13.9263266,140.611991 14.0242143,140.282248 14.0242143,139.912319 C14.0242143,139.422857 13.8665636,139.028197 13.5512622,138.729368 C13.2359608,138.430539 12.7949511,138.280094 12.2292633,138.280094 C11.5656878,138.280094 11.0515198,138.431569 10.6877898,138.816956 C10.3230294,139.203372 10.1416795,139.384731 10.1416795,140.415176 L8.44461618,140.415176 C8.44461618,139.384731 8.79185987,138.352225 9.48840804,137.666979 C10.1849562,136.981733 11.0978877,136.660234 12.2292633,136.660234 C13.3276662,136.660234 14.1849562,136.972459 14.800103,137.5763 C15.4142195,138.180141 15.7212777,138.960187 15.7212777,139.907166 C15.7212777,140.396628 15.62339,140.836628 15.4276146,141.217892 M12.9072643,148.144543 C12.6620299,148.378454 12.3704276,148.494895 12.0345183,148.494895 C11.6852138,148.494895 11.3946419,148.378454 11.1607419,148.144543 C10.9268418,147.910632 10.810407,147.630351 10.810407,147.304731 C10.810407,146.97808 10.9268418,146.694707 11.1607419,146.455644 C11.3946419,146.216581 11.6852138,146.097049 12.0345183,146.097049 C12.3704276,146.097049 12.6620299,146.216581 12.9072643,146.455644 C13.1514683,146.694707 13.2740855,146.97808 13.2740855,147.304731 C13.2740855,147.630351 13.1514683,147.910632 12.9072643,148.144543 M12.0005152,131 C5.92529624,131 1,135.924496 1,142 C1,148.075504 5.92529624,153 12.0005152,153 C18.0747038,153 23,148.075504 23,142 C23,135.924496 18.0747038,131 12.0005152,131"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span>FAQ</span>
                    </NavLink>
                  </li>
                  <li>
                    <a>
                      <svg width="18" height="18">
                        <g
                          id="Designs"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Records-V1"
                            transform="translate(-1177.000000, -525.000000)"
                            fill="#ADBBCD"
                          >
                            <path
                              d="M1186,543 C1181.02944,543 1177,538.970563 1177,534 C1177,529.029437 1181.02944,525 1186,525 C1190.97056,525 1195,529.029437 1195,534 C1195,538.970563 1190.97056,543 1186,543 Z M1185,532 L1185,538.5 L1187,538.5 L1187,532 L1185,532 Z M1186,531 C1186.55228,531 1187,530.552285 1187,530 C1187,529.447715 1186.55228,529 1186,529 C1185.44772,529 1185,529.447715 1185,530 C1185,530.552285 1185.44772,531 1186,531 Z"
                              id="info-icon"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span>About</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="fadqdetails">
              <div className="css-1nl5wh e1rbwmjb6">
                <h2 className="css-1ww4pnb e5hqhaa1">FAQ</h2>
                <h2 className="css-1jywloj e1rbwmjb0">Before You register</h2>
                <h3
                  id="is-ens-only-for-storing-an-ethereum-address"
                  className="css-pngyth e1rbwmjb1"
                >
                  Is ENS only for storing an Ethereum address?
                </h3>
                <a
                  href="#is-ens-only-for-storing-an-ethereum-address"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  No, you can store the addresses of over 100 blockchains, a
                  content hash of a decentralized website, profile information
                  such as an avatar and Twitter handle, and more.
                </p>
                <h3
                  id="can-i-use-an-ens-name-to-point-to-my-website"
                  className="css-pngyth e1rbwmjb1"
                >
                  Can I use an ENS name to point to my website?
                </h3>
                <a
                  href="#can-i-use-an-ens-name-to-point-to-my-website"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  Though ENS can technically store anything, there aren't many
                  third party tools and applications which resolve IP addresses
                  attached to ENS.
                  <br />
                  Instead, we suggest hosting your static html/css/images on
                  IPFS and put the hash in your ENS name's Content record. Then
                  it can be resolved by ENS-aware browsers (e.g. Opera), browser
                  extensions (Metamask), or any browser with ".link" or ".limo"
                  appended to the end (e.g. matoken.eth.link or
                  matoken.eth.limo).
                  <br />
                  If you want to redirect your ENS name to an existing website,
                  you could write a html file containing JavaScript logic to
                  redirect to your website, upload the file into ipfs using
                  services like <a href="https://pinata.cloud/">IPFS Pinata</a>,
                  then set the CID to your contenthash. See the source code of
                  depositcontract.eth.link as an example.
                </p>
                <h3
                  id="what-is-the-maximum-length-of-a-name-i-can-register"
                  className="css-pngyth e1rbwmjb1"
                >
                  What is the maximum length of a name I can register?
                </h3>
                <a
                  href="#what-is-the-maximum-length-of-a-name-i-can-register"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  There is no limit on the name length.
                </p>
                <h3
                  id="can-you-have-names-with-emojis"
                  className="css-pngyth e1rbwmjb1"
                >
                  Can you have names with emojis?
                </h3>
                <a
                  href="#can-you-have-names-with-emojis"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">Yes.</p>
                <h3
                  id="how-much-does-it-cost-to-register-a-.eth-name"
                  className="css-pngyth e1rbwmjb1"
                >
                  How much does it cost to register a .eth name?
                </h3>
                <a
                  href="#how-much-does-it-cost-to-register-a-.eth-name"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  Currently, registration costs are set at the following prices:
                  <ul>
                    <li>5+ character .eth names: $5 in ETH per year.</li>
                    <li>4 character .eth names: $160 in ETH per year.</li>
                    <li>3 character .eth names $640 in ETH per year.</li>
                  </ul>
                  3 and 4 character names have 'premium' pricing to reflect the
                  small number of these names available.
                  <br />
                  Also, if the name was previously owned by someone but recently
                  released, it has a temporary decreasing premium to prevent
                  squatters snatching up names.
                </p>
                <h3
                  id="how-much-gas-does-it-cost-to-register-and-extend-registration"
                  className="css-pngyth e1rbwmjb1"
                >
                  How much gas does it cost to register and extend registration?
                </h3>
                <a
                  href="#how-much-gas-does-it-cost-to-register-and-extend-registration"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  It depends on the gas price. You can check the historical
                  registration and extending transaction costs
                  <a href="https://explore.duneanalytics.com/public/dashboards/48pBVvSxRNVjSE8Ing1uOrCtjD4r3WmV0v5KpS05">
                    {" "}
                    here{" "}
                  </a>
                  . "Transaction cost (USD)" query will tell you how much it
                  costs to register (commit + registerWithConfig) and extend
                  registration.
                  <br />
                  Please bear in mind that "registerWithConfig" combines 3
                  transactions (register, set resolver and set eth address)
                  hence the gas cost is relatively expensive.
                </p>
                <h3
                  id="can-i-register-names-other-than-.eth"
                  className="css-pngyth e1rbwmjb1"
                >
                  Can I register names other than .eth?
                </h3>
                <a
                  href="#can-i-register-names-other-than-.eth"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  Yes, you can import into ENS any DNS name with the required
                  DNSSEC.
                  <br />
                  Please refer to our{" "}
                  <a href="https://docs.ens.domains/dns-registrar-guide">
                    guide
                  </a>{" "}
                  for more detail.
                </p>
                <h2 className="css-1jywloj e1rbwmjb0">When you register</h2>
                <h3
                  id="at-step-1-the-transaction-was-slow-so-i-speeded-up"
                  className="css-pngyth e1rbwmjb1"
                >
                  At step 1, the transaction was slow so I speeded up
                </h3>
                <a
                  href="#at-step-1-the-transaction-was-slow-so-i-speeded-up"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  Our app cannot currently detect that you sped up the
                  transaction. Please refresh the page and start from step 1
                  again.
                </p>
                <h3 id="i-am-stuck-at-step-2" className="css-pngyth e1rbwmjb1">
                  I am stuck at step 2
                </h3>
                <a href="#i-am-stuck-at-step-2" className="css-0 e1rbwmjb3">
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  At times, the counter waits for up to a minute at the end of
                  step 2 to make sure that the Ethereum blockchain has
                  progressed. If this continues for more than 5 min after moving
                  to step 2, please contact us on Discord.
                  <br />
                  Note that if you leave it at step 2 for more than 7 days, it
                  gets reset and you have to start from step 1 again.
                </p>
                <h3
                  id="my-transaction-at-step-3-failed"
                  className="css-pngyth e1rbwmjb1"
                >
                  My transaction at step 3 failed
                </h3>
                <a
                  href="#my-transaction-at-step-3-failed"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  This happens occasionally when the USD price changes and you
                  haven't registered with enough ETH. Please try again from step
                  3.
                  <br />
                  Please also be noted that the registration step will expire if
                  you don't complete within 24 hrs and you have to start from
                  step 1 again.
                </p>
                <h3
                  id="i-cannot-see-the-names-i-registered-on-opensea-nor-on-my-wallet"
                  className="css-pngyth e1rbwmjb1"
                >
                  I cannot see the names I registered on OpenSea nor on my
                  wallet
                </h3>
                <a
                  href="#i-cannot-see-the-names-i-registered-on-opensea-nor-on-my-wallet"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  This occasionally happens when OpenSea is under a heavy load.
                  You may also not find your name under the NFT section of your
                  wallet, as many wallets fetch metadata from OpenSea.
                  <br />
                  As long as you can see your registered name under "My Account"
                  on our site or your ETH address under the name section, your
                  name is registered successfully.
                </p>
                <h3
                  id="is-it-safe-to-refresh-the-page-close-the-browser-or-switch-to-different-browsermachine"
                  className="css-pngyth e1rbwmjb1"
                >
                  Is it safe to refresh the page, close the browser, or switch
                  to different browser/machine?
                </h3>
                <a
                  href="#is-it-safe-to-refresh-the-page-close-the-browser-or-switch-to-different-browsermachine"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  It is safe to refresh the page or close the browser once step
                  1 transaction is complete. However you cannot switch to
                  different devices or machines because it needs a locally
                  stored “secret” which will be used at step 3. Please also do
                  not delete browser history during the registration.
                </p>
                <h2 className="css-1jywloj e1rbwmjb0">After you register</h2>
                <h3
                  id="what-is-the-difference-between-the-registrant-and-controller"
                  className="css-pngyth e1rbwmjb1"
                >
                  What is the difference between the Registrant and Controller?
                </h3>
                <a
                  href="#what-is-the-difference-between-the-registrant-and-controller"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  If your Ethereum address is set as the Controller you can
                  change the resolver and add/edit records. Some dapps (eg:
                  Fleek, OpenSea) set themselves as the Controller so they can
                  update records on your behalf.
                  <br />
                  The Registrant only exists on ".eth" names and it allows you
                  to change the Controller. If you transfer the Registrant to an
                  address you don't own, you lose the ownership of the name.
                </p>
                <h3 id="what-is-a-resolver" className="css-pngyth e1rbwmjb1">
                  What is a Resolver?
                </h3>
                <a href="#what-is-a-resolver" className="css-0 e1rbwmjb3">
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  A Resolver is a smart contract that holds records. Names are
                  set by default to the Public Resolver managed by the ENS team
                  and has all the standard ENS record types. You can set your
                  Resolver to a custom resolver contract if you,d like.
                </p>
                <h3
                  id="what-is-a-primary-ens-name-record"
                  className="css-pngyth e1rbwmjb1"
                >
                  What is a Primary ENS Name record?
                </h3>
                <a
                  href="#what-is-a-primary-ens-name-record"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  A Primary ENS Name record (formerly Reverse Record) makes your
                  Ethereum address point to an ENS name. This allows dapps to
                  find and display your ENS name when you connect to them with
                  your Ethereum account. This can only be set by you so it is
                  not set automatically upon registration.
                  <br />
                  To set the Primary ENS Name record, please click "My account",
                  and select "Primary ENS Name".
                </p>
                <h3
                  id="how-do-i-unregister-my-name"
                  className="css-pngyth e1rbwmjb1"
                >
                  How do I unregister my name?
                </h3>
                <a
                  href="#how-do-i-unregister-my-name"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  If you click the "trash bin" icon on the address record, it
                  will unset your address so that people can no longer look up
                  your address with the name. You can also unset ownership of
                  subdomains in this way, but you cannot do so on ".eth"
                  addresses. Because ".eth" names are ERC721-compliant NFTs, you
                  cannot transfer them to an empty address (0x00000...). You can
                  transfer it to a burn address (eg: 0x00001), but that does not
                  erase the fact that you used to own the name. Also, the name
                  will not become available for registration again until the
                  registration period and grace period runs out.
                </p>
                <h3
                  id="how-do-i-transfer-my-name"
                  className="css-pngyth e1rbwmjb1"
                >
                  How do I transfer my name?
                </h3>
                <a
                  href="#how-do-i-transfer-my-name"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  For a ".eth" name, transfer both the Registrant and the
                  Controller to the new Ethereum account. Since ".eth" names are
                  ERC721 compliant NFTs, you can change the Registrant by simply
                  transferring the NFT from any NFT compliant wallet/marketplace
                  as well.
                  <br />
                  Note that transferring the ownership (aka the Registrant) of
                  the name does not change the controller nor records, so the
                  recipient may need to update them once received. If the
                  recipient is not experienced or you prefer your address not to
                  be associated to the transferring names, it may be a good idea
                  for you to set the ETH Address record to their Ethereum
                  address, set the controller, then transfer the name.
                  <br />
                  For subdomains, there are no registrants unless the subdomain
                  is customised to be ERC721 compliant. Simply set the
                  controller to the new address (after setting the record to the
                  new address).
                </p>
                <h3
                  id="why-are-some-of-my-subdomains-shown-as-a-jumble-of-characters"
                  className="css-pngyth e1rbwmjb1"
                >
                  Why are some of my subdomains shown as a jumble of characters?
                </h3>
                <a
                  href="#why-are-some-of-my-subdomains-shown-as-a-jumble-of-characters"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  ENS names are stored as a hash on-chain so we have to decode
                  the name using a list of possible names, and it shows in the
                  hashed format if we don't have it on our list. You can still
                  access and manage the name if you search for the name directly
                  in the search bar.
                </p>
                <h3
                  id="how-do-i-find-the-labelhashnamehash-of-a-name"
                  className="css-pngyth e1rbwmjb1"
                >
                  How do I find the labelhash/namehash of a name?
                </h3>
                <a
                  href="#how-do-i-find-the-labelhashnamehash-of-a-name"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  Please refer to our{" "}
                  <a href="https://docs.ens.domains/contract-api-reference/name-processing#how-do-i-find-the-labelhash-namehash-of-a-name">
                    developer documentation page.
                  </a>
                </p>
                <h2 className="css-1jywloj e1rbwmjb0">
                  When you extend your registration
                </h2>
                <h3
                  id="how-do-i-receive-an-extension-reminder"
                  className="css-pngyth e1rbwmjb1"
                >
                  How do I receive an extension reminder?
                </h3>
                <a
                  href="#how-do-i-receive-an-extension-reminder"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  Click the "Remind me" button on the name's page or your
                  address page so that you can set a calendar reminder or email
                  reminder. Note that you have to set calendar reminders per
                  name, whereas you only need to set email reminders per the
                  address of the owner. Also note that you can register a name
                  for multiple years, removing the need to extend each year.
                </p>
                <h3
                  id="what-happens-if-i-forget-to-extend-the-registration-of-a-name"
                  className="css-pngyth e1rbwmjb1"
                >
                  What happens if I forget to extend the registration of a name?
                </h3>
                <a
                  href="#what-happens-if-i-forget-to-extend-the-registration-of-a-name"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  After your name expires, there is a 90 day grace period in
                  which the owner can't edit the records but can still
                  re-register the name. After the grace period, the name is
                  released for registration by anyone with a temporary premium
                  which decreases over a 28 days period. The released name
                  continues to resolve your ETH address until the new owner
                  overwrites it.
                </p>
                <h3
                  id="where-can-i-see-the-list-of-names-to-be-released"
                  className="css-pngyth e1rbwmjb1"
                >
                  Where can I see the list of names to be released
                </h3>
                <a
                  href="#where-can-i-see-the-list-of-names-to-be-released"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  You can see the list at the "ENS Names to be released" section
                  of{" "}
                  <a href="https://dune.xyz/makoto/ens-released-to-be-released-names">
                    {" "}
                    the Dune Analytics dashboard
                  </a>{" "}
                  .
                </p>
                <h3
                  id="i-lost-access-to-the-ethereum-account-that-owns-a-name-i-registered.-can-i-still-extend-its-registration-period"
                  className="css-pngyth e1rbwmjb1"
                >
                  I lost access to the Ethereum account that owns a name I
                  registered. Can I still extend its registration period?
                </h3>
                <a
                  href="#i-lost-access-to-the-ethereum-account-that-owns-a-name-i-registered.-can-i-still-extend-its-registration-period"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  Any Ethereum account can pay to extend the registration of any
                  ENS name, though doing so from an account that's not the owner
                  will not change ownership of the name. Just go to the name's
                  page and click "Extend".
                </p>
                <h3
                  id="i-registered-names-before-2019-may.-can-i-have-my-deposit-back"
                  className="css-pngyth e1rbwmjb1"
                >
                  I registered names before 2019 May. Can I have my deposit
                  back?
                </h3>
                <a
                  href="#i-registered-names-before-2019-may.-can-i-have-my-deposit-back"
                  className="css-0 e1rbwmjb3"
                >
                  <svg className="css-e4h5o6 eqj0wue0" width="23" height="15">
                    <path
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="css-0 e1rbwmjb2">
                  Yes, you can get your deposit back from
                  <a href="https://reclaim.ens.domains">
                    {" "}
                    reclaim.ens.domains{" "}
                  </a>{" "}
                  whether you extended the registration of the name or not.
                  <br />
                  Please remember that the amount you will receive is the amount
                  of the second-highest bidder (unless you were the only
                  bidder). For example, if you bid 1 ETH and the second highest
                  bidder bid 0.1 ETH, you deposited 0.1 ETH and you have already
                  received the remaining (0.9 ETH) when you finailsed the
                  auction. Therefore you can now only reclaim 0.1 ETH back.
                  Please read the{" "}
                  <a href="https://medium.com/the-ethereum-name-service/a-beginners-guide-to-buying-an-ens-domain-3ccac2bdc770">
                    {" "}
                    the initial guide back in 2017{" "}
                  </a>{" "}
                  for more detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
