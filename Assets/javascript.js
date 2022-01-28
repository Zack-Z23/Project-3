'use strict';

const Search = document.getElementById('Search');
const google = document.getElementById('Google');
const bing = document.getElementById('Bing');
const $username = document.getElementById('username');
const $password = document.getElementById('password');
const $username1 = document.getElementById('username1');
const $password1 = document.getElementById('password1');
const $submit = document.getElementById('submit');
const $submit1 = document.getElementById('submit1');
let signedIn = false;

$submit.addEventListener('click', () => {
    let datauser = 'someOne';
    let datapassword = 'password123';
    let username = $username.value.trim();
    let password = $password.value.trim();
    let message = '';
    let valid = true;
    let count = 0;


    if(username ==''){
        message += 'Username is required\n';
        valid = false;
     
    }
    if(password ==''){
        message += 'Password is required\n';
        valid = false;
     
    }
     if(username != datauser && username != ''){
        message += 'Wrong Username\n';
        valid = false;
        count++;
    }
     if(password != datapassword && password !=''){
        message += 'Wrong Password\n';
        valid = false;
        count++;
    }
    else if( count == 2){
        alert('Both fields are wrong, try again');
    }
    else if(!valid){
        alert(message);
        console.log(message);
    }
    else if(username == datauser && password == datapassword){
        signedIn = true;
        alert('You have now logged in');
        document.getElementById('section1').style.display ='none';
    }
    alert(message);


});

$submit1.addEventListener('click', () => {
    let username1 = $username1.value.trim();
    let password1 = $password1.value.trim();
    let message1 = '';
    let valid = true;
    let count = 0;


    if(username1 ==''){
        message1 += 'Username is required\n';
        valid = false;
        count++;
    }
    if(password1 ==''){
        message1 += 'Password is required\n';
        valid = false;
        count++;
    }

    else if( count == 2){
        alert('Both fields are needed');
    }
    else if(!valid){
        alert(message1);
        console.log(message1);
    }
    else{
        signedIn = true;
        alert('You have now signed up');
        document.getElementById('section2').style.display ='none';
    }
    alert(message1);



});


function enableBut(){

if(signedIn == true){
    bing.enabled = true;
    google.enabled = true;
    google.style.cursor = 'pointer';
    bing.style.cursor = 'pointer';
    bing.addEventListener('click', () =>{  
    window.location.href ='https://www2.bing.com/search?q='.concat(Search.value);

    });
    google.addEventListener('click', () => {
        window.location.href = 'https://www.google.com/search?q='.concat(Search.value);
;

    });
}
else if(signedIn == false){
    bing.disabled == true;
    google.disabled == true;
    bing.style.cursor = 'not-allowed';
    google.style.cursor = 'not-allowed';
}
}





function onClick(){
    if(signedIn == true){
        alert('You have already logged in');
    }
    else{
        document.getElementById('section1').style.display ='flex';
    }

}
function onClick1(){
    
    if(signedIn == true){
        alert('You have already logged in');
    }
    else{
        document.getElementById('section2').style.display ='flex';
    }
}

