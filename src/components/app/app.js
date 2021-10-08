import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Smith K.', salary: 800, increase: false, rise: false, id: 1 },
                { name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2 },
                { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        }
        this.idMax = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (e, { name, salary }) => {
        e.preventDefault();
        
        this.setState(({ data }) => {
            const newItem = { name: name, salary: salary, increase: false, rise: false, like: false, id: this.idMax++ }

            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        });
    }

    filterEmp = (filter, items) => {
        if (filter === 'all') {
            return items;
        } else if (filter === 'rise') {
            return items.filter(item => item.rise);
        } else if (filter === 'more') {
            return items.filter(item => item.salary >= 1000);
        }

    }

    onUpdateFilter = (e) => {
        const filter = e.target.getAttribute('data-name');
        this.setState({filter});
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term, filter} = this.state;

        const number = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterEmp(filter, this.searchEmp(data, term));

        return (
            <div className="app">
                <AppInfo
                    number={number}
                    increased={increased}
                />

                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter}
                               filter={filter}/>
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployersAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;