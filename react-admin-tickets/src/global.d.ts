declare module 'fakerest' {
    const content: any;
    export default content;
}

declare global {
    interface Window {
        restServer: any;
    }
}
