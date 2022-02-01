import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import logo from '../../assets/github-logo-md.png';
import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../services/api';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issue {
    title: string;
    user: {
        login: string;
    }
    id: number;
    html_url: string;
}

function Repository() {
    const param = useParams();

    function revertName(name: string | any): string {
        return name.replace('-', '/');
    }

    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${revertName(param.repository)}`).then(response => {
            setRepository(response.data);
        })
        api.get(`repos/${revertName(param.repository)}/issues`).then(response => {
            setIssues(response.data);
        })
    }, [param.repository])

    return (
        <>
        <Header>
            <img src={logo} alt="Github Explorer" />
            <Link to="/">
                <FiChevronLeft size={16} />
                Voltar
            </Link>
        </Header>
        {repository && (
        <RepositoryInfo>
            <header>
                <img src={repository.owner.avatar_url} alt="user picture"/>
                <div>
                    <strong>{repository.full_name}</strong>
                    <p>{repository.description}</p>
                </div>
            </header>
                <ul>
                    <li>
                        <strong>{repository.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>{repository.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repository.open_issues_count}</strong>
                        <span>Issues</span>
                    </li>
                </ul>
        </RepositoryInfo>)}
        {issues && (
            <Issues>
                {issues.map((issue) => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </a>
                ))}
            </Issues>
        )}
        </>
    )
}

export default Repository;
