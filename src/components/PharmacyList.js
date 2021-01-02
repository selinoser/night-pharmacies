import React from 'react'

const PharmacyList = (pharmacyList) => {
    if(pharmacyList.pharmacyList.length > 0) {
        return (
            <div className="row">
                {
                    pharmacyList.pharmacyList.filter(data => {
                        if(pharmacyList.searchVal == null)
                            return data
                        else if(data.eczane_adres.toLowerCase().includes(pharmacyList.searchVal.toLowerCase()) || data.eczane_ilce.toLowerCase().includes(pharmacyList.searchVal.toLowerCase())){
                            return data
                        }
                    })
                    .map(item => {
                        console.log(item)
                        return(
                            <div className="col-md-6" key={item.eczane_adres}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title d-flex align-items-center">
                                            <img src="https://www.aeo.org.tr/Helpers/DuyuruIcon.ashx?yayinyeri=sayfaicerik&Id=36690" style={{width: "23px", marginRight: "10px"}} alt="Nöbetçi Eczaneler"/>
                                            {item.eczane_adi} ({item.eczane_ilce})
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td style={{width: "100px"}}><strong>Adresi</strong></td>
                                                    <td>{item.eczane_adres}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Telefon</strong></td>
                                                    <td>{item.eczane_telefon}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }else {
        return(
            <div className="col-12 text-center">
                <h5 className="text-danger">Nöbetçi eczaneleri listelemek için il seçiniz...</h5>
            </div>
        )
    }
}

export default PharmacyList;
