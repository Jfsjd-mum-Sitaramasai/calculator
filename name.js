function myName(){
    var name={};
    name.firstname=document.getElementById("firstname").value
    name.middlename=document.getElementById("middlename").value
    name.lastname=document.getElementById("lastname").value
    var y=name.firstname+name.middlename+name.lastname;
    document.getElementById("result").innerHTML=y

    }

