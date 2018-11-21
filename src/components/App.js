import React from 'react';
import Citation from './Citation';
import citations from '../citations';


class App extends React.Component {
    state = {};
    componentWillMount(){
        this.generateCitation();
    }
    generateCitation = event => {
        const keyArray = Object.keys(citations);
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        if (this.state.citation === citations[randomKey].citation) {
            this.generateCitation();
            return;
        }
        this.setState(citations[randomKey]);
    };
    render () {
        return (
            <div>
                <Citation details={this.state} />
                <button onClick={e => this.generateCitation(e)} >Citation suivante</button>
            </div>
        )
    }
}
export default App;
