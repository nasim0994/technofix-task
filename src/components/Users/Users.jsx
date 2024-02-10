import UserCard from "../UserCard/UserCard";

export default function Users({ users }) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {users?.map((user) => (
            <UserCard key={user?.id} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
}
