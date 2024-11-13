// DetailedAdminDashboard.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Item {
  id: number;
  name: string;
  description: string;
}

const DetailedAdminDashboard: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://users-admin-dashboard-backend-test.vercel.app/${type}`
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);

  const handleEditClick = (id: number, currentName: string) => {
    setEditItemId(id);
    setEditedName(currentName); // Set the current name to editedName for input field
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleEditSave = async (id: number) => {
    try {
      const response = await fetch(
        `https://users-admin-dashboard-backend-test.vercel.app/${type}/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: editedName }),
        }
      );
      if (!response.ok) throw new Error('Failed to update item');

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, name: editedName } : item
        )
      );
      setFilteredItems((prevFilteredItems) =>
        prevFilteredItems.map((item) =>
          item.id === id ? { ...item, name: editedName } : item
        )
      );
      setEditItemId(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleEditCancel = () => {
    setEditItemId(null);
    setEditedName(''); // Reset edited name
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `https://users-admin-dashboard-backend-test.vercel.app/${type}/${id}`,
        { method: 'DELETE' }
      );
      if (!response.ok) throw new Error('Failed to delete item');
      setItems(items.filter((item) => item.id !== id));
      setFilteredItems(filteredItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredItems(
      items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4 capitalize">{type} Management</h1>
      <div className="w-full max-w-5xl">
        <input
          type="text"
          placeholder={`Search ${type || 'items'}`}
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                {editItemId === item.id ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={handleNameChange}
                    className="border p-2 rounded w-full"
                  />
                ) : (
                  <p className="font-semibold">{item.name}</p>
                )}
                <p className="text-blue-500">{item.description}</p>
              </div>
              <div className="flex space-x-2">
                {editItemId === item.id ? (
                  <>
                    <button
                      onClick={() => handleEditSave(item.id)}
                      className="text-green-500"
                    >
                      ✅
                    </button>
                    <button onClick={handleEditCancel} className="text-red-500">
                      ❌
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditClick(item.id, item.name)}
                      className="text-blue-500"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500"
                    >
                      🗑️
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedAdminDashboard;
