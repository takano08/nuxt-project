<template>
  <div class="container">
    <div>
     <p>{{ $store.state.employees.employees}}</p>
     <p>{{ createEmployee }}</p>
     <label>name</label>
      <input type="text" v-model="createEmployee.name">
     <label>role</label>
      <input type="text" v-model="createEmployee.role">
          <ul v-for="employee in employees">
             <li>
               <input type="text" v-model="employee.name">
               <input type="text" v-model="employee.role">
               <button v-on:click="$store.dispatch('employees/updateEmployeesAction',employee)">update</button>
               <button v-on:click="$store.dispatch('employees/deleteEmployeesAction',employee.id)">delete</button>
             </li>
     </ul>
      <button v-on:click="$store.dispatch('employees/fetchEmployeesAction')">fetch</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
       createEmployee : {name : '' ,role:'' },
       updateEmployee : {id:'' , name : '' ,role:'' },
    }
  },

  mounted() {
    this.$store.dispatch('employees/fetchEmployeesAction')
  },

  computed: {
      employees() {
        return this.$store.state.employees.employees;
      }
    }
    }


</script>
