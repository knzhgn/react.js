export default function UserCard({ name, email, children }) {
  return (
    <article className="user-card">
      <h3 className="user-name">{name}</h3>
      <p className="user-email">{email}</p>
      <div className="actions">{children}</div>
    </article>
  );
}
