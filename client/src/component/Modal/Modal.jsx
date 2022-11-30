import axios from 'axios'
import React, {Component, Fragment } from 'react'

class Modal extends Component {
  state = {
    data: [],
    formData: {
      nama: "",
      tempat: "",
      tglLahir: "",
      noHp: "",
      status: ""
    },
    message: ""
  }

  addDataToAPI = () => {
    axios.post("http://localhost:5000/warga/create", this.state.formData)
      .then(res => {
        const message = res.data.message;
        this.setState({
          formData: {
            nama: "",
            tempat: "",
            tglLahir: "",
            noHp: "",
            status: ""
          },
          message: message
        })
      })
      .catch(err => console.log(err))  
  }

  handleFormChane = (event) => {
    let formDataNew = {...this.state.formData};
    formDataNew[event.target.name] = event.target.value;

    this.setState({
      formData: formDataNew
    })
  }

  handleSubmit = () => {
    this.addDataToAPI();
  }

  render(){
    return(
      <Fragment>
       <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop ">
          Tambah Data
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Input Data</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <form>
                      <div className="mb-3">
                        <label for="recipient-name" className="col-form-label">Nama</label>
                        <input type="text" className="form-control" id="recipient-name" name='nama' onChange={this.handleFormChane} />
                      </div>
                      <div className="row justify-content-start mb-3">
                        <label for="recipient-name" className="col-form-label">Tempat & Tanggal Lahir</label>
                        <div className="col-4">
                          <input type="text" className="form-control" id="recipient-name" name='tempat' onChange={this.handleFormChane} />
                        </div>
                        <div className="col-4">
                        <input type="date" className="form-control" id="recipient-name" name='tglLahir' onChange={this.handleFormChane} />
                        </div>
                      </div>
                      <div className=" mb-3">
                        <label for="autoSizingInputGroup" className="col-form-label">No HP</label>
                          <div className="input-group">
                            <div className="input-group-text">+62</div>
                            <input type="text" className="form-control" name='noHp'
                            onChange={this.handleFormChane}
                            id="autoSizingInputGroup"/>
                          </div>
                      </div>
                      <div className="mb-3">
                        <label for="recipient-name" className="col-form-label">Pekerjaan</label>
                        <input type="text" className="form-control" id="recipient-name" name='status' onChange={this.handleFormChane} />
                      </div>
                      <p className="message">{this.state.message}</p>
                  </form>
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Modal