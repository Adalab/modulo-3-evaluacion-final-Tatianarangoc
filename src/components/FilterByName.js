const FilterByName = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (ev) => {
    props.handleFilterByName(ev.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="name">Name</label>
      <input
        className="form_filterByName"
        type="text"
        value={props.filterByName}
        onChange={handleChange}
      />
    </form>
  );
};
export default FilterByName;
