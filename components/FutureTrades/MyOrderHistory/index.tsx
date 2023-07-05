import React from 'react'

const MyOrderHistory = () => {
  return (
    <div>
      <div className="orders-area mt-4 ml-3 mr-3">
        <div className="orders-area-top">
          <div className="top-left">
            <ul id="ordersTab" role="tablist" className="nav nav-tabs">
              <li role="presentation" className="nav-item">
                <a
                  id="Open-orders-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Open-orders"
                  aria-selected="true"
                  className="nav-link active"
                >
                  Open orders
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a
                  id="Open-orders-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Open-orders"
                  aria-selected="true"
                  className="nav-link false"
                >
                  Order history
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a
                  id="Open-orders-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="Open-orders"
                  aria-selected="true"
                  className="nav-link false"
                >
                  Trade history
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content p-3" id="ordersTabContent">
          <div
            className="tab-pane fade show active"
            id="Open-orders"
            role="tabpanel"
            aria-labelledby="Open-orders-tab"
          >
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Amount(BTC)</th>
                    <th scope="col">Fees(USDT)</th>
                    <th scope="col">Price(USDT)</th>
                    <th scope="col">Processed(BTC)</th>
                    <th scope="col">total(USDT)</th>
                    <th scope="col">Created at</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-success">buy</td>
                    <td>54.80149509</td>
                    <td>0.00000000</td>
                    <td>26100.6</td>
                    <td>0.00000000</td>
                    <td>1430351.90274605</td>
                    <td>Jun 18th 23 7:53:24 pm</td>
                    <td>
                      <button className="cancel">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-success">buy</td>
                    <td>15.32190292</td>
                    <td>0.00000000</td>
                    <td>25540.6</td>
                    <td>0.00000000</td>
                    <td>391330.59371855</td>
                    <td>Jun 18th 23 7:53:13 pm</td>
                    <td>
                      <button className="cancel">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-danger">sell</td>
                    <td>10.00</td>
                    <td>0.00000000</td>
                    <td>27000.6</td>
                    <td>0.00000000</td>
                    <td>270006.00</td>
                    <td>Jun 18th 23 7:52:49 pm</td>
                    <td>
                      <button className="cancel">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-danger">sell</td>
                    <td>3.00</td>
                    <td>0.00000000</td>
                    <td>26700.6</td>
                    <td>0.00000000</td>
                    <td>80101.8</td>
                    <td>Jun 18th 23 7:52:37 pm</td>
                    <td>
                      <button className="cancel">Cancel</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="Trade-history"
            role="tabpanel"
            aria-labelledby="Trade-history-tab"
          >
            <div className="buy-sell-tabs">
              <ul className="nav nav-tabs" id="buySellTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="buy-tab"
                    data-toggle="tab"
                    href="#buy"
                    role="tab"
                    aria-controls="buy"
                    aria-selected="true"
                  >
                    buy
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="sell-tab"
                    data-toggle="tab"
                    href="#sell"
                    role="tab"
                    aria-controls="sell"
                    aria-selected="false"
                  >
                    sell
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="buySellTabContent">
                <div
                  className="tab-pane fade show active"
                  id="buy"
                  role="tabpanel"
                  aria-labelledby="buy-tab"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Type</th>
                          <th scope="col">Pair</th>
                          <th scope="col">Price(USDT)</th>
                          <th scope="col">Amount(BTC)</th>
                          <th scope="col">Fees(USDT)</th>
                          <th scope="col">total(USDT)</th>
                          <th scope="col">Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-success">buy</td>
                          <td>BTC/USDT</td>
                          <td>25540.6</td>
                          <td>15.32190292</td>
                          <td>0.00000000</td>
                          <td>391330.59371855</td>
                          <td>Jun 18th 23 7:53:13 pm</td>
                        </tr>
                        <tr>
                          <td className="text-success">buy</td>
                          <td>BTC/USDT</td>
                          <td>26100.6</td>
                          <td>54.80149509</td>
                          <td>0.00000000</td>
                          <td>1430351.90274605</td>
                          <td>Jun 18th 23 7:53:24 pm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="sell"
                  role="tabpanel"
                  aria-labelledby="sell-tab"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Type</th>
                          <th scope="col">Pair</th>
                          <th scope="col">Price(USDT)</th>
                          <th scope="col">Amount(BTC)</th>
                          <th scope="col">Fees(USDT)</th>
                          <th scope="col">total(USDT)</th>
                          <th scope="col">Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-danger">sell</td>
                          <td>BTC/USDT</td>
                          <td>26700.6</td>
                          <td>3.00</td>
                          <td>0.00</td>
                          <td>80101.8</td>
                          <td>Jun 18th 23 7:52:37 pm</td>
                        </tr>
                        <tr>
                          <td className="text-danger">sell</td>
                          <td>BTC/USDT</td>
                          <td>27000.6</td>
                          <td>10.00</td>
                          <td>0.00</td>
                          <td>270006.00</td>
                          <td>Jun 18th 23 7:52:49 pm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="Funds"
            role="tabpanel"
            aria-labelledby="Funds-tab"
          >
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Transaction id</th>
                    <th scope="col"> Fees(USDT)</th>
                    <th scope="col">Amount(BTC)</th>
                    <th scope="col">Price(USDT)</th>
                    <th scope="col"> Processed(USDT)</th>
                    <th scope="col">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>168713549400000000000001709349</td>
                    <td>0.00000000</td>
                    <td>0.01954651</td>
                    <td>26408.00</td>
                    <td>516.18423608</td>
                    <td>Jun 19th 23 6:44:54 am</td>
                  </tr>
                  <tr>
                    <td>168713548800000000000001709337</td>
                    <td>0.00000000</td>
                    <td>0.809994</td>
                    <td>26408.00</td>
                    <td>21390.321552</td>
                    <td>Jun 19th 23 6:44:48 am</td>
                  </tr>
                  <tr>
                    <td>168713548200000000000001709326</td>
                    <td>0.00000000</td>
                    <td>0.804217</td>
                    <td>26408.00</td>
                    <td>21237.762536</td>
                    <td>Jun 19th 23 6:44:42 am</td>
                  </tr>
                  <tr>
                    <td>168713547600000000000001709320</td>
                    <td>0.00000000</td>
                    <td>0.040701</td>
                    <td>26408.00</td>
                    <td>1074.832008</td>
                    <td>Jun 19th 23 6:44:36 am</td>
                  </tr>
                  <tr>
                    <td>168713547000000000000001709314</td>
                    <td>0.00000000</td>
                    <td>0.032823</td>
                    <td>26408.00</td>
                    <td>866.789784</td>
                    <td>Jun 19th 23 6:44:30 am</td>
                  </tr>
                  <tr>
                    <td>168713546500000000000001709310</td>
                    <td>0.00000000</td>
                    <td>0.078481</td>
                    <td>26408.00</td>
                    <td>2072.526248</td>
                    <td>Jun 19th 23 6:44:24 am</td>
                  </tr>
                  <tr>
                    <td>168713545800000000000001709303</td>
                    <td>0.00000000</td>
                    <td>0.936775</td>
                    <td>26408.00</td>
                    <td>24738.3542</td>
                    <td>Jun 19th 23 6:44:18 am</td>
                  </tr>
                  <tr>
                    <td>168713545300000000000001709299</td>
                    <td>0.00000000</td>
                    <td>0.065252</td>
                    <td>26408.00</td>
                    <td>1723.174816</td>
                    <td>Jun 19th 23 6:44:13 am</td>
                  </tr>
                  <tr>
                    <td>168713544700000000000001709293</td>
                    <td>0.00000000</td>
                    <td>0.176873</td>
                    <td>26408.00</td>
                    <td>4670.862184</td>
                    <td>Jun 19th 23 6:44:07 am</td>
                  </tr>
                  <tr>
                    <td>168713544200000000000001709289</td>
                    <td>0.00000000</td>
                    <td>0.031187</td>
                    <td>26408.00</td>
                    <td>823.586296</td>
                    <td>Jun 19th 23 6:44:02 am</td>
                  </tr>
                  <tr>
                    <td>168713537800000000000001709284</td>
                    <td>0.00000000</td>
                    <td>0.064724</td>
                    <td>26408.00</td>
                    <td>1709.231392</td>
                    <td>Jun 19th 23 6:42:58 am</td>
                  </tr>
                  <tr>
                    <td>168713537200000000000001709277</td>
                    <td>0.00000000</td>
                    <td>0.064533</td>
                    <td>26408.00</td>
                    <td>1704.187464</td>
                    <td>Jun 19th 23 6:42:52 am</td>
                  </tr>
                  <tr>
                    <td>168713536600000000000001709272</td>
                    <td>0.00000000</td>
                    <td>0.006505</td>
                    <td>26408.00</td>
                    <td>171.78404</td>
                    <td>Jun 19th 23 6:42:46 am</td>
                  </tr>
                  <tr>
                    <td>168713536000000000000001709266</td>
                    <td>0.00000000</td>
                    <td>0.663349</td>
                    <td>26408.00</td>
                    <td>17517.720392</td>
                    <td>Jun 19th 23 6:42:40 am</td>
                  </tr>
                  <tr>
                    <td>168713535500000000000001709260</td>
                    <td>0.00000000</td>
                    <td>0.170254</td>
                    <td>26408.00</td>
                    <td>4496.067632</td>
                    <td>Jun 19th 23 6:42:35 am</td>
                  </tr>
                  <tr>
                    <td>168713534900000000000001709254</td>
                    <td>0.00000000</td>
                    <td>0.762818</td>
                    <td>26408.00</td>
                    <td>20144.497744</td>
                    <td>Jun 19th 23 6:42:29 am</td>
                  </tr>
                  <tr>
                    <td>168713534400000000000001709250</td>
                    <td>0.00000000</td>
                    <td>0.012547</td>
                    <td>26408.00</td>
                    <td>331.341176</td>
                    <td>Jun 19th 23 6:42:24 am</td>
                  </tr>
                  <tr>
                    <td>168713533700000000000001709246</td>
                    <td>0.00000000</td>
                    <td>0.802004</td>
                    <td>26408.00</td>
                    <td>21179.321632</td>
                    <td>Jun 19th 23 6:42:17 am</td>
                  </tr>
                  <tr>
                    <td>168713533200000000000001709244</td>
                    <td>0.00000000</td>
                    <td>0.744453</td>
                    <td>26408.00</td>
                    <td>19659.514824</td>
                    <td>Jun 19th 23 6:42:12 am</td>
                  </tr>
                  <tr>
                    <td>168713532700000000000001709242</td>
                    <td>0.00000000</td>
                    <td>0.302305</td>
                    <td>26408.00</td>
                    <td>7983.27044</td>
                    <td>Jun 19th 23 6:42:07 am</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrderHistory