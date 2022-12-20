
import Hotel from '../Hotel'
import './Estados.css'

const Estado = (props) => {
    const css = {backgroundColor: props.corSecundaria}

    return(
        (props.hotels.length > 0) && <section className='estado' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            
            <div className='hoteis'>
            {props.hotels.map(hotel => 
            <Hotel corDeFundo={props.corPrimaria} key={hotel.nome} nome={hotel.nome} 
            cidade={hotel.cidade}
            imagem={hotel.imagem}
            />)}
            </div>
            
        </section>
        
    )

}
export default Estado