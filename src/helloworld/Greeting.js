import React from 'react';

// First we create our class
class Greeting extends React.Component {
    // Then we add our constructor which receives our props
    constructor(props) {
        super(props);
        // Next we establish our state
        this.state = {
            name: '',
            greeting: `Good ${this.props.time}, `
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <section className="section">
                    <label className="label">Name:</label>
                    <input className="input" name="name" placeholder="Enter your name..." onChange={this.onChange} />
                </section>
                <section className="section">
                    <p>{this.state.greeting} {this.state.name}</p>
                </section>
            </div>
        )
    }

}

export default Greeting;
