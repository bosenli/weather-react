function Input(props){
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <h1> Weather Now </h1>
                <input type="text" placeholder="Your zipcode" onChange={props.handleChange} />
                <input type="button" />
            </form>
        </div>
    )
}
export default Input;