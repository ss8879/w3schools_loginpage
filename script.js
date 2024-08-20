function addrow(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var tr=document.createElement('tr');
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    td1.innerHTML=email;
    td2.innerHTML=password;
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById("append").appendChild(tr);
    document.getElementById("email").value='';
    document.getElementById("password").value='';
}


