function validate(form){

    var fn=document.frm.fname.value;
    var ln=document.frm.lname.value;
    var em=document.frm.ema.value;
    var atsign=em.indexOf("@");
    var dotsign=em.lastIndexOf(".");
    var pass=document.frm.pas.value;
    var cpass=document.frm.cpas.value;
    var phone=document.frm.ph.value;
    
    if(fn.length>30){
    document.getElementById("e1").innerHTML="Your first name is too long.";
    document.getElementById("e2").innerHTML="";
    document.getElementById("e3").innerHTML="";
    document.getElementById("e4").innerHTML="";
    document.getElementById("e5").innerHTML="";
    document.getElementById("e6").innerHTML="";
    document.getElementById("e7").innerHTML="";
    return false;    
    }

    else if(ln.length>30){
    document.getElementById("e2").innerHTML="Your last name is too long.";
    document.getElementById("e1").innerHTML="";
    document.getElementById("e3").innerHTML="";
    document.getElementById("e4").innerHTML="";
    document.getElementById("e5").innerHTML="";
    document.getElementById("e6").innerHTML="";
    document.getElementById("e7").innerHTML="";
    return false;    
    }
    
    else if(atsign<1 || dotsign<atsign+2 || dotsign+4!=em.length){                                                       
    document.getElementById("e3").innerHTML="Invalid email format.";
    document.getElementById("e1").innerHTML="";
    document.getElementById("e2").innerHTML="";
    document.getElementById("e4").innerHTML="";
    document.getElementById("e5").innerHTML="";
    document.getElementById("e6").innerHTML="";
    document.getElementById("e7").innerHTML="";
    return false;
    }
    
    else if(pass != cpass)
    {
    document.getElementById("e4").innerHTML="Please make sure your password and confirmed password match.";
    document.getElementById("e1").innerHTML="";
    document.getElementById("e2").innerHTML="";
    document.getElementById("e3").innerHTML="";
    document.getElementById("e5").innerHTML="";
    document.getElementById("e6").innerHTML="";
    document.getElementById("e7").innerHTML="";
    return false; 
    }
    
    else if(isNaN(phone)){
    document.getElementById("e5").innerHTML="Please enter a number.";
    document.getElementById("e1").innerHTML="";
    document.getElementById("e2").innerHTML="";
    document.getElementById("e3").innerHTML="";
    document.getElementById("e4").innerHTML="";
    document.getElementById("e6").innerHTML="";
    document.getElementById("e7").innerHTML="";
    return false;	
    }

    else if(phone.length>11){
    document.getElementById("e5").innerHTML="Your contact number is too long.";
    document.getElementById("e1").innerHTML="";
    document.getElementById("e2").innerHTML="";
    document.getElementById("e3").innerHTML="";
    document.getElementById("e4").innerHTML="";
    document.getElementById("e6").innerHTML="";
    document.getElementById("e7").innerHTML="";
        return false;		
        }

    else if(!checkRadio(document.frm.rdogen))
    {                     
    document.getElementById("e6").innerHTML="Please choose your gender.";
    document.getElementById("e1").innerHTML="";
    document.getElementById("e2").innerHTML="";
    document.getElementById("e3").innerHTML="";
    document.getElementById("e4").innerHTML="";
    document.getElementById("e5").innerHTML="";
    document.getElementById("e7").innerHTML="";
    return false;
    }  
    
    else if(!checkCheckBox(document.frm.chk)){
    document.getElementById("e7").innerHTML="Please agree to the terms.";
    document.getElementById("e1").innerHTML="";
    document.getElementById("e2").innerHTML="";
    document.getElementById("e3").innerHTML="";
    document.getElementById("e4").innerHTML="";
    document.getElementById("e5").innerHTML="";
    document.getElementById("e6").innerHTML="";
    return false;	
    }
    
    else {
    alert("You have successfully registered.");	
    return true;
    }
    }
    
    function checkRadio(radioButtons){
    for (var i=0; i<radioButtons.length; i++){
    if (radioButtons[i].checked==true){
    return true;
     }
    }
    return false;
    }
    
    function checkCheckBox(cb){
        if (cb.checked) {return true;}
        else{ return false; }
       }