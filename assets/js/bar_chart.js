let bar_chart = document.getElementById('bar_chart');

d3.csv('assets/csv/105-10.csv').then((data105) => {
    const xData105 = data105.map(d => d['村別數']);
    const yData105 = data105.map(d => parseInt(d['總人口數']));

    d3.csv('assets/csv/112-10.csv').then((data112) => {
        const xData112 = data112.map(d => d['村別數']);
        const yData112 = data112.map(d => parseInt(d['總人口數']));

        const trace105 = {
            x: xData105,
            y: yData105,
            type: 'bar',
            name: '2016年10月',
        };

        const trace112 = {
            x: xData112,
            y: yData112,
            type: 'bar',
            name: '2023年10月',
        };

        const data = [trace105, trace112];

        const layout = {
            barmode: 'group',
            title: '金門人口統計 2016/10 & 2023/10',
            xaxis: {
                title: '村別數',
            },
            yaxis: {
                title: '總人口數',
            },
        };

        Plotly.newPlot(bar_chart, data, layout);
    });
});
