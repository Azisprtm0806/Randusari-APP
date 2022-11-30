import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../../../component/Navbar/Navbar'

function withParams(Component){
  return props => <Component {...props} params={useParams()}  />
}

class EditKasMasuk extends Component {
  state = {
    data : {
      id: "",
      ket: "",
      jumlah: "",
      jenisKas: "Masuk",
    },
    message: ""
  }

  putDataToAPI = () => {
    axios.put(`http://localhost:5000/kas/edit/${this.state.data.id}`, this.state.data)
      .then(res => {
        const message = res.data.message;
        this.setState({
          message: message
        })
      })
  }

  handleFormChange = (event) => {
    let formData = {...this.state.data}
    formData[event.target.name] = event.target.value

    this.setState({
      data: formData
    })
  }

  onSubmit = () => {
    this.putDataToAPI()
  }

  getOneData = () => {
    const {id} = this.props.params
    axios.get(`http://localhost:5000/kas/findOne/${id}`)
      .then(res => {
        let data = res.data.data
        this.setState({
          data : {
            id: data._id,
            ket: data.ket,
            jumlah: data.jumlah,
            jenisKas: "Masuk",
          },
        })
        
      })
  }
  componentDidMount(){
    this.getOneData()
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <h3 className="pt-5 text-center">Edit Data</h3>
        <hr />
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body p-5">
              <p className="message">{this.state.message}</p>
                <form>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Keterangan</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                      name='ket' value={this.state.data.ket} onChange={this.handleFormChange} />
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Jumlah</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                      name='jumlah' value={this.state.data.jumlah} onChange={this.handleFormChange} />
                  </div>
                  
                <div className="row justify-content-center btn-edit">
                  <div className="col-4">
                    <Link to="/kas-masjid">
                      <button type="button" className="btn btn-danger">Cancel</button>
                    </Link>
                  </div>
                  <div className="col-4">
                    <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Save</button>
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

export default withParams(EditKasMasuk)
