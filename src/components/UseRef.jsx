import PropTypes from 'prop-types';
import { useRef } from 'react';

export const UseRef = ({ count, setCount }) => {

    /* Crear una referencia con useRef para almacenar el elemento del DOM*/ 
    const countRef = useRef();

    const handleClick =  () => {
        const newConst = count + 1;
        setCount(newConst);
        countRef.current.textContent = `Count in now ${newConst}`;
    }

    const handleDoubleClick = () => {
        setCount(0);
        countRef.current.textContent = `Count in now 0`;
    }

  return (
    <div>
        <h2>Exercise Hook useRef</h2>
         <button className='increment-button' onClick={handleClick} onDoubleClick={handleDoubleClick}>
            increment
         </button>
         <p ref={countRef} className='count-text'>
            Count is {count}
         </p>
         <hr />
    </div>
  )
}

UseRef.PropTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}