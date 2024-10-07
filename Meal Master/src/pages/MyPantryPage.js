import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const PantryItem = ({ item, onDrop }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'pantry-item',
        item: { name: item.name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div 
            ref={drag}
            className={`p-4 border rounded-md shadow-md transition transform hover:scale-105 ${
                isDragging ? 'opacity-50' : ''
            }`}
        >
            {item.name}
        </div>
    );
};

const PantryCategory = ({ category, onDrop }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'pantry-item',
        drop: (item) => onDrop(item, category),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={drop}
            className={`p-6 border-2 rounded-md transition ${
                isOver ? 'bg-green-200' : ''
            }`}
        >
            <h3>{category}</h3>
        </div>
    );
};

const MyPantryPage = () => {
    const [pantryItems, setPantryItems] = useState([
        { name: 'Tomatoes', category: 'In Stock' },
        { name: 'Pasta', category: 'Out of Stock' },
    ]);

    const onDrop = (item, category) => {
        setPantryItems((prevItems) =>
            prevItems.map((pantryItem) =>
                pantryItem.name === item.name ? { ...pantryItem, category } : pantryItem
            )
        );
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">My Pantry 🍽️</h1>
                <div className="grid grid-cols-2 gap-6">
                    <PantryCategory category="In Stock" onDrop={onDrop} />
                    <PantryCategory category="Out of Stock" onDrop={onDrop} />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                    {pantryItems.map((item) => (
                        <PantryItem key={item.name} item={item} />
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};

export default MyPantryPage;
