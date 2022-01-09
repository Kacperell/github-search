import React from 'react'
import { useParams } from "react-router-dom";

const User: React.FC = () => {
    const params = useParams();
    const id = params.id;
    return (
        <div>
            User
            :{id}

        </div>
    )
}

export default User
