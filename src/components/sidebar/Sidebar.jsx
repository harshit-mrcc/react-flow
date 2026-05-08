export default function Sidebar({
    addNode, addGroup
}) {
    return (
        <div className="w-60 bg-white border-r p-4">

            <h1 className="text-xl font-bold mb-4">
                Nodes
            </h1>

            <button
                onClick={() => addNode()}
                className="w-full bg-blue-500 text-white p-3 rounded-xl"
            >
                Add Node
            </button>

            <button
                onClick={() => addGroup()}
                className="w-full mt-3 bg-purple-500 text-white p-3 rounded-xl"
            >
                Add Group
            </button>

        </div>
    );
}