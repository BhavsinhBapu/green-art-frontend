import React from 'react'

const PoolCard = () => {
  return (
    <div className="pool-card p-3">
      <div className="card-pool-title ">
        <img alt="GAL" src="/gal.svg" className="pool-icon-small" />
        <h5 className=" ml-2">GAL</h5>
      </div>
      <p className="text-center">Stake BUSD, Earn GAL</p>
      <div className="center-img-pool">
        <img alt="GAL" src="/gal.svg" className="pool-icon" />
      </div>
      <div className="pool-row">
        <p className="pool-title">APY::</p>
        <p className="pool-value">1.32%</p>
      </div>
      <div className="pool-row">
        <p className="pool-title">Participants:</p>
        <p className="pool-value">146,264</p>
      </div>
      <div className="pool-row">
        <p className="pool-title">Total Staked:</p>
        <p className="pool-value">1,571,348 BUSD</p>
      </div>
    </div>
  );
}

export default PoolCard