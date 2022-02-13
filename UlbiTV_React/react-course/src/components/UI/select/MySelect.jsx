function MySelect({ options, defaultSelect, value, onChange }) {
  return (
    <div>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled value="">{defaultSelect}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MySelect;
