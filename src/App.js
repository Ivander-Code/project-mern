/**Dependencies */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

/**Components */
import NotFound from './components/NotFound';
import Error from './lib/Error';
import Loader from './components/Loader/Loader';
import SideBar from './components/Sidebar/Sidebar';
import NewRecord from './containers/NewRecord/NewRecord';
import NavBar from './components/NavBar/NavBar';
/** Dynamic Import */
const AllRecordsContainer = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./containers/AllRecords/AllRecords'));
    }, 800);
  });
});
/** Dinamic Import */
const EditRecordsContainer = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./containers/UpdateRecord/EditRecord'));
    }, 800);
  });
});

/**APP Component */
export default function App({ users, message }) {
  return (
    <Router>
      <NavBar />
      <Row className='ml-0 mr-0'>
        <Col lg={2} className='bg-white pl-0 pr-0'>
          <SideBar />
        </Col>
        <Col lg={10} className='bg-white pl-5 pr-5'>
          <Error
            {...{ message: message }}
            customMensaje='Error to rendering the app component'>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path='/' component={AllRecordsContainer} />
                <Route path='/all_records' component={AllRecordsContainer} />
                <Route path='/new_record' component={NewRecord} />
                <Route path='/update_record' component={EditRecordsContainer} />
                <Route component={NotFound}></Route>
              </Switch>
            </Suspense>
          </Error>
        </Col>
      </Row>
    </Router>
  );
}
