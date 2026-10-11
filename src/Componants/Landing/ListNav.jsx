import { useState } from 'react';
import './ListNav.css';

const categories = [
    { name: 'item1', items: ['item1', 'item1.2', 'item1.3', 'item1.4', 'item1.5'] },
    { name: 'item2', items: ['item2', 'item2', 'item2', 'item2', 'item2'] },
    { name: 'item3', items: ['item3', 'item3', 'item3', 'item3', 'item3'] },
    { name: 'item4', items: ['item4', 'item4', 'item4', 'item4', 'item4'] },
    { name: 'item5', items: ['item5', 'item5', 'item5', 'item5', 'item5'] },
    { name: 'item6', items: ['item6', 'item6', 'item6', 'item6', 'item6'] },
];

function ListNav() {
    const [selected, setSelected] = useState(null);

    return (
        <nav className="list-nav" aria-label="Item categories">
            <ul className="list-nav__categories">
                {categories.map((category, index) => {
                    const isExpanded = selected === category.name;
                    const itemsId = `list-nav-items-${index}`;

                    return (
                        <li className="list-nav__category" key={category.name}>
                            <button
                                className={`list-nav__button${isExpanded ? ' list-nav__button--active' : ''}`}
                                type="button"
                                aria-expanded={isExpanded}
                                aria-controls={itemsId}
                                onClick={() => setSelected(isExpanded ? null : category.name)}
                            >
                                {category.name}
                            </button>
                            <ul className="list-nav__items" id={itemsId} hidden={!isExpanded}>
                                {category.items.map((item, itemIndex) => (
                                    <li key={`${item}-${itemIndex}`}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default ListNav;
