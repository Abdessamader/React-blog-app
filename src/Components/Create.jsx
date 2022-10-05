import React from 'react'

function Create() {
  return (
    <div className='create'>
      <h2>Add a New Blog!</h2>
      <form >
        <label >Blog Title:</label>
        <input type="text"
        required
        />
         <label >Blog Body:</label>
        <textarea type="text"
        required
        ></textarea>
        <label >Blog Author:</label>
        <select>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  ) 
}

export default Create