import {
  Handle,
  Position,
} from "reactflow";

export default function ConditionNode() {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg border border-orange-300 overflow-hidden">

      <Handle
        type="target"
        id="left"
        position={Position.Left}
      />

      <div className="px-4 py-3 bg-orange-100 font-semibold">
        Experience Check
      </div>

      <div className="p-4">
        <select className="w-full p-3 rounded-xl border border-gray-300">
          <option>
            Experience {" > "} 3 years
          </option>
        </select>

        <div className="mt-4 text-sm text-gray-500">
          YES → Right
          <br />
          NO → Bottom
        </div>
      </div>

      <Handle
        type="source"
        id="yes"
        position={Position.Right}
      />

      <Handle
        type="source"
        id="no"
        position={Position.Bottom}
      />
    </div>
  );
}