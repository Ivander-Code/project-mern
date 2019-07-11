import React,{useState} from 'react';
import ApiWS from '../../api/ApiWS';
import formDataHelper from '../../helpers/formatData';
import CustomMessage from '../../components/CustomMessage';
import './NewRecord.css';

export default function NewRecord({updatePersons}){
    const [message, setMessage] = useState({type:'',messageText:''});

    async function handleSubmit(event){
        event.preventDefault();
        event.persist();
        let fields =  event.target.querySelectorAll("input[name^='data[']");
        let data = new formDataHelper('json',fields);
        let response = await ApiWS.storeData('/new_record',data);
        setMessage(response.message);

        if(response.message.type === 'success'){
            event.target.reset();
            let updateData = await ApiWS.getData('/');
            updatePersons(updateData.data);
        }
    }
    return(
        <form className='pt-3 pr-5 pl-5 pb-5 bg-white' onSubmit={handleSubmit} method='post' encType='application/x-www-form-urlencoded'>
            <div className='row'>
                <h3 className='mr-auto'>New User</h3>
                {
                    (message.type !== '')?(
                        <div className='row mr-3'>
                            <CustomMessage {...message}/>
                        </div>
                    ):(<></>)
                }
            </div>
            <div className='row border rounded p-3'>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <label htmlFor='nombre'>Name:</label>
                        <input type='text' data-name='nombre' className='form-control' name='data[nombre]' placeholder='Enter the name'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <label htmlFor='apellido1'>Last Name:</label>
                        <input data-require='true' data-name='apellido1' type='text' className='form-control' name='data[apellido1]' placeholder='Enter Last Name'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <label htmlFor='apellido2'>Second Last Name:</label>
                        <input type='text' data-name='apellido2' className='form-control' name='data[apellido2]' placeholder='Enter second last name'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <label htmlFor='dep'>No. Identifier:</label>
                        <input type='text' data-name='dep' className='form-control' name='data[dep]' placeholder='Enter Identifier'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <input type='submit' className='btn btn-success' value='Send'/>
                </div>
            </div>
        </form>
    );
}