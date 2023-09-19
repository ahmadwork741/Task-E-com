"use strict";(self.webpackChunkdashboardUI=self.webpackChunkdashboardUI||[]).push([[869],{9869:(Zt,x,a)=>{a.r(x),a.d(x,{SignInModule:()=>yt});var m=a(9808),s=a(3075),p=a(6696),v=a(520);function Z(o,r){return e=>{const i=e.controls[r];i.errors&&!i.errors.confirmedValidator||i.setErrors(e.controls[o].value!==i.value?{confirmedValidator:!0}:null)}}var t=a(5e3),w=a(570),u=a(839),f=a(8330),_=a(3188);function S(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function F(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Email is invalid"),t.qZA())}function U(o,r){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,S,2,0,"div",7),t.YNc(2,F,2,0,"div",7),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.email)}}const h=function(o){return{"is-invalid":o}};function k(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"form",2)(1,"tm-form-field"),t._UZ(2,"input",3),t.YNc(3,U,3,2,"div",4),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.signIn())}),t._uU(5,"Send OTP"),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.signInForm),t.xp6(2),t.Q6J("ngClass",t.VKq(4,h,e.submitted&&e.f.email.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.email.errors),t.xp6(1),t.Q6J("disabled",e.show)}}function M(o,r){1&o&&(t.TgZ(0,"div",13),t._uU(1,"OTP Send Successfully"),t.qZA())}function q(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"OTP is required"),t.qZA())}function O(o,r){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,q,2,0,"div",7),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.otpform.otp.errors?null:e.otpform.otp.errors.required)}}function N(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"form",8)(1,"tm-form-field"),t._UZ(2,"input",9),t.TgZ(3,"a",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.resendOTP())}),t._uU(4,"Resend OTP"),t.qZA(),t.YNc(5,M,2,0,"div",11),t.YNc(6,O,2,1,"div",4),t.qZA(),t.TgZ(7,"button",12),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.forgotPassword())}),t._uU(8,"Submit"),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.otpForm),t.xp6(2),t.Q6J("ngClass",t.VKq(4,h,e.otpSubmitted&&e.otpform.otp.errors)),t.xp6(3),t.Q6J("ngIf",e.otpMessageSuccess),t.xp6(1),t.Q6J("ngIf",e.otpSubmitted&&e.otpform.otp.errors)}}function J(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function A(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function Y(o,r){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,J,2,0,"div",7),t.YNc(2,A,2,0,"div",7),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.password.errors?null:e.passwordRecover.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.password.errors?null:e.passwordRecover.password.errors.minlength)}}function Q(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function R(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function L(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Password does not match "),t.qZA())}function E(o,r){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,Q,2,0,"div",7),t.YNc(2,R,2,0,"div",7),t.YNc(3,L,2,0,"div",7),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.confirmPassword.errors?null:e.passwordRecover.confirmPassword.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.confirmPassword.errors?null:e.passwordRecover.confirmPassword.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==e.passwordRecover.confirmPassword.errors?null:e.passwordRecover.confirmPassword.errors.confirmedValidator)}}function B(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"form",8)(1,"tm-form-field"),t._UZ(2,"input",14),t.TgZ(3,"button",15),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.toggleShowPassword())}),t._UZ(4,"i"),t.qZA(),t.YNc(5,Y,3,2,"div",4),t.qZA(),t.TgZ(6,"tm-form-field"),t._UZ(7,"input",16),t.TgZ(8,"button",15),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.toggleConformPassword())}),t._UZ(9,"i"),t.qZA(),t.YNc(10,E,4,3,"div",4),t.qZA(),t.TgZ(11,"button",17),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.recoverPassword())}),t._uU(12,"Submit"),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.passwordForm),t.xp6(2),t.Q6J("type",e.getInputType())("ngClass",t.VKq(13,h,e.recover&&e.passwordRecover.password.errors)),t.xp6(2),t.Tol(e.showPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",e.showPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",e.recover&&e.passwordRecover.password.errors),t.xp6(2),t.Q6J("type",e.getInputconformPassType())("ngClass",t.VKq(15,h,e.recover&&e.passwordRecover.confirmPassword.errors)),t.xp6(2),t.Tol(e.conformPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",e.conformPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",e.recover&&e.passwordRecover.confirmPassword.errors)}}let V=(()=>{class o{constructor(e,n,i,c,d){this.formBuilder=e,this.router=n,this.apiService=i,this.route=c,this._http=d,this.submitted=!1,this.recover=!1,this.show=!1,this.showEmail=!1,this.otpMessage="Send OTP",this.otpSubmitted=!1,this.httpOptions={headers:new v.WM({"Content-Type":"application/json"})},this.showPassword=!0,this.passwordMatch=!1,this.conformPassword=!0}ngOnInit(){this.signInForm=this.formBuilder.group({email:["",[s.kI.required,s.kI.email]]}),this.otpForm=this.formBuilder.group({otp:["",[s.kI.required]]}),this.passwordForm=this.formBuilder.group({password:["",[s.kI.required,s.kI.minLength(6),s.kI.maxLength(40)]],confirmPassword:["",[s.kI.required,s.kI.minLength(6),s.kI.maxLength(40)]]},{validator:Z("password","confirmPassword")})}getInputType(){return this.showPassword?"password":"text"}getInputconformPassType(){return this.conformPassword?"password":"text"}toggleShowPassword(){this.showPassword=!this.showPassword}toggleConformPassword(){this.conformPassword=!this.conformPassword}signIn(){this.submitted=!0,!this.signInForm.invalid&&(this.email=this.signInForm.value.email,console.log(this.email),this.submitted&&(this.otpMessage="Resend OTP"),(this.otpMessage="Resend OTP")&&(this.show=!0),this._http.get("https://template-json-server.vercel.app/api/usersData").subscribe(e=>{e.find(i=>{if(i.email===this.signInForm.value.email)return this.id=i.id,this.email=i.email})}))}resendOTP(){this.otpMessageSuccess=!0}forgotPassword(){this.otpSubmitted=!0,!this.otpForm.invalid&&this.otpSubmitted&&(this.showEmail=!this.showEmail,this.show=!1)}recoverPassword(){this.recover=!0,!this.passwordForm.invalid&&(this.apiService.update(this.id,this.passwordForm.value).subscribe(e=>{console.log("Post updated successfully!"),this.router.navigateByUrl("/auth/sign-in")}),this.router.navigate(["/auth/sign-in"]))}get f(){return this.signInForm.controls}get passwordRecover(){return this.passwordForm.controls}get otpform(){return this.otpForm.controls}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(p.F0),t.Y36(w.e),t.Y36(p.gz),t.Y36(v.eN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-forgot-password"]],decls:5,vars:3,consts:[["class","signinForm","action","",3,"formGroup",4,"ngIf"],["class","signinForm",3,"formGroup",4,"ngIf"],["action","",1,"signinForm",3,"formGroup"],["type","email","shape","semi-round","formControlName","email","fullWidth","","placeholder","Email","tmInput","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["shape","semi-round","tmButton","","status","primary","fullWidth","",3,"disabled","click"],[1,"invalid-feedback"],[4,"ngIf"],[1,"signinForm",3,"formGroup"],["type","email","shape","semi-round","formControlName","otp","fullWidth","","placeholder","OTP","tmInput","",1,"form-control",3,"ngClass"],[3,"click"],["class","successMessage",4,"ngIf"],["shape","semi-round","status","primary","tmButton","",3,"click"],[1,"successMessage"],["shape","semi-round","placeholder","New Password","fullWidth","","formControlName","password","tmInput","",1,"form-control",3,"type","ngClass"],["tmSuffix","","tmButton","","ghost","",3,"click"],["shape","semi-round","placeholder","Confirm New Password","fullWidth","","formControlName","confirmPassword","tmInput","",1,"form-control",3,"type","ngClass"],["status","primary","tmButton","",3,"click"]],template:function(e,n){1&e&&(t._UZ(0,"br"),t.YNc(1,k,6,6,"form",0),t._UZ(2,"br"),t.YNc(3,N,9,6,"form",1),t.YNc(4,B,13,17,"form",1)),2&e&&(t.xp6(1),t.Q6J("ngIf",!n.showEmail),t.xp6(2),t.Q6J("ngIf",n.show),t.xp6(1),t.Q6J("ngIf",n.showEmail))},dependencies:[m.mk,m.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.Xw,u.As,f.J,_.rF],styles:[".signinForm[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;text-align:left}.signinForm[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]{color:red}.signinForm[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%]{border-color:red;color:red}.signinForm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.signinForm[_ngcontent-%COMP%]   .successMessage[_ngcontent-%COMP%]{text-align:center;color:green}"]}),o})();var T=a(3183),l=a(7206);let b=(()=>{class o{constructor(){this.key="DoverDigitalHydr",this.IV="MTIzNDU2Nzg="}encryptUsingTripleDES(e,n){const i=n?JSON.stringify(e):e,c=l.enc.Utf8.parse(this.key),d=l.enc.Utf8.parse(this.IV);return l.TripleDES.encrypt(i,c,{iv:d,mode:l.mode.CBC}).toString()}decryptUsingTripleDES(e){const n=l.enc.Utf8.parse(this.key),i=l.enc.Utf8.parse(this.IV);return l.TripleDES.decrypt(e,n,{iv:i,mode:l.mode.CBC}).toString(l.enc.Utf8)}encryptUsingAES(e,n){const i=n?JSON.stringify(e):e,c=l.MD5(this.key).toString();return l.AES.encrypt(i,c).toString()}decryptUsingAES(e){const n=l.MD5(this.key).toString();return l.AES.decrypt(e,n).toString(l.enc.Utf8)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function D(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function W(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Email is invalid"),t.qZA())}function K(o,r){if(1&o&&(t.TgZ(0,"div",8),t.YNc(1,D,2,0,"div",9),t.YNc(2,W,2,0,"div",9),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.email)}}function H(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function G(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function j(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Username must not exceed 40 characters "),t.qZA())}function $(o,r){if(1&o&&(t.TgZ(0,"div",8),t.YNc(1,H,2,0,"div",9),t.YNc(2,G,2,0,"div",9),t.YNc(3,j,2,0,"div",9),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.minlength),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.maxlength)}}const P=function(o){return{"is-invalid":o}};let I=(()=>{class o{constructor(e,n,i,c,d,C){this.toastrService=e,this.encryption=n,this.formBuilder=i,this.router=c,this._http=d,this.apiService=C,this.submitted=!1,this.showPassword=!0}ngOnInit(){console.log(this.encryption.encryptUsingTripleDES("123456",!0)),this.signInForm=this.formBuilder.group({email:["",[s.kI.required,s.kI.email]],password:["",[s.kI.required,s.kI.minLength(6),s.kI.maxLength(40)]]})}getInputType(){return this.showPassword?"text":"password"}toggleShowPassword(){this.showPassword=!this.showPassword}showToast(e){this.toastrService.success("Have a good day","Login Succesfully")}signIn(){this.submitted=!0,this.signInForm.value.password=this.encryption.encryptUsingTripleDES(this.signInForm.value.password,!0),!this.signInForm.invalid&&(this.router.navigate(["auth/sign-in"]),this._http.get("https://template-json-server.vercel.app/api/usersData").subscribe(e=>{const n=e.find(i=>i.email===this.signInForm.value.email&&i.password===this.signInForm.value.password);if(n){const i=n;n.status="online",this.toastrService.success("Have a good day","Login Succesfully"),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("currentuser",JSON.stringify(i)),this.signInForm.reset(),console.log(n.id),console.log(n.status),setTimeout(()=>{this.router.navigate(["/user"])},500)}else if("admin123@gmail.com"==this.f.email.value&&"admin@123"==this.f.password.value){const i=this.signInForm.value.email;localStorage.setItem("isAdminLoggedIn","true"),localStorage.setItem("adminValue",i),this.signInForm.reset(),this.toastrService.success("Have a good day","Login Succesfully"),setTimeout(()=>{this.router.navigate(["/admin/dashboard"])},500)}else this.toastrService.danger("Please check your Email and Password","User Not Found"),this.router.navigate(["auth/sign-in"])},e=>{this.toastrService.danger("Try Later","Something was wrong")}))}get f(){return this.signInForm.controls}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.qK),t.Y36(b),t.Y36(s.qu),t.Y36(p.F0),t.Y36(v.eN),t.Y36(w.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-log-in"]],decls:18,vars:13,consts:[["action","",1,"signinForm",3,"formGroup"],["type","email","shape","semi-round","formControlName","email","fullWidth","","placeholder","Email","tmInput","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["shape","semi-round","placeholder","password","fullWidth","","formControlName","password","tmInput","",1,"form-control",3,"type","ngClass"],["tmSuffix","","tmButton","","ghost","",3,"click"],["shape","semi-round","tmButton","","status","primary","fullWidth","",3,"click"],["routerLink","/auth/sign-up"],["routerLink","/auth/forgot-passsword"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,n){1&e&&(t._UZ(0,"br"),t.TgZ(1,"form",0)(2,"tm-form-field"),t._UZ(3,"input",1),t.YNc(4,K,3,2,"div",2),t.qZA(),t.TgZ(5,"tm-form-field"),t._UZ(6,"input",3),t.TgZ(7,"button",4),t.NdJ("click",function(){return n.toggleShowPassword()}),t._UZ(8,"i"),t.qZA(),t.YNc(9,$,4,3,"div",2),t.qZA(),t.TgZ(10,"button",5),t.NdJ("click",function(){return n.signIn()}),t._uU(11,"Sign In"),t.qZA(),t.TgZ(12,"p"),t._uU(13," Don't have an account? "),t.TgZ(14,"a",6),t._uU(15,"register here"),t.qZA()(),t.TgZ(16,"a",7),t._uU(17,"Forgot Password"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.signInForm),t.xp6(2),t.Q6J("ngClass",t.VKq(9,P,n.submitted&&n.f.email.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.email.errors),t.xp6(2),t.Q6J("type",n.getInputType())("ngClass",t.VKq(11,P,n.submitted&&n.f.password.errors)),t.xp6(2),t.Tol(n.showPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",n.showPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.password.errors))},dependencies:[m.mk,m.O5,p.yS,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.Xw,u.As,f.J,_.rF],styles:[".signinForm[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;text-align:left}.signinForm[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]{color:red}.signinForm[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%]{border-color:red;color:red}.signinForm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}tm-card[_ngcontent-%COMP%]{width:400px;position:relative;background-color:#fff;border-radius:10px;padding:20px}tm-card[_ngcontent-%COMP%]   .userTableHeader[_ngcontent-%COMP%]{position:absolute;border-radius:7px;background:#3366ff;color:#fff;font-weight:800;width:240px;height:40px;padding:8px;text-align:center;top:-20px;left:80px;z-index:1}"]}),o})();var y=a(6776);function z(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"UserName is required"),t.qZA())}function X(o,r){if(1&o&&(t.TgZ(0,"div",10),t.YNc(1,z,2,0,"div",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.userName.errors?null:e.f.userName.errors.required)}}function tt(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function et(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Email is invalid"),t.qZA())}function ot(o,r){if(1&o&&(t.TgZ(0,"div",10),t.YNc(1,tt,2,0,"div",11),t.YNc(2,et,2,0,"div",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.email.errors?null:e.f.email.errors.email)}}function nt(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Phone Number is required"),t.qZA())}function rt(o,r){if(1&o&&(t.TgZ(0,"div",10),t.YNc(1,nt,2,0,"div",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.phoneNumber.errors?null:e.f.phoneNumber.errors.required)}}function it(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function st(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Password must be at least 6 characters "),t.qZA())}function at(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Username must not exceed 40 characters "),t.qZA())}function lt(o,r){if(1&o&&(t.TgZ(0,"div",10),t.YNc(1,it,2,0,"div",11),t.YNc(2,st,2,0,"div",11),t.YNc(3,at,2,0,"div",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.password.errors?null:e.f.password.errors.minlength),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.maxlength)}}function ct(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," You have to agree the terms and condition"),t.qZA())}function dt(o,r){if(1&o&&(t.TgZ(0,"div",10),t.YNc(1,ct,2,0,"div",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.f.agree.errors?null:e.f.agree.errors.required)}}const g=function(o){return{"is-invalid":o}},mt=[{path:"sign-up",component:(()=>{class o{constructor(e,n,i,c,d){this.encryption=e,this.toastrService=n,this.formBuilder=i,this.router=c,this.apiService=d,this.submitted=!1,this.index=0,this.showPassword=!0}ngOnInit(){this.signUpForm=this.formBuilder.group({userName:["",s.kI.required],email:["",[s.kI.required,s.kI.email]],phoneNumber:["",s.kI.required],password:["",[s.kI.required,s.kI.minLength(6),s.kI.maxLength(40)]],agree:[!1,s.kI.requiredTrue]})}showToast(e){this.toastrService.success("Please Login","Registered Succesfully",{duration:e})}getInputType(){return this.showPassword?"text":"password"}toggleShowPassword(){this.showPassword=!this.showPassword}signIn(){this.submitted=!0,!this.signUpForm.invalid&&(this.signUpForm.value.password=this.encryption.encryptUsingTripleDES(this.signUpForm.value.password,!0),this.showToast(3e3),this.apiService.create(this.signUpForm.value).subscribe(e=>{}),this.router.navigate(["auth/sign-in"]))}get f(){return this.signUpForm.controls}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b),t.Y36(T.qK),t.Y36(s.qu),t.Y36(p.F0),t.Y36(w.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sign-up"]],decls:26,vars:25,consts:[["action","",1,"signupForm",3,"formGroup"],["type","text","shape","semi-round","formControlName","userName","fullWidth","","placeholder","User Name","tmInput","",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","email","shape","semi-round","formControlName","email","fullWidth","","placeholder","Email","tmInput","",1,"form-control",3,"ngClass"],["type","tel","shape","semi-round","formControlName","phoneNumber","fullWidth","","placeholder","Phone Number","tmInput","",1,"form-control",3,"ngClass"],["shape","semi-round","placeholder","password","fullWidth","","formControlName","password","tmInput","",1,"form-control",3,"type","ngClass"],["tmSuffix","","tmButton","","ghost","",3,"click"],["formControlName","agree","status","basic",1,"form-control",3,"ngClass"],["href",""],["shape","semi-round","tmButton","","status","primary","fullWidth","",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,n){1&e&&(t._UZ(0,"br"),t.TgZ(1,"form",0)(2,"tm-form-field"),t._UZ(3,"input",1),t.YNc(4,X,2,1,"div",2),t.qZA(),t.TgZ(5,"tm-form-field"),t._UZ(6,"input",3),t.YNc(7,ot,3,2,"div",2),t.qZA(),t.TgZ(8,"tm-form-field"),t._UZ(9,"input",4),t.YNc(10,rt,2,1,"div",2),t.qZA(),t.TgZ(11,"tm-form-field"),t._UZ(12,"input",5),t.TgZ(13,"button",6),t.NdJ("click",function(){return n.toggleShowPassword()}),t._UZ(14,"i"),t.qZA(),t.YNc(15,lt,4,3,"div",2),t.qZA(),t.TgZ(16,"tm-checkbox",7),t._uU(17,"I agree the "),t.TgZ(18,"a",8),t._uU(19," Terms and condition"),t.qZA(),t._uU(20," and "),t.TgZ(21,"a",8),t._uU(22,"Privacy Policy"),t.qZA()(),t.YNc(23,dt,2,1,"div",2),t.TgZ(24,"button",9),t.NdJ("click",function(){return n.signIn()}),t._uU(25,"Sign Up"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.signUpForm),t.xp6(2),t.Q6J("ngClass",t.VKq(15,g,n.submitted&&n.f.userName.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.userName.errors),t.xp6(2),t.Q6J("ngClass",t.VKq(17,g,n.submitted&&n.f.email.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.email.errors),t.xp6(2),t.Q6J("ngClass",t.VKq(19,g,n.submitted&&n.f.phoneNumber.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.phoneNumber.errors),t.xp6(2),t.Q6J("type",n.getInputType())("ngClass",t.VKq(21,g,n.submitted&&n.f.password.errors)),t.xp6(2),t.Tol(n.showPassword?"fa fa-eye":"fa fa-eye-slash"),t.uIk("aria-label",n.showPassword?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.password.errors),t.xp6(1),t.Q6J("ngClass",t.VKq(23,g,n.submitted&&n.f.agree.errors)),t.xp6(7),t.Q6J("ngIf",n.submitted&&n.f.agree.errors))},dependencies:[m.mk,m.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.Xw,u.As,f.J,_.rF,y.L],styles:[".signupForm[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;text-align:left}.signupForm[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]{color:red}.signupForm[_ngcontent-%COMP%]   .is-invalid[_ngcontent-%COMP%]{border-color:red;color:red}"]}),o})(),data:{title:"E-commerce Task Sign up"}},{path:"log-in",component:I,data:{title:"E-commerce Task  Sign In"}},{path:"forgot-passsword",component:V,data:{title:"Password Recovery"}},{path:"**",component:I,data:{title:"E-commerce Task  Sign In"}}];let pt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(mt),p.Bz]}),o})();var ut=a(2972),gt=a(2190),ft=a(1274),_t=a(6024),ht=a(9935);let Pt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[ht.F,_t.wb]}),o})();var It=a(3662);let yt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,pt,s.u5,s.UX,ut.St,gt.X$,Pt,ft.Ei,u.mY,f.V,_.lE,T.v.forRoot(),It.B8.forChild(),y.a]}),o})()}}]);