const { useState, useEffect } = require("react");

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://nameless-island-37356.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const newToken = data.accessToken;
          localStorage.setItem("accessToken", newToken);
          setToken(newToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
