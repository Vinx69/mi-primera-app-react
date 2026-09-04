function BotonAccion() {
    function alertX() {
        alert('HOLA')
    }

    return (
        <div>
            <h1>Full Stack</h1>
            <button onClick={alertX}>Full stack</button>
        </div>
    )
}

export default BotonAccion