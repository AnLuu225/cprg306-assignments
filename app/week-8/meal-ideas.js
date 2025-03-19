"use client" 
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const apiurl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        try {
            const response = await fetch(apiurl);
            if (!response.ok) {
                throw new Error('Error fetching data from API');
            }
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching data", error);
            return [];
        }
    };

    const loadMealIdeas = async () => {
        if (!ingredient) return;
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-4 bg-green-200 rounded shadow-md w-full mt-96">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Meal Ideas: 🧑🏾‍🍳</h2>
            <h2 className="text-xl font-bold text-gray-700 mb-4">Here are some recipes that use {ingredient}</h2>
            {meals.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover rounded-md mb-2" />
                            <p className="text-md font-semibold text-gray-800">{meal.strMeal}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No meal ideas for "{ingredient}".</p>
            )}
        </div>
    );
}