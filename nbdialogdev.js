(function () {
	const bgComponent = parent => {
		const el = document.createElement('div')
		Object.assign(el.style, {
			zIndex: '100000',
			position: 'fixed',
			top: '0',
			left: '0',
			width: '100vw',
			height: '100vh',
			backgroundColor: 'rgba(0, 0, 0, 0.1)'
		})
		parent.appendChild(el)
		return el
	}

	const boxComponent = parent => {
		const el = document.createElement('div')
		Object.assign(el.style, {
			padding: '16px',
			position: 'fixed',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
			width: '383px',
			maxWidth: 'calc(100% - 20px)',
			wordWrap: 'break-word',
			boxSizing: 'border-box',
			backgroundColor: '#f5f5f5',
			borderRadius: '3px',
			fontFamily: 'Arial, Helvetica, sans-serif',
			fontSize: '11pt',
			border: '1px solid #888',
			boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
		})
		parent.appendChild(el)
		return el
	}

	const buttonComponent = parent => {
		const el = document.createElement('button')
		Object.assign(el.style, {
			padding: '6px',
			width: '80px',
			border: '1px solid #888',
			borderRadius: '2px',
			boxSizing: 'border-box',
			backgroundColor: 'rgba(0, 0, 0, 0)'
		})
		parent.appendChild(el)
		return el
	}

	const okComponent = parent => {
		const el = buttonComponent(parent)
		el.innerText = 'OK'
		Object.assign(el.style, {
			float: 'right',
			backgroundColor: '#1976D2',
			borderColor: '#1976D2',
			color: '#fff'
		})
		return el
	}

	const msgComponent = parent => {
		const el = document.createElement('p')
		Object.assign(el.style, {
			marginTop: '0',
			maxHeight: '200px',
			overflow: 'auto'
		})
		parent.appendChild(el)
		return el
	}

	const cancelComponent = parent => {
		const el = buttonComponent(parent)
		el.innerText = 'Cancel'
		Object.assign(el.style, {
			float: 'right',
			marginRight: '8px'
		})
		return el
	}

	const inputComponent = parent => {
		const el = document.createElement('input')
		el.type = 'text'
		Object.assign(el.style, {
			width: '100%',
			padding: '5px',
			boxSizing: 'border-box',
			marginBottom: '16px',
			border: '1px solid #888'
		})
		parent.appendChild(el)
		return el
	}

	window._alert = (msg = '') => {
		const alertBg = bgComponent(document.body)
		const alertBox = boxComponent(alertBg)
		const alertMsg = msgComponent(alertBox)
		const alertOk = okComponent(alertBox)

		alertMsg.innerText = msg
		alertOk.focus()

		return new Promise(resolve => {
			alertOk.onclick = () => {
				document.body.removeChild(alertBg)
				resolve()
			}
		})
	}

	window._confirm = (msg = '') => {
		const confirmBg = bgComponent(document.body)
		const confirmBox = boxComponent(confirmBg)
		const confirmMsg = msgComponent(confirmBox)
		const confirmOk = okComponent(confirmBox)
		const confirmCancel = cancelComponent(confirmBox)

		confirmMsg.innerText = msg
		confirmOk.focus()

		return new Promise(resolve => {
			confirmOk.onclick = () => {
				document.body.removeChild(confirmBg)
				resolve(true)
			}
			confirmCancel.onclick = () => {
				document.body.removeChild(confirmBg)
				resolve(false)
			}
		})
	}

	window._prompt = (msg = '', defaultText = '') => {
		const promptBg = bgComponent(document.body)
		const promptBox = boxComponent(promptBg)
		const promptMsg = msgComponent(promptBox)
		const promptInput = inputComponent(promptBox)
		const promptOk = okComponent(promptBox)
		const promptCancel = cancelComponent(promptBox)

		promptMsg.innerText = msg
		promptInput.value = defaultText
		promptInput.focus()

		return new Promise(resolve => {
			promptInput.onkeyup = e => {
				if (e.keyCode === 13) {
					document.body.removeChild(promptBg)
					resolve(promptInput.value)
				}
			}
			promptOk.onclick = () => {
				document.body.removeChild(promptBg)
				resolve(promptInput.value)
			}
			promptCancel.onclick = () => {
				document.body.removeChild(promptBg)
				resolve(null)
			}
		})
	}
})()