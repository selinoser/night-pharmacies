import React from 'react'
import axios from 'axios';
import city from './City';
import { Link } from "react-router-dom";
import PharmacyList from './PharmacyList';

const initialState = {
    pharmacy : [],
    search: null,
    cities: city
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onClickHandler = this.onClickHandler.bind(this);
        this.searchSpace = this.searchSpace.bind(this);
    }

    onClickHandler(plakaNo) {
        axios.get("http://api.kodlama.net/eczane/il/" + plakaNo)
        .then((res)=> {
            this.setState({
                pharmacy: Object.values(res.data.data)
            })
        })
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({
            search:keyword
        })
    }

    render() {
        return(
            <div className="content">
                <div className="sidebar">
                    <div className="scrollbar-inner sidebar-wrapper">
                        <ul className="nav">
                        {
                            this.state.cities.map(item => {
                                return(
                                    <li className="nav-item" key={item.plaka}>
                                        <Link to="" onClick={(e) => this.onClickHandler(item.plaka)}>
                                            <p>{ item.plaka + "-" +  item.il}</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className="main-panel">
                    <div className="content">
                        <div className="container-fluid">
                            {/* Search Area */}
                            {
                                this.state.pharmacy.length > 0 ? (
                                    <div className="row">
                                        <div className="input-group col-12 mb-3">
                                            <input type="text" placeholder="Adres ya da ilçe ara..." className="form-control" onChange={(e)=>this.searchSpace(e)}  />
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="la la-search search-icon"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            }
                            {/* Pharmacy List  */}
                            <PharmacyList pharmacyList={this.state.pharmacy} searchVal={this.state.search}></PharmacyList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;