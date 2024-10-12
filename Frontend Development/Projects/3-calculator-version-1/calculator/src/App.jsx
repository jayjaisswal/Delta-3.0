import styles from './App.module.css';
import Display from './components/Display';


function App() {
 

  return (
    <div className = {styles.calculator}>
     <Display></Display>
      <div className = {styles.BtnContainer}>
        
        <button className = {styles.button} >C</button>
        <button className = {styles.button}>1</button>
        <button className = {styles.button}>2</button>
        <button className = {styles.button}>+</button>
      </div>
      
    </div>
  )
}

export default App
