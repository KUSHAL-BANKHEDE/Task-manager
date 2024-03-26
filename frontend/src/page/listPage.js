
import React, { useState, useEffect } from 'react';
import { CreateList } from '../component/creatListe';
import { Lists } from '../component/lists';

const ListPage = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetchLists();
  }, []); // Fetch lists when component mounts

  const fetchLists = async () => {
    try {
      const response = await fetch("/lists");
      if (!response.ok) {
        throw new Error("Failed to fetch lists");
      }
      const json = await response.json();
      setLists(json);
    } catch (error) {
      console.error("Error fetching lists:", error);
    }
  };

  return (
    <div>
      <CreateList />
      <Lists lists={lists} />
    </div>
  );
};

export default ListPage;
