import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { boredAdd } from '../actions/boredActions';
import { dogAdd } from '../actions/dogActions';
import { Link } from 'react-router-dom';
const getApi = (url, setCall) => {
    axios
        .get(url)
        .then(res => {
            setCall(res.data);
        })
        .catch(err => {
            console.error('Sunucu Hatasi', err);
        });
}
export default function Header() {
    const [boredShow, setBoredShow] = useState({});
    const [boredCheck, setBoredCheck] = useState(true);
    const boreds = useSelector(state=>{return state.boredReducer.boreds});
    const dispatch= useDispatch();
    
    useEffect(() => {
        getApi("https://www.boredapi.com/api/activity",setBoredShow);
    }, [boredCheck])
    console.log(boreds);
    
    const [dogShow, setDogShow] = useState({});
    const [dogCheck, setDogCheck] = useState(true);
    const dogs = useSelector(state=>{return state.dogReducer.dogs});
    useEffect(() => {
        getApi("https://dog.ceo/api/breeds/image/random",setDogShow);
    }, [dogCheck])
    console.log(dogs);
    


    return (
        <div className='home-page-cont'>
            <h2>Kafama Gore</h2>
            <div className='bored-home-cont'>
                <h3>Aktivite</h3>
                <p>Aktivite: {boredShow["activity"]}</p>
                <button onClick={()=>{setBoredCheck(!boredCheck)}}>Aktivite Değiştir</button>
                <button onClick={()=>{dispatch(boredAdd(boredShow))}}>Aktivitelerine Ekle</button>
            </div>
            <Link id="bored-link" to="/bored" >Aktivitelere Git</Link>
            <div className="dog-home-cont">
                <h3>Kopek</h3>
                <img  className='dog-img' src={dogShow["message"]} alt="Kopek Resmi"/>
                <button onClick={()=>{setDogCheck(!dogCheck)}}>Kopek Resmi Değiştir</button>
                <button onClick={()=>{dispatch(dogAdd(dogShow))}}>Kopek Ekle</button>
                <Link id="dog-link" to="/dog" >Kopekler Git</Link>
            </div>
            

        </div>
    );
}
