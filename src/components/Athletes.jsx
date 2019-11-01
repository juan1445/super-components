import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from 'react-router-dom';
import axios from "axios";

class Athletes extends Component {
    constructor(props){
        super(props)
        this.dataTable = {
            columns: [
              {
                label: "Nombres",
                field: "firstName",
                sort: "asc",
                width: 150
              },
              {
                label: "Apellidos",
                field: "lastName",
                sort: "asc",
                width: 270
              },
              {
                label: "Genero",
                field: "gender",
                sort: "asc",
                width: 200
              },
              {
                label: "# Documento",
                field: "documentType",
                sort: "asc",
                width: 100
              },
              {
                label: "EPS",
                field: "eps",
                sort: "asc",
                width: 150
              },
              {
                label: "Celular",
                field: "phone",
                sort: "asc",
                width: 150
              },
              {
                label: "Correo",
                field: "email",
                sort: "asc",
                width: 150
              },
              {
                label: "Consultar",
                field: "consult",
                sort: "asc",
                width: 100
              }
            ],
            rows: []
          };

          this.state = {
            loading: true,
            error: null,
            data: undefined
          };
    }

    componentDidMount() {
        this.fetchData();
        this.fetchDataTable();
      }

      handleSessionStorage(id) {
        console.log("entro al handle");
        window.sessionStorage.setItem("idAthlete", id);
      }
    
      fetchDataTable = () => {
        if (this.state.data !== undefined) {
          console.log("entreeee");
          this.state.data.map(obj => {
            return this.dataTable.rows.push(obj);
          });
          this.dataTable.rows.map(obj => {
            return (obj.consult = (
              <Link
                to={`/deportista/${obj.id}`}
                onClick={()=> this.handleSessionStorage(obj.id)}
                className="btn btn-success btn-rounded btn-sm my-0 waves-effect waves-light"
              >
                Editar
              </Link>
            ));
          });
          console.log(this.dataTable);
        }
        return this.dataTable;
      };
      fetchData = () => {
        this.setState({
          loading: true,
          error: null
        });
    
        this.axiosCancelSource = axios.CancelToken.source();
        axios
          .get("http://localhost:3000/data?", {
            cancelToken: this.axiosCancelSource.token
          })
          .then(res => {
            this.setState({
              loading: false,
              data: res.data
            });
            console.log(this.state.data);
          })
          .catch(error => {
            this.setState({
              loading: false,
              error: error
            });
          });
      };

  render() {
    return (
      <div className="">
        {this.state.data !== undefined ? (
          <div className="container my-5">
            <MDBDataTable autoWidth striped responsive data={this.fetchDataTable()} />
          </div>
        ) : (
          <div>Hello hello</div>
        )}
      </div>
    );
  }
}

export default Athletes;
