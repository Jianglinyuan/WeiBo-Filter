import React from 'react'
import Relay from 'react-relay'


class App extends React.Component {
    render () {
        return (
            <div>
                <span className="avatar"><img src="assets/images/avatar.jpg" alt="logo" width ="122px" style = {{
                    background: 'white'
                }}/></span>
                <h1>Weibo Filter</h1>
                <button>Login</button>
            </div>
        )
    }
}

export default App
