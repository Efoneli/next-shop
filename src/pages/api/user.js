import { fetchJson } from "../../../lib/api";

async function handleUSer(req, res) {
    const { jwt } = req.cookies;
    if (!jwt) {
        res.status(401).end();
        return;
    }
    try {
        const user = await fetchJson(`${CMS_URL}/users/me`, {
            headers: { 'Authorization': `Bearer ${jwt}` },
        });
    } catch (err) {
        res.status(200).json({
            id: user.id,
            name: user.name,
        })
    }
   
    res.status(200).json({})
}

export default handleUSer;