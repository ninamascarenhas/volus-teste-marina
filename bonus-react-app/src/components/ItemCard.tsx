import Image from "next/image";
import React, { useState } from "react";
import Select from "react-select";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { ItemProps, categoryOptions } from "../types/types";

export default function ItemCard({
  index,
  name,
  quantity,
  category,
  imageUrl,
  onRemove,
  onEdit,
  onMarkAsPurchased,
}: ItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newCategory, setNewCategory] = useState(category);

  const handleSave = () => {
    onEdit(index, newName, newQuantity, newCategory);
    setIsEditing(false);
  };

  return (
    <div className="relative bg-gray-200 shadow-md rounded-lg p-4">
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className="mx-auto mb-4 object-contain rounded-xl"
      />

      {isEditing ? (
        <div className="absolute inset-0 bg-gray-900/30 rounded bg-opacity-90 p-4 z-10 flex flex-col justify-center">
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border border-gray-300 text-black rounded p-2 mb-2"
          />
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(+e.target.value)}
            className="border border-gray-300 text-black rounded p-2 mb-2"
          />
          <Select
            value={{ value: newCategory, label: newCategory }}
            onChange={(option) => setNewCategory(option?.value || "")}
            options={categoryOptions}
            placeholder="Categoria"
            className="mb-2 text-black"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 mt-2"
          >
            Salvar
          </button>
        </div>
      ) : (
        <>
          <h5 className="text-gray-600 font-semibold">{name}</h5>
          <p className="text-gray-500 text-sm mb-1">Quantidade: {quantity}</p>

          <div className="flex gap-2 mt-2 items-end justify-end">
            {onMarkAsPurchased && (
              <button
                onClick={() => onMarkAsPurchased(index)}
                className="bg-green-500 text-white py-2 px-3 rounded-md hover:bg-green-600"
              >
                <FaCheck />
              </button>
            )}
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white py-2 px-3 rounded-md hover:bg-yellow-600"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => onRemove(index)}
              className="bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
