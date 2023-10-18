import React from 'react'
import './booking.css'
export default function Booking() {
  return (
    <>
      <div class="card carddesignn">
        <div class="card-body">
          <h5 class="card-title titlecenter">BOOK YOUR EVENT</h5>
          <form>
            <div class="row">
              <div class="col-sm mt-2">
                <input type="text" class="form-control formstyle bg-transparent" placeholder="YOUR NAME"></input>
              </div>
              <div class="col-sm mt-2">
              <input type="email" class="form-control formstyle bg-transparent" placeholder="YOUR EMAIL"></input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm mt-2">
              <input type="tel" class="form-control formstyle bg-transparent" placeholder="PHONE NUMBER"></input>
              </div>
              <div class="col-sm mt-2">
              <input type="time" class="form-control formstyle bg-transparent" placeholder="TIME"></input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm mt-2">
              <input type="date" class="form-control formstyle bg-transparent" placeholder="DATE"></input>
              </div>
              <div class="col-sm mt-2">
              <input type="number" class="form-control formstyle bg-transparent" placeholder="NO. OF PERSONS"></input>
              </div>
            </div>
            <button type="submit" class="btn btn-light formbutton">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  )
}
