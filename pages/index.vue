<template>
  <div class="container">
    <div>
     <p>{{ $store.state.employees.employees}}</p>
     <ul v-for="employee in employees">
             <li>
               {{employee}}
               <button v-on:click="$store.dispatch('employees/deleteEmployeesAction',employee.id)">delete</button>
             </li>
      </ul>
      <button v-on:click="$store.dispatch('employees/fetchEmployeesAction')">fetch</button>
    </div>
  </div>
</template>

<script>
export default {
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
