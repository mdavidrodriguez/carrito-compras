import { Component } from "react";
import BubbleAlert from './BubbleAlert'


const styles = {
    carro: {
        backgroundColor: "#359A2C",
        color: "#fff",
        border: 'None',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    Bubble: {

    }
}
class Carro extends Component {
    render(){
        return (
            <div>
                <span style={styles.buble}>
                    <BubbleAlert />
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro