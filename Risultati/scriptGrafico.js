google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);


var mediaClass = 1000;
var personale = 0;

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Persona', 'Punti'],
        ['Personale', personale],
        ['Globale', mediaClass],
    ]);

    var options = {
        pieHole: 0.3,
        legend: 'none',
        pieSliceText: 'value',
        slices: {
            0: { color: '#800080' },
            1: { color: '#452c63' }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}