function Categories({ items, render }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((item, index) => (
          <li onClick={() => render(item)} key={`${item}_${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
