import style from './counter.module.scss';
export const Counter = (props) => {
   
  
    return (
        <>
            <article className={style.Counter} >
                <h2>Du har klikket på knappen {props.Count} gange</h2>
                <button onClick={props.handleClick} >Click to count</button>
            </article>
        </>
    )
}
export default Counter;