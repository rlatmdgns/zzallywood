async function getMemes() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const memes = [
        {
            id: 0,
            filePath: "string",
            creator: "string",
            editor: "string",
            created: "2023-06-17T07:50:24.967Z",
            edited: "2023-06-17T07:50:24.967Z"
        },
        {
            id: 1,
            filePath: "string",
            creator: "string",
            editor: "string",
            created: "2023-06-17T07:50:24.967Z",
            edited: "2023-06-17T07:50:24.967Z"
        },
        {
            id: 2,
            filePath: "string",
            creator: "string",
            editor: "string",
            created: "2023-06-17T07:50:24.967Z",
            edited: "2023-06-17T07:50:24.967Z"
        }
    ]

    // Recommendation: handle errors
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data')
    // }

    return memes
}

export default getMemes