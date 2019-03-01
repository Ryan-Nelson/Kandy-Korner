import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/types/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/types`).then(e => e.json())
  }
}