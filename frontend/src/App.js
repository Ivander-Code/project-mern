import React, {lazy,Suspense,useState,useEffect} from 'react';
import {BrowserRouter as Router, Route,Switch}   from 'react-router-dom';
import NotFound  from './components/NotFound';
import Error     from './lib/Error';
import Loading   from './components/Loading';
import ApiWS     from './api/ApiWS';
import SideBar   from './components/Sidebar';
import NewRecord from './containers/NewRecord/NewRecord';

const AllRecordsContainer = lazy(()=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(import('./containers/AllRecords/AllRecords'));
        },1500);
    });
});

const EditRecordsContainer = lazy(()=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(import('./containers/UpdateRecord/EditRecord'));
        },1500);
    });
});

export default function App(){
    const [persons, setPerson]  = useState([]);
    const [message, setMessage] = useState({type:'',messageText:''});
    const [countPersons,setCountPersons] = useState(0);

    async function fetchData(){
        let result = await ApiWS.getData('/');
        setPerson(result.data);
        setMessage(result.message);
        setCountPersons(result.data.length);
    }

    useEffect(()=>{
        fetchData();
    },[countPersons]);

    return(
        <Router>
            <div className='row mr-0 ml-0'>
                <div className='col-md-3'>
                    <SideBar/>
                </div>
                <div className='col-md-9 mb-5'>
                    <Error {...{message:message}} customMensaje='Error to rendering the app component'>
                        <Suspense fallback={<Loading/>}>
                            <Switch>
                                <Route exact path='/' render={()=>
                                    <AllRecordsContainer persons={persons} message={message}/>
                                }/>
                                <Route  path='/all_records' render={()=>
                                    <AllRecordsContainer persons={persons} message={message}/>
                                }/>
                                <Route path='/new_record' render={()=>
                                    <NewRecord updatePersons={setPerson}/>
                                } />
                                <Route path='/update_record' render={()=>
                                    <EditRecordsContainer persons={persons} message={message}/>
                                }/>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </Suspense>
                    </Error>
                </div>
            </div>
        </Router>
    );
}