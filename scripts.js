new Chart(document.getElementById("myChart"), {
    type: 'horizontalBar',
    data: {
      labels: ["Asian", "Black", "Hispanic", "White", "Native Hawaiian", "American Indian"],
      datasets: [
        {
            label: "Number of cases",
            fill: false,
            backgroundColor: ["rgba(255,99,132,0.2)",
            "rgba(255,159,64,0.2)",
            "rgba(255,205,86,0.2)",
            "rgba(75,192,192,0.2)",
            "rgba(54,162,235,0.2)",
            "rgba(153,102,255,0.2)"],

            borderColor: ["rgba(255,99,132,0.2)",
            "rgba(255,159,64,0.2)",
            "rgba(255,205,86,0.2)",
            "rgba(75,192,192,0.2)",
            "rgba(54,162,235,0.2",
            "rgba(153,102,255,0.2"],
            // Purposely didn't close out the last two rgba because when hover it'll have a black outline which one can see the results easier
            borderWidth: 5,
            data: [177,76,311,763,5,8]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Autism in Washington by Race in 2018'
      }
    }
});


var years = [2000,2001,2002,2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
// For drawing the lines
var Prevalence = [1.7,2,2.4,2.8,3.4,4,4.6, 5.3, 14.6, 6.6, 7.5];

var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: Prevalence,
        label: "Prevalence Rate",
        borderColor: "#3e95cd",
        fill: true
      },
    ]
  }
});
