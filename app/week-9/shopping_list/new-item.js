"use client"

import { useState } from "react"

export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            itemName: name,
            itemQuantity: quantity,
            itemCategory: category,
        }

        console.log(item);
        alert(`${item.itemQuantity} ${item.itemName} added. From ${item.itemCategory} section`)
        setCategory("produce")
        setName("")
        setQuantity("1")
    }

    const handleName = (event) => setName(event.target.value);
    const handleQuantity = (event) => setQuantity(Number(event.target.value));
    const handleCategory = (event) => setCategory(event.target.value);
    

    return (
        <main>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="m-4 p-2 bg-cyan-200 w-96">
                    <div>
                        <input type="text" placeholder="Item Name" value={name} onChange={handleName} required className="h-12 rounded-xl w-full"/>
                    </div>
                    <div className="flex justify-between mt-2">
                        <input type="number" min="1" max="99" value={quantity} onChange={handleQuantity} className="rounded-xl w-20 h-10" />
                        <select value={category} onChange={handleCategory} className="rounded-xl w-40 h-10">
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen">Frozen Food</option>
                            <option value="canned">Canned Goods</option>
                            <option value="dry">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <button className="bg-brown-300 hover:bg-red-200 rounded-xl w-full h-10 mt-2">+</button>
                    </div>
                </form>
            </div>
        </main>              
    );
}