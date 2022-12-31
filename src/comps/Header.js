import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';


export default function Header() {

    const [bitcoinCheck, setBitcoinCheck] = useState(true);
    const [bitcoin, setBitcoin] = useState({});

    useEffect(() => {
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res => {
                setBitcoin(res.data["bpi"]);
            })
            .catch(err => {
                console.error('Sunucu Hatasi', err);
            });
    }, [bitcoinCheck])
    //Real Check Loop Render Hatası verdi zaman


    return (
        <div className="main-header">
            <div className="web-title">
                <h1>Boş İş Sayfası</h1>
            </div>
            <div className="bitcoin-header">
                <h2>BitCoin Global Değerleri</h2>
                {
                    Object.keys(bitcoin).map(key => (
                        <p id={bitcoin[key].code}>{bitcoin[key]["rate"]} {bitcoin[key]["code"]}</p>
                    ))
                }
            </div>
            <div className="main-check">
                <button className="main-check-button" onClick={() => { setBitcoinCheck(!bitcoinCheck) }}>
                    Bitcoin Bilgilerini guncelle
                </button>
            </div>
            <Link id="home-link" to="/" >Anasayfa</Link>
        </div>
    );
}