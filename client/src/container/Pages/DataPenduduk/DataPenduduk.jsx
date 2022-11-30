import axios from 'axios'
import React, { Component, Fragment } from 'react'
import Modal from '../../../component/Modal/Modal'
import Navbar from '../../../component/Navbar/Navbar'
import TablePddk from '../../../component/TablePddk/TablePddk'
import "./DataPenduduk.css"

class DataPenduduk extends Component {
  state = {
    dataPenduduk: []
  }

  getDataAPI = () => {
    axios.get("http://localhost:5000/warga/get")
      .then((res) => {
        this.setState({
          dataPenduduk: res.data.data
        })
      })
      .catch(err => console.log(err))
  }

  DeleteDataAPI = (id) => {
    axios.delete(`http://localhost:5000/warga/delete/${id}`)
      .then(res => this.getDataAPI())
  }

  componentDidMount() {
    this.getDataAPI();
  }
  render() {
    return (
      <Fragment>
        < Navbar />
        <section id="dashboard">
          <div className="container-xl">
            <h3 className="pt-5 text-center">Data Penduduk</h3>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-body p-5">
                    {/* Modal */}
                    <Modal />
                    {/* END MODAL */}

                    {/* SEARCH */}
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    {/* END Search */}

                    {/* Table */}
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Nama</th>
                          <th scope="col">Tempat Tgl Lahir</th>
                          <th scope="col">No HP</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.dataPenduduk.map(data => {
                            return <TablePddk key={data.id} data={data} delete={this.DeleteDataAPI} />
                          })
                        }
                      </tbody>
                    </table>
                    {/* END TABLE */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default DataPenduduk