import Item from './Item';

function List(){
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Samsung" ano_lancamento={2000}/>
                <Item marca="Apple" ano_lancamento={1990}/>
                <Item marca="Motorola" ano_lancamento={1980}/>
                <Item marca="Xiaomi" ano_lancamento={1999}/>
                <Item marca="LG" ano_lancamento={1960}/>
            </ul>
        </>
    )
}

export default List;