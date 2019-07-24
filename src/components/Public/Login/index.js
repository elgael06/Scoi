import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const eventLogin = e => {
    onLogin(true);
    e.preventDefault();
  };

  return (
    <div class="row justify-content-center">

    <div class="col-xl-4 col-lg-8 col-md-6">

      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          
          <div class="row">
            <div class="col-lg-12">
              <div class="p-5">
                <div class="text-center">
                  <i class="fas fa-calendar" style={{fontSize:"27sp"}}></i>
                  <h1 class="h4 text-gray-900 mb-4">Bienvenido Iniciar Sesion.</h1>
                </div>
                <form class="user">
                  <div class="form-group">
                    <input type="email" class="form-control form-control-user" 
                    id="exampleInputEmail" aria-describedby="emailHelp" 
                    placeholder="Enter Email Address..." />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-user" 
                    id="exampleInputPassword" placeholder="Password" />
                  </div>
                  <div class="form-group">
                  </div>
                  <i class="btn btn-primary btn-user btn-block" onClick={eventLogin}>
                    Login
                  </i>
                </form>
                <hr />
                <div class="text-center">
                  <a class="small" href="#">Forgot Password?</a>
                </div>
                <div class="text-center">
                  <a class="small" href="#">Create an Account!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
