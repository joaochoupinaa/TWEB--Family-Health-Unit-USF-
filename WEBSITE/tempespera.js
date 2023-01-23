let chartespera = document.getElementById ('chartespera').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'verdana';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(chartespera, {
    type:'horizontalBar',
    data: {
        labels: ['2010','2012','2014','2016','2018','2020'],
        datasets: [
            {
                label:'Minutos por Ano',
                data: [30,
                       23,
                       20,
                       15,
                       14,
                       60
                      ],
            
            backgroundColor:'#F0FFFF',
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
            text:'Tempo médio de espera pela concretização da consulta a partir da hora marcada',
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