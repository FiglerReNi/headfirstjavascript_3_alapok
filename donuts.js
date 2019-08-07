function greeting() {
    alert("Hey, I'm Duncan. This online ordering system for making hot donuts is going to ROCK!");
}

function check(value) {
    if (isNaN(value) || !(Number.isInteger(parseInt(value)))) {
        alert("Please enter an integer number!");
    }
}

function dbcheck() {
    var db1 = document.getElementById('db1').value;
    var db2 = document.getElementById('db2').value;
    if (db1 === "" && db2 === "") {
        alert('Nem adtál meg darabszámot!');
        window.close("donuts.php");
        window.open("donuts.html");
    }
}

function subtotal() {
    debugger;
    const TAX = 0.55;
    const PRICE = 0.50;
    var db1 = document.getElementById('db1').value;
    var db2 = document.getElementById('db2').value;
    db1 = parse(db1);
    db2 = parse(db2);
    var subtotal = (db1 + db2) * PRICE;
    var taxtotal = subtotal * TAX;
    var total = subtotal + taxtotal;
    document.getElementById('subtot').value = '$' + subtotal.toFixed(2);
    document.getElementById('tax').value = '$' + taxtotal.toFixed(2);
    document.getElementById('total').value = '$' + total.toFixed(2);
}

function parse(db){
    if (db === "") {
        db = 0;
    } else {
        if ((db.search('dozen')) > -1) {
            db = parseInt(db) * 12;
        } else {
            db = parseInt(db);
        }
    }
    return db;
}