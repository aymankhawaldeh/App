import React from 'react';
import './App.css';
 import Users from './component/Users.js'
import Navbar from './component/Navbar.js'
import Search from './component/Search.js'
import axios from 'axios'



class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            users : [],
            loading : false

        }  
    
    }


    // async componentDidMount(){
    //     let name = "aymankhawaldeh"
    //     this.setState({loading : true});
    //      axios.get(`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //     .then(response=>{ this.setState({users : response.data.items , loading : false});})
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // }




 async componentDidMount(){
     let name = "aymankhawaldeh"
     this.setState({loading : true});
     const res = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
     this.setState({users : res.data.items , loading : false});
 }
 
  searchUsers = async text =>{
    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users : res.data.items , loading : false});

  }

    
    render(){
        return(
            <React.Fragment>
                <Navbar title = "Github Finder"/>
                <div className="container">
                <Search searchUsers={this.searchUsers}/>
                {/* <UserItems /> */}
                <Users loading={this.state.loading} users={this.state.users}/>
                </div>
            </React.Fragment>
        )
    }
}



export default App;