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

        this.state = {lat: null};

    }

    //must define render
    render(){
        window.navigator.geolocation.getCurrentPosition(
            //function callback
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>
    }

}
// initialize state through constructors

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);