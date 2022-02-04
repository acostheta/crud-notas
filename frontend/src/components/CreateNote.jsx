import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 





export default class CreateNote extends Component {

  
  state = {
    users: [],
    userSelected: '',
    title: '',
    content: '',
    date: new Date()
  }

  getUsers = async () =>  {
    const res = await axios.get('http://localhost:4000/api/users');
    this.setState({users: res.data.map(user => user.username)})
  }

  componentDidMount() {
    this.getUsers();
  }


  onInputChange = e => {
    const inputName = e.target.name;
    const inputValue= e.target.value;
    
    this.setState({
      [inputName]: inputValue
    })
  }

  onChangeDate = date => {
    this.setState({date})
    console.log(this.state.date)
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      author: this.state.userSelected,
      title: this.state.title,
      content: this.state.content,
      date: this.state.date
    };
    const res = await axios.post('http://localhost:4000/api/notes', newNote)
    console.log(res);
    window.location.href = '/';
  }
  
  render() {
    return (
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card card-body">
            <h3 className="text-center">Create Note </h3>
            <hr/>
            <form onSubmit={this.onSubmit}>
           
            <div className="form-group mb-3">
            <label htmlFor="noteAuthor" className="form-label">Author:</label>
              <select name="userSelected" id="userSelected"
                className="form-control"
                onChange={this.onInputChange}>
                {
                  this.state.users.map( user => 
                    <option key={user} value={user}>
                      {user}
                    </option>
                  )
                }
               </select>
            </div>

            <div className="mb-3">
              <label htmlFor="noteTitle" className="form-label">Title:</label>
              <input type="text" 
              className="form-control" 
              id="formGroupExampleInput" 
              placeholder="e.g: Workout" 
              onChange={this.onInputChange}
              name="title" />
            </div>

            <div className="mb-3">
              <label htmlFor="noteContent" className="form-label">Content:</label>
              <textarea rows="2"
              className="form-control" 
              id="formGroupExampleInput2"
              placeholder="e.g: I have to do some workout today at 6:30pm. "
              onChange={this.onInputChange}
              name="content" />
            </div>

            <div className="form-group mb-3">
            <label htmlFor="selectDate" className="form-label">Pick a date:</label>
              <DatePicker 
                className="form-control"
                selected={this.state.date}
                onChange={this.onChangeDate}
                  />
            </div>


            <button type="submit" className="btn btn-primary">
              Save Note
            </button>

            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
