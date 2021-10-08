import './app-filter.css';

const AppFilter = ({onUpdateFilter, filter}) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'more', label: 'З/П больше 1000$'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";

        return (
            <button 
            className={`btn ${clazz}`}
            type="button"
            data-name={name}
            onClick={onUpdateFilter}>
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
            {/* <button 
            className="btn btn-light"
            type="button"
            data-name="all"
            onClick={onUpdateFilter}>
                Все сотрудники
            </button>
            <button 
            className="btn btn-outline-light"
            type="button"
            data-name="rise"
            onClick={onUpdateFilter}>
                На повышение
            </button>
            <button 
            className="btn btn-outline-light"
            type="button"
            data-name="more"
            onClick={onUpdateFilter}>
                З/П больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;