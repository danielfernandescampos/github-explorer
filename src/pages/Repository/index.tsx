import React from 'react';
import { useMatch, useParams } from 'react-router-dom'

interface RepositoryParams {
    repository: string;
}

function Repository() {
    const param = useParams();

    return <h1>Repository: {param.repository}</h1>
}

export default Repository;
