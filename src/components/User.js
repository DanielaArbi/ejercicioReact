

const User = (props)=>{
    return (
        <>
       <h1>el usuario {props.nombre} esta
        activo: {props.activo?"esta ATR" : "no esta ATR"}  
        </h1>
        </>    
    );
}

export default User;