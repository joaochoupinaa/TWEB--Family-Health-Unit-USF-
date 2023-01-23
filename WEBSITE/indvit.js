let chartvit = document.getElementById ('chartvit').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'verdana';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(chartvit, {
    type:'line',
    data: {
        labels: ['1995','2000','2005','2010','2015','2020'],
        datasets: [
            {
                label:'0-14 Anos',
                data: [4,
                       3.8,
                       3.4,
                       2.9,
                       2.6,
                       2.3,
                      ],
            
            backgroundColor:'transparent',
            borderWidth:2,
            borderColor:'red',
            hoverBorderWidth:3,
            hoverBorderColor:'#000',
            },
            {
                label:'15-64 Anos',
                data: [6,
                       5.8,
                       5.3,
                       5.1,
                       5.0,
                       4.5,
                      ],
            
            backgroundColor:'transparent',
            borderWidth:2,
            borderColor:'#191970',
            hoverBorderWidth:3,
            hoverBorderColor:'#000',
            },
            {
                label:'65+ Anos',
                data: [5.5,
                       5.8,
                       6.4,
                       6.7,
                       6.9,
                       4.5,
                      ],
            
            backgroundColor:'transparent',
            borderWidth:2,
            borderColor:'#228B22',
            hoverBorderWidth:3,
            hoverBorderColor:'#000',
            }
        ]
    },

      
    options:{
        title: {
            display:true,
            text:'Índice de vitalidade em Milhões',
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