import React, { Component } from "react";
import Title from "../super-components/Title";
import Grid from "../super-components/Grid";
import axios from "axios";
import Input from "../super-components/Input";

class EditAthlete extends Component {
  constructor(props) {
    super(props);

    this.state={
      values:{
        firstName: "",
        "lastName": "",
        "gender": "",
        "documentType": "",
        "birthDate": "",
        "birthPlace": "",
        "eps": "",
        "club": "",
        "category": "",
        "address": "",
        "municipality": "",
        "phone": "",
        "stratum": "",
        "email": ""
      }
    }

  }

  handleChange = e => {
    this.setState({
      values:{
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3000/data/${sessionStorage.getItem("idAthlete")}`,
        this.state.values
      )
      .then(athlete =>
        this.setState({
          loading: false
        })
      )
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };



  render() {
    return (
      <form className="mb-5 container" onSubmit={this.handleSubmit}>
        <Title titleSection="Editar Deportista" />

        {this.props.data === null ? (
          <div>Loading</div>
        ) : (
          <div>
            {this.props.data.map(datas => {
              return (
                <>
                  <div className="form-row">
                    <Grid paramsSize="col-12 col-md-4">
                    <Input
                      type="text"
                      id={datas.id}
                      placeholder={datas.firstName}
                      name={this.state.values.firstName}
                      onChange={this.handleChange}
                      value={this.state.values.firstName}
                      required
                    />
                    </Grid>

                  </div>
                </>
              );
            })}
          </div>
        )}
        <button
          className="btn btn-lg btn-success"
          type="submit"
        >
          Actualizar
        </button>
      </form>
    );
  }
}

export default EditAthlete;
