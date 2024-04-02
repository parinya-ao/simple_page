import React from 'react';

const Admin = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Customer List */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Customer List</h2>
            <ul>
              <li className="flex items-center justify-between py-2 border-b border-gray-200">
                <span>Customer 1</span>
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-gray-200">
                <span>Customer 2</span>
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
              </li>
              {/* More customers... */}
            </ul>
          </div>

          {/* Customer Details */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Customer Details</h2>
            <div>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> johndoe@example.com</p>
              <p><strong>Phone:</strong> 123-456-7890</p>
            </div>
            <button className="bg-blue-500 text-white px-2 py-1 mt-2 rounded">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
