import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';

const MyGraphComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const data = {
      nodes: [
        { id: 'Modeling Methods' },
        { id: 'Classification' },
        { id: 'Consensus' },
        { id: 'Regression' },
        { id: 'Logistic regression' },
        { id: 'Linear discriminant analysis' },
        { id: 'Rules' },
        { id: 'Decision trees' },
        { id: 'Naive Bayes' },
        { id: 'K nearest neighbor' },
        { id: 'Probabilistic neural network' },
        { id: 'Support vector machine' },
        { id: 'Models diversity' },
        { id: 'Different initializations' },
        { id: 'Different parameter choices' },
        { id: 'Different architectures' },
        { id: 'Different modeling methods' },
        { id: 'Different training sets' },
        { id: 'Different feature sets' },
        { id: 'Methods' },
        { id: 'Classifier selection' },
        { id: 'Classifier fusion' },
        { id: 'Common' },
        { id: 'Bagging' },
        { id: 'Boosting' },
        { id: 'AdaBoost' },
        { id: 'Multiple linear regression' },
        { id: 'Partial least squares' },
        { id: 'Multi-layer feedforward neural network' },
        { id: 'General regression neural network' },
        { id: 'Support vector regression' },
      ],
      edges: [
        { source: 'Modeling Methods', target: 'Classification' },
        { source: 'Modeling Methods', target: 'Consensus' },
        { source: 'Modeling Methods', target: 'Regression' },
        { source: 'Classification', target: 'Logistic regression' },
        { source: 'Classification', target: 'Linear discriminant analysis' },
        { source: 'Classification', target: 'Rules' },
        { source: 'Classification', target: 'Decision trees' },
        { source: 'Classification', target: 'Naive Bayes' },
        { source: 'Classification', target: 'K nearest neighbor' },
        { source: 'Classification', target: 'Probabilistic neural network' },
        { source: 'Classification', target: 'Support vector machine' },
        { source: 'Consensus', target: 'Models diversity' },
        { source: 'Consensus', target: 'Methods' },
        { source: 'Consensus', target: 'Common' },
        { source: 'Models diversity', target: 'Different initializations' },
        { source: 'Models diversity', target: 'Different parameter choices' },
        { source: 'Models diversity', target: 'Different architectures' },
        { source: 'Models diversity', target: 'Different modeling methods' },
        { source: 'Models diversity', target: 'Different training sets' },
        { source: 'Models diversity', target: 'Different feature sets' },
        { source: 'Methods', target: 'Classifier selection' },
        { source: 'Methods', target: 'Classifier fusion' },
        { source: 'Common', target: 'Bagging' },
        { source: 'Common', target: 'Boosting' },
        { source: 'Common', target: 'AdaBoost' },
        { source: 'Regression', target: 'Multiple linear regression' },
        { source: 'Regression', target: 'Partial least squares' },
        { source: 'Regression', target: 'Multi-layer feedforward neural network' },
        { source: 'Regression', target: 'General regression neural network' },
        { source: 'Regression', target: 'Support vector regression' },
      ],
    };
    

    const layoutConfigs = {
      Dendrogram: {
        type: 'dendrogram',
        direction: 'LR',
        nodeSep: 20,
        rankSep: 100,
        radial: true,
      },
      CompactBox: {
        type: 'compactBox',
        direction: 'RL',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: () => {
          return 26;
        },
        getWidth: () => {
          return 26;
        },
        getVGap: () => {
          return 20;
        },
        getHGap: () => {
          return 30;
        },
        radial: true,
      },
    };

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
        center: [400, 300], // center coordinates of the layout
        linkDistance: 100, // the distance between each node and its parent node
        preventOverlap: true, // avoid node overlap
      },
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'collapse-expand-tree'],
      },
      // defaultNode: {
      //   size: 30,
      //   style: {
      //     fill: '#C6E5FF',
      //     stroke: '#5B8FF9',
      //   },
      // },
      // defaultEdge: {
      //   style: {
      //     stroke: '#e2e2e2',
      //   },
      // },
      defaultNode: {
        size: 30,
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        style: {
          stroke: '#e2e2e2',
        },
      },
      
    
    });

    // Graph data
    

    // Render the graph with the data
    graph.data(data);
    graph.render();

    // Clean up function
    return () => {
      graph.destroy();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default MyGraphComponent;
