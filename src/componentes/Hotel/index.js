import './Hotel.css'

const Hotel = ({nome, imagem, cidade, corDeFundo}) => {
    return (

        <div className='hotel'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src= {imagem}
                alt= {nome}/>
            </div> 
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cidade}</h5>
            </div>
        </div>

    )
}
export default Hotel