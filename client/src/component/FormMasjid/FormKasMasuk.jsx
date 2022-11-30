import axios from 'axios'
import React, { Component, Fragment } from 'react'

class FormKasMasuk extends Component {
  state = {
    formData: {
      jenisKas: "Masuk",
      ket: "",
      jumlah: ""
    },
    message: ""
  }

  addDataToAPI = () => {
    axios.post("http://localhost:5000/kas/create", this.state.formData)
      .then(res => {
        const message = res.data.message;
        this.setState({
          formData: {
            jenisKas: "Masuk",
            ket: "",
            jumlah: ""
          },
          message: message
        })
      })
  }

  handleFormChange = (event) => {
    let formDataNew = {...this.state.formData};
    formDataNew[event.target.name] = event.target.value;

    this.setState({
      formData: formDataNew
    })
  }

  handleSubmit = () => {
    this.addDataToAPI()
  }
  render() {
    return (
      <Fragment>
        <form>
          <div className="row justify-content-center mb-3">
            <div className="col-4">
              <input type="text" className="form-control" id="recipient-name" name='ket' placeholder='Keterangan' onChange={this.handleFormChange} />
            </div>
            <div className="col-4">
              <input type="number" className="form-control" id="recipient-name" name='jumlah' placeholder='jumlah' onChange={this.handleFormChange} />
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <div className="col-4">
            <p className="message">{this.state.message}</p>
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default FormKasMasuk;
