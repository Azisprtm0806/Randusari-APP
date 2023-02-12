import React, { Component, Fragment } from 'react'
import Navbar from '../../../component/Navbar/Navbar'
import "./Masjid.css"

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import KasMasuk from '../../../component/TableMasjid/KasMasuk'
import KasKeluar from '../../../component/TableMasjid/KasKeluar'
import RekapKas from '../../../component/TableMasjid/RekapKas'
import FormKasMasuk from '../../../component/FormMasjid/FormKasMasuk'
import FormKasKeluar from '../../../component/FormMasjid/FormKasKeluar'

class Masjid extends Component {
  render() {
    return (
      <Fragment>
      < Navbar />
      <section id="dashboard">
        <div class="container-xl">
          <h3 class="pt-5 text-center">KEUANGAN KAS MASJID AL-AMIN</h3>
          <hr />
          <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="card text-center mb-6">
              <Tabs defaultActiveKey="masuk" id="uncontrolled-tab-example" className='mb-3'>
                <Tab eventKey="masuk" title="Kas Masuk">
                  <div className="card-title">Kas Masuk</div>
                  <FormKasMasuk />
                  <div className='total-kas'>
                    <h4>Total Pemasukan : <span>Rp.5000</span></h4>
                  </div>
                  <KasMasuk />
                </Tab>
                <Tab eventKey="keluar" title="Kas Keluar">
                  <div className="card-title">Kas Keluar</div>
                  <FormKasKeluar />
                  <KasKeluar />
                </Tab>
                <Tab eventKey="rekap" title="Rekap Kas">
                  <div className="card-title">Rekap Kas</div>
                  <RekapKas />
                </Tab>
              </Tabs>
            </div>
          </div>
          </div>
        </div>
      </section>
    </Fragment>
    )
  }
}

export default Masjid