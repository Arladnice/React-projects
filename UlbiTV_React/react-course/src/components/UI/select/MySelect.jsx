function MySelect({ options, defaultSelect }) {
  return (
    <div>
      <select defaultValue={defaultSelect}>
        <option disabled>{defaultSelect}</option>
        {options.map((option) => (
          <option key={option.value} value={option.title}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MySelect;
