import React, { useState } from "react";
import Select from "react-select";

interface ItemFormProps {
  categoryOptions: { value: string; label: string }[];
  onAddItem: (name: string, quantity: number, category: string) => void;
}

export default function ItemForm({
  categoryOptions,
  onAddItem,
}: ItemFormProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const handleAddItem = () => {
    if (name && category) {
      onAddItem(name, quantity, category);
      setName("");
      setQuantity(1);
      setCategory("");
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded text-black placeholder:text-gray-500 outline-none w-1/2"
          placeholder="Nome do item"
          maxLength={20}
        />
        <input
          type="number"
          min="1"
          max="100"
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.min(100, Math.max(1, +e.target.value)))
          }
          className="border border-gray-300 p-2 rounded text-black outline-none w-1/2"
          placeholder="Quantidade"
        />
      </div>

      <div className="flex gap-4">
        <Select
          options={categoryOptions}
          value={categoryOptions.find((opt) => opt.value === category)}
          onChange={(option) => setCategory(option?.value || "")}
          placeholder="Categoria"
          className="w-full text-gray-600"
        />
        <button
          onClick={handleAddItem}
          className="bg-[#93c874] text-white py-2 px-4 rounded-md hover:bg-[#759e5d] transition"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
