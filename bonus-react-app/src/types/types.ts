
export interface ItemData {
    name: string;
    quantity: number;
    category: string;
  }
  
  export const categoryImages: { [key: string]: string } = {
    verduras: "/verduras.png",
    doces: "/doces.png",
    legumes: "/legumes.png",
    frutas: "/frutas.png",
    vegetais: "/vegetal.png",
    laticinios: "/laticinios.png",
    limpeza: "/limpeza.png",
    bebidas: "/bebidas.png",
    cereais: "/cereais.png",
    biscoitos: "/biscoitos.png",
  };
  
  export const defaultItems: ItemData[] = [
    { name: "Maçã", quantity: 6, category: "frutas" },
    { name: "Pão", quantity: 2, category: "cereais" },
    { name: "Detergente", quantity: 1, category: "limpeza" },
    { name: "Refrigerante", quantity: 3, category: "bebidas" },
  ];
  
  export const categoryOptions = [
    { value: "verduras", label: "Verduras" },
    { value: "doces", label: "Doces" },
    { value: "legumes", label: "Legumes" },
    { value: "frutas", label: "Frutas" },
    { value: "laticinios", label: "Laticinios" },
    { value: "limpeza", label: "Limpeza" },
    { value: "bebidas", label: "Bebidas" },
    { value: "cereais", label: "Cereais" },
    { value: "biscoitos", label: "Biscoitos" },
  ];
  


  export interface ItemProps {
    index: number;
    name: string;
    quantity: number;
    category: string;
    imageUrl: string;
    onRemove: (index: number) => void;
    onMarkAsPurchased?: (index: number) => void;
  }