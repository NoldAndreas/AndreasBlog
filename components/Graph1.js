import React, { useEffect ,useState} from 'react'
import * as d3 from 'd3'


const Graph1 = props => {
  const [data,setData] = useState();

  var margin = {top: 30, left: 30,bottom:40,right:30},
      width = 300-margin.left-margin.right,
      height = 300-margin.top-margin.bottom;

  useEffect(() =>{
   d3.csv('/static/data/Figure2_a.csv').then(data =>{
     console.log(data);
     setData(data);

     var svg = d3.select("#my_datavizz")
       .append("div")
        // Container class to make it responsive.
        .classed("svg-container", true)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
       .attr("viewBox", "0 0 300 300")
        // Responsive SVG needs these 2 attributes and no width and height attr.
     // Class to make it responsive.
     .classed("svg-content-responsive", true)
     // Fill with a rectangle for visualization.
     .append("g")
     .attr("transform",
           "translate(" + margin.left + "," + margin.top + ")");


     var allGroup = ["silent", "transient","persistent","self-evoked","asynchronous"];

     // add the options to the button
     d3.select("#selectButtonn")
       .attr("class","form-select block")
       .selectAll('myOptions')
       .data(allGroup)
       .enter()
       .append('option')
       .text(function (d) { return d; }) // text showed in the menu
       .attr("value", function (d) { return d; }) // corresponding value returned by the button


           // Add X axis --> it is a date format
           var x = d3.scaleLinear()
             .domain([0,30])
             .range([ 0, width ]);

            svg.append("g")
             .attr("transform", "translate(0," + height + ")")
             .call(d3.axisBottom(x));

             svg.append("g").append("text")
                 .attr("class", "x label")
                 .attr("text-anchor", "end")
                 .attr("x", width)
                 .attr("y", height+20)
                 .attr("dy", "1em")
                 .style('fill','#8884d8')
                 .text("Time [seconds]");

                 svg.append("g").append("text")
                     .attr("class", "y label")
                     .attr("text-anchor", "end")
                     .attr("y", 6)
                     .attr("dy", ".75em")
                     .attr("transform", "rotate(-90)")
                     .style('fill','#8884d8')
                     .text("Firing rate [Hz]");

             /*svg.append("g").append("text")
                     .attr("class", "y label")
                     .attr("text-anchor", "end")
                     .attr("x",width/2)
                     .attr("y",height)
                     .attr("transform", "rotate(-90)")
                     .attr("dy", ".75em")
                     .text("Firing rate [Hz]");*/

           // Add Y axis
           var y = d3.scaleLinear()
             .domain( [0,120])
             .range([ height, 0 ]);
           svg.append("g")
             .call(d3.axisLeft(y));

           // Initialize line with group a
           var line = svg
             .append('g')
             .append("path")
               .datum(data)
               .attr("d", d3.line()
                 .x(function(d) { return x(+d.time) })
                 .y(function(d) { return y(+d.silent) })
               )
               .attr("stroke","#8884d8")
               .style("stroke-width", 1)
               .style("fill", "none")


           // A function that update the chart
           function update(selectedGroup) {

             // Create new data with the selection?
             var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })

             // Give these new data to update line
             line
                 .datum(dataFilter)
                 .transition()
                 .duration(1000)
                 .attr("d", d3.line()
                   .x(function(d) { return x(+d.time) })
                   .y(function(d) { return y(+d.value) })
                 )
           }

           // When the button is changed, run the updateChart function
           d3.select("#selectButtonn").on("change", function(d) {
               // recover the option that has been chosen
               var selectedOption = d3.select(this).property("value")
               // run the updateChart function with this selected option
               update(selectedOption)
           })

   });
  },[]);

  return (
    <>
      <div id="my_datavizz" align="center"><select id="selectButtonn"></select></div>
    </>
  )
}

export default Graph1
