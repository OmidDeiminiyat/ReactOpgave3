 import style from './Hilsen.module.scss';
 const Hilsen = (props) => {

    return(
        <>
        <form className={style.myForm} >
            <h3>Send en hilsen til: <span> {props.text} </span> </h3>
            <input type="text" value={props.text} onChange={props.handleChange} placeholder="Send en hilsen..."/>
        </form>
        </>
    )
}
export default Hilsen;
