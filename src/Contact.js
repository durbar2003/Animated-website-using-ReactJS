import React, {useState} from 'react';

const Contact=()=>{
    const [data, setData]=useState({
    email:'',
    password:''
    })
    const inputEvent=(event)=>{
        const{email,password}=event.target;
    }
    const formSubmit=()=>{};
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6  col-10 col-mx-auto">
        <form onSubmit={formSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" name="email" value={data.email} onChange={InputEvent}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" name="password" value={data.password} onChange={InputEvent}>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</div>
        </>);
};
export default Contact;