let line_and_scatter_chart = document.getElementById('line_and_scatter_chart');
Plotly.newPlot(line_and_scatter_chart, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16]
}], {
    margin: { t: 0 }
});
