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


//component - Must be CLASS, extend React.Component, define 'render method that returns jsx
class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            //function callback
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);