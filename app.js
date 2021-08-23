const proxy = `https://cors-dextrousmonk.herokuapp.com/`; // proxy served on heroku server host
const coinNameApi = `${proxy}https://api.hitbtc.com/api/3/public/symbol`;
const coinPriceApi = `${proxy}https://api.hitbtc.com/api/3/public/candles/SUSHIUSDT?period=M1&limit=100`;
createChart();
getcoinNames();

async function fetchNames(apiUrl) {
    return await fetch(coinNameApi).then(response => {
        return response.json();
    }).then(data => {
        //console.log(Object.keys(data));
        vals = Object.keys(data);
        return vals;
    }).catch(function (error) {
        console.log(error);
    });
}

function populateDropdown(names) {
    var dropdown = document.getElementById("myDropdown");
    var select = document.getElementById("testSelect1");
    for (var name of names) {
        var option = document.createElement("option");
        option.value = name;
        option.text = name;
        select.appendChild(option);
    }
    document.getElementById("myDropdown").appendChild(select);
    document.multiselect('#testSelect1');
}

function getcoinNames() {
    var coinNames = [];

    var fetchData = fetchNames(coinNameApi);
    const names = async () => {
        const a = await fetchData;
        coinNames = a;
        console.log("test");
        populateDropdown(coinNames);
        console.log("test2");
    };
    names();
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("option");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function createChart() {
    lineChartData = {}; //declare an object
    lineChartData.labels = []; //add 'labels' element to object (X axis)
    lineChartData.datasets = []; //add 'datasets' array element to object

    for (line = 0; line < 4; line++) {
        y = [];
        lineChartData.datasets.push({}); //create a new line dataset
        dataset = lineChartData.datasets[line]
        dataset.fillColor = "rgba(0,0,0,0)";
        dataset.strokeColor = "rgba(200,200,200,1)";
        dataset.data = []; //contains the 'Y; axis data

        for (x = 0; x < 10; x++) {
            console.log(line + x);
            y.push(line + x); //push some data aka generate 4 distinct separate lines
            if (line === 0)
                lineChartData.labels.push(x); //adds x axis labels
        } //for x

        lineChartData.datasets[line].data = y; //send new line data to dataset
    } //for line

    ctx = document.getElementById("chart").getContext("2d");
    myLineChart = new Chart(ctx).Line(lineChartData);
}

function drawChart() {
    console.log(document.multiselect('#testSelect1').value);
}