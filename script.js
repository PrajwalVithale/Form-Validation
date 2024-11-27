function validation(){
    var user=document.getElementById('Name').value;
    var Email=document.getElementById('email').value;
    var MobileNumber=document.getElementById('MobileNumber').value;
    var Pass=document.getElementById('pass').value;
    var Confirmpass=document.getElementById('Confirmpass').value;


    if(user==""){
        document.getElementById('FullName').innerHTML=" * please fill The First Name field";
        return false;
    }
    if((user.length<5)||(user.length>20)){
        document.getElementById('FullName').innerHTML=" * name must be between 5 and 20";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('FullName').innerHTML=" * only characters are allowed";
        return false;
    }



    if(Email==""){
        document.getElementById('Emailid').innerHTML=" * please fill Email field";
        return false;
    }
    if(Email.indexOf('@')<=0){
        document.getElementById('Emailid').innerHTML=" * @ Invalid position";
        return false;
    }
    if((Email.charAt(Email.length-4)!='.')&&(Email.charAt(Email.length-3)!='.')){
        document.getElementById('Emailid').innerHTML=" * Invalid Position";
        return false;
    }



    if(MobileNumber==""){
        document.getElementById('PhoneNumber').innerHTML=" * please fill The Phone Number field";
        return false;
    }
    if(isNaN(MobileNumber)){
        document.getElementById('PhoneNumber').innerHTML=" * User must write only Digits";
        return false;
    }
    if(MobileNumber.length!=10){
        document.getElementById('PhoneNumber').innerHTML=" * Mobile Number Must be 10 digits only";
        return false;
    }
    


    if(Pass==""){
        document.getElementById('Password').innerHTML=" * please fill The Password field";
        return false;
    }
    if((user.length<5)||(user.length>20)){
        document.getElementById('Password').innerHTML=" * name must be between 5 and 20";
        return false;
    }


    if(Confirmpass==""){
        doc;ument.getElementById('ConfirmPassword').innerHTML=" * please fill The ConfirmPassword field";
        return false;
    }
    if(Pass!=Confirmpass){
        document.getElementById('ConfirmPassword').innerHTML=" * Password are Not matching ";
        return false;
    }
}