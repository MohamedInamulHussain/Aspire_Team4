
document.addEventListener("DOMContentLoaded", function () {
    // Get the Supplier link element
    var addsupplierLink = document.querySelector(".addsupplier");

    // Get the Supplier content element
    var supplierContent = document.querySelector(".addsupplier-content");

    // Add click event listener to the Supplier link
    addsupplierLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        supplierContent.style.display = "block"; // Show the Supplier content
    });

    // Get the Close button inside the Supplier content
    var closeButton = document.querySelector(".addsupplier-content .close-btn");

    // Add click event listener to the Close button
    closeButton.addEventListener("click", function () {
        supplierContent.style.display = "none"; // Hide the Supplier content
    });

    
    var addstockLink = document.querySelector(".addstock");

    
    var stockContent = document.querySelector(".addstock-content");

    
    addstockLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        stockContent.style.display = "block"; // Show the Supplier content
    });

    // Get the Close button inside the Supplier content
    var closeButton = document.querySelector(".addstock-content .close-btn");

    // Add click event listener to the Close button
    closeButton.addEventListener("click", function () {
        stockContent.style.display = "none"; // Hide the Supplier content
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Get the logout button element
    var logoutBtn = document.getElementById('logoutBtn');

    // Add click event listener to the logout button
    logoutBtn.addEventListener('click', function () {
        // Redirect to the home page (replace 'home.html' with your actual home page URL)
        window.location.href = 'home.html';
    });
});

const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));
