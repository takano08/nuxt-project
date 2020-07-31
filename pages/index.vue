<template>
  <section class="container">
    <div>
     {{ employees }}
    </div>
  </section>
</template>

<script>
const axios = require('axios')
let url ='http://localhost:8080/employees'
export default {
  asyncData({params}){
    return axios.get(url)
      .then((res)=>{
        return{ employees: res.data }
      })

  }
}
</script>

