import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/candys/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/candys`).then(e => e.json())
  }
}