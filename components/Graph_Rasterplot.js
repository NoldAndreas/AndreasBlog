import React, { useEffect ,useState} from 'react'
import {ScatterChart,
        XAxis,
        YAxis,
        CartesianGrid,
        Scatter,
        Label,
        LineChart,Line,
        ResponsiveContainer} from "recharts"
import * as d3 from 'd3'

//const data_loaded = import('Mongillo2008_Reproduce_Fig2B-gpopout095_Rasterplot_Pop0.csv');

const Graph_Rasterplot = props => {

  const [data,setData] = useState([]);
  const [dataExt,setDataExt] = useState([]);

  useEffect(() =>{
   d3.csv('/static/data/Mongillo2008_Reproduce_Fig2B-gpopout095_Rasterplot_Pop0.csv').then(data =>{
     setData(data);
     console.log("loadingData")
   });

   d3.csv('/static/data/Mongillo2008_Reproduce_Fig2B-gpopout095_Data.csv').then(data =>{
     setDataExt(data);
     console.log("loadingDataExt")
     console.log(data)
   });
  },[]);

  return (
    <div>
    <ResponsiveContainer  width='100%' aspect={6.0/1.0}>
      <LineChart margin={{ top: 20, right: 30, bottom: 20, left: 20 }} >
        <XAxis dataKey="time" name="time" domain={[0, 4]} ticks={[1,2]}/>
        <YAxis>
        <Label value="Input"
            dx={-30}
            angle={-90}/>
        </YAxis>
        <Line type="monotone" data={dataExt} dataKey="mu_Ext_0" stroke="#8884d8" dot={false}/>
      </LineChart>
    </ResponsiveContainer>
    <ResponsiveContainer  width='100%' aspect={3.0/2.0}>
     <ScatterChart
       margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
       <CartesianGrid />
       <XAxis type="number" dataKey={"time"} name="time" domain={[0, 4]}>
            <Label value="Time"
                   dy={20}/>
       </XAxis>
       <YAxis type="number" dataKey={"neuron_id"} name="Neuron id"  domain={[0,800]} text="sda">
          <Label value="Neuron #"
              dx={-30}
              angle={-90}/>
       </YAxis>
      <Scatter
          name="Median"
          data={data}
          fill="#8884d8"
          shape="circle"
          strokeWidth = {2}
        />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph_Rasterplot

/*
<LineChart width={300} height={100} margin={{ top: 20, right: 30, bottom: 20, left: 20 }} >
  <XAxis dataKey="time" dataKey={"time"} name="time" domain={[0, 4]} />
  <YAxis/>
  <Line type="monotone" data={dataExt} dataKey="mu_Ext_0" stroke="#8884d8"/>
</LineChart>*/
