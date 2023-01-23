let chartmed = document.getElementById ('chartmed').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'verdana';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(chartmed, {
    type:'radar',
    data: {
        labels: ['2000','2005','2010','2015','2020'],
        datasets: [
            {
                label:'Quantidade em Milhões ao longo dos anos',
                data: [0.5,
                       1,
                       1.2,
                       1.30,
                       1.35
                      ],
            
            backgroundColor:'#EE82EE',
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000',
            }
        ]
    },
    options:{
        title: {
            display:true,
            text:'Custo médio de medicamentos em Milhões de Euros',
            fontSize:25,
            fontColor:'#4682B4'
        },
        legend:{
            display:true,
            labels:{
                fontColor:'#000'
            }
        }
    }
});