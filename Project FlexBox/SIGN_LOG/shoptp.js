var users = [{ username:'souhail', password:'souhail123' },
             {  username:'abdellah', password:'abdellah123' } ]

             function add(){

    var userNameIn1 = document.getElementById('in1').value;
    var passwordIn2 = document.getElementById('in2').value;

    if(passwordIn2.length<8){
document.getElementById('s1').innerHTML = "password must contains 8 characters";
    }else{
            var user = {};
            user.username = userNameIn1;
            user.password = passwordIn2;
            users.push(user); 
            console.log(users)
    }
    

}
    function showPass(){


        var passValue = document.getElementById('in4');
        if(passValue.type == 'text'){
            passValue.type = 'password';
        }else if(passValue.type == 'password'){
            passValue.type = 'text';
        }
     }
     function login() {
        var userNameIn3 = document.getElementById('in3').value;
        var passwordIn4 = document.getElementById('in4').value;
        
        if (userNameIn3 == '') {
          alert("Username must be filled out");
          return false;
        } else if (passwordIn4 == '') {
         alert("Password must be filled out") ;
          return false;
        }
        
        for (var i = 0; i < users.length; i++) {
          if (userNameIn3 == users[i].username && passwordIn4 == users[i].password) {
            
            window.location.href = "https://abdellah1122.github.io/Project%20FlexBox/index.html";
            return true;
          }
        }
        
        alert("Username and password do not match") ;
        return false;
      }
    