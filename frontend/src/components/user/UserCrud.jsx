import React, { Component } from 'react'
import Main from '../templates/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: ''},
    list: []
}

export default class UserCrud extends Component{

    state = { ...initialState }

    clear (){
        this.setState({ user: initialState.user })
    }

    save (){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url,user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initialState.user, list})
            })

    }

    getUpdatedList(user){
        const list = this.state.list.filter( u => u.id !== user.id)
        list.unshift(user)
        return list
    }
    updateField(event){
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="name" className="form-control" 
                            value={this.state.user.name} onChange={e=> this.updateField(e)} 
                            placeholder="Digite o nome..."  />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email"
                            value={this.state.user.email} onChange={e => this.updateField(e)} 
                            placeholder="Digite o email..." />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex-justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)} >Salvar</button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return(
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
    
}