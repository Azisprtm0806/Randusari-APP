import React, { useEffect, Fragment } from 'react'
import AOS from "aos"
import "aos/dist/aos"
import "./Home.css"
import Navbar from '../../../component/Navbar/Navbar';

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, []);
  return (
    <Fragment>
      <Navbar />
      <section id="dashboard">
        <div className="container-xl">
          <h3 class="pt-5 text-center">Dashboard</h3>
          <hr />
          <div class="row justify-content-center text-center">
            <div class="col-md-3">
              <div class="card text-white bg-primary mb-3" data-aos="fade-up" >
                  <div class="card-header">Profile</div>
                  <div class="card-body">
                      <h5 class="card-title">Primary card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card text-white bg-secondary mb-3" data-aos="fade-up" >
                  <div class="card-header">Keuangan Masjid</div>
                  <div class="card-body">
                      <h5 class="card-title">Primary card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card text-white bg-success mb-3" data-aos="fade-up" >
                  <div class="card-header">Keuangan Musholah</div>
                  <div class="card-body">
                  <h5 class="card-title">Primary card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card text-white bg-danger mb-3" data-aos="fade-up" >
                  <div class="card-header">Masyarakat</div>
                  <div class="card-body">
                    <h5 class="card-title">Primary card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </Fragment>
  )
}

export default Home