import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/candys/${id}`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/candys/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/candys`).then(e => e.json());
    },
    addCandy(newCandy) {
        return fetch(`${Settings.remoteURL}/candys`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCandy)
        }).then(data => data.json())
    },
    updateCandy(editedCandy) {
        return fetch(`${Settings.remoteURL}/candys/${editedCandy.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedCandy)
        }).then(data => data.json());
    }
};
