import { Component } from 'react';

import './employers-add-form.css';

export default class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: false
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        if (name.length >= 2 && salary.length !== 0) {
            this.props.onAdd(e, this.state)
            this.setState({
                error: false
            })
        } else {
            this.setState({
                error: true
            })
            
            e.target.placeholder = 'Введите значение';
        }
    }



    render() {
        const { name, salary, error } = this.state;

        let classNames = 'form-control new-post-label';

        if (error) {
            classNames += ' borderError';
        }

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text"
                        className={classNames}
                        placeholder="Как его зовут?"
                        value={name}
                        name="name"
                        onChange={this.onValueChange} />
                    <input type="number"
                        className={classNames}
                        placeholder="З/П в $"
                        value={salary}
                        name="salary"
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light"
                        onClick={this.onSubmit}>Добавить</button>
                </form>
            </div>
        )
    }
}

