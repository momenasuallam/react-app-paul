import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./myAccount.css";
import logo from "../myimgs/Logo-trans.png";
import ProfileImage from "../myimgs/account-pic.png";

const MyAccount = () => {
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
              <NavLink exact to="/">
                <img src={logo} className="logo2" alt={"logo"} />
              </NavLink>
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
            <NavLink exact to="/">
              <img src={logo} className="logo2" alt={"logo"} />
            </NavLink>
            <div className="btn btn-primary btntoggle" onClick={ToggleSidebar}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <div className="sd-body navtabslink">
            <ul>
              <li className="activeme">
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
              <li>
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
          <NavLink exact to="/">
            <img src={logo} alt={"logo"} />
          </NavLink>
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
                  <li className="activeme">
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
                  <li>
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
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="sidedetails">
              <div className="topinfo">
                <div>
                  <img src={ProfileImage} alt={"ProfileImage"} />
                </div>
                <div>
                  <h2>0xf7f991bc23afaf69502f5f63d0d852be019...</h2>
                </div>
                <div>
                  <a href="">View on Etherscan</a>
                </div>
              </div>
              <div className="primaryens">
                <h2>Primary ENS Name (reverse record): not set</h2>
                <p>
                  This designates one of your ENS names to represent your
                  Ethereum account and act as your cross-platform web3 username
                  and profile. You can only have one Primary ENS Name per
                  Ethereum account and can change it at any time.
                </p>
                <h6>
                  No ENS names have their ETH Address records set to this
                  address.
                </h6>
                <p>
                  Only ENS names that point to your Ethereum account can be set
                  as your Primary ENS Name.
                </p>
                <div className="btngroup1">
                  <button className="btncancel">Cancel</button>
                  <button className="btnsave">Save</button>
                </div>
              </div>
              <div className="addresdiv">
                <h2>This address does not own any domains</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
