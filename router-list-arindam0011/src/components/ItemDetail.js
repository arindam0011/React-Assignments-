// src/components/ItemDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
  { id: '1', name: 'Item 1', description: 'Description for Item 1' },
  { id: '2', name: 'Item 2', description: 'Description for Item 2' },
  { id: '3', name: 'Item 3', description: 'Description for Item 3' },
  // Add more items as needed
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find(item => item.id === id);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
