let input = document.getElementById('myInput');
let myTable = document.getElementById('myTable');

input.addEventListener('keyup', () => {
    let filter = input.value.toUpperCase();
    let row = myTable.getElementsByTagName('tr');
    for (let i = 0; i < row.length; i++) {
        let td = row[i].getElementsByTagName('td')[0];
        if (td) {
            let textValue = td.textContent || td.innerHTML;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                row[i].style.display = "";
            }
            else {
                row[i].style.display = "none";
            }
        }
    }
});