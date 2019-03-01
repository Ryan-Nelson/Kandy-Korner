import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/typesOfCandy/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/typesOfCandy`).then(e => e.json())
  }
}