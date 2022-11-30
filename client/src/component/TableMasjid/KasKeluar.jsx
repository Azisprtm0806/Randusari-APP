import axios from 'axios'
import React, { Component, Fragment } from 'react'
import DataKeluar from './DataMasjid/DataKeluar'

export class KasKeluar extends Component {
  state = {
    dataKasKeluar: [],
    message: ""
  }

  getDataAPI = () => {
    axios.get("http://localhost:5000/kas/kas-keluar")
      .then(res => {
        this.setState({
          dataKasKeluar: res.data.data
        })
      })
  }

  deleteToAPI = (id) => {
    axios.delete(`http://localhost:5000/kas/delete/${id}`)
      .then(res => {
        const message = res.data.message
        this.setState({
          message: message
        })
        this.getDataAPI()
      })
  }

  componentDidMount(){
    this.getDataAPI()
  }
  render() {
    return (
      <Fragment>
        <p className="message">{this.state.message}</p>
        <table class="table table-striped table-hover">
          <thead>
              <tr>
                <th scope="col">Keterangan</th>
                <th scope="col">tanggal</th>
                <th scope="col">Jumlah</th>
                <th scope="col">action</th>
              </tr>
          </thead>
          <tbody>
              {
                this.state.dataKasKeluar.map(data => {
                  return <DataKeluar key={data._id} data={data} delete={this.deleteToAPI} />
                })
              }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default KasKeluar