function FormDateInput(props) {
  return (
    <div className="row my-1">
      { props.label &&
        <label htmlFor={props.id} className="col-form-label col-2">
          {props.label}:
        </label>
      }
      <div className={`${props.label ? "col-10" : "col-12"}`}>
        <input
          className="form-control"
          type="date"
          id={props.id}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleInput}
        />
      </div>
    </div>
  );
}

export default FormDateInput