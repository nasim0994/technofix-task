import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  const { id, image, firstName, lastName, email, address, company } = user;
  return (
    <div className="user_card">
      <img src={image} alt="" />
      <Link
        to={`/user/${id}`}
        className="font-medium hover:text-primary duration-200"
      >
        {firstName} {lastName}
      </Link>

      <p style={{ color: "#ec4d26" }}>{email}</p>
      <p>
        {address?.address},{address?.city},{address?.state}
      </p>
      <p className="px-3 py-[2px] rounded-xl bg-secondary/30">
        {company?.name}
      </p>
    </div>
  );
}
