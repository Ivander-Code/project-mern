import React, {useState,useEffect} from 'react';
import CustomMessage from '../../components/CustomMessage';
import ApiWS from '../../api/ApiWS';
import './EditRecord.css';
import formatData from '../../helpers/formatData';

export default function EditRecord(args){
    const persons         = args.persons;
    const message         = args.message;
    const [msg,setMessage]= useState({type:'info',messageText:'Please click on the information for edit!'});

    useEffect(()=>{
        handleDinamicClick();
    },[]);

    function handleDinamicClick(){
        document.querySelector('#content_update').addEventListener('click',(event)=>{
            if (event.target.tagName === "LABEL"){
                event.target.style.display = 'none';
                event.target.nextSibling.setAttribute('type','text');
                event.target.nextSibling.classList.add('form-control-sm');
                event.target.nextSibling.focus();
                event.target.nextSibling.select();
                event.target.nextSibling.onblur = ()=>{
                    event.target.nextSibling.setAttribute('type','hidden');
                    event.target.textContent = event.target.nextSibling.value;
                    event.target.style.display = 'block';
                }
            }
        });
    }

    async function handleSubmit(event){
        event.preventDefault();
        event.persist();
        let form = document.querySelector('#form_'+event.target.id);
        let data;
        let response;
        switch (event.target.name) {
            case 'delete':
                persons.splice([event.target.id],1);
                data = {id: form.querySelector("input[name='data[id]']").value};
                response = await ApiWS.deleteDataById('/delete_record',data);
                setMessage(response.message);
                break;
            case 'update':
                data = formatData('json',form.querySelectorAll("input[name^='data[']"));
                response = await ApiWS.updateDataById('/update_record',data);
                persons[event.target.id] = data;
                setMessage(response.message);
                break;
            default:
                break;
        }
    }

    return(
        <>
        {(message.type === 'success') ?(
            <div id='content_update'>
                <div className='pt-3 pr-5 pl-5 pb-5 bg-white'>
                    <div className='row d-flex'>
                        <h3 className='mr-auto align-self-center'>Edit and Delete Users <span className='align-self-center small text-muted'>example list</span></h3>
                        <div className='row mr-1 d-flex align-self-end'>
                            <CustomMessage {...msg} />
                        </div>
                    </div>
                    <div className='row bg-dark text-light text-center d-flex'>
                        <div className='col-md-2 align-self-center'>Name</div>
                        <div className='col-md-3 align-self-center'>Last Name</div>
                        <div className='col-md-3 align-self-center'>Second Last Name</div>
                        <div className='col-md-2 align-self-center'>No. Identifier</div>
                        <div className='col-md-2 text-sm-center'>
                            Actions
                            <div className='row'>
                                <div className='col-md-6 text-sm-center'>Update</div>
                                <div className='col-md-6 text-sm-center'>Delete</div>
                            </div>
                        </div>
                    </div>
                    {
                        persons.map((person, index)=>{
                            let style = (index % 2)? 'bg-light':'';
                            return(
                                <form key={index} id={`form_${index}`}>
                                    <input type='hidden' name='data[id]' data-name='id' defaultValue={person.id}/>
                                    <div className={`row ${style} text-center`}>
                                        <div className='col-md-2 pt-1 border'>
                                            <label className='col-form-label small'>{person.nombre}</label>
                                            <input name='data[nombre]' data-name='nombre' type='hidden'className='form-control' defaultValue={person.nombre}></input>
                                        </div>
                                        <div className='col-md-3 pt-1 border'>
                                            <label className='col-form-label small'>{person.apellido1}</label>
                                            <input name='data[apellido1]' data-name='apellido1' type='hidden'className='form-control'defaultValue={person.apellido1}></input>
                                        </div>
                                        <div className='col-md-3 pt-1 border'>
                                            <label className='col-form-label small'>{person.apellido2}</label>
                                            <input name='data[apellido2]' data-name='apellido2' type='hidden'className='form-control'defaultValue={person.apellido2}></input>
                                        </div>
                                        <div className='col-md-2 pt-1 border'>
                                            <label className='col-form-label small'>{person.dep}</label>
                                            <input name='data[dep]' data-name='dep' type='hidden'className='form-control'defaultValue={person.dep}></input>
                                        </div>
                                        <div className='col-md-2 pt-2 border'>
                                            <div className='row'>
                                                <div className='col-md-6 d-flex justify-content-center'>
                                                    <input id={index} type='button' onClick={handleSubmit} name='update'
                                                           className='btn btn-outline-success bg-dark btn-sm text-center' value='✓'/>
                                                </div>
                                                <div className='col-md-6 d-flex justify-content-center'>
                                                    <input id={index} type='button' onClick={handleSubmit} name='delete'
                                                           className='btn btn-outline-danger bg-dark btn-sm text-center' value='X'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            );
                        })
                    }
                </div>
            </div>
        ):  (
            <CustomMessage {...message} />
            )
        }
        </>
    );
}