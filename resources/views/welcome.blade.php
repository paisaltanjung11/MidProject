<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/style.css" />
    <title>PT. ChipiChapa</title>
  </head>
  <body>
    <div class="logo pt">
      <img src="pictures/LogoChipiChapa.jpg" alt="" class="logochipi" />
      <img src="pictures/WELCOME!.png" alt="" class="welcome" />
      <img src="pictures/Rectangle 30.png" alt="" class="light" />
    </div>

    <div class="container karyawan">
      <h1 id="chipichapa">ChipiChapa</h1>
      <p id="softwarehouse">Best Software House in the World</p>
      <p id="huhu">ChipiChapa Employee :</p>

      <ul id="employeeList"></ul>
      <button id="addEmployeeBtn">Add New Employee</button>
      <button id="updateEmployeeBtn">Update</button>
      <button id="deleteEmployeeBtn">Delete</button>

      <div id="employeeModal" class="modal">
        <div class="modal-content">
          <span class="close" id="closeModal">&times;</span>
          <form id="employeeForm">
            <label for="employeeName">Nama Karyawan:</label>
            <input type="text" id="employeeName" name="employeeName" required />

            <label for="employeeAge">Umur Karyawan:</label>
            <input type="text" id="employeeAge" name="employeeAge" required />

            <label for="employeeAddress">Alamat Karyawan:</label>
            <input
              type="text"
              id="employeeAddress"
              name="employeeAddress"
              required
            />

            <label for="employeePhoneNumber">Nomor Telepon Karyawan:</label>
            <input
              type="text"
              id="employeePhoneNumber"
              name="employeePhoneNumber"
              required
            />
            <button type="submit" id="saveEmployeeBtn">Simpan</button>
          </form>
        </div>
      </div>
    </div>
    <div class="datakaryawan">
      <p id="nama">Nama Karyawan: abcdef</p>
      <p id="umur">Umur Karyawan: 21</p>
      <p id="alamat">Alamat Karyawan: abcdefghij</p>
      <p id="nomor">Nomor telp. Karyawan: 081234567899</p>
    </div>

    <!-- <script src="js/script.js"></script> -->
    <script src="{{ asset('js/script.js') }}"></script>
  </body>
</html>
