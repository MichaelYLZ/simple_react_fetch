import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Greet extends Component {
    
    state = {
        post: null,
        loading: true,
        error: null
    }
 
    componentDidMount() {
     fetch('https://api.github.com/users/MichaelYLZ/repos')
      .then(response => response.json())
      .then(data => this.setState({
          post: `加载介绍报告:
我一共有${data.length}个在线Github 仓库`,
          loading: false
        }))
       .catch(err => {
        this.setState({
          loading: false,
          error: err
        })
      })
    }

    renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    return <p>{ this.state.post }</p>;
   }
   
   renderLoading() {
    return <p>加载中...</p>;
   }

    renderError() {
    return (
      <p>
        错误提示: {this.state.error.message}
      </p>
    );
  }

   
    
    render() {
        const {
            loading
        } = this.state;
        
        return (
        <div>
        {
            loading ?
            this.renderLoading() :
            this.renderPosts()
        }
        </div>
        )
    }
}

ReactDOM.render(
	<Greet />,
	document.getElementById('root')
);