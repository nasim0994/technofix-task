import { useLoaderData } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";

export default function UserDetails() {
  const user = useLoaderData();
  return (
    <section>
      <div className="container">
        <UserCard user={user} />
      </div>
    </section>
  );
}
