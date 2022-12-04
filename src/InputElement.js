import React, { useRef, useState } from 'react';
import axios from "axios";

function InputElement() {
  const [value, setvalue] = useState('');
  const inputref =useRef()

  function damateba(e) {
      axios.post("https://reqres.in/api/users" , {
          name: value
       })
       .then(response => {
           console.log(response);    
       })
       .catch(error => {console.log(error)})
       e.preventDefault();
  }



return (
  <form onSubmit={damateba}>
  <input  
  placeholder='search'
      type="text"
      ref={inputref}
      value={value}
      onChange={e => setvalue(e.target.value)}
      />
  </form>
)
}

export default InputElement