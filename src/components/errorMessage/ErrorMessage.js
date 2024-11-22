import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img src={img}
             style={{width: '250px', height: '250px', objectFit: 'contain', display: 'block', margin: '0 auto'}}
             alt="error"/>
    )
}

export default ErrorMessage;