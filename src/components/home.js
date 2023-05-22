import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { FetchCryptos } from '../redux/slices/cryptoSlice';

function Home() {
  const data = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetch = useSelector((state) => state.cryptoReducer);

  useEffect(() => {
    if (fetch.status === '') {
      dispatch(FetchCryptos());
    }
  }, [fetch.status, dispatch]);

  if (fetch.status === 'success') {
    data.push(fetch.cryptos[0]);
  }

  function handleClick(e) {
    navigate(
      '/crypto-details',
      {
        state: {
          cryptos: e,
        },
      },
    );
  }

  return (
    <div className="items-container">
      <table>
        <thead>
          <tr>
            <th colSpan={1}>Rank</th>
            <th colSpan={2}>Name</th>
            <th colSpan={1}>Price</th>
            <th colSpan={1}>Market Cap</th>
            <th colSpan={1}>Supply</th>
          </tr>
        </thead>
        <tbody>
          {data[0] ? data[0].map((i) => (
            <tr key={i.id} onClick={() => { handleClick(i); }}>
              <td className="rank">{i.rank}</td>
              <td colSpan="2" className="">
                <span className="name">{i.name}</span>
                <span className="symbol">{i.symbol}</span>
              </td>
              <td><span className="price">{i.priceUsd}</span></td>
              <td><span className="market-cap">{i.marketCapUsd}</span></td>
              <td><span className="volume">{i.supply}</span></td>
            </tr>
          ))
            : (
              <tr>
                <td className="load-spinner">
                  <ClipLoader color="red" size={250} />
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
