lineChartData = {}; //declare an object
lineChartData.labels = []; //add 'labels' element to object (X axis)
lineChartData.datasets = []; //add 'datasets' array element to object
var txt = [423,23,43,4];
for (line = 0; line < 4; line++) {
    y = [];
    lineChartData.datasets.push({}); //create a new line dataset
    dataset = lineChartData.datasets[line]
    dataset.fillColor = "rgba(0,0,0,0)";
    dataset.strokeColor = "rgba(200,200,200,1)";
    dataset.data = []; //contains the 'Y; axis data

    for (x = 0; x < 10; x++) {
        console.log(line + x + txt[line]);
        y.push(line + x + txt[line]); //push some data aka generate 4 distinct separate lines
        if (line === 0)
            lineChartData.labels.push(x); //adds x axis labels
    } //for x

    lineChartData.datasets[line].data = y; //send new line data to dataset
} //for line

ctx = document.getElementById("chart").getContext("2d");
myLineChart = new Chart(ctx).Line(lineChartData);

