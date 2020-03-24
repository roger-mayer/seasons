//needs code to determine user location and date
import React from "react";
import ReactDOM from 'react-dom';


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
class App extends React.Component{
    //special constructor function will be instantly called to
    // initialize state object
    constructor(props) {
        super(props);
        //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
        this.state = { lat: null };
        window.navigator.geolocation.getCurrentPosition(
            //function callback
            (position) => {
                //call setState to update function
                this.setState({lat: position.coords.latitude});
                console.log(position)

                //dont write this.state.lat = position.coords.latitude
            },
            (err) => console.log(err)
        );
    }

    //must define render
    render(){
        return <div>Latitude: {this.state.lat} </div>
    }

}
// initialize state through constructors

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);