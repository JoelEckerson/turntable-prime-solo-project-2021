import TextField from '@material-ui/core/TextField'
import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import './Messaging.css'

function Messaging() {
	const user = useSelector((store) => store.user);
	const [ state, setState ] = useState({ message: "", name: user.username })
	const [ chat, setChat ] = useState([])
	

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
			<form onSubmit={onMessageSubmit}>
				<h1>Messenger</h1>
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
					/>
				</div>
				<button>Send Message</button>
			</form>
			<div className="render-chat1">
				<h1>Chat Log</h1>
				{renderChat()}
			</div>
		</div>
	)
}

export default Messaging
