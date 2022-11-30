import axios from 'axios'
import React, { Component, Fragment } from 'react'
import DataRekap from './DataMasjid/DataRekap'

export class RekapKas extends Component {
  state= {
    dataRekapKas: []
  }

  getDataAPI = () => {
    axios.get("http://localhost:5000/kas/rekap-kas")
      .then(res => {
        this.setState({
          dataRekapKas: res.data.data
        })
      })
      .catch(err => console.log(err))
  }
  componentDidMount(){
    this.getDataAPI()
  }
  render() {
    return (
      <Fragment>
        <table class="table table-striped table-hover">
          <thead>
              <tr>
                <th scope="col">Jenis Kas</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Tanggal</th>
                <th scope="col">Jumlah</th>
              </tr>
          </thead>
          <tbody>
              {
                this.state.dataRekapKas.map(data => {
                  return <DataRekap key={data._id} data={data} />
                })
              }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default RekapKas