export default function StatCard({ title, value, descTitle, desc }) {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        <div className="stat-desc mt-2">
          <div>{descTitle}</div>
          <div>{desc}</div>
        </div>
      </div>
    </div>
  );
}
