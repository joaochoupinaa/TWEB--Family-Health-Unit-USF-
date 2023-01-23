let chartjovem = document.getElementById ('chartjovem').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'verdana';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(chartjovem, {
    type:'line',
    data: {
        labels: ['2000','2005','2010','2015','2020'],
        datasets: [
            {
                label:'Quantidade em Milhões ao longo dos anos',
                data: [1.5,
                       1.6,
                       1.8,
                       1.7,
                       1.6
                      ],
            
            backgroundColor:'#90EE90',
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
            text:'Taxa de população jovem',
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