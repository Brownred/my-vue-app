
function Lists() {
    const fruits = [
        { name: 'Apple', calories: 95 },
        { name: 'Banana', calories: 105 },
        { name: 'Cherry', calories: 77 },
        { name: 'Date', calories: 23},
        { name: 'Grape', calories: 62 },
        { name: 'Kiwi', calories: 61 },
        { name: 'Orange', calories: 62 },
        { name: 'Peach', calories: 59 },
        { name: 'Pear', calories: 57 },
        { name: 'Pineapple', calories: 50 },
        { name: 'Strawberry', calories: 33 },
        { name: 'Watermelon', calories: 30 }
    ]

    // fruits.sort((a, b) => a.calories - b.calories);
    // fruits.sort((a, b) => a.name.localeCompare(b.name));   Alphabetical order

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit.name} - {fruit.calories} calories</li>
            ))}
        </ul>
    );
}