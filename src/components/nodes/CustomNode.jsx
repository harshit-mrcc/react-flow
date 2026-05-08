import {
  Handle,
  Position,
} from "reactflow";

export default function CustomNode({
  data,
}) {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

      <Handle
        type="target"
        id="left"
        position={Position.Left}
      />

      <div className="px-4 py-3 border-b bg-gray-100 font-semibold">
        {data.title}
      </div>

      <div className="p-4">
        <input
          placeholder="Enter value"
          className="w-full p-3 rounded-xl border border-gray-300 outline-none"
        />

        <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl font-medium">
          Save
        </button>
      </div>

      <Handle
        type="source"
        id="right"
        position={Position.Right}
      />
    </div>
  );
}