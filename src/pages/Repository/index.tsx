import React from 'react';
import { useMatch, useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import logo from '../../assets/github-logo-md.png';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

function Repository() {
    const param = useParams();

    return (
        <>
        <Header>
            <img src={logo} alt="Github Explorer" />
            <Link to="/">
                <FiChevronLeft size={16} />
                Voltar
            </Link>
        </Header>
        <RepositoryInfo>
            <header>
                <img src="" alt="user picture"/>
                <div>
                    <strong>Daniel Fernandes</strong>
                    <p>Descrição do repositório</p>
                </div>
            </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>47</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>54</strong>
                        <span>Issues</span>
                    </li>
                </ul>
        </RepositoryInfo>
        <Issues>
            <Link to={``}>
                <div>
                    <strong>Resume</strong>
                    <p>Meu querido resume</p>
                </div>
                <FiChevronRight size={20}/>
            </Link>
        </Issues>
        </>
    )
}

export default Repository;
