let username = "Admin";
let password = "TheMaster";
let getName = prompt("Who's there?");

if ( getName === (username) ) {
    if ( ( getPassword = ( prompt("Password?") ) ) === password ) {
        alert("Welcome!");
    } else if ( ( getPassword == null ) || ( getPassword === ('') ) )  {
        alert("Canceled"); 
    } else { ( getPassword !== password )
        alert("Wrong password!");
    }
} else if ( getName === null || getName === ('') ) {
    alert("Canceled");
} else { ( getName !== (username) )
    alert("I don't know you!");
}