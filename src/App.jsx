import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

import {
  initialNodes,
  initialEdges,
} from "./data/initialFlow";

import CustomNode from "./components/nodes/CustomNode";
import ConditionNode from "./components/nodes/ConditionNode";
import GroupNode from "./components/groups/GroupNode";

import Sidebar from "./components/sidebar/Sidebar";

const nodeTypes = {
  custom: CustomNode,
  condition: ConditionNode,
  group: GroupNode,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

  // connect nodes
  const onConnect = (params) =>
    setEdges((eds) =>
      addEdge(params, eds)
    );

  // add node
  const addNode = () => {
    const newNode = {
      id: `${nodes.length + 1}`,

      type: "custom",

      position: {
        x: 400,
        y: 300,
      },

      data: {
        title: `Node ${nodes.length + 1}`,
      },
    };

    setNodes((nds) => [
      ...nds,
      newNode,
    ]);
  };

  return (
    <div className="flex h-screen">

      {/* SIDEBAR */}
      <Sidebar addNode={addNode} />

      {/* FLOW */}
      <div className="flex-1">

        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>

      </div>
    </div>
  );
}