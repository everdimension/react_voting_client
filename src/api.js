import io from 'socket.io-client';

const IO_PORT = 4400;
const { protocol, hostname } = window.location;

export const socket = io(`${protocol}//${hostname}:${IO_PORT}`);
