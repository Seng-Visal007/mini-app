export function InfoItem({ label, value }) {
    return (
        <div className="py-2 border-b border-gray-100 last:border-none">
            <span className="text-gray-500 text-sm block">{label}</span>
            <span className="text-gray-700 font-medium">{value}</span>
        </div>
    );
}