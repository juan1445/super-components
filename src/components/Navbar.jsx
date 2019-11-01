import React, { Component } from 'react';
import EditAthlete from './EditAthlete';
import axios from "axios";

class Navbar extends Component {
    constructor(props){
        super(props)

    this.state = {
        loading: true,
        error: null,
        data: null
      };
  
      this.fetchData = this.fetchData.bind(this);
    }
  
    componentDidMount() {
      this.fetchData();
      console.log(this.state.data);
    }

    fetchData = () => {
        this.setState({
          loading: true,
          error: null
        });
    
        const session = sessionStorage.getItem("idAthlete");
        console.log(session);
    
        this.axiosCancelSource = axios.CancelToken.source();
        axios
          .get(`http://localhost:3000/data?id=${session}`, {
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
    
      componentWillUnmount() {
        this.axiosCancelSource.cancel("Componente desmontado.");
      }
    render() {
        return (
            <div>
                <div>Hola bebes</div>
                <EditAthlete data={this.state.data} />
            </div>
        );
    }
}

export default Navbar;