import Image from "next/image";
import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { ItemProps } from "../types/types";

export default function ItemCard({
  index,
  name,
  quantity,
  imageUrl,
  onRemove,
  onMarkAsPurchased,
}: ItemProps) {
  return (
    <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col gap-1">
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className="mx-auto  object-contain rounded-xl items-center justify-center"
      />
      <h5 className="text-gray-600 font-semibold truncate">{name}</h5>
      <p className="text-gray-500 text-sm">Quantidade: {quantity}</p>

      <div className="flex gap-2 mt-2 items-end justify-end">
        {onMarkAsPurchased && (
          <button
            onClick={() => onMarkAsPurchased(index)}
            className="bg-green-500 text-white py-2 px-3 rounded-md hover:bg-green-600"
            title="Comprar"
          >
            <FaCheck />
          </button>
        )}
        <button
          onClick={() => onRemove(index)}
          className="bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600"
          title="Remover"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
