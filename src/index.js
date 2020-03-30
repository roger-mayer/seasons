//needs code to determine user location and date
import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


//functional

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         //function callback
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Latitude: </div>
// };


//component - Must be CLASS, extends React.Component, define 'render method that returns jsx
class App extends React.Component {
    //special constructor function will be instantly called to
    // initialize state object
    // constructor(props) {
    //     super(props);
    //     //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
    //     this.state = { lat: null, errorMessage: '' };
    //
    // }

    //state can be set without using constructor
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //callback function
            (position) =>
                //call setState to update function
                this.setState({lat: position.coords.latitude}),
            //dont write this.state.lat = position.coords.latitude
            (err) =>
                this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            // return <div> Latitude: {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat}/>;

        }
        return <Spinner message="Please accept location request"/>;
    }

    //must define render
    render() {
        return <div className="border red">
            {this.renderContent()}
        </div>;
    }
}

// initialize state through constructors

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);


