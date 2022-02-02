import React from 'react';

export default function CreateNote() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card card-body">
            <h3>Create Note </h3>
            <hr/>
            <div className="mb-3">
              <label for="noteTitle" className="form-label">Title:</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="e.g: Workout"/>
            </div>
            <div className="mb-3">
              <label for="noteContent" className="form-label">Content</label>
              <textarea rows="2" className="form-control" id="formGroupExampleInput2" placeholder="e.g: I have to do some workout today at 6:30pm. "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
