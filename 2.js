var start = new Date("2019-05-20");
var end = new Date("2019-05-25");

while (start <= end) {

    var mm = ((start.getMonth() + 1) >= 10) ? (start.getMonth() + 1) : '0' + (start.getMonth() + 1);
    var dd = ((start.getDate()) >= 10) ? (start.getDate()) : '0' + (start.getDate());
    var yyyy = start.getFullYear();
    var date = dd + "/" + mm + "/" + yyyy;

    console.log(date);

    start = new Date(start.setDate(start.getDate() + 1));
}