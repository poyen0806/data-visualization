let line_and_scatter_chart = document.getElementById('line_and_scatter_chart');

d3.csv('assets/csv/taoyuanMRT_112-6.csv').then(data => {
    const xData = [];
    const yData = [];
    
    for (let i = 0; i < data.length; i++) {
        const date = data[i]['日期'];
        const total = parseInt(data[i]['總運量']);
        xData.push(date);
        yData.push(total);
    }

    console.log(xData, yData);
    
    const ls_trace = {
        x: xData,
        y: yData,
        mode: 'lines+markers',
        type: 'scatter',
        name: '總運量'
    };

    const layout = {
        title: '桃園機捷 6月總運量',
        xaxis: {
            title: '日期',
            range: ['2023/6/1', '2023/6/30'],
            dtick: 7,
        },
        yaxis: {
            title: '總運量',
            range: [70000, 100000],
            tick0: 70000,
            dtick: 3000,
        },
    };

    const chartData = [ls_trace];

    Plotly.newPlot(line_and_scatter_chart, chartData, layout);
});
