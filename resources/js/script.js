document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("addEmployeeBtn")
        .addEventListener("click", function () {
            document.getElementById("employeeModal").style.display = "block";
        });

    document
        .getElementById("updateEmployeeBtn")
        .addEventListener("click", function () {
            document.getElementById("employeeModal").style.display = "block";
        });

    document
        .getElementById("deleteEmployeeBtn")
        .addEventListener("click", function () {});

    document.querySelector(".close").addEventListener("click", function () {
        document.getElementById("employeeModal").style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == document.getElementById("employeeModal")) {
            document.getElementById("employeeModal").style.display = "none";
        }
    });

    document
        .getElementById("employeeForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("employeeModal").style.display = "none";
        });
});
