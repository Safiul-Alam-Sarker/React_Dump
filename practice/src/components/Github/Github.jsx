import { useEffect, useState } from "react";
function Github() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Safiul-Alam-Sarker")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);

  return (
    <>
      <div className="text-center m-1 bg-gray-600 text-white p-4 text-3xl">
        Github Followrs:{data.followers}
        <img
          src="{data.avatar_url}"
          alt="git picture"
          height={300}
          width={400}
        />
      </div>
    </>
  );
}

export default Github;
