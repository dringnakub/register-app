import React, { Component } from 'react'

export default class LocationDropDown extends Component {



    render() {

        let locations = this.props.locations;
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
                    จังหวัด
            </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                    {
                        locations.map((location, index) => {
                            return (
                                <a className="dropdown-item" href="#" 
                                data-id={location.id} data-name={location.name}
                                key={location.id}>{location.name}</a>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
