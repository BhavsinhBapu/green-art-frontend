export const P2pTab = () => {
  return (
    <div className="p2pTabList_bg py-3 shadow-sm">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="d-flex p2pTabList">
              <li>
                <div className="buySellBox rounded">
                  <button className="buySellBoxActive">Buy</button>
                  <button>Sell</button>
                </div>
              </li>
              <li>
                <a href="">USDT</a>
              </li>
              <li>
                <a className="p2pTabListActive" href="">
                  BTC
                </a>
              </li>
              <li>
                <a href=""> BUSD</a>
              </li>
              <li>
                <a href=""> BNB</a>
              </li>
              <li>
                <a href=""> ETH</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
