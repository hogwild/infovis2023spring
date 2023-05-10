
const MBTI = ["INFJ","ISFJ","INTJ","ISTJ","INFP",    "INTP",    "ISFP",    "ISTP",    "ENFJ",    "ESFJ",    "ENTJ",    "ESTJ",    "ENFP",    "ENTP",    "ESFP",    "ESTP"  ];
const MUSICAL = ["danceability","energy","loudness",    "mode",    "speechiness",    "acousticness",    "liveness",    "valence",    "tempo",    "instrumentalness"  ];
const MBTI1 = ["ESTP", "ESFP", "ENTP", "ENFP", "ESTJ", "ENTJ", "ESFJ", "ENFJ", "ISTP", "ISFP", "INTP", "INFP", "ISTJ", "INTJ", "ISFJ", "INFJ"]

d3.csv("https://hogwild.github.io/infovis2023spring/team5/matrix1.csv").then(function (data) {
  data.forEach(d => {
    d.value = +d.value
    d.variable = d.variable
    d.mbti = d.mbti
});


  d3.select("#selectButton")
    .selectAll("myOptions")
    .data(MBTI)
    .enter()
    .append("option")
    .text(function (d) {
      return d;
    })
    .attr("value", function (d) {
      return d;
    });


    
  d3.select("#selectButton1")
  .selectAll("myOptions")
  .data(MBTI1)
  .enter()
  .append("option")
  .text(function (d) {
    return d;
  })
  .attr("value", function (d) {
    return d;
  });

  var myColor = d3.scaleOrdinal().domain(MBTI).range(d3.schemeSet2);

  var margin = { top: 10, right: 30, bottom: 30, left: 30 },
    width = 700 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  var svg = d3
  .select("#barchart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3
    .scaleBand()
    .domain(MUSICAL)
    .range([0, width])
    .padding(0.2);

  var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height/1.85 + ")")
  .call(d3.axisBottom(x));

  xAxis.selectAll("text")
  .attr("transform","translate(0,110)")
  .style("font-family", "New Roman");



  let y = d3.scaleLinear()
  .domain([d3.min(data, function(d) { return d.value; }),
     d3.max(data, function(d) { return d.value; })])
  .range([height, 0]);

  svg.append("g").call(d3.axisLeft(y))
  .selectAll("text")
  .style("font-family", "New Roman");
  
  svg.append("text")
  .attr("y", -10)
  .attr("x", 55)
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .style("font-size", "10px")
  .style("font-family", "New Roman")
  .text("Musical Feature Values");


  var bars = svg.selectAll("rect.bar").data(data.filter(function (d) {
    return d.mbti === "INFJ";
  })); //default value
  
   bars.enter() // Create new bars
  .append("rect")
.classed("bar",true)
  .attr("x", function(d) { return x(d.variable); })
  .attr("y", function(d) { return d.value >= 0 ? y(d.value) : y(0); })
  .attr("width", x.bandwidth()/2)
  .attr("height", function(d) { return Math.abs(y(0) - y(d.value)); })
  .attr("fill", function(d) { return myColor(d.mbti); });


var bars1 = svg.selectAll("rect.bar1").data(data.filter(function (d) {
  return d.mbti === "ESTP";
})); //default value

 bars1.enter() // Create new bars
  .append("rect")
.classed("bar1",true)
  .attr("x", function(d) { return x(d.variable); })
  .attr("y", function(d) { return d.value >= 0 ? y(d.value) : y(0); })
  .attr("width", x.bandwidth()/2)
  .attr("height", function(d) { return Math.abs(y(0) - y(d.value)); })
  .attr("fill", function(d) { return myColor(d.mbti); })
  .attr("transform","translate(" + x.bandwidth()/2 + ",0)");



  // A function that updates the chart
  function update(selectedGroup) {
    // Filter data based on the selected MBTI type
    var dataFilter = data.filter(function (d) {
      return d.mbti === selectedGroup;
    });

    let y = d3.scaleLinear()
  .domain([d3.min(data, function(d) { return d.value; }),
     d3.max(data, function(d) { return d.value; })])
  .range([height, 0]);
  
  
    // Update the height of the bars
    var bars = svg.selectAll("rect.bar").data(dataFilter);
  
    bars.exit().remove(); // Remove bars that are no longer needed
    bars.enter() // Create new bars
      .append("rect")
    .classed("bar",true)
      .attr("x", function(d) { return x(d.variable); })
      .attr("y", function(d) { return d.value >= 0 ? y(d.value) : y(0); })
      .attr("width", x.bandwidth()/2)
      .attr("height", function(d) { return Math.abs(y(0) - y(d.value)); })
      .attr("fill", function(d) { return myColor(d.mbti); });
    
  
    bars // Update existing bars
      .transition()
      .duration(1000)
      .attr("y", function (d) {
        return d.value >= 0 ? y(d.value) : y(0);
      })
      .attr("height", function (d) {
        return Math.abs(y(0) - y(d.value));
      })
      .attr("fill", function (d) {
        return myColor(d.mbti);
      });

  }

//for second bar
  function update1(selectedGroup1) {
    // Filter data based on the selected MBTI type
    var dataFilter1 = data.filter(function (d) {
      return d.mbti === selectedGroup1;
    });

    let y = d3.scaleLinear()
  .domain([d3.min(data, function(d) { return d.value; }),
     d3.max(data, function(d) { return d.value; })])
  .range([height, 0]);
  
  
    // Update the height of the bars
    var bars1 = svg.selectAll("rect.bar1").data(dataFilter1);
  
    bars1.exit().remove(); // Remove bars that are no longer needed
    bars1.enter() // Create new bars
      .append("rect")
    .classed("bar1",true)
      .attr("x", function(d) { return x(d.variable); })
      .attr("y", function(d) { return d.value >= 0 ? y(d.value) : y(0); })
      .attr("width", x.bandwidth()/2)
      .attr("height", function(d) { return Math.abs(y(0) - y(d.value)); })
      .attr("fill", function(d) { return myColor(d.mbti); })
      .attr("transform","translate(" + x.bandwidth()/2 + ",0)");
    
  
    bars1 // Update existing bars
      .transition()
      .duration(1000)
      .attr("y", function (d) {
        return d.value >= 0 ? y(d.value) : y(0);
      })
      .attr("height", function (d) {
        return Math.abs(y(0) - y(d.value));
      })
      .attr("fill", function (d) {
        return myColor(d.mbti);
      });

  }
  


  d3.select("#selectButton").on("change", function(d) {
    var selectedOption = d3.select(this).property("value")
    update(selectedOption)
})

d3.select("#selectButton1").on("change", function(d) {
  var selectedOption1 = d3.select(this).property("value")
  update1(selectedOption1)
})
})
