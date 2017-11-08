$('.carousel').carousel();

$(document).ready(function() {  
    
    var data1 = {
      labels: ['44%', '37%', '6%', '5%', '8%'],
      series: [44, 37, 6, 5, 8]
    };
    
    var data2 = {
      labels: ['0%', '14%', '50%', '27%', '9%'],
      series: [0.2, 13.8, 50, 27, 9]
    };

    var options = {
      labelInterpolationFnc: function(value) {
        return value[0]
      }
    };

    var responsiveOptions = [
        
        ['screen and (min-width: 200px)', {
          labelOffset: 20,
          chartPadding: 40,
          labelDirection: 'explode',
          labelInterpolationFnc: function(value) {
            return value;
          }
        }],
        
        ['screen and (min-width: 400px)', {
          labelOffset: 80,
          chartPadding: 40,
          labelDirection: 'explode'
        }],
        
        ['screen and (min-width: 768px)', {
          labelOffset: 50,
          chartPadding: 30,
          labelDirection: 'explode'
        }],
        
        ['screen and (min-width: 992px)', {
          labelOffset: 66,
          chartPadding: 50
        }],
        
        ['screen and (min-width: 1200px)', {
          labelOffset: 76,
          chartPadding: 60
        }]
    ];

    new Chartist.Pie('.ct-chart-1', data1, options, responsiveOptions);
    new Chartist.Pie('.ct-chart-2', data2, options, responsiveOptions);
});