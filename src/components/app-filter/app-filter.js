import './app-filter.css';

const AppFilter = ({onUpdateFilter}) => {
    return (
        <div className="btn-group">
            <button 
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
            </button>
        </div>
    )
}

export default AppFilter;