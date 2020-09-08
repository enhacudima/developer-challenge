<template>
        

  <v-client-table :data="tableData" :columns="columns" :options="options">
    <a slot="alpha2Code" slot-scope="props" target="_blank" :href="props.row.flag" >
        <img v-bind:src="props.row.flag" class="img-circle" alt="flag" width="25px" height="25px">
    </a>
        
  </v-client-table>


     
</template>


<script>
    
    export default {
          mounted () {
            axios
              .get('https://restcountries.eu/rest/v2/all')
              .then(response => (this.tableData = response.data))
          },
        data() {
            return {
                tableData: [],
                columns: ['name','capital','region','subregion','population','area','timezones','alpha2Code'],
                options: {
                headings: {

                        alpha2Code:'bandeira',
                        name: 'Nome',
                        capital: 'capital',
                        region: 'região',
                        subregion: 'sub-região',
                        population: 'população',
                        area: 'área',
                        timezones: 'fuso horário',
                        
                    },
                    filterable: ['name','capital','region','subregion','population','area','timezones'],
                    filterByColumn: true,
                    uniqueKey: 'alpha2Code',
      
                perPage: 12,
                perPageValues:[12,25, 50, 75,100,250,500,1000,2000,3000,5000],
            }
        };
    },
    }

</script>
<style>
#app {
  width: 95%;
  margin: 0 auto;
}

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
</style>
