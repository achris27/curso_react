import React, { Component } from 'react';

let initial1 = 0;
let stock1 = 0;

const ItemCount = (initial, stock, onAdd) =>{
        initial1 = initial;
        stock1 = stock;

}

class App extends Component {
	constructor() {
		super();
		this.state = {
			counter: {initial1},
            initial2: {initial1},
            stock2: {stock1}
		};
		// Binding
		// this.handlerCounterUp = this.handlerCounterUp.bind(this);
	}

    handlerCounterUp = () => {
        if(this.state.counter < this.state.stock2){
            this.setState({ counter: this.state.counter + 1 });
            // alert('Hello World');
        }
    };

    handlerCounterMinus = () => {
        if(this.state.counter > this.state.inicial1){
		    this.setState({ counter: this.state.counter - 1 });
        }
	};

    render(){
        return(
            <div className="App">
                <p>Counter: {this.state.counter}</p>
                <div>
					<button onClick={this.handlerCounterMinus}>Decrementar</button>
                    <button >agregar al carro</button>
                    <button onClick={this.handlerCounterUp}>Incrementar</button>
                </div>
            </div>
        );
    }
};

export default App;