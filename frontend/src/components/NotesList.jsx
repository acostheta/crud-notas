import React, { Component } from 'react';
import axios from 'axios';
import TimeAgo from 'timeago-react';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';





export default class NotesList extends Component {

  state = {
    notes: []
  }

  getNotes = async () => {
    const res = await axios.get('http://localhost:4000/api/notes');
    this.setState({notes: res.data});
    console.log(this.state.notes);
  }

  componentDidMount() {
    this.getNotes();
  }
  
  deleteNote = async (id) => {
    await axios.delete('http://localhost:4000/api/notes/' + id);
    this.getNotes();
  }



  render() {
    return (
    <div className="container">
      <div className="row">
        {
          this.state.notes.map( note => 
            <div className="col-md-4 mb-2" key={note._id}>
              <div className="card">
                <div className="card-header" key={note.title}>
                  <h4>
                  {note.title}            
                  </h4>

                </div>
                <div className="card-body">
                  {note.content}
                  <br />
                  <strong>author:</strong> {note.author}
                  <br />
                  <strong>date: </strong>
                  <TimeAgo datetime={note.date}/>

                  
                </div>

                <div className="card-footer d-flex justify-content-end"> 

                <button className="btn btn-secondary d-flex align-items-center mx-1">
                <AiFillEdit/> Edit
                </button>
                <button className="btn btn-danger d-flex align-items-center mx-0"
                  onClick={() => this.deleteNote(note._id)}
                >
                  <AiFillDelete/> Delete 
                </button>

                </div>
              </div>
            </div>
          )
        }
        
      </div>
      
    </div>
    );
  }
}
