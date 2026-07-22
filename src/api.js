export async function fetchSampleUsers() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return await res.json();
    } catch (err) {
        console.log(err);
        return [];
    } finally {
        console.log("Done loading.");
    }
}

export function fetchSampleUsersPromise() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
            return [];
        })
        .finally(() => {
            console.log("Done loading.")
        });
}
