import './AlertErrorStyles.css'

const AlertError = ({message}) => {
    return <div>
        <span className='alertMessage'> {message} </span>
    </div>
}

export default AlertError;