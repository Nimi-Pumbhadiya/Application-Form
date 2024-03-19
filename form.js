function done() {
    event.preventDefault();
    let user = document.getElementById("a").value;
    let user1 = document.getElementById("b").value;
    let user2 = document.getElementById("c").value;
    let user3 = document.getElementById("d").value;
    let user4 = document.getElementById("e").value;
    let user5 = document.getElementById("f").value;

    if (!user) {
        document.getElementsByTagName("p")[0].innerHTML = "Enter your name ";
    }
    if (user) {
        console.log(user);
        document.getElementsByTagName("p")[0].innerHTML = "&nbsp;";
    }
    if (!user1) {
        document.getElementsByTagName("p")[1].innerHTML = "Enter your Email ";
    }
    if (user1) {
        console.log(user);
        document.getElementsByTagName("p")[1].innerHTML = "&nbsp;";
    }
    if (!user2) {
        document.getElementsByTagName("p")[2].innerHTML = " Enter phone number";
        document.getElementsByTagName("p")[2].style.display = "block";
    }
    if (user2) {
        console.log(user);
        document.getElementsByTagName("p")[2].innerHTML = "&nbsp;";
    }
    if (!user3) {
        document.getElementsByTagName("p")[3].innerHTML = "Enter date ";
    }
    if (user3) {
        console.log(user);
        document.getElementsByTagName("p")[3].innerHTML = "&nbsp;";
    }
    if (!user4) {
        document.getElementsByTagName("p")[4].innerHTML = "Enter time ";
    }
    if (user4) {
        console.log(user);
        document.getElementsByTagName("p")[4].innerHTML = "&nbsp;";
    }
    if (!user5) {
        document.getElementsByTagName("p")[5].innerHTML = "Enter comment ";
    }
    if (user5) {
        console.log(user);
        document.getElementsByTagName("p")[5].innerHTML = "&nbsp;";
    }
}
