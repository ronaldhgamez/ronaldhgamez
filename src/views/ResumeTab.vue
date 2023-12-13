<!-- <template>
    <div class="cvTab">
        <h1>CV Tab</h1>
    </div>
</template>


<script lang="ts">
export default {
    name: 'cv-tab'
}
</script>


<style>

</style> -->
<template>
    <div>
        <pdf :src="pdfUrl" :page="1"></pdf>
    </div>
</template>
  
<script lang="ts">
import { pdf } from 'vue-pdf';

export default {
    components: {
        pdf
    },
    data() {
        return {
            pdfUrl: 'https://www.viajeseroski.es/files/documentos/landings/camino-de-santiago/guia-camino-santiago-accesible.pdf'
        };
    }
};
</script>
  
<style>
.pdf-container {
    width: 100%;
    height: 500px;
    /* Set a height that fits your design */
}
</style>