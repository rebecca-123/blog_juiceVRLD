---
layout: post
description: 
categories: [pbl]
permalink: /pbl/reminders
---

<style>
@import url(https://fonts.googleapis.com/css?family=Shadows+Into+Light|Roboto:400,300,500);

body,
html,
div.board,
div#react-container {
    height: 100%;
    overflow: hidden;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Libre Baskerville', serif;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.2em;
    color: #30096b;
    background-color: #246996;
} 

#outer {        
   display: inline;
}

h1 {
   text-align: center;
   font-size: 2.6em;
   font-weight: 400;
   line-height: 1.0em;
   color: #C49510;
}

h2 {
   font-family: 'Roboto', sans-serif;
   font-weight: bold;
   font-size: 1.6em;
}

h1 {
   text-shadow: 1px 1px 1px rgb(221, 222, 229);
   margin: 20px 0;
}

#h1-span {
   font-size: 0.7em; 
   text-shadow: 1px 1px 1px rgb(100, 100, 100);
}

#header h2 {
   text-align: center;
}

#lynda-link {
   font-family: 'Roboto', sans-serif;
   font-size: 0.9em;
   float: right;
   margin: -40px 40px 0 0;
}

#header {
   border-bottom: 2px solid #C7C7AB;
   background-color: #246996;
}

div.board {
    background-color: 'brown';
    width: 100%;
    background: #eab92d;
}

div.note {
    height: 150px;
    width: 150px;
    background-color: yellow;
    margin: 2px 0;
    position: absolute;
    cursor: -webkit-grab;
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    overflow: hidden;
}

div.note:active {
    cursor: -webkit-grabbing;
}

div.note p {
    margin: 0;
    font-size: 22px;
    padding: 5px;
    font-family: "Shadows Into Light", Arial;
    line-height: 1.1;
}

div.note:hover > span {
    opacity: 1;
}

div.note > span {
    position: absolute;
    bottom: 2px;
    right: 2px;
    opacity: 0;
    transition: opacity .25s linear;
}

div.note button {
    margin: 2px;
}

div.note textarea {
    height: 75%;
    background: rgba(255, 255, 255, .5);
}

.board > button {
    position: fixed;
    top: 190px;
    right: 16px;
    font-size: 1.5em;
}
</style>

<html>
   <body>
<div id="outer">
	<div id="header">
		<h1>Demo from Lynda Course<br/><span id="h1-span">- Learn React.js: The Basics -</span></h1>
		<span><h2>Bulletin Board App</h2></span><span id="lynda-link">Visit Lynda.com</span>
	</div>
	<div id="react-container">
	</div>
</div>
<script type="text/babel">
    var Note = React.createClass({
        getInitialState() {
            return {editing: false}
        },
        componentWillMount() {
            this.style = {
                right: this.randomBetween(0, window.innerWidth - 150, 'px'),
                top: this.randomBetween(220, window.innerHeight - 150, 'px')
            }
        },
        componentDidUpdate() {
            if (this.state.editing) {
                this.refs.newText.focus()
                this.refs.newText.select()
            }
        },
        shouldComponentUpdate(nextProps, nextState) {
            return this.props.children !== nextProps.children || this.state !== nextState
        },
        randomBetween(x, y, s) {
            return (x + Math.ceil(Math.random() * (y - x))) + s
        },
        edit() {
            this.setState({editing: true})
        },
        save() {
            this.props.onChange(this.refs.newText.value, this.props.id)
            this.setState({editing: false})
        },
        remove() {
            this.props.onRemove(this.props.id)
        },
        renderForm() {
            return (
                <div className="note"
                     style={this.style}>
                        <textarea ref="newText"
                                  defaultValue={this.props.children}>
                        </textarea>
                    <button onClick={this.save}>SAVE</button>
                </div>
            )
        },
        renderDisplay() {
            return (
                <div className="note"
                     style={this.style}>
                    <p>{this.props.children}</p>
                    <span>
                            <button onClick={this.edit}>EDIT</button>
                            <button onClick={this.remove}>X</button>
                        </span>
                </div>
            )
        },
        render() {
            return ( <ReactDraggable>
                    {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
                </ReactDraggable>
            )
        }
    })

    var Board = React.createClass({
        propTypes: {
            count: function (props, propName) {
                if (typeof props[propName] !== "number") {
                    return new Error('the count must be a number')
                }
                if (props[propName] > 100) {
                    return new Error('Creating ' + props[propName] + ' notes is ridiculous')
                }
            }
        },
        getInitialState() {
            return {
                notes: []
            }
            this.setState({notes})
        },
        componentWillMount() {
            if (this.props.count) {
                var url = `https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}` // back tick below ~ on keyboard (must be used)
                fetch(url)
                .then(results => results.json())
                .then(array => array[0])
                .then(text => text.split('. '))
                .then(array => array.forEach(
                    sentence => this.add(sentence)))
                .catch(function (err) {
                    console.log("Didn't connect to the API", err)
                })
            }
        },
        remove(id) {
            var notes = this.state.notes.filter(note => note.id !== id)
            this.setState({notes})
        },
        nextId() {
            this.uniqueId = this.uniqueId || 0
            return this.uniqueId++
        },
        add(text) {
            var notes = [
                ...this.state.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
            this.setState({notes})
        },
        update(newText, id) {
            var notes = this.state.notes.map(
                note => (note.id !== id) ?
                        note :
                    {
                        ...note,
                        note: newText
                    }
            )
            this.setState({notes})
        },
        eachNote(note) {
            return (<Note key={note.id}
                          id={note.id}
                          onChange={this.update}
                          onRemove={this.remove}>
                {note.note}
            </Note>)
        },
        render() {
            return (
                <div className="board">
                    {this.state.notes.map(this.eachNote)}
                    <button onClick={() => this.add('New Note')}>+</button>
                </div>
            )
        }
    })
    ReactDOM.render(<Board count={10}/>,
        document.getElementById("react-container"))
</script>
</body>
    <script>
 (function main() {
    'use strict';
    $('#lynda-link').mouseover(function () {
        this.style.color = 'yellow';
    });

    $('#lynda-link').mouseout(function () {
        this.style.color = '#30096A';
    });

    $('#lynda-link').click(function () {
        window.open('https://www.lynda.com/React-js-tutorials/Learn-React-js-Basics/519668-2.html');
    });
})();

</script>
