import React, { Component } from "react";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      label,
      placeholder,
      name,
      onChange,
      required,
      type,
      value
    } = this.props;
    return (
      <div className="form-group">
        <label className="sr-only">{label}</label>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          required={required}
          value={value}
        />
      </div>
    );
  }
}

export default Input;
