import React from 'react';
import CustomMessage from '../../components/CustomMessage';
import './AllRecords.css';
export default function AllRecords({persons,message}){

    return(
    <>
        {(message.type === 'success') ?(
            <div className='pt-3 pr-5 pl-5 pb-5 bg-white'>
                <div className='row'>
                    <h3>Users <span className='small text-muted'>example list</span></h3>
                </div>
                <div className='row bg-dark text-light text-center'>
                    <div className='col-md-3'>Name</div>
                    <div className='col-md-3'>Last Name</div>
                    <div className='col-md-3'>Second Last Name</div>
                    <div className='col-md-3'>Age</div>
                </div>
                {
                    persons.map((person, index)=>{
                        let style = (index % 2)? 'bg-light':'';
                        return(
                            <div className={`row ${style} text-center`} key={index}>
                                <div className='col-md-3 border'>{person.nombre}</div>
                                <div className='col-md-3 border'>{person.apellido1}</div>
                                <div className='col-md-3 border'>{person.apellido2}</div>
                                <div className='col-md-3 border'>{person.age}</div>
                            </div>
                        );
                    })
                }
            </div>
        ):  (
                <CustomMessage {...message} />
            )
        }
    </>
    );
}