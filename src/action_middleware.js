export default function (socket) {
	return function (store) {
		return function (reducer) {
			return function (action) {
				console.log('in middleware', action);
				if (action.meta && action.meta.socket) {
					console.log('emitting socket');
					socket.emit('action', action);
				}
				return reducer(action);
			};
		};
	};
}
