"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import ItemForm from "../components/ItemForm";
import Image from "next/image";
import {
  ItemData,
  categoryOptions,
  categoryImages,
  defaultItems,
} from "../types/types";

export default function ItemList() {
  const [items, setItems] = useState<ItemData[]>([]);
  const [purchasedItems, setPurchasedItems] = useState<ItemData[]>([]);

  const loadItemsFromStorage = () => {
    const savedItems = localStorage.getItem("items");
    const savedPurchasedItems = localStorage.getItem("purchasedItems");
    const isFirstVisit = localStorage.getItem("firstVisit");

    if (!savedItems && !isFirstVisit) {
      setItems(defaultItems);
      localStorage.setItem("items", JSON.stringify(defaultItems));
      localStorage.setItem("firstVisit", "false");
    } else if (savedItems) {
      setItems(JSON.parse(savedItems));
    }

    if (savedPurchasedItems) {
      setPurchasedItems(JSON.parse(savedPurchasedItems));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      loadItemsFromStorage();
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      localStorage.removeItem("items");
    }
  }, [items]);

  useEffect(() => {
    if (purchasedItems.length > 0) {
      localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));
    } else {
      localStorage.removeItem("purchasedItems");
    }
  }, [purchasedItems]);

  const addItem = (name: string, quantity: number, category: string) => {
    const newItem: ItemData = { name, quantity, category };
    setItems([newItem, ...items]);
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const removePurchasedItem = (index: number) => {
    const updatedPurchasedItems = purchasedItems.filter((_, i) => i !== index);
    setPurchasedItems(updatedPurchasedItems);
  };

  const markAsPurchased = (index: number) => {
    const purchasedItem = items[index];
    setPurchasedItems([purchasedItem, ...purchasedItems]);
    removeItem(index);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-3/4 xl:w-[1200px] mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-between ">
        <h3 className="text-[1.7rem] lg:block hidden font-bold text-[#93c874]">
          Mercadinho da Vólus
        </h3>
        <Image
          src="/voluslogo.webp"
          width={100}
          height={100}
          alt="logo"
          className="object-contain"
        />
      </div>

      <ItemForm categoryOptions={categoryOptions} onAddItem={addItem} />

      {items.length === 0 ? (
        <div className="items-center flex justify-center flex-col gap-4">
          <Image src="/carrinho.png" width={60} height={60} alt="carrinho" />
          <p className="text-center text-gray-500">
            Sua Listinha vai aparecer aqui! (:
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black text-xl">
            Itens a serem comprados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <ItemCard
                key={index}
                index={index}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                imageUrl={categoryImages[item.category] || "/carrinho.png"}
                onRemove={removeItem}
                onEdit={() => {}}
                onMarkAsPurchased={markAsPurchased}
              />
            ))}
          </div>
        </div>
      )}

      {purchasedItems.length > 0 && (
        <div className="flex flex-col gap-4 mt-6">
          <h3 className="font-bold text-black text-xl">Itens comprados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {purchasedItems.map((item, index) => (
              <ItemCard
                key={index}
                index={index}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                imageUrl={categoryImages[item.category] || "/carrinho.png"}
                onRemove={removePurchasedItem}
                onEdit={() => {}}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
