"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from './meal-ideas';
import { getItems, addItem } from './_services/shopping-list-service';
import { useUserAuth } from './_utils/auth-context';
import React, { useEffect, useState } from "react";

const ShoppingPage = () => {
    const { user } = useAuth();
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState(null);

useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

const loadItems = async () => {
    try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
    } catch (error) {
        console.error("Error loading items", error);
    }
};

const handleAddItem = async () => {
    try {  
        const newItemId = await addItem(user.uid, newItemData);
        const newItemData = { id: newItemId, name: newItem };
        setItems((prevItems) => [
        ...prevItems,
        newItemData,
      ]);
    } catch (error) {
        console.error("Error adding items", error);
    }
};
   
    let itemArray = itemsData.map((contact) => ({...contact}));

    const [selectedItemName, setSelectedItemName] = useState('');
    
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
};

export default ShoppingPage;