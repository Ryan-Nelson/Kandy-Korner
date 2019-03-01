import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/stores/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/stores`).then(e => e.json())
  }
}