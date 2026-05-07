import { Handle, Position } from "reactflow";

function CustomNode({ data, id }) {
  return (
    <div
      style={{
        background: "#1e1e1e",
        color: "white",
        padding: "15px",
        borderRadius: "12px",
        width: 220,
        border: "2px solid #555",
      }}
    >
      {/* LEFT HANDLE */}
      <Handle
        type="target"
        position={Position.Left}
      />

      <h3>{data.title}</h3>

      {/* FORM */}
      <input
        placeholder="Enter value"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "none",
        }}
      />

      {/* BUTTON */}
      <button
        onClick={() => data.addNode(id)}
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add Node
      </button>

      {/* RIGHT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
      />
    </div>
  );
}

export default CustomNode;