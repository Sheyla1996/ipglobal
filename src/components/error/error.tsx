import error from '../../assets/error.svg';

function Error() {
    return (
        <>
            <div data-testid="error-component">
                <img className='w-48 h-48 mx-auto mt-6' src={error}/>
                <p className='text-3xl'>Ha ocurrido un error</p>
            </div>
        </>
    );
}

export default Error;