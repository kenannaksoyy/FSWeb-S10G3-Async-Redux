import { useDispatch, useSelector } from 'react-redux';
import { dogRemove } from '../actions/dogActions';
import React from 'react';

export default function Dogs() {

    const dogs = useSelector(state=>{return state.dogReducer.dogs});
    const dispatch= useDispatch();



    return (
        <div className='dogs-list'>
            {
                dogs.length === 0 
                ?
                (<p>Kopek Bulunmamaktadır</p>)
                :
                (
                    
                    dogs.map((d,i )=> (
                        <div id={`dog${i}`}>
                            <img  className='dog-img' src={d["message"]} alt="Kopek Resmi"/>
                            <button onClick={()=>{dispatch(dogRemove(d["message"]))}}>Kopek Kaldır</button>
                        </div>
                    ))
                    
                )
            }
            
        </div>
    );
}
