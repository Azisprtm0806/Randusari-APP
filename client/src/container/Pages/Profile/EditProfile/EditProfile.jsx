import React, { Component } from 'react'
import { Fragment } from 'react'
import Navbar from '../../../../component/Navbar/Navbar'
import "./EditProfile.css"

class EditProfile extends Component {

  render() {
    return (
      <Fragment>
        <Navbar />
        <section id="dashboard">
          <div class="container-xl">
              <h3 class="pt-5 text-center">Edit Profile</h3>
              <hr />
              <div class="row justify-content-center">
                  <div class="col-md-8">
                    <div class="card">
                      <div class="card-body p-5">
                        <div class="mb-3 row">
                          <label for="nama" class="col-sm-2 col-form-label">Nama</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" id="nama" />
                          </div>
                        </div>
                        <div class="mb-3 row">
                          <label for="user" class="col-sm-2 col-form-label">Username</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" id="user" />
                          </div>
                        </div>
                        <div class="mb-3 row">
                          <label for="email" class="col-sm-2 col-form-label">Email</label>
                          <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" />
                          </div>
                        </div>
                        <div class="mb-3 row">
                          <label for="foto" class="col-sm-2 col-form-label">Foto</label>
                          <input class="form-control foto" type="file" id="foto" />
                        </div>
                        <div class="d-grid gap-2 d-md-block">
                          <a href="profile.html">
                            <button type="button" class="btn btn-outline-danger">Kembali</button>
                            </a>
                          <button type="button" class="btn btn-1 btn-outline-info">Edit</button>
                        </div>
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

export default EditProfile