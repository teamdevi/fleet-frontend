export const state = () => ({
  project: {}
})

export const mutations = {
  add(state, payload) {
    
    Object.assign(state.project,payload)    
  }
}