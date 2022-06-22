const Form = ({ handleSubmit, firstName, handleFirstName, lastName, handleLastName }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='firstName'>first name</label>
            <input type="text"
                required
                id='firstName'
                value={firstName}
                onChange={handleFirstName}
            />
            <label htmlFor='lastName'>last name</label>
            <input type="text"
                required
                id='lastName'
                value={lastName}
                onChange={handleLastName}
            />
            <button>🙃</button>
        </form>
    )
}

export default Form;