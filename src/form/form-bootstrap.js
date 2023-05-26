import React from 'react'

export default function Formbootstrap() {
const textPswd = React.useRef()
const textPswd2 = React.useRef()
const textmail =React.useRef()
const texttel = React.useRef()
const onBlurPassword=()=>{
    let pswd = textPswd.current.value
    if(pswd !==''&&!pswd.match(/^([0-9a-zA-Z]{8,20})+$/)){
        textPswd.current.value = ''
        alert('รหัสผ่านต้องเป็น0-9 หรือ A-Z เท่านั้น')
    }
}
const onBlurPassword2=()=>{
    if(textPswd2.current.value !== textPswd.current.value){
        textPswd2.current.value = ''
        alert('รหัสผ่านไม่ตรงกัน')
    }
}
const onBlurEmail=()=>{
    let email = textmail.current.value
    if(email !==''&&!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/)){
        textmail.current.value = ''
        alert('พิมเมลถูกๆ')
    }
}
const onBlurtel=()=>{
    let tel = texttel.current.value
    if(tel !==''&&!tel.match(/^([0-9]{10})+$/)){
        texttel.current.value = ''
        alert('กรอกเบอร์ไม่ถูก')
    }
}
  return (
    <div>
    <form action="/action_page.php">
<div class="mb-3 mt-3">
<label for="email" class="form-label">Email:</label>
<input type="email" class="form-control" id="email" placeholder="Enter email" name="email"ref={textmail}onBlur={onBlurEmail}/>
</div>
<div class="mb-3">
<label for="pwd" class="form-label">Password:</label>
<input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"ref={textPswd}onBlur={onBlurPassword}/>
</div>
<div class="mb-3">
<label for="pwd" class="form-label">Password Confirm:</label>
<input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd2"ref={textPswd2}onBlur={onBlurPassword2}/>
</div>
<div class="mb-3">
<label for="tel" class="form-label">Phone:</label>
<input type="Phone" class="form-control" id="tel" placeholder="Ex.0999999999" name="tel"ref={texttel}onBlur={onBlurtel}/>
</div>
<div class="form-check mb-3">
<label class="form-check-label">
  <input class="form-check-input" type="checkbox" name="remember"/> Remember me
</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>
)
}