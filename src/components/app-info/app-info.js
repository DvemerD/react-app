import './app-info.css';

const AppInfo = ({number, increased}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {number}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;