const Global = () => {
}

Global.posts = [
    {id: 0, message: "It's my first post.", likesCount: 2},
    {id: 1, message: "It's my second post.", likesCount: 25},
    {id: 1, message: "It's my third post.", likesCount: 100},
    {id: 1, message: "It's my fourth post.", likesCount: 13},
];

Global.dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Masha'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Vasya'},
    {id: 6, name: 'Natasha'}];

Global.messages = [
    {id: 0, message: "Hi! How are you?", timeStamp: "26.12.2023 10:13:42"},
    {id: 1, message: "Hello! I'm fine!", timeStamp: "26.12.2023 10:15:02"},
    {id: 2, message: "Where are you from?", timeStamp: "26.12.2023 10:20:23"}];

export default Global;