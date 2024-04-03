import React, { useEffect, useRef, useState } from 'react';
import G6 from '@antv/g6';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['ospf', 'isis', 'bgp', 'rip', 'eigrp'];
const defaultOption = 'Labels';

const MyGraphComponent = () => {
  const containerRef = useRef(null);
  const [graphInstance, setGraphInstance] = useState(null); // State to hold the G6 graph instance
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [nodeClusterProperty, setNodeClusterProperty] = useState(null); ;

  useEffect(() => {
    if (!containerRef.current) return;

    setNodeClusterProperty('cluster');

    const data = {
      nodes: [
        { id: '1', label: '1', [nodeClusterProperty]:'bgp' },
        { id: '2', label: '2', [nodeClusterProperty]:'bgp'  },
        { id: '3', label: '3', [nodeClusterProperty]:'isis' },
        { id: '4', label: '4', [nodeClusterProperty]:'ospf' },
        { id: '5', label: '5', [nodeClusterProperty]:'bgp'  },
        { id: '6', label: '6', [nodeClusterProperty]:'bgp' },
        { id: '7', label: '7', [nodeClusterProperty]:'bgp'  },
        { id: '8', label: '8', [nodeClusterProperty]:'bgp'  },
        { id: '9', label: '9', [nodeClusterProperty]:'bgp'  },
        { id: '10', label: '10', [nodeClusterProperty]:'bgp'  },
        { id: '11', label: '11', [nodeClusterProperty]:'bgp'  },
        { id: '12', label: '12', [nodeClusterProperty]:'bgp'  },
        { id: '13', label: '13', [nodeClusterProperty]:'eigrp'  },
        { id: '14', label: '14', [nodeClusterProperty]:'eigrp' },
        { id: '15', label: '15', [nodeClusterProperty]:'eigrp' },
        { id: '16', label: '16', [nodeClusterProperty]:'eigrp' },
        { id: '17', label: '17', [nodeClusterProperty]:'eigrp' },
        { id: '18', label: '18', [nodeClusterProperty]:'eigrp' },
        { id: '19', label: '19', [nodeClusterProperty]:'eigrp' },
        { id: '20', label: '20', [nodeClusterProperty]:'isis' },
        { id: '21', label: '21', [nodeClusterProperty]:'isis' },
        { id: '22', label: '22', [nodeClusterProperty]:'isis' },
        { id: '23', label: '23', [nodeClusterProperty]:'rip'  },
        { id: '24', label: '24', [nodeClusterProperty]:'rip'  },
        { id: '25', label: '25', [nodeClusterProperty]:'rip'  },
        { id: '26', label: '26', [nodeClusterProperty]:'rip'  },
        { id: '27', label: '27', [nodeClusterProperty]:'ospf'},
        { id: '28', label: '28', [nodeClusterProperty]:'ospf'},
        { id: '29', label: '29', [nodeClusterProperty]:'ospf'},
        { id: '30', label: '30', [nodeClusterProperty]:'ospf'},
        { id: '31', label: '31', [nodeClusterProperty]:'ospf'},
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

   

    const instance = new G6.Graph({
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
        unitRadius: 140,
        center: [800, 400],
        nodeSpacing: 200,
        circular: true,
        linkDistance: 300,
        preventOverlap: true,
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

    instance.data(data);
  


    instance.render();


    instance.zoom(0.7);
    setGraphInstance(instance);

    return () => {
      instance.destroy();
    };
  }, [nodeClusterProperty]);

  
  const handleDropdownChange = (option) => {
    setSelectedOption(option.value);
    filterNodes(option.value);
     
  };
 
  const filterNodes = (filterValue) => {
    if (!graphInstance) return;

    const nodes = graphInstance.getNodes();
    const edges = graphInstance.getEdges();

    nodes.forEach((node) => {
      const nodeCluster = node.getModel()[nodeClusterProperty];
      if ((filterValue === 'all') || (filterValue === nodeCluster)) {
        node.update({
          style: {
            fill: '#219AFF', // Brighter color for highlighted nodes (adjust as needed)
            stroke: '#5B8FF9',
          },
        });
      } else {
        node.update({
          style: {
            fill: '#C6E5FF',
            stroke: '#5B8FF9',
          },
        });
      }
    });

    edges.forEach((edge) => {
      const sourceId = edge.getSource().getModel().id;
      const targetId = edge.getTarget().getModel().id;
      const sourceCluster = graphInstance.findById(sourceId).getModel()[nodeClusterProperty];
      const targetCluster = graphInstance.findById(targetId).getModel()[nodeClusterProperty];

      if (
        (filterValue === 'all') ||
        ((filterValue === sourceCluster) && (filterValue === targetCluster))
   
        ) {
          // Highlight edges connected to the highlighted nodes
          edge.update({
            style: {
              stroke: '#000000', // Brighter color for highlighted edges (adjust as needed)
            },
          });
        } else {
          // Dim edges not connected to the highlighted nodes
          edge.update({
            style: {
              stroke: '#e2e2e2', // Default color for other edges
            },
          });
        }
      });
    };
  
  

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
        <div style={{ width: '10%', marginRight: '70px', marginTop: '30px' }}>
        <Dropdown
            options={[defaultOption, ...options]}
            value={selectedOption}
            onChange={handleDropdownChange}
            placeholder="Select an option"
          />
        </div>
      </div>
    </>
  );
};

export default MyGraphComponent;
