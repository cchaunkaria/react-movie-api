import React, { useState } from 'react'
import { useStateValue } from '../StateProvider';
import "./SearchFunction.css";

function SearchFunction() {

    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState('');

  return (
    <div>SearchFunction</div>
  )
}

export default SearchFunction