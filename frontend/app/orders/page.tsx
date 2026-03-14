"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token"); // login token
      const res = await fetch("http://localhost:5000/api/orders/my-orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      console.log("Fetched orders:", data); // ✅ check kya aa raha
      setOrders(data);
    };
    fetchOrders();
  }, []);

  if (!orders || !Array.isArray(orders)) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Product</th>
              <th className="p-4">Date</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t">
                <td className="p-4">{order._id}</td>
                <td className="p-4 flex items-center gap-3">
                  <Image src={order.image} alt={order.productName} width={40} height={40} className="rounded" />
                  {order.productName}
                </td>
                <td className="p-4">{new Date(order.date).toLocaleDateString()}</td>
                <td className="p-4">${order.price}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 text-sm rounded ${
                    order.status === "Delivered" ? "bg-green-100 text-green-600" :
                    order.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                    "bg-red-100 text-red-600"
                  }`}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}