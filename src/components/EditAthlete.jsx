import React, { Component } from "react";
import Title from "../super-components/Title";
import Grid from "../super-components/Grid";
import axios from "axios";
import Input from "../super-components/Input";

class EditAthlete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: "",
        lastName: "",
        gender: "",
        documentType: "",
        birthDate: "",
        birthPlace: "",
        eps: "",
        club: "",
        category: "",
        address: "",
        municipality: "",
        phone: "",
        stratum: "",
        email: ""
      },
      json: {
        firstName: "Juan",
        lastName: "zuleta",
        gender: "masculino",
        documentType: "",
        birthDate: "",
        birthPlace: "",
        eps: "",
        club: "",
        category: "",
        address: "",
        municipality: "",
        phone: "",
        stratum: "",
        email: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    console.log("entre al submit");
    console.log(this.state.values);
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
    const { data } = this.props;
    return (
      <form className="mb-5 container" onSubmit={this.handleSubmit}>
        <Title titleSection="Editar Deportista" />
        {data === null ? (
          <div>Loading</div>
        ) : (
          <div>
            {data.map(datas => {
              for (var key in this.state.json) {
                return (
                  <>
                    <div className="form-row">
                      <Grid paramsSize="col-12 col-md-4">
                        <Input
                          type="text"
                          id={key}
                          name={this.state.json[key]}
                          value={this.state.json[key]}
                          onChange={this.handleChange}
                        />
                      </Grid>
                    </div>
                  </>
                );
              }
            })}
          </div>
        )}
        <button className="btn btn-lg btn-success" type="submit">
          Actualizar
        </button>
      </form>
    );
  }
}

export default EditAthlete;

// import React, { Component } from "react";
// import Title from "../super-components/Title";
// import Grid from "../super-components/Grid";
// import axios from "axios";
// import Input from "../super-components/Input";

// class EditAthlete extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       values: {
//         firstName: "",
//         lastName: "",
//         gender: "",
//         documentType: "",
//         birthDate: "",
//         birthPlace: "",
//         eps: "",
//         club: "",
//         category: "",
//         address: "",
//         municipality: "",
//         phone: "",
//         stratum: "",
//         email: ""
//       }
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = e => {
//     this.setState({
//       values: {
//         ...this.state.values,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   handleSubmit = e => {
//     console.log("entre al submit");
//     console.log(this.state.values);
//     e.preventDefault();
//     axios
//       .put(
//         `http://localhost:3000/data/${sessionStorage.getItem("idAthlete")}`,
//         this.state.values
//       )
//       .then(athlete =>
//         this.setState({
//           loading: false
//         })
//       )
//       .catch(error => {
//         this.setState({
//           loading: false,
//           error: error
//         });
//       });
//   };

//   render() {
//     const { data } = this.props;
//     console.log(data);
//     return (
//       <form className="mb-5 container" onSubmit={this.handleSubmit}>
//         <Title titleSection="Editar Deportista" />
//         {data === null ? (
//           <div>Loading</div>
//         ) : (
//           <div>
//             {data.map(datas => {
//               return (
//                 <>
//                   <div className="form-row">
//                     <Grid paramsSize="col-12 col-md-4">
//                       <Input
//                         type="text"
//                         id={datas.id}
//                         name="firstName"
//                         value={this.state.values.firstName}
//                         onChange={this.handleChange}
//                       />
//                     </Grid>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         )}
//         <button className="btn btn-lg btn-success" type="submit">
//           Actualizar
//         </button>
//       </form>
//     );
//   }
// }

// export default EditAthlete;
