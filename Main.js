import User from "./User.js";
import Navbar from "./Navbar.js";

let user = new User("Ilia", "Tornike", "Beka123");

let role;

if (user.role === true) {
    role = "Admin";
} else {
    role = "User";
}

document.getElementById("role").innerText = role;

document.getElementById("user").innerHTML =
    user.name + "<br>" +
    user.surname + "<br>" +
    user.role + "<br>" +
    user.married;

let navbar = new Navbar("black", "center", "Home About Contact");

document.getElementById("navbar").innerHTML = navbar.getNavbar();