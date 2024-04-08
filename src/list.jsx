
function Lists(props) {

    const category = props.category;
    const itemList = props.items;

    // fruits.sort((a, b) => a.calories - b.calories);
    // fruits.sort((a, b) => a.name.localeCompare(b.name));   Alphabetical order

    return (
        <ul>
            {itemList.map((item, index) => (
                <li key={index}>{item.name} - {item.calories} calories</li>
            ))}
        </ul>
    );
}