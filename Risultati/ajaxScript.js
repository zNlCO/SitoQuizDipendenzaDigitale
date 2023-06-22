function sendData() {

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "classifica.php")
    xhttp.send();

    xhttp.onload = function () {
        document.getElementById("div-classifica").innerHTML = this.responseText;
    }
}


setInterval(function CheckPieChart() {
    const xhttps = new XMLHttpRequest();

    var formDataPie = new FormData();

    console.log(mediaClass);
    formDataPie.append('mediaClass', mediaClass);

    xhttps.open('POST', 'pieChart.php');
    xhttps.send(formDataPie);

    xhttps.onload = function () {
        if (xhttps.responseText != "Non modificare") {
            console.log(xhttps.responseText);
            let copia = xhttps.responseText;
            personale = parseInt(copia.slice(0, 2));
            console.log(personale);
            mediaClass = parseInt(xhttps.responseText.slice(3, xhttps.responseText.length));
            console.log(mediaClass);
            drawChart();
        }
    }
}, 5000);


setInterval(function checkNewData() {

    var formData = new FormData();
    var lenScore = document.getElementsByClassName('score').length;
    formData.append('lenClass', lenScore);
    var strlenScore = String(lenScore);
    formData.append('name', document.getElementById("bar" + strlenScore).getAttribute("data-percentage"));

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'check.php', true);
    xhr.send(formData);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Form data sent successfully');
            if (xhr.responseText == "YES") {
                sendData();
            }
        } else {
            console.log('Error sending form data');
        }
    };

}, 5000);
