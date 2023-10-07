import { useState, useEffect } from "react";

export default function useMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/menu")
      .then((response) => response.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return { menu };
}
