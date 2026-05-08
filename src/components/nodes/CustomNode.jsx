import {
  Handle,
  Position,
} from "reactflow";

import { useState } from "react";

export default function CustomNode({
  data,
}) {
  const [experience, setExperience] =
    useState("");

  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-visible">

      {/* LEFT HANDLE */}
      <Handle
        type="target"
        id="left"
        position={Position.Left}
      />

      {/* HEADER */}
      <div className="px-4 py-3 border-b bg-gray-100 font-semibold">
        {data.title}
      </div>

      {/* BODY */}
      <div className="p-4">

        {/* ONLY FOR RESUME NODE */}
        {data.title === "Resume Upload" && (
          <>
            <input
              type="number"
              placeholder="Years of experience"
              value={experience}
              onChange={(e) =>
                setExperience(e.target.value)
              }
              className="w-full p-3 rounded-xl border border-gray-300 outline-none"
            />

            <button
              onClick={() => {
                const years =
                  Number(experience);

                if (years >= 3) {
                  data.setResult(
                    "eligible"
                  );
                } else {
                  data.setResult(
                    "reject"
                  );
                }
              }}
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl font-medium"
            >
              Check Eligibility
            </button>
          </>
        )}

        {/* ELIGIBLE NODE */}
        {data.title ===
          "Eligible For Interview" &&
          data.result ===
          "eligible" && (
            <div className="p-3 mt-2 rounded-xl bg-green-100 text-green-700 font-medium">
              Congratulations! You are
              eligible.
            </div>
          )}

        {/* REJECT NODE */}
        {data.title ===
          "Need More Experience" &&
          data.result ===
          "reject" && (
            <div className="p-3 mt-2 rounded-xl bg-red-100 text-red-700 font-medium">
              You need more experience.
            </div>
          )}

      </div>

      {/* RIGHT HANDLE */}
      <Handle
        type="source"
        id="right"
        position={Position.Right}
      />
    </div>
  );
}