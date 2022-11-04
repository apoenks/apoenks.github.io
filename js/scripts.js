/*!
* Start Bootstrap - Full Width Pics v5.0.5 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function addRow(){
    let table = document.getElementById("IsiTable");
    let row = table.insertRow(0);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let nomor = document.getElementById('exampleInputnomor').value;
    let nama = document.getElementById('exampleInputname').value;
    let umur = document.getElementById('exampleInputumur').value;
    cell1.innerHTML =nama;
    cell2.innerHTML =umur;
}

function deleteRow(){
   document.getElementById('IsiTable').deleteRow(0);

}
fetch('https://kipi.covid19.go.id/api/get-faskes-vaksinasi')
.then(response => response.json())
.then(data => bacaDataFaksin(data));

function bacaDataFaksin(data){
    console.log(data['data']);
    let table = document.getElementById("IsiTableCovid");

    data['data'].forEach(element =>{
        //if (element['kota'] == 'KOTA LANGSA'){
            let row = table.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let nama_kode = data['data'][0]['kode'];
            let nama_kecamatan = data['data'][0]['nama'];
            let nama_kabkot = data['data'][0]['kota'];
            let provinsi = data['data'][0]['provinsi'];
            let status = data['data'][0]['status'];

            cell1.innerHTML = nama_kode;
            cell2.innerHTML = nama_kecamatan;
            cell3.innerHTML = nama_kabkot;
            cell4.innerHTML = provinsi;
            cell5.innerHTML = status;
    });
}
