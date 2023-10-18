import React, { useState } from 'react'
import './nav.css'
export default function Navbar() {

  function ani() {
    document.getElementById('anim').className = 'classname';
}

function closediv() {
    document.getElementById('anim').className = 'no';

}

const [state, setState] = useState({})

const inputChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
}

const submit = () => {
    console.log(state);
}
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">RC.G</a>
    <button class="navbar-toggler bg2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href='/About'>About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" onClick={ani} >Login</a>
        </li>
        {/* <input name="" type="button" className='clicker'  value="login"></input> */}

      </ul>
      
    </div>
  </div>
</nav>
<div id='anim'>
                <div class="mod">
                    <div class="modal-content modback">
                        <div class="modal-header">
                            <h5 class="modal-title text-white" id="staticBackdropLabel">LOGIN HERE!</h5>
                            <button type="button" class="close-div" onClick={closediv}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <form className='modleft'>
                                <div class="form-group" style={{marginBottom:'40px'}}>
                                    <label for="exampleInputEmail1 " className='text-white'>Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" name='username' aria-describedby="emailHelp" onChange={inputChange}></input>
                                    <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label className='modleft text-white' >Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={inputChange}></input>
                                </div>
                                <label className='text-white'>Don't have account ? </label><a className='ml-3' href='/sighnup' >SIGN UP</a>

                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary btn-login" onClick={submit} >Login</button>
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}
