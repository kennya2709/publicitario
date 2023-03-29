import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";




export default class Maps extends Component{
    render(){
        return(
            <div className="container">
                <GoogleMaps
                    apiKey={"AIzaSyD6bLODTa33MIYUrrAf-ndDlvN-sRQHHx0"}
                    style={{height: "400px", width: "100%"}}
                    zoom={15}
                    center={{lat:23.8474794, lng: -104.2448201}}
                    />
            </div>
        )
    }
}