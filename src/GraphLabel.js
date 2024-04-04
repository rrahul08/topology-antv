import React, { useEffect, useRef, useState } from 'react';
import G6 from '@antv/g6';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['ospf', 'isis', 'bgp', 'rip', 'eigrp'];
const defaultOption = 'Labels';

const GraphLabel = () => {
  const containerRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
   const [nodeClusterProperty, setNodeClusterProperty] = useState(null); 

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


        { id: '33', label: '33',},
        { id: '34', label: '34',},
        { id: '35', label: '35',},
        { id: '32', label: '32',},
        { id: '36', label: '36',},
        { id: '37', label: '37',},
        { id: '38', label: '38',},
        { id: '39', label: '39',},
        { id: '40', label: '40',},
        { id: '41', label: '41',},
        { id: '42', label: '42',},
        { id: '43', label: '43',},
        { id: '44', label: '44',},
        { id: '45', label: '45',},
        { id: '46', label: '46',},
        { id: '47', label: '47',},
        { id: '48', label: '48',},
        { id: '49', label: '49',},
        { id: '50', label: '50',},
        { id: '51', label: '51',},
        { id: '52', label: '52',},
        { id: '53', label: '53',},
        { id: '54', label: '54',},
        { id: '55', label: '55',},
        { id: '56', label: '56',},
        { id: '57', label: '57',},
        { id: '58', label: '58',},
        { id: '59', label: '59',},
        { id: '60', label: '60',},
        { id: '61', label: '61',},
        { id: '62', label: '62',},
        { id: '63', label: '63',},
        { id: '64', label: '64',},
        { id: '65', label: '65',},
        { id: '66', label: '66',},
        { id: '67', label: '67',},
        { id: '68', label: '68',},
        { id: '69', label: '69',},
        { id: '70', label: '70',},
        { id: '71', label: '71',},
        { id: '72', label: '72',},
        { id: '73', label: '73',},
        { id: '74', label: '74',},
        {  id: '75', 
        label: '75',},
        {   id: '76',
         label: '76',},
        {   id: '77',
         label: '77',},
        {   id: '78',
         label: '78',},
         {  id: '79',
         label: '79',},
         {  id: '80',
         label: '80',},
         {  id: '81',
         label: '81',},
         {  id: '82',
         label: '82',},
         {  id: '83',
         label: '83',},
         {  id: '84',
         label: '84',},
         {  id: '85',
         label: '85',},
         {  id: '86',
         label: '86',},
         {  id: '87',
         label: '87',},
         {  id: '88',
         label: '88',},
         {  id: '89',
         label: '89',},
         {  id: '90',
         label: '90',},
         {  id: '91',
         label: '91',},
         {  id: '92',
         label: '92',},
         {  id: '93',
         label: '93',},
         {  id: '94',
         label: '94',},
         {  id: '95',
         label: '95',},
         {  id: '96',
         label: '96',},
         {  id: '97',
         label: '97',},
         {  id: '98',
         label: '98',},
         {  id: '99',
         label: '99',},
         {  id: '100',
         label: '100',},
         {  id: '101',
         label: '101',},
         {  id: '102',
         label: '102',},
         {  id: '103',
         label: '103',},
         {  id: '104',
         label: '104',},

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

        
        { source: '21', target: '32' },
        { source: '32', target: '33' },
        { source: '32', target: '34' },
        { source: '32', target: '35' },
        { source: '32', target: '36' },
        { source: '6', target: '37' },
        { source: '6', target: '38' },
        { source: '6', target: '39' },
        { source: '9', target: '40' },
        { source: '40', target: '41' },
        { source: '40', target: '42' },
        { source: '41', target: '43' },
        { source: '41', target: '44' },
        { source: '41', target: '45' },
        { source: '41', target: '46' },
        { source: '7', target: '47' },
        { source: '7', target: '48' },
        { source: '12', target: '49' },
        { source: '31', target: '50' },
        { source: '31', target: '51' },
        { source: '31', target: '52' },
        { source: '31', target: '53' },
        { source: '51', target: '54' },
        { source: '51', target: '55' },
        { source: '52', target: '56' },
        { source: '52', target: '57' },
        { source: '29', target: '58' },
        { source: '58', target: '59' },
        { source: '58', target: '60' },
        { source: '58', target: '61' },
        { source: '61', target: '62' },
        { source: '61', target: '63' },
        { source: '30', target: '64' },
        { source: '30', target: '65' },
        { source: '13', target: '66' },
        { source: '13', target: '67' },
        { source: '67', target: '68' },
        { source: '67', target: '69' },
        { source: '14', target: '70' },
        { source: '14', target: '71' },
        { source: '14', target: '72' },
        { source: '18', target: '73' },
        { source: '18', target: '74' },
        { source: '34', target: '75' },
        { source: '75', target: '76' },
        { source: '75', target: '77' },
        { source: '75', target: '78' },
        { source: '78', target: '79' },
        { source: '79', target: '80' },
        { source: '79', target: '81' },
        { source: '79', target: '82' },
        { source: '23', target: '83' },
        { source: '83', target: '84' },
        { source: '83', target: '85' },
        { source: '83', target: '86' },
        { source: '39', target: '87' },
        { source: '87', target: '88' },
        { source: '87', target: '89' },
        { source: '87', target: '90' },
        { source: '87', target: '91' },
        { source: '42', target: '92' },
        { source: '42', target: '93' },
        { source: '42', target: '94' },
        { source: '47', target: '95' },
        { source: '47', target: '96' },
        { source: '47', target: '97' },
        { source: '50', target: '98' },
        { source: '50', target: '99' },
        { source: '50', target: '100' },
        { source: '27', target: '101' },
        { source: '27', target: '102' },
        { source: '27', target: '103' },
        { source: '27', target: '104' },


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
        unitRadius: 180,
        center: [900, 900],
        nodeSpacing: 300,
      
        linkDistance: 400,
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
          stroke: '#999999',
        },
      },
      autoFit: 'view',
    });

    instance.data(data);
  


    instance.render();


    instance.zoom(0.4);
    

    return () => {
      instance.destroy();
    };
  }, [nodeClusterProperty]);

  
  
 
  

    
  

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
        <div style={{ width: '10%', marginRight: '70px', marginTop: '30px' }}>
        <Dropdown
            options={[defaultOption, ...options]}
            value={selectedOption}
            // onChange={handleDropdownChange}
            placeholder="Select an option"
          />
        </div>
      </div>
    </>
  );
};

export default GraphLabel;
