let chartinsc = document.getElementById ('chartinsc').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'verdana';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(chartinsc, {
    type:'pie',
    data: {
        labels: ['João André','Carla Vieira','Sónia Lima','Adelaide Alexandrino','Maria Cortesão','Sara Correia','Emília Correia'],
        datasets: [
            {
                label:'Quantidade em Milhões ao longo dos anos',
                data: [20,
                       7,
                       3,
                       18,
                       12,
                       30,
                       10,
                      ],
            
            backgroundColor:['#90EE90',
                             '#1E90FF',
                             '#FFA07A',
                             '#FFA500',
                             '#000080',
                             '#800080',
                             '#FF0000',
                    ],
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
            text:'Média de inscritos por Médico em Percentagem ',
            fontSize:25,
            fontColor:'#4682B4'
        },
        legend:{
            display:true,
            position:'right',
            labels:{
                fontColor:'#000'
            }
        }
    }
});