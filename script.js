// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart


function drawChart(data){
  chart = new Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      align: 'left',
      text: 'FIFA World Cup Qatar 2022'
    },
    subtitle: {
      align: 'left',
      text: 'Click the columns to view versions. Source: <a href="https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022">www.fifa.com</a>'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total Point'
      }
  
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
    },
  
    series: [
      {
        name: "Countries",
        colorByPoint: true,
        data: JSON.parse(data)
      }
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: 'right'
        }
      },
      series: [
        {
          name: "Chrome",
          id: "Chrome",
          data: [
            [
              "v65.0",
              0.1
            ],
            [
              "v64.0",
              1.3
            ],
            [
              "v63.0",
              53.02
            ],
            [
              "v62.0",
              1.4
            ],
            [
              "v61.0",
              0.88
            ],
            [
              "v60.0",
              0.56
            ],
            [
              "v59.0",
              0.45
            ],
            [
              "v58.0",
              0.49
            ],
            [
              "v57.0",
              0.32
            ],
            [
              "v56.0",
              0.29
            ],
            [
              "v55.0",
              0.79
            ],
            [
              "v54.0",
              0.18
            ],
            [
              "v51.0",
              0.13
            ],
            [
              "v49.0",
              2.16
            ],
            [
              "v48.0",
              0.13
            ],
            [
              "v47.0",
              0.11
            ],
            [
              "v43.0",
              0.17
            ],
            [
              "v29.0",
              0.26
            ]
          ]
        },
        {
          name: "Firefox",
          id: "Firefox",
          data: [
            [
              "v58.0",
              1.02
            ],
            [
              "v57.0",
              7.36
            ],
            [
              "v56.0",
              0.35
            ],
            [
              "v55.0",
              0.11
            ],
            [
              "v54.0",
              0.1
            ],
            [
              "v52.0",
              0.95
            ],
            [
              "v51.0",
              0.15
            ],
            [
              "v50.0",
              0.1
            ],
            [
              "v48.0",
              0.31
            ],
            [
              "v47.0",
              0.12
            ]
          ]
        },
        {
          name: "Country",
          id: "Internet Explorer",
          data: [
            [
              "v11.0",
              6.2
            ],
            [
              "v10.0",
              0.29
            ],
            [
              "v9.0",
              0.27
            ],
            [
              "v8.0",
              0.47
            ]
          ]
        },
        {
          name: "Safari",
          id: "Safari",
          data: [
            [
              "v11.0",
              3.39
            ],
            [
              "v10.1",
              0.96
            ],
            [
              "v10.0",
              0.36
            ],
            [
              "v9.1",
              0.54
            ],
            [
              "v9.0",
              0.13
            ],
            [
              "v5.1",
              0.2
            ]
          ]
        },
        {
          name: "Edge",
          id: "Edge",
          data: [
            [
              "v16",
              2.6
            ],
            [
              "v15",
              0.92
            ],
            [
              "v14",
              0.4
            ],
            [
              "v13",
              0.1
            ]
          ]
        },
        {
          name: "Opera",
          id: "Opera",
          data: [
            [
              "v50.0",
              0.96
            ],
            [
              "v49.0",
              0.82
            ],
            [
              "v12.1",
              0.14
            ]
          ]
        }
      ]
    }
  });
}

const formArray = [];
const inputData1 = [];
const inputData2 = [];
const inputData3 = [];
function formInput(){
  formArray[0] = document.getElementById("country1").value;
  formArray[1] = document.getElementById("point1").value;
  formArray[2] = document.getElementById("country2").value;
  formArray[3] = document.getElementById("point2").value;
  formArray[4] = document.getElementById("country3").value;
  formArray[5] = document.getElementById("point3").value;
  formArray[6] = document.getElementById("country4").value;
  formArray[7] = document.getElementById("point4").value;

  document.getElementById("country1").value = "";
  document.getElementById("point1").value = "";
  document.getElementById("country2").value = "";
  document.getElementById("point2").value = "";
  document.getElementById("country3").value = "";
  document.getElementById("point3").value = "";
  document.getElementById("country4").value = "";
  document.getElementById("point4").value = "";
}
function g1DataInput(){
  
  document.getElementById("g1C1").textContent = formArray[0]
  document.getElementById("g1P1").textContent = formArray[1]
  document.getElementById("g1C2").textContent = formArray[2]
  document.getElementById("g1P2").textContent = formArray[3]
  document.getElementById("g1C3").textContent = formArray[4]
  document.getElementById("g1P3").textContent = formArray[5]
  document.getElementById("g1C4").textContent = formArray[6]
  document.getElementById("g1P4").textContent = formArray[7]

  inputData1 [0] = document.getElementById("g1C1").textContent;
  inputData1 [1] = document.getElementById("g1P1").textContent;
  inputData1 [2] = document.getElementById("g1C2").textContent;
  inputData1 [3] = document.getElementById("g1P2").textContent;
  inputData1 [4] = document.getElementById("g1C3").textContent;
  inputData1 [5] = document.getElementById("g1P3").textContent;
  inputData1 [6] = document.getElementById("g1C4").textContent;
  inputData1 [7] = document.getElementById("g1P4").textContent;

}


function g2DataInput(){

  document.getElementById("g2C1").textContent = formArray[0]
  document.getElementById("g2P1").textContent = formArray[1]
  document.getElementById("g2C2").textContent = formArray[2]
  document.getElementById("g2P2").textContent = formArray[3]
  document.getElementById("g2C3").textContent = formArray[4]
  document.getElementById("g2P3").textContent = formArray[5]
  document.getElementById("g2C4").textContent = formArray[6]
  document.getElementById("g2P4").textContent = formArray[7]
  
  inputData2 [0] = document.getElementById("g2C1").textContent;
  inputData2 [1] = document.getElementById("g2P1").textContent;
  inputData2 [2] = document.getElementById("g2C2").textContent;
  inputData2 [3] = document.getElementById("g2P2").textContent;
  inputData2 [4] = document.getElementById("g2C3").textContent;
  inputData2 [5] = document.getElementById("g2P3").textContent;
  inputData2 [6] = document.getElementById("g2C4").textContent;
  inputData2 [7] = document.getElementById("g2P4").textContent;

}
function g3DataInput(){
  document.getElementById("g3C1").textContent = formArray[0]
  document.getElementById("g3P1").textContent = formArray[1]
  document.getElementById("g3C2").textContent = formArray[2]
  document.getElementById("g3P2").textContent = formArray[3]
  document.getElementById("g3C3").textContent = formArray[4]
  document.getElementById("g3P3").textContent = formArray[5]
  document.getElementById("g3C4").textContent = formArray[6]
  document.getElementById("g3P4").textContent = formArray[7]

  inputData3 [0] = document.getElementById("g3C1").textContent;
  inputData3 [1] = document.getElementById("g3P1").textContent;
  inputData3 [2] = document.getElementById("g3C2").textContent;
  inputData3 [3] = document.getElementById("g3P2").textContent;
  inputData3 [4] = document.getElementById("g3C3").textContent;
  inputData3 [5] = document.getElementById("g3P3").textContent;
  inputData3 [6] = document.getElementById("g3C4").textContent;
  inputData3 [7] = document.getElementById("g3P4").textContent;

}


$(document).ready(function(){
  
  $("#gbtn1").click(function (ev) {
    ev.preventDefault()
    formInput();
    g1DataInput();
  });
  $("#gbtn2").click(function (ev) {
    ev.preventDefault()
    formInput();
    g2DataInput();
  });
  $("#gbtn3").click(function (ev) {
    ev.preventDefault()
    formInput();
    g3DataInput();
  
  });

});


$(document).ready(function(){
  $("#btn1").click(function (ev) {
    ev.preventDefault()
    createChart(inputData1);
  });
  $("#btn2").click(function (ev) {
    ev.preventDefault()
    createChart(inputData2);
  });
  $("#btn3").click(function (ev) {
    ev.preventDefault()
    createChart(inputData3);
  });

});

function createChart(inputData){
  var data = [
    {
      name: inputData[0],
      y: parseInt(inputData[1]),
      drilldown: inputData[0]
    },
    {
      name: inputData[2],
      y: parseInt(inputData[3]),
      drilldown: inputData[2]
    },
    {
      name: inputData[4],
      y: parseInt(inputData[5]),
      drilldown: inputData[4]
    },
    {
      name: inputData[6],
      y: parseInt(inputData[7]),
      drilldown: inputData[6]
    },
  
  ];
  var data_str = JSON.stringify(data);
  drawChart(data_str);
}




