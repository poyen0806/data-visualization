let pie_chart = document.getElementById('pie_chart');

d3.csv('assets/csv/111taoyuan.csv').then((data) => {
    const colors = ['#3498db', '#e67e22', '#95a5a6'];

    const pie_trace = {
        type: "pie",
        labels: [],
        values: [],
        hole: 0.5,
        title: "111年桃園低收入戶生活扶助",
        marker: {
            colors: colors
        }
    };

    for(let x=0; x<data.length; x++) {
        pie_trace.labels[x] = data[x]["項目"];
        pie_trace.values[x] = data[x]["金額"];
    }

    const chartData = [
        pie_trace
    ];

    const layout = {
        margin: {
            t: 10
        }
    };

    Plotly.newPlot(pie_chart, chartData, layout);
});