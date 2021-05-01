import TextField from '@material-ui/core/TextField'
import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';

import './Messaging.css'

// const useStyles = makeStyles(theme => ({
//     container: {
//         bottom: 0,
//         position: 'fixed'
//     },
//     bubbleContainer: {
//         width: '100%'
//     },
//     bubble: {
//         border: '0.5px solid black',
//         borderRadius: '10px',
//         margin: '5px',
//         padding: '10px',
//         display: 'inline-block'
//     }
// }));

function Messaging() {
	const user = useSelector((store) => store.user);
	const [ state, setState ] = useState({ message: "", name: user.username })
	const [ chat, setChat ] = useState([])
	// const classes = useStyles();
	

	const socketRef = useRef()

	

	useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:4000")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
        // console.log('messaging chat:', chat)
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
        console.log('messaging text state:', state, 'messaging e.target.value:', e.target.value)
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
			
		))
	}

	return (
		<div className="card1">
			<span className="span">
				Messenger
			</span>
			<form onSubmit={onMessageSubmit}>
				{/* <h3>Chat Log</h3> */}
				<div className="div">
				<Box className="box">
				{renderChat()}
				</Box>
				</div>
				<div className="name-field1">
					{/* <TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" /> */}
					{/* <Typography><h2>{user.username}</h2></Typography> */}
				</div>
				<div>
					<TextField 
						name="message"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
						fullWidth = "true"
					/>
				</div>
				<button>Send Message</button>
			</form>
			{/* <div className="render-chat1">
				<h1>Chat Log</h1>
				{renderChat()}
			</div> */}
		</div>
	)
}

export default Messaging
