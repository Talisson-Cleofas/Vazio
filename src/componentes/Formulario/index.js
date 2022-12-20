import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    //Criar lista de unidades


    const [nome, setNome] = useState  ('')
    const [cidade, setCidade] = useState  ('')
    const [imagem, setImagem] = useState  ('')
    const [estado, setEstado] = useState ('')
    const [inauguracao, setInauguracao] = useState ('')
   

    //verificar se o formulario foi submetido
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoHospedeCadastrado ({
            nome,
            cidade,
            imagem,
            estado,
            inauguracao

        })
        setNome('')
        setCidade('')
        setEstado('')
        setImagem('')
        setInauguracao('')
    }
        
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}> 
                <h1> Taua Resort & Conventions</h1>
                <h2> Preencha os campos para adicionar uma nova unidade</h2>
                
                <CampoTexto 
                    obrigatorio = {true} 
                    label = "Nome do Hotel" 
                    placeholder = "Digite o nome do novo hotel" 
                    valor = {nome}
                    aoAlterado = {valor => setNome (valor)}
                />

                <CampoTexto 
                    obrigatorio = {true} 
                    label = "Cidade" 
                    placeholder = "Digite a cidade onde ele se localiza" 
                    valor = {cidade}
                    aoAlterado = {valor => setCidade (valor)}
                />

                <CampoTexto 
                    obrigatorio = {true} 
                    label = "Foto" 
                    placeholder = "Envie o link para a foto da capa" 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem (valor)}
                />


                <ListaSuspensa 
                    obrigatorio = {true} 
                    label = "Estado" 
                    itens = {props.estados}
                    valor = {estado}
                    aoAlterado = {valor => setEstado (valor)}

                />

                <CampoTexto 
                    obrigatorio = {true} 
                    label = "Inauguração" 
                    placeholder = "Qual a data de inauguração" 
                    valor = {inauguracao}
                    aoAlterado = {valor => setInauguracao (valor)}
                />

                <Botao>

                    Adicionar novo Hotel

                </Botao>

            </form>   
        </section>
    )
}

export default Formulario