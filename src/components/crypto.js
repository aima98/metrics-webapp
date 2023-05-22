import React from 'react';
import { useLocation } from 'react-router-dom';

function Crypto() {
  const { state } = useLocation();
  const data = state.cryptoItems;

  const FormatNum = (num) => (Math.abs(num) > 999 ? `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1))}k` : Math.sign(num) * Math.abs(num));

  const NumWithComma = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="crypto-container">
      <div className="wrapper2 flex">
        <div className="bg-wrapper2" />
        <div className="wrapper-content-2 p-two">
          <h1 className="white rank h-one">
            {data.rank}
          </h1>
          <h4 className="white">{data.name}</h4>
          <p className="white status" id="status">
            {data.changePercent24Hr ? (Math.round(data.changePercent24Hr * 100) / 100) : ''}
            {data.changePercent24Hr > 0
              ? <i className="fa fa-caret-up" aria-hidden="true" />
              : <i className="fa fa-caret-down" aria-hidden="true" />}
          </p>
        </div>
      </div>
      <div>
        <h4 className="white p-two">
          {data.name}
          {' '}
          Breakdown
        </h4>
      </div>
      <table className="white">
        <tbody>
          <tr>
            <td>Symbol</td>
            <td>
              {data.symbol}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Supply</td>
            <td className="font-4">
              {NumWithComma(FormatNum(data.supply))}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Maximum Supply</td>
            <td className="font-4">
              {NumWithComma(FormatNum(data.maxSupply))}

              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Market Cap</td>
            <td className="font-4">
              {NumWithComma(FormatNum(data.marketCapUsd))}
              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Volume</td>
            <td className="font-4">
              {NumWithComma(FormatNum(data.volumeUsd24Hr))}
              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td className="font-4">
              {FormatNum(data.priceUsd)}
              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Change</td>
            <td className="font-4">
              {Math.round(data.changePercent24Hr * 100) / 100}

              {' '}
              {' '}
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td><p><a href={data.explorer}>Website</a></p></td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default Crypto;
