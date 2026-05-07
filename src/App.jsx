import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

import { useCallback } from "react";
import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 250, y: 150 },

    data: {
      title: "Start Node",
    },
  },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState([]);

  // CONNECT NODES
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge(params, eds)),
    []
  );

  // ADD NEW NODE
  const addNode = (parentId) => {
    const newId = `${nodes.length + 1}`;

    const newNode = {
      id: newId,
      type: "custom",

      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },

      data: {
        title: `Node ${newId}`,
        addNode,
      },
    };

    // ADD NODE
    setNodes((nds) => [...nds, newNode]);

    // AUTO CONNECT
    setEdges((eds) => [
      ...eds,
      {
        id: `e${parentId}-${newId}`,
        source: parentId,
        target: newId,
      },
    ]);
  };

  // inject function into node data
  const updatedNodes = nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      addNode,
    },
  }));

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={updatedNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}