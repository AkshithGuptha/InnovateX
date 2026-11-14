export default function ContentState({ loading, error, empty, children }) {
 if (loading) return <p className="content-state" role="status">Loading publication content…</p>;
 if (error) return <p className="content-state" role="alert">{error}</p>;
 if (empty) return <p className="content-state">{empty}</p>;
 return children;
}