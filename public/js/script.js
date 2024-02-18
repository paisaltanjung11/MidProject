document.addEventListener("DOMContentLoaded", function () {
    const addEmployeeBtn = document.getElementById("addEmployeeBtn");
    const employeeModal = document.getElementById("employeeModal");
    const closeModalBtn = document.getElementById("closeModal");
    const deleteEmployeeBtn = document.getElementById("deleteEmployeeBtn");
    const employeeForm = document.getElementById("employeeForm");
    const employeeList = document.getElementById("employeeList");

    addEmployeeBtn.addEventListener("click", function () {
        employeeModal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", closeEmployeeModal);

    deleteEmployeeBtn.addEventListener("click", deleteSelectedEmployee);

    document
        .querySelector(".close")
        .addEventListener("click", closeEmployeeModal);

    window.addEventListener("click", function (event) {
        if (event.target == employeeModal) {
            closeEmployeeModal();
        }
    });

    employeeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addNewEmployee();
    });

    // Function to close the employee modal
    function closeEmployeeModal() {
        employeeModal.style.display = "none";
    }

    // Function to delete the selected employee
    function deleteSelectedEmployee() {
        const selectedEmployee = document.querySelector(
            "#employeeList li.selected"
        );

        if (selectedEmployee) {
            selectedEmployee.remove();
            closeEmployeeModal();
        } else {
            alert("Pilih data karyawan terlebih dahulu untuk dihapus.");
        }
    }

    // Function to add a new employee
    function addNewEmployee() {
        const employeeName = document.getElementById("employeeName").value;
        const employeeAge = document.getElementById("employeeAge").value;
        const employeeAddress =
            document.getElementById("employeeAddress").value;
        const employeePhoneNumber = document.getElementById(
            "employeePhoneNumber"
        ).value;

        const newEmployeeItem = document.createElement("li");
        newEmployeeItem.innerHTML = `
          <span style="display: block; margin-bottom: 5px;">Nama Karyawan: <strong>${employeeName}</strong></span>
          <span style="display: block; margin-bottom: 5px;">Umur Karyawan: ${employeeAge}</span>
          <span style="display: block; margin-bottom: 5px;">Alamat Karyawan: ${employeeAddress}</span>
          <span style="display: block; margin-bottom: 5px;">Nomor telp. Karyawan: ${employeePhoneNumber}</span>
      `;
        newEmployeeItem.classList.add("new-employee");
        employeeList.appendChild(newEmployeeItem);

        closeEmployeeModal();
        employeeForm.reset();
        attachEventToListItems();
    }

    // Function to attach click event to all list items
    function attachEventToListItems() {
        const listItems = document.querySelectorAll("#employeeList li");
        listItems.forEach((item) => {
            item.addEventListener("click", function (event) {
                // Remove 'selected' class from all items
                listItems.forEach((li) => li.classList.remove("selected"));
                // Add 'selected' class to the clicked item
                item.classList.add("selected");
            });
        });
    }

    // Attach click event to existing list items
    attachEventToListItems();
});
