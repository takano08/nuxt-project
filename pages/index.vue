<template>
  <div class="container">
    <div>
     <p>{{ $store.state.employees.employees}}</p>
     <ul v-for="employee in employees">
             <li>
               {{employee}}
             </li>
      </ul>
      <button v-on:click="$store.dispatch('employees/fetchEmployeesAction')">fetch</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
      employees() {
        return this.$store.state.employees.employees;
      }
    }
    }


</script>
