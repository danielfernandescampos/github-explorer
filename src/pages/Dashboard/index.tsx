import React from 'react';
import { Title, Form, Repositories } from './styles'
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/github-logo-md.png'

const Dashboard: React.FC = () => (
    <>
    <img src={logo} alt="GitHub Explorer" />
    <Title>Explore repositórios no GitHub</Title>
    <Form>
        <input type="text" placeholder="Digite o repositório" />
        <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
        <a href="">
            <img src="https://avatars.githubusercontent.com/u/60238933?v=4" alt="foto do usuário" />
            <div>
                <strong>rocketseat/unform</strong>
                <p>Easy peasy highly scalable ReactJS & React Native forms</p>
            </div>
            <FiChevronRight size={20}/>
        </a>
    </Repositories>
    </>
)

export default Dashboard;
