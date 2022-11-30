import React from 'react'
import "./ButtonGroup.css"

function ButtonGroup(props) {
  return (
    <section id="pilih">
      <div class="container-xl">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card" data-aos="fade-up">
            <div class="card-body p-5">
              <h3 class="text-center">{props.title}</h3>
                <hr />
                <a href={props.LinkKasMasuk}>
                    <button type="button" class="btn btn-outline-info">Kas Masuk</button>
                </a>
                <a href={props.LinkKasKeluar}>
                    <button type="button" class="btn btn-outline-danger">Kas Keluar</button>
                </a>
                <a href={props.LinkRekap}>
                    <button type="button" class="btn btn-outline-success">Rekap</button>
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ButtonGroup