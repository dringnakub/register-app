import React, { Component } from 'react'
import LocationDropDown from './locationDropDown'

class ThaiLocationSelectForm extends Component {

    state = {}

    provinces = [
        {
            name: 'กรุงเทพ', id: 1, districts: [
                {
                    name: 'บางรัก', id: 1, khwangs: [
                        { id: 1, name: 'บางรัก' },
                        { id: 2, name: 'สีลม' }
                    ]
                },
            ]
        },
        {
            name: 'นนทบุรี', id: 2, districts: [
                {
                    name: 'เมืองนนทบุรี', id: 1, khwangs: [
                        { id: 1, name: 'บางไผ่' },
                        { id: 2, name: 'ท่าทราย' },
                        { id: 3, name: 'สวนใหญ่' }
                    ]
                },
                {
                    name: 'บางกรวย', id: 2, khwangs: [
                        { id: 1, name: 'บางขนุน' },
                        { id: 2, name: 'ศาลากลาง' }
                    ]
                }
            ]
        }
    ]

    selectdProvince = (provinceName) => {
        console.log(`เลือกจังหวัด ${provinceName}`);
        let chosenProvince = this.provinces.find(province => {
            return province.name === provinceName
        });

        this.setState({
            selectdProvince: chosenProvince
        })
    }

    selectedDistrict = (districtName) => {
        console.log(`เลือกเขต/อำเภอ ${districtName}`);

        let chosenDistrict = this.state.selectdProvince.districts.find(district => {
            return district.name === districtName
        })

        this.setState({
            selectedDistrict: chosenDistrict
        });
    }

    selectedKhwang = (kwangName) => {
        console.log(`เลือกแขวง/เขต ${kwangName}`);

        let chosenKhwang = this.state.selectedDistrict.khwangs.find(khwang => {
            return khwang.name === kwangName
        })

        this.props.locationData.khwang = chosenKhwang.name;
    }

    render() {

        let districtDropDown;
        let khwangDropDown;


        if (this.state.selectdProvince) {
            let districts = this.state.selectdProvince.districts;

            console.log("Hello districts ", districts)

            districtDropDown = <LocationDropDown defaultLabel="Hello เขต/อำเภอ" locations={districts} selectedCallBack={this.selectedDistrict} />
        }

        if (this.state.selectedDistrict) {
            console.log("this.state.selectedDistrict.khwangs ", this.state.selectedDistrict.khwangs)
            let khwangs = this.state.selectedDistrict.khwangs;
            khwangDropDown = <LocationDropDown defaultLabel="แขวง/ตำบล" locations={khwangs} />
        }
        console.log("selectdProvince ", this.state.selectdProvince);
        console.log("selectedDistrict ", this.state.selectedDistrict);
        return (
            <div>
                <LocationDropDown defaultLabel="จังหวัด" locations={this.provinces} selectedCallBack={this.selectdProvince} />
                {/* <LocationDropDown defaultLabel="เขต/อำเภอ" locations={this.provinces} /> */}
                {districtDropDown}
                {khwangDropDown}
                {/* <LocationDropDown defaultLabel="แขวง/ตำบล" locations={this.provinces} /> */}
            </div>
        )
    }
}
export default ThaiLocationSelectForm