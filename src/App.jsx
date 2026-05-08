import {
  useState,
  useEffect,
} from "react";

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

  // GLOBAL RESULT
  const [result, setResult] =
    useState("");

  // NODES
  const [nodes, setNodes, onNodesChange] =
    useNodesState(
      initialNodes.map((node) => ({
        ...node,

        data: {
          ...node.data,

          result,
          setResult,
        },
      }))
    );

  // EDGES
  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

  // UPDATE NODE DATA WHEN RESULT CHANGES
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,

        data: {
          ...node.data,

          result,
          setResult,
        },
      }))
    );
  }, [result]);

  // CONNECT NODES
  const onConnect = (params) =>
    setEdges((eds) =>
      addEdge(params, eds)
    );

  // ADD NODE
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

        result,
        setResult,
      },
    };

    setNodes((nds) => [
      ...nds,
      newNode,
    ]);
  };

  // ADD GROUP
  const addGroup = () => {
    const id = `group-${nodes.length + 1}`;

    const newGroup = {
      id,

      type: "group",

      position: {
        x: 300,
        y: 300,
      },

      style: {
        width: 700,
        height: 400,
      },

      data: {
        label: `New Group`,
      },
    };

    setNodes((nds) => [
      ...nds,
      newGroup,
    ]);
  };

  return (
    <div className="flex h-screen">

      {/* SIDEBAR */}
      <Sidebar
        addNode={addNode}
        addGroup={addGroup}
      />

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