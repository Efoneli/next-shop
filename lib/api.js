class ApiError extends Error {
    constructor(url, status) {
        super(`'${url}' returned ${status}`);
        this.status = status
    }
}

export async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`request failed: ${response.status}`)
    }
    return await response.json();
}
