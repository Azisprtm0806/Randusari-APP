import React, { Fragment } from 'react'
import Navbar from '../../../component/Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import "./DataPenduduk.css"
import { Component } from 'react'

function withParams(Component){
  return props => <Component {...props} params={useParams()}  />
}

class EditPenduduk extends Component{
  state = {
    data : {
      id: "",
      nama: "",
      tempat: "",
      tglLahir: "",
      noHp: "",
      status: "",
    },
    message: ""
  }

  putDataApi = () => {
    axios.put(`http://localhost:5000/warga/edit/${this.state.data.id}`, this.state.data)
      .then(res => {
        const message = res.data.message;
        this.setState({
          message: message
        })
      })
  }


  handleFormChange = (event) => {
    let formData = {...this.state.data}
    formData[event.target.name] = event.target.value;

    this.setState({
      data: formData
    })
  }

  handleSubmit = () => {
    this.putDataApi()
  }
  
  getOnedata = () => {
   const {id} = this.props.params;
   axios.get(`http://localhost:5000/warga/findOne/${id}`)
    .then(res => {
      let data = res.data.data;
      this.setState({
        data:{
          id: data._id,
          nama: data.nama,
          tempat: data.tempat,
          tglLahir: data.tglLahir,
          noHp: data.noHp,
          status: data.status,
        }
      })
    })
  }

  componentDidMount(){
    this.getOnedata()
  }

  render(){
    return(
      <Fragment>
      <Navbar />
      <h3 className="pt-5 text-center">Edit Data</h3>
      <p className="message">{this.state.message}</p>
      <hr />
      <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body p-5">
                  <form>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Nama</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1"
                        name='nama' value={this.state.data.nama} onChange={this.handleFormChange} />
                    </div>
                    <div className="row justify-content-start mb-3">
                      <label for="recipient-name" className="col-form-label">Tempat & Tanggal Lahir</label>
                      <div className="col-4">
                        <input type="text" className="form-control" id="recipient-name" name='tempat' value={this.state.data.tempat} onChange={this.handleFormChange} />
                      </div>
                      <div className="col-4">
                      <input type="text" className="form-control" id="recipient-name" name='tglLahir' value={this.state.data.tglLahir} onChange={this.handleFormChange}
                       />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">No HP</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" 
                       name="noHp" value={this.state.data.noHp} onChange={this.handleFormChange} />
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Status</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" 
                       name="status" value={this.state.data.status} onChange={this.handleFormChange}  />
                    </div>
                  <div className="row justify-content-center btn-edit">
                    <div className="col-4">
                      <Link to="/data-penduduk">
                        <button type="button" className="btn btn-danger">Cancel</button>
                      </Link>
                    </div>
                    <div className="col-4">
                      <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}

export default withParams(EditPenduduk)
