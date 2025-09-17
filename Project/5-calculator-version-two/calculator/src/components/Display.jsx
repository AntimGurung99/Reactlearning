import styles from './Display.module.css'
const Display = ({displayValue}) => {
  return<input className={styles.display} text="input" value={displayValue} readonly/>
};
export default Display;