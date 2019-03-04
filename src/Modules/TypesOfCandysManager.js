import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/typesOfCandys/${id}`).then(e => e.json())
  },
  delete(id) {
    return fetch(`${Settings.remoteURL}/typesOfCandys/${id}`, {
        "method": "DELETE"
    }).then(e => e.json());
},
  getAll() {
    return fetch(`${Settings.remoteURL}/typesOfCandys`).then(e => e.json())
  }
}