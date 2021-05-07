import spinner from './spinner.gif'
import asteroid from './giphy.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={asteroid} alt="Loading" />
        </div>
    )
}

export default Loader