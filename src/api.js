export async function fetchSampleUsers() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const posts = await res.json();

        return posts.map((post) => ({
            id: post.id, name: post.name, email: post.email
        }));

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
        .then((posts) => {
            return posts.map((post) => ({
                id: post.id, name: post.name, email: post.email
            }));
        })
        .catch(err => {
            console.log(err);
            return [];
        })
        .finally(() => {
            console.log("Done loading.")
        });
}
