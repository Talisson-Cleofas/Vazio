import'./Botao.css'

// Criar botão
const Botao = (props) => {
return (<button className='botao'>
    {props.children}
</button>)
}

export default Botao