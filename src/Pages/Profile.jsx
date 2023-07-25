import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://backend-ten-xi.vercel.app/api/product",
          {
            headers: {
              methods: GET,
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("data ga ada bro");
      }
    };

    getData();
  }, []);
  return (
    <div>
      <div className=""></div>
    </div>
  );
};

export default Profile;
