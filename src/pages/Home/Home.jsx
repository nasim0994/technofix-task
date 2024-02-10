import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Users from "../../components/Users/Users";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const searchData = data?.users?.filter(
          (user) =>
            user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchText.toLowerCase())
        );
        setUsers(searchData);
        console.log(searchData);
      });
  }, [searchText]);

  return (
    <>
      <Filter setSearchText={setSearchText} />
      <Users users={users} />
    </>
  );
}
