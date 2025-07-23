import React, { useEffect } from 'react'
import "./CryptoPriceTable.css";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCryptoList } from '../../store/features/cryptolist/cryptolistSlice';
import StarBlack from "../../assets/images/star-black.png";
import StarGold from "../../assets/images/star-gold.png";
import StarWhite from "../../assets/images/star-white.png";

export default function CryptoPriceTable() {
    const dispatch = useAppDispatch();
    const cryptoList = useAppSelector((state) => state.cryptoList.cryptoList);
    const status = useAppSelector((state) => state.cryptoList.status);
    const error = useAppSelector((state) => state.cryptoList.error);
    const themeMode = useAppSelector((state) => state.theme.mode)

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchCryptoList());
        }
    },[status]);
    if(status=='loading'){
        return <p>Loading</p>
    }else if(status == 'failed'){
        return <p>Error : {`${error}`}</p>
    }
  return (
    <section className='crypto-list'>
      <table>
        <caption><h1>Today's Cryptcurrency Prices</h1></caption>
        <thead>
            <tr>
                <th></th>
                <th >ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>MarketCap</th>
            </tr>
        </thead>
        <tbody>
            {
                cryptoList.map((crypto) => {
                    return (<tr>
                        <td><img loading='lazy' src={themeMode=='light' ? StarBlack : StarWhite} width={25} alt="star image" /></td>
                <td>{crypto.id}</td>
                <td>{crypto.name}</td>
                <td>${crypto.price}</td>
                <td>${crypto.price_change}</td>
                <td>${crypto.volume}</td>
            </tr>)
                })
            }
        </tbody>
      </table>
    </section>
  )
}
