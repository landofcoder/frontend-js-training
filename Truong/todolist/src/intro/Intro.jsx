import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import React from 'react';
export default class Intro extends React.Component {
    render() {
        return(
            <Loader
            className="intro"
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
            />
        )
    }
 }