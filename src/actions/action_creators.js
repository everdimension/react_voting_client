export function setState(state) {
	return {
		type: 'SET_STATE',
		state
	};
}

export function vote(entry) {
	return {
		meta: { socket: true },
		type: 'VOTE',
		entry
	};
}

export function next() {
	return {
		meta: { socket: true },
		type: 'NEXT'
	}
}
