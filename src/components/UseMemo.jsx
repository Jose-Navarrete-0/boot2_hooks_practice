import PropTypes from 'prop-types';
import { useMemo } from 'react';


export const UseMemo = ( { count, setCount } ) => {
  
    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count]);

    const handleSquare = () => {
        alert(`Square of Count is: ${count * count}`)
    }
  
    return (
    <div>
        <h2>Exercise Hook useMemo</h2>
        <button className='increment-button' onClick={() => setCount (count + 1)}>
            increment
        </button>
        <button onClick={handleSquare}>
            Square of Count
        </button>
        <p>Count is {count}</p>
        <p>Double Count is {doubleCount}</p>
    </div>
  )
};

UseMemo.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}