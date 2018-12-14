import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Greet extends Component {
    
    state = {
        post: null,
        loading: true
    }
 
    componentDidMount() {
     fetch('https://api.github.com/users/MichaelYLZ/repos')
      .then(response => response.json())
      .then(data => this.setState({
          post: `加载介绍报告:
我一共有${data.length}个在线Github 仓库`,
          loading: false
        }))
    }

   
    
    render() {
        
        const {
            post,
            loading
        } = this.state;
        
        return (
        <div>
        {loading ? 
         <p>加载中...</p> : 
         <p>{ post }</p>
        }
        </div>
        )
    }
}

ReactDOM.render(
	<Greet />,
	document.getElementById('root')
);