import axios from 'axios'
import React, { Component, Fragment } from 'react'
import DataMasuk from './DataMasjid/DataMasuk'

export class KasMasuk extends Component {
  state = {
    dataKasMasuk: [],
    message: ""
  }

  getDataAPI = () => {
    axios.get(`http://localhost:5000/kas/kas-masuk`)
      .then(res => {
        this.setState({
          dataKasMasuk: res.data.data
        })
      })
      .catch(err => console.log(err))
  }

  deleteDataToAPI = (id) => {
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
    this.getDataAPI();
  }
  render() {
    return (
      <Fragment>
        <p className="message">{this.state.message}</p>
        <table className="table table-striped table-hover">
          <thead>
              <tr>
                <th scope="col">Keterangan</th>
                <th scope="col">Tanggal</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Action</th>
              </tr>
          </thead>
          <tbody>
              {
                this.state.dataKasMasuk.map(data => {
                  return <DataMasuk key={data._id} data={data} delete={this.deleteDataToAPI} />
                })
              }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default KasMasuk