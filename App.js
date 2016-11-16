import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import empreducer from './reducers';
import AddEmp from './containers/AddEmp';
import VisibleEmpList from './containers/empList';
import EmpCounterDisp from './containers/empCounterDisp';

const store = createStore(empreducer);

export class Toptiles extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <div>
                        <EmpCounterDisp /></div>
                </Provider>

            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <div>
                        <AddEmp />
                        <VisibleEmpList />
                    </div>
                </Provider>
            </div>
        )

    }
}

export default App