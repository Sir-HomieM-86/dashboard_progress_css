//Pie chart
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green Tea App", "Beer App", "IT Tasks", "Back End Server", "Mobile Apps", "Tech Support"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c"
      ],
      data: [12, 20, 4, 17, 18, 31]
    }]
  },
  options: 
  {
        legend: {
            display: true,
            position: 'right',
            align: 'start',
            labels: {
                fontColor: '#e4e3e3'
            }
        }
  }
});


//-------------
//- BAR CHART -
//-------------

var areaChartData = {
  labels  : ['June', 'July'],
  datasets: [
	{
	  label               : 'Green Tea App',
	  backgroundColor     : '#2ecc71',
	  borderColor         : '#2ecc71',
	  pointRadius          : false,
	  pointColor          : '#2ecc71',
	  pointStrokeColor    : '#2ecc71',
	  pointHighlightFill  : '#fff',
	  pointHighlightStroke: '#2ecc71',
	  data                : [27, 90]
	},
	{
	  label               : 'Beer App',
	  backgroundColor     : '#3498db',
	  borderColor         : '#3498db',
	  pointRadius         : false,
	  pointColor          : '#3498db',
	  pointStrokeColor    : '#3498db',
	  pointHighlightFill  : '#fff',
	  pointHighlightStroke: '#3498db',
	  data                : [55, 40]
	},
	{
	  label               : 'Tech Support',
	  backgroundColor     : '#e74c3c',
	  borderColor         : '#e74c3c',
	  pointRadius         : false,
	  pointColor          : '#e74c3c',
	  pointStrokeColor    : '#e74c3c',
	  pointHighlightFill  : '#fff',
	  pointHighlightStroke: '#e74c3c',
	  data                : [55, 40]
	},
	{
	  label               : 'Back End Server',
	  backgroundColor     : '#9b59b6',
	  borderColor         : '#9b59b6',
	  pointRadius         : false,
	  pointColor          : '#9b59b6',
	  pointStrokeColor    : '#9b59b6',
	  pointHighlightFill  : '#fff',
	  pointHighlightStroke: '#9b59b6',
	  data                : [55, 40]
	}
  ]
}

Chart.defaults.global.defaultFontColor='#e4e3e3';

var barChartCanvas = $('#barChart').get(0).getContext('2d');
var barChartData = jQuery.extend(true, {}, areaChartData);
var temp0 = areaChartData.datasets[0];
var temp1 = areaChartData.datasets[1];
barChartData.datasets[0] = temp1;
barChartData.datasets[1] = temp0;

var barChartOptions = {
  responsive              : true,
  maintainAspectRatio     : false,
  datasetFill             : false,
  legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
                fontColor: '#e4e3e3'
            }
  } 

}

var barChart = new Chart(barChartCanvas, {
  type: 'bar', 
  data: barChartData,
  options: barChartOptions
})