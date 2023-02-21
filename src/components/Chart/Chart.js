import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

// This Chart is a graphical representation of expenses per month;
// In this Chart we return JSX code where we have all ChartBars;
// props = data points
// We output ChartBars dynamically by going through an array of data points & mapping
// every data point to a ChartBar
// label = month
const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
            // dataPoints are expenses. 
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;