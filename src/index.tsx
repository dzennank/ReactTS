import React from "react";
import ReactDOM  from "react-dom";

// class App extends React.Component {
//     render() {
//         return <h1>Hi there!</h1>
//     }
// }



interface AppProps {
    color?: string
}

const App = (props: AppProps): JSX.Element => {
    return <div>{props.color}</div>
}


ReactDOM.render(
    <App color="red"/>,
    document.getElementById('root')
)