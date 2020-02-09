import React, { Component } from "react";
import swal from "sweetalert"

class Home extends Component {
    state = {
        name: "",
        surname: "",
        username: "",
        email: "",
        pass: "",
        pass2: "",
        accept: false,
        message: "",

        errors: {
            name: false,
            surname: false,
            username: false,
            email: false,
            pass: false,
            pass2: false,
            accept: false
        }
    }

    messages = {
        name_incorrect: " Imię może składać się jedynie z liter i nie może zawierać spacji.",
        surname_incorrect: " Nazwisko może składać się jedynie z liter i nie może zawierać spacji.",
        username_incorrect: " Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji.",
        email_incorrect: " Brak '@' lub '.' w emailu.",
        password_incorrect: " Hasło musi mieć 8 znaków.",
        password2_incorrect: " Podane hasła nie są jednakowe.",
        accept_incorrect: " Niepotwierdzona zgoda."
    }

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        if (type === "text" || type === "password" || type === "email") {
            const value = e.target.value;
            this.setState({
                [name]: value
            })
        } else if (type === "checkbox") {
            const checked = e.target.checked;
            this.setState({
                [name]: checked
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const validation = this.formValidation()

        if (validation.correct) {
            this.setState({
                name: "",
                surname: "",
                username: "",
                email: "",
                pass: "",
                pass2: "",
                accept: false,
                message: "Formularz został wysłany",

                errors: {
                    name: false,
                    surname: false,
                    username: false,
                    email: false,
                    pass: false,
                    pass2: false,
                    accept: false
                }
            })
            swal("Udało się!", "Witaj w gronie przyjaciół PB!", "success");
            
        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    surname: !validation.surname,
                    username: !validation.username,
                    email: !validation.email,
                    pass: !validation.password,
                    pass2: !validation.password2,
                    accept: !validation.accept
                }
            })
        }
    }

    formValidation() {
        let name = false;
        let surname = false;
        let username = false;
        let email = false;
        let password = false;
        let password2 = false;
        let accept = false;
        let correct = false;

        if (this.state.name.match("^[A-Za-z]+$") && this.state.name.indexOf(" ") === -1) name = true;
        if (this.state.surname.match("^[A-Za-z]+$") && this.state.surname.indexOf(" ") === -1) surname = true;
        if (this.state.username.length > 10 && this.state.username.indexOf(" ") === -1) username = true;
        if (this.state.email.indexOf("@") !== -1 && this.state.email.indexOf(".") !== -1) email = true;
        if (this.state.pass.length === 8) password = true;
        if (this.state.pass2 === this.state.pass && password) password2 = true;
        if (this.state.accept) accept = true;
        if (name && surname && username && email && password && password2 && accept) correct = true;

        return ({
            correct,
            name,
            surname,
            username,
            email,
            password,
            password2,
            accept
        })
    }

    componentDidUpdate() {
        console.log("update");
        if (this.state.message !== "") {
            setTimeout(() => this.setState({
                message: ""
            }), 3000)
        }
    }

    render() {
        return (
            <div className="Home">
                <h1>Witaj na stronie Politechniki Białostockiej!</h1>
                <h3>Dołącz do grona przyjaciół naszej uczelni wypełniając poniższy formularz:</h3>
                <div id="home_main">
                    <form onSubmit={this.handleSubmit} noValidate>
                        <label htmlFor="name">Imię:
                            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                            {this.state.errors.name && <span>{this.messages.name_incorrect}</span>}
                        </label>

                        <label htmlFor="surname">Nazwisko:
                            <input type="text" name="surname" id="surname" value={this.state.surname} onChange={this.handleChange} />
                            {this.state.errors.surname && <span>{this.messages.surname_incorrect}</span>}
                        </label>

                        <label htmlFor="user">Nazwa użytkownika:
                            <input type="text" name="username" id="user" value={this.state.username} onChange={this.handleChange} />
                            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
                        </label>

                        <label htmlFor="email">Twój adres e-mail:
                            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                            {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                        </label>

                        <label htmlFor="password">Twoje hasło:
                            <input type="password" name="pass" id="password" value={this.state.pass} onChange={this.handleChange} />
                            {this.state.errors.pass && <span>{this.messages.password_incorrect}</span>}
                        </label>

                        <label htmlFor="password2">Powtórz hasło:
                            <input type="password" name="pass2" id="password2" value={this.state.pass2} onChange={this.handleChange} />
                            {this.state.errors.pass2 && <span>{this.messages.password2_incorrect}</span>}
                        </label>

                        <label htmlFor="accept">
                            <input type="checkbox" name="accept" id="accept" checked={this.state.accept} onChange={this.handleChange} /> Wyrażam zgodę na otrzymywanie wiadomości na podany adres e-mail.
                            {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}
                        </label>

                        <button>Zapisz się</button>
                    </form>
                    {this.state.message && <h3>{this.state.message}</h3>}
                </div>
            </div>
        );
    }
}

export default Home;