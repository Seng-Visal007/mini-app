export function SectionCard({ title, children }) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
            <h2 className="text-gray-900 text-xl font-bold mb-4">{title}</h2>
            <div>{children}</div>
        </div>
    );
}