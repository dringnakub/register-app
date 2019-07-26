import React, { Component } from 'react'

export default class LocationDropDown extends Component {

    locationSelected(e) {
        let locationName = e.target.getAttribute('data-name')
        console.log("locationName", locationName)
    }

    render() {

        const { locations, defaultLabel } = this.props;
        // let locations = this.props.locations;
        // let labelDufault = this.props.defaultLabel;
        console.log(locations)
        return (
            <div className="dropdown">
                <a
                    className="btn btn-success dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    {defaultLabel}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                    {
                        locations.map((location, index) => {
                            return (
                                <a className="dropdown-item" href="#"
                               onClick={(e) => this.locationSelected(e)}
                                    data-id={location.id} data-name={location.name}
                                    key={location.id}>{index + 1}. {location.name}</a>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
