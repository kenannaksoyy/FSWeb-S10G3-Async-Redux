import { useDispatch, useSelector } from 'react-redux';
import { boredRemove } from '../actions/boredActions';
import React from 'react';

export default function Boreds() {

    const boreds = useSelector(state=>{return state.boredReducer.boreds});
    const dispatch= useDispatch();



    return (
        <div className='bored-list'>
            {
                boreds.length === 0 
                ?
                (<p>Aktivite Bulunmamaktadır</p>)
                :
                (
                    
                    boreds.map(b => (
                        <div id={`bored${b["key"]}`}>
                            <p>Aktivite: {b["activity"]}</p>
                            <button onClick={()=>{dispatch(boredRemove(b["key"]))}}>Aktiviteyi Kaldır</button>
                        </div>
                    ))
                    
                )
            }
            
        </div>
    );
}
