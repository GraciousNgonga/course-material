
// clear users from storage
const clearAll = () => {
    // localStorage
    var storage = window.localStorage.getItem('users');
    // check if it exists, then assign users object to an empty array
    // otherwise do nothing
    if (storage !== undefined) {
        window.localStorage.setItem('users', []);
    }
}