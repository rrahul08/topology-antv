// import React, { useEffect, useRef, useState } from 'react';
// import G6 from '@antv/g6';

// import 'react-dropdown/style.css';



// const Radialisis = () => {
//   const containerRef = useRef(null);
//   const [graphInstance, setGraphInstance] = useState(null); // State to hold the G6 graph instance
// //   const [selectedOption, setSelectedOption] = useState(defaultOption);


//   useEffect(() => {
//     if (!containerRef.current) return;



//     const data = JSON.parse(`[
//       {
//           "lsp_id": "TVF-D1002-AMS-001.00-00",
//           "isis_neighbors": [
//               {
//                   "neighbor_id": "TVF-C9102-AMS-002.00",
//                   "metric": "2000"
//               },
//               {
//                   "neighbor_id": "TVF-C9102-AMS-001.00",
//                   "metric": "2000"
//               }
//           ]
//       },
//       {
//           "lsp_id": "TVF-D1002-AMS-002.00-00",
//           "isis_neighbors": [
//               {
//                   "neighbor_id": "TVF-C9102-AMS-003.00",
//                   "metric": "2000"
//               },
//               {
//                   "neighbor_id": "TVF-C9102-AMS-004.00",
//                   "metric": "2000"
//               }
//           ]
//       }
//   ]`)

//   const nodes = {};
//   const edges = [];

//   data.forEach(item => {
//     const { lsp_id, isis_neighbors } = item;
//     nodes[lsp_id] = { id: lsp_id, label: lsp_id }; 
//     console.log(nodes);
//     isis_neighbors.forEach(neighbor => {
//       edges.push({ source: lsp_id, target: neighbor.neighbor_id });

//       if (!nodes[neighbor.neighbor_id]) {
//         nodes[neighbor.neighbor_id] = { id: neighbor.neighbor_id, label: neighbor.neighbor_id };
//       }
//     });
//   });
 

   

//     const instance = new G6.Graph({
//       container: containerRef.current,
//       width: 800,
//       height: 600,
//       transforms: [
//         {
//           type: 'transform-v4-data',
//           activeLifecycle: ['read'],
//         },
//       ],
//       layout: {
//         type: 'radial',
//         unitRadius: 140,
//         center: [800, 400],
//         nodeSpacing: 1000,
//         circular: true,
//         linkDistance: 600,
//         preventOverlap: true,
//       },
//       modes: {
//         default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'collapse-expand-tree'],
//       },
//       defaultNode: {
//         size: 50,
//         style: {
//           fill: '#C6E5FF',
//           stroke: '#5B8FF9',
//         },
//         labelCfg: {
//           position: 'bottom',
//           style: {
//             fill: '#000',
//             fontSize: 12,
//           },
//         },
//       },
//       defaultEdge: {
//         style: {
//           stroke: '#000000',
//         },
//       },
//       autoFit: 'view',
//     });

//     // instance.data(data);
//     instance.data({
//       nodes: Object.values(nodes),
//       edges: edges,
//     });
  


//     instance.render();


//     instance.zoom(0.7);
//     setGraphInstance(instance);

//     return () => {
//       instance.destroy();
//     };
//   }, []);

  

 

  

//   return (
//     <>
//       {/* <div style={{ display: 'flex' }}> */}
//         <div ref={containerRef} style={{width:'full' , height:'full'}} />
//         {/* <div > */}
//         {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// };

// export default Radialisis;
import React, { useEffect, useRef, useState } from 'react';
import G6 from '@antv/g6';



const Radialisis =  React.memo(() => {
  const containerRef = useRef(null);
  const [graphInstance, setGraphInstance] = useState(null);
  const [effectExecuted, setEffectExecuted] = useState(false); 

  useEffect(() => {
    console.log('useEffect called');
    if (effectExecuted || graphInstance || !containerRef.current) return; // Exit if graphInstance already exists

    fetch('http://localhost:4000/isis_data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response as JSON
      })
      .then(responseData => {
      
        if (!responseData || !Array.isArray(responseData.data)) {
          throw new Error('Invalid data format received from server');
        }

        const data = responseData.data;

        const nodes = [];
        const edges = [];

        // Iterate over each item in the data array
        data.forEach(item => {
          // Add node
          nodes.push({ id: item.lspId, label: item.lspId });

          // Add edges
          item.neighbors.forEach(neighbor => {
            edges.push({ source: item.lspId, target: neighbor.neighborId });
          });
        });

       

       const instance = new G6.Graph({
          container: containerRef.current,
          width: 1500,
          height: 700,
          layout: {
            type: 'radial',
            unitRadius: 240,
            center: [800, 400],
            nodeSpacing:3000, // Adjust as needed
            linkDistance: 1000, // Adjust link distance
            preventOverlap: true,
          },
          defaultNode: {
            size: 70,
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
              stroke: '#000000',
            },
          },
          modes: {
            default: ['drag-canvas', 'zoom-canvas','drag-node', 'collapse-expand-tree'],
          },
          autoFit: true,
        });

        instance.data({
          nodes: nodes,
          edges: edges,
        });
        instance.render();
        setGraphInstance(instance);
        return () => {
            instance.destroy();
          };
      })
      .catch(error => console.error('Error fetching network graph data:', error));

   
  }, []);

  return (<div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
);
});

export default Radialisis;
