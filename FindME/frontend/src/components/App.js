import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layouts/headers';
import Landing from './layouts/landing';
import Footer from './layouts/footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Landing />
                <Footer />
            </Fragment>
        );
        //<Header />
    }
}

ReactDOM.render(<App />, document.getElementById('app'));