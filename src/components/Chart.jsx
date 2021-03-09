import React from 'react';
import style from './Chart.module.css';



const Chart = (props) => {
    
    // window.onload = function () {

    //     var chart = new CanvasJS.Chart("chartContainer", {
    //         animationEnabled: true,
    //         theme: "light2",
    //         title:{
    //             text: "Simple Line Chart"
    //         },
    //         data: [{        
    //             type: "line",
    //               indexLabelFontSize: 16,
    //             dataPoints: [
    //                 { y: 450 },
    //                 { y: 414},
    //                 { y: 520, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
    //                 { y: 460 },
    //                 { y: 450 },
    //                 { y: 500 },
    //                 { y: 480 },
    //                 { y: 480 },
    //                 { y: 410 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
    //                 { y: 500 },
    //                 { y: 480 },
    //                 { y: 510 }
    //             ]
    //         }]
    //     });
    //     chart.render();
        
    //     }
    

    return (
        <div className={style.chart}>
            <div className={style.head}>
                <div className={style.title}>Performance chart</div>
                <div className={style.date}>
                    <div className={style.active}>ALL</div>
                    <div>1D</div>
                    <div>1W</div>
                    <div>1M</div>
                    <div>3M</div>
                    <div>6M</div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.line_y}>
                    <div>70%</div>
                    <div>60%</div>
                    <div>50%</div>
                    <div>40%</div>
                    <div>30%</div>
                    <div>20%</div>
                    <div>10%</div>
                </div>
                <div className={style.line}>
                
                <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
                <canvas id="myChart" width="400" height="400"></canvas>
                </div>

            </div>
            <div className={style.line_x}>
                <div>May</div>
                <div>Jun</div>
                <div>Jun</div>
                <div>Jul</div>
                <div>Jul</div>
                <div>Aug</div>
                <div>Sep</div>
                <div>Sep</div>
                <div>Oct</div>
                <div>Oct</div>
                <div>Nov</div>
                <div>Nov</div>
                <div>Dec</div>
                <div>Dec</div>
                <div>Jan</div>
                <div>Jan</div>
            </div>
        </div>
    );
}
export default Chart;