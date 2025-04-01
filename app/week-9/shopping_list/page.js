"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import { useState } from "react";

export default function Page() {
    let itemArray = itemsData.map((contact) => ({...contact}));
    const [items, setItems] = useState(itemArray);

    const [selectedItemName, setSelectedItemName] = useState('');
    
    const handleAddItem = (event) => {
        setItems(itemArray => [...itemArray,event] );
    }
    
    const handleItemSelect = (item) => {
        const cleanedItemName = newItemName(item.name);
        setSelectedItemName(cleanedItemName);
    };

    const newItemName = (itemName) => {
        const kgStrip = itemName.replace(/\s*,\s*\d+\s*(kg|g|ml|l|oz|lb|pc|items?)\s*$/i, '');
        const emojiStrip = kgStrip.replace(/[\p{Emoji}\u200B-\u200D\uFE0F]/gu, '');
        return emojiStrip.trim();
    };


    return(
        <main className="bg-green-200">
            <h1 className="text-xl">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <div>
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
            
            <ItemList />
        </main>
    );
}