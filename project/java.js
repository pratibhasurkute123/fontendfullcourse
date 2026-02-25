// ================= LOGIN SYSTEM =================

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("userLoginForm");
    const message = document.getElementById("message");

    // LOGIN
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

                div.className = "order-card pending";


            // 🔹 ADMIN LOGIN
            if (username === "admin" && password === "1234") {
                localStorage.setItem("role", "admin");
                localStorage.setItem("username", username);
                window.location.href = "admin.html";
            }

            // 🔹 TRANSPORTER LOGIN
           else if (username === "transporter" && password === "1234") {
    localStorage.setItem("role", "transporter");
    localStorage.setItem("username", username);
    window.location.href = "transporter.html";
}

            // 🔹 USER LOGIN
            else if (username === "user" && password === "1234") {
                localStorage.setItem("role", "user");
                localStorage.setItem("username", username);
                window.location.href = "dashboard.html";
            }

            else {
                message.innerText = "Invalid Username or Password!";
                message.style.color = "red";
            }
        });
    }

    // SHOW LOGOUT BUTTON IF LOGGED IN
    const logoutLinks = document.querySelectorAll("#logoutLink");

    if (localStorage.getItem("role")) {
        logoutLinks.forEach(btn => {
            btn.style.display = "block";
        });
    }

});


// ================= LOGOUT FUNCTION =================

function logout(){
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    window.location.href = "index.html";
}


// function deliverOrder(index){
//     if(orders[index]){
//         orders[index].status = "Delivered";
//         localStorage.setItem("orders", JSON.stringify(orders));
//         location.reload();
//     }
// }


// ================= ADD TO CART =================

function addToCart(button) {

    const card = button.parentElement;
    const quantity = parseInt(card.querySelector(".qty").value);
    const price = parseInt(button.getAttribute("data-price"));
    const name = card.querySelector("h3").innerText;

    const total = quantity * price;

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
        material: name,
        quantity: quantity,
        price: price,
        total: total,
        status: "Pending"
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Order Added Successfully!");
}