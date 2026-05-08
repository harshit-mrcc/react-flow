export default function GroupNode({ data }) {
  return (
    <div className="w-full h-full rounded-3xl border-2 bg-transparent border-gray-300 shadow-xl overflow-visible">

      {/* HEADER */}
      <div className="px-6 py-4 bg-gray-900 text-white font-bold text-lg rounded-t-3xl">
        {data.label}
      </div>

      {/* BODY */}
      <div className="w-full h-full bg-transparent rounded-b-3xl"></div>
    </div>
  );
}