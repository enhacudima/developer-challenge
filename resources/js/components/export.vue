<template>
    <div>
        <export-excel
        :data   = "json_data"
        type    = "xlsx"
        >
        Download Excel
       </export-excel>
        <export-excel
        :data   = "json_data"
        type    = "csv"        >
        Download csv
       </export-excel>


    </div>
</template>


<script>
    
export default {

  mounted () {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => (this.json_data = response.data))
  },

 data() {
        return  {
        json_data: [],
    }
    }
}
</script>