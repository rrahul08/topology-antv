import React, { useEffect, useRef ,useState} from 'react';
import G6 from '@antv/g6';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



const options = [
  'ospf', 'isis', 'bgp'
];

const defaultOption = 'Labels';

const MyGraphComponent = () => {
  const containerRef = useRef(null);
  
 

  useEffect(() => {
    if (!containerRef.current) return;
 
    
    const data = {
      nodes: [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4',label:'ospf' },
        { id: '5'},
        { id: '6' },
        { id: '7' },
        { id: '8' },
        { id: '9' },
        { id: '10' },
        { id: '11' },
        { id: '12' },
        { id: '13' },
        { id: '14' },
        { id: '15' },
        { id: '16' },
        { id: '17' },
        { id: '18' },
        { id: '19' },
        { id: '20' },
        { id: '21' },
        { id: '22' },
        { id: '23' },
        { id: '24' },
        { id: '25' },
        { id: '26' },
        { id: '27',label:'ospf' },
        { id: '28',label:'ospf' },
        { id: '29',label:'ospf' },
        { id: '30',label:'ospf'},
        { id: '31',label:'ospf'},
      ],
      edges: [
        { source: '1', target: '2' },
        { source: '1', target: '3' },
        { source: '1', target: '4' },
        { source: '2', target: '6' },
        { source: '2', target: '5' },
        { source: '2', target: '7' },
        { source: '2', target: '8' },
        { source: '2', target: '9' },
        { source: '2', target: '10' },
        { source: '2', target: '11' },
        { source: '2', target: '12' },
        { source: '3', target: '13' },
        { source: '3', target: '20' },
        { source: '3', target: '23' },
        { source: '13', target: '14' },
        { source: '13', target: '15' },
        { source: '13', target: '16' },
        { source: '13', target: '17' },
        { source: '13', target: '18' },
        { source: '13', target: '19' },
        { source: '20', target: '21' },
        { source: '20', target: '22' },
        { source: '23', target: '24' },
        { source: '23', target: '25' },
        { source: '23', target: '26' },
        { source: '4', target: '27' },
        { source: '4', target: '28' },
        { source: '4', target: '29' },
        { source: '4', target: '30' },
        { source: '4', target: '31' },
      ],
    };
    

 
    console.log(data);

    const graph = new G6.Graph({
      container: containerRef.current,
      width: 800,
      height: 600,
      
      transforms: [
        {
          type: 'transform-v4-data',
          activeLifecycle: ['read'],
        },
      ],
      layout: {
        type: 'radial',
        unitRadius:140,
        center: [800, 400],// center coordinates of the layout
        nodeSpacing : 200,
        circular:true,
        linkDistance: 300, // the distance between each node and its parent node
        preventOverlap: true, // avoid node overlap
      },
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'collapse-expand-tree'],
      },
      defaultNode: {
        size: 50,
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
        },
        labelCfg: {
          position: 'bottom',
          style: {
            fill: '#000',
            fontSize: 12,
          },
        },
      },
      defaultEdge: {
        style: {
          stroke: '#e2e2e2',
        },
      },
      autoFit: 'view',
    
    });

    // Graph data
    graph.data(data);
    graph.node(node => {
     
      node.label = node.id;
      
      return node;
    });

    // Render the graph with the data
    graph.render();

 
    
 

    graph.zoom(0.7);

    // updateNodeStyles();


    // Clean up function
    return () => {
      graph.destroy();
    };
  }, []);


  return (
    <>
      <div style={{ display: 'flex' }}>
        <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
        <div style={{ width: '10%', marginRight: '70px', marginTop: '30px' }}>
          <Dropdown options={options} value={defaultOption}  placeholder="Select an option" />
        </div>
      </div>
    </>
  );
};

export default MyGraphComponent;
