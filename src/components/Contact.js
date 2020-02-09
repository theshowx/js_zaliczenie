import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Contact extends Component {
    render() {
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap defaultZoom={16} defaultCenter={{ lat: 53.117081, lng: 23.145893 }}>
                {props.isMarkerShown && <Marker position={{ lat: 53.117081, lng: 23.145893 }} />}
            </GoogleMap>
        ))
        return (
            <div className="Contact">
                <h1>Kontakt</h1>
                <h2>POLITECHNIKA BIAŁOSTOCKA</h2>
                <div id="contact_main">
                    <MyMapComponent 
                        isMarkerShown 
                        googleMapURL="https://maps.googleapis.com/maps/api/js?sensor=false"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                    <div>
                        <h4>ul. Wiejska 45A, 15-351 Białystok</h4>
                        <h4>tel. 85 746 90 00, fax 85 746 90 15</h4>
                        <h4>REGON: 000001672 NIP: 542-020-87-21</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;