import React, { useEffect } from 'react'

interface Props {
    results: Array<any>,

}

const List: React.FC<Props> = ({ results }) => {

    useEffect(() => {
        console.log("ListListList", results);
    }, [])

    const renderList = (): JSX.Element[] => {
        return results.map(item => {
            return (
                <li key={item.node.id} className="">
                    {item.node.avatarUrl ?
                        <>
                            user
                        </> :

                        <>
                            repo
                        </>
                    }

                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
