import React, { Component } from 'react';
import {marked} from 'marked';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

There's a link to my  [GitHub Profile](https://github.com/lucky7luc)

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function greet(name) {
  console.log('Hello, ' + name + '!');
}

\`\`\`


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

> Block Quotes!

You can also make text **bold**... whoa!

![my Image](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
`
    };

    this.handleInput = this.handleInput.bind(this);

    marked.setOptions({
      gfm: true,
      breaks: true, // Enable breaks for carriage returns
    });
    
  }

  handleInput = (event) => {
    const val = event.target.value;
    this.setState({ markdown: val });
  }

  render() {
    const { markdown } = this.state;
    const htmlPreview = marked(markdown);

    return (
      <div className="container-fluid">
        <div className="row">
            
            <div className="col-xs-12 col-sm-6">
            <h2 className='text-center'>Editor</h2>
              <textarea
                id="editor"
                className="form-control bg-light text-dark"
                value={this.state.markdown}
                onChange={this.handleInput}
              />
            </div>

            
            <div className="col-xs-12 col-sm-6">
            <h1 className='text-center'>Previewer</h1>
              <div
                id="preview"
                className="well bg-info text-light"
                dangerouslySetInnerHTML={{ __html: htmlPreview }}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default App;