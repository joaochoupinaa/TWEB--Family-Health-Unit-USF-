let chartcovid = document.getElementById ('chartcovid').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'verdana';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(chartcovid, {
    type:'bar',
    data: {
        labels: ['Março','Maio','Julho','Setembro','Novembro','Janeiro'],
        datasets: [
            {
                label:'Infetados',
                data: [900,
                       257,
                       204,
                       825,
                       3262,
                       10000
                      ],
            
            backgroundColor:'#D8BFD8',
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
            text:'Evolução da Pandemia',
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