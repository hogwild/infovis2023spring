let w = 1200;
let h = 800;
let padding = 90;
let i = 0;
let dimension1 = false;
let dimension2 = false;
let dimension3 = false;
let dimension4 = false;
let activeButton = 0;

//////////
// SVG
let viz = d3.select("#container").append("svg")
  .style("width", w)
  .style("height", h)
  .style("background-color", "lightgrey");


// IMPORT DATA
d3.json("countries.geojson").then(function (geoData) {
  d3.csv("generated2.csv").then(function (incomingData) {

    drawDefault();

    function drawDefault() {
      incomingData = incomingData.map(function (d, i) {
        d.value = Number(d.iValue);
        return d
      });
      let minValue = d3.min(incomingData, function (d, i) {
        return d.value
      })
      let maxValue = d3.max(incomingData, function (d, i) {
        return d.value
      })
      let colorScale = d3.scaleLinear().domain([minValue, maxValue]).range(["white", "red"]);
      console.log(colorScale(20));


      let projection2 = d3.geoEquirectangular()
        .translate([w / 2, h / 2])
        .fitExtent([
          [padding, padding],
          [w - padding, h - padding]
        ], geoData);
      let pathMaker = d3.geoPath(projection2);


      viz.selectAll(".countries").data(geoData.features).enter()
        .append("path")
        .attr("class", "country")
        .attr("d", pathMaker)
        // .attr("fill", "balck")
        .attr("fill", function (d, i) {
          console.log(d.properties.name);

          let correspondingDatapoint = incomingData.find(function (datapoint) {
            if (datapoint.country == d.properties.name) {
              return true
            } else {
              return false
            }
          });

          if (correspondingDatapoint != undefined) {
            // console.log(correspondingDatapoint.value);
            return colorScale(correspondingDatapoint.value)
          } else {
            return "grey"
          }
        })
        .on('mouseover', mouseOverCountry)
        .on("mouseout", mouseOutCountry)

      }




    function draw1() {
      // PRINT DATA
      incomingData = incomingData.map(function (d, i) {
        d.value = Number(d.iValue);
        return d
      });
      let minValue = d3.min(incomingData, function (d, i) {
        return d.value
      })
      let maxValue = d3.max(incomingData, function (d, i) {
        return d.value
      })
      let colorScale = d3.scaleLinear().domain([minValue, maxValue]).range(["white", "red"]);
      console.log(colorScale(20));



      let projection2 = d3.geoEquirectangular()
        .translate([w / 2, h / 2])
        .fitExtent([
          [padding, padding],
          [w - padding, h - padding]
        ], geoData);

      let pathMaker = d3.geoPath(projection2);

      viz.selectAll(".countries").data(geoData.features).enter()
        .append("path")
        .attr("class", "country")
        .attr("d", pathMaker)
        // .attr("fill", "balck")
        .attr("fill", function (d, i) {
          console.log(d.properties.name);

          let correspondingDatapoint = incomingData.find(function (datapoint) {
            if (datapoint.country == d.properties.name) {
              return true
            } else {
              return false
            }
          });

          if (correspondingDatapoint != undefined) {
            // console.log(correspondingDatapoint.value);
            return colorScale(correspondingDatapoint.value)
          } else {
            return "grey"
          }
        })
        .on('mouseover', mouseOverCountry)
        .on("mouseout", mouseOutCountry)
      // .attr("stroke", "grey")
      // .attr("stroke-width", 1);

    }

    function draw2() {
      // PRINT DATA
      incomingData = incomingData.map(function (d, i) {
        d.value = Number(d.nValue);
        return d
      });
      let minValue = d3.min(incomingData, function (d, i) {
        return d.value
      })
      let maxValue = d3.max(incomingData, function (d, i) {
        return d.value
      })
      let colorScale = d3.scaleLinear().domain([minValue, maxValue]).range(["white", "orange"]);
      console.log(colorScale(20));



      let projection2 = d3.geoEquirectangular()
        .translate([w / 2, h / 2])
        .fitExtent([
          [padding, padding],
          [w - padding, h - padding]
        ], geoData);

      let pathMaker = d3.geoPath(projection2);

      viz.selectAll(".countries").data(geoData.features).enter()
        .append("path")
        .attr("class", "country")
        .attr("d", pathMaker)
        // .attr("fill", "balck")
        .attr("fill", function (d, i) {
          console.log(d.properties.name);

          let correspondingDatapoint = incomingData.find(function (datapoint) {
            if (datapoint.country == d.properties.name) {
              return true
            } else {
              return false
            }
          });

          if (correspondingDatapoint != undefined) {
            // console.log(correspondingDatapoint.value);
            return colorScale(correspondingDatapoint.value)
          } else {
            return "grey"
          }
        })
        .on('mouseover', mouseOverCountry)
        .on("mouseout", mouseOutCountry)
      // .attr("stroke", "grey")
      // .attr("stroke-width", 1);

    }

    function draw3() {
      // PRINT DATA
      incomingData = incomingData.map(function (d, i) {
        d.value = Number(d.tValue);
        return d
      });
      let minValue = d3.min(incomingData, function (d, i) {
        return d.value
      })
      let maxValue = d3.max(incomingData, function (d, i) {
        return d.value
      })
      let colorScale = d3.scaleLinear().domain([minValue, maxValue]).range(["white", "green"]);
      console.log(colorScale(20));



      let projection2 = d3.geoEquirectangular()
        .translate([w / 2, h / 2])
        .fitExtent([
          [padding, padding],
          [w - padding, h - padding]
        ], geoData);

      let pathMaker = d3.geoPath(projection2);

      viz.selectAll(".countries").data(geoData.features).enter()
        .append("path")
        .attr("class", "country")
        .attr("d", pathMaker)
        // .attr("fill", "balck")
        .attr("fill", function (d, i) {
          console.log(d.properties.name);

          let correspondingDatapoint = incomingData.find(function (datapoint) {
            if (datapoint.country == d.properties.name) {
              return true
            } else {
              return false
            }
          });

          if (correspondingDatapoint != undefined) {
            // console.log(correspondingDatapoint.value);
            return colorScale(correspondingDatapoint.value)
          } else {
            return "grey"
          }
        })
        .on('mouseover', mouseOverCountry)
        .on("mouseout", mouseOutCountry)
      // .attr("stroke", "grey")
      // .attr("stroke-width", 1);

    }

    function draw4() {
      // PRINT DATA
      incomingData = incomingData.map(function (d, i) {
        d.value = Number(d.jValue);
        return d
      });
      let minValue = d3.min(incomingData, function (d, i) {
        return d.value
      })
      let maxValue = d3.max(incomingData, function (d, i) {
        return d.value
      })
      let colorScale = d3.scaleLinear().domain([minValue, maxValue]).range(["white", "blue"]);
      console.log(colorScale(20));



      let projection2 = d3.geoEquirectangular()
        .translate([w / 2, h / 2])
        .fitExtent([
          [padding, padding],
          [w - padding, h - padding]
        ], geoData);

      let pathMaker = d3.geoPath(projection2);

      viz.selectAll(".countries").data(geoData.features).enter()
        .append("path")
        .attr("class", "country")
        .attr("d", pathMaker)
        // .attr("fill", "balck")
        .attr("fill", function (d, i) {
          console.log(d.properties.name);

          let correspondingDatapoint = incomingData.find(function (datapoint) {
            if (datapoint.country == d.properties.name) {
              return true
            } else {
              return false
            }
          });

          if (correspondingDatapoint != undefined) {
            // console.log(correspondingDatapoint.value);
            return colorScale(correspondingDatapoint.value)
          } else {
            return "grey"
          }
        })
        .on('mouseover', mouseOverCountry)
        .on("mouseout", mouseOutCountry)
      // .attr("stroke", "grey")
      // .attr("stroke-width", 1);

    }



    function mouseOverCountry(d, i) {
      var colors = ['red','orange','green','blue'];
      var intj = ['I','N','T','J'];
      let value = incomingData.filter(e => {
        return e.country === d.properties.name;
      })[0].value


      var tooltip = d3.select('#tooltip');
      
      
      tooltip.style('left', (d3.event.pageX + 10) + 'px')
        .style('top', (d3.event.pageY - 25) + 'px')
        .style('display', 'inline-block');
    
        tooltip.append('p')
        .html(`<b>${d.properties.name}</b> <br>
        ${intj[activeButton]}: ${(value * 100).toFixed(0)}%
        `);

      var pieContainer = tooltip.append('div')
        .attr('class', 'pie-container');
    
      var svg = pieContainer.append('svg')
        .attr('class', 'pie')
        .attr('width', 100)
        .attr('height', 100)
        .append('g')
        .attr('transform', 'translate(50,50)');
    
      var data = [value, 1 - value];
    
      var color = d3.scaleOrdinal().range([colors[activeButton],'grey']);

      // Generate the pie
      var pie = d3.pie();
      // Generate the arcs
      var arc = d3.arc()
        .innerRadius(0)
        .outerRadius(50);
      //Generate groups
      var arcs = svg.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc")
      //Draw arc paths
      arcs.append("path")
        .attr("fill", function (d, i) {
          return color(i);
        })
        .attr("d", arc);
      //Display lable - value
      arcs.append("text")
        .attr("transform", function (d) {
          return "translate(" + arc.centroid(d) + ")";
        })
        .text(function (d) {
          return (d.value * 100).toFixed(0) + '%'
        })
        .style("fill", 'white')
        .style("font-size", 15);

    }
    
    function mouseOutCountry(d, i) {
      d3.select('#tooltip svg').remove();
      d3.select('#tooltip p').remove();
      // d3.select('#tooltip p1').remove();
      d3.select('#tooltip')
    .style('display', 'none');
  
    }
    


    document.getElementById("button1").addEventListener("click", function () {
      activeButton = 0;
      draw1();
    });

    document.getElementById("button2").addEventListener("click", function () {
      activeButton = 1;
      draw2();
    });

    document.getElementById("button3").addEventListener("click", function () {
      activeButton = 2;
      draw3();
    });

    document.getElementById("button4").addEventListener("click", function () {
      activeButton = 3;
      draw4();
    });



    let lat = 31.22773;
    let lon = 121.52946;
  })
})
