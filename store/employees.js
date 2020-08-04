

export const state = () => ({
  employees: [{id:1,name:'defaultName1',role:'defaultRole'},{id:2,name:'defaultName2',role:'defaultRole'},]
})
export const mutations = {
  updateEmployees: function(state, payload) {
    state.employees = payload
  }
}
export const actions = {
   fetchEmployeesAction (context) {
    const testPayload = {id:99,name:'testPayloadName',role:'testPayloadRole'}
    context.commit('updateEmployees', testPayload)
  }
}
