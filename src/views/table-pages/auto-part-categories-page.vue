<template>
    <DxDataGrid :show-borders="true" :data-source="dataSource"
     :remote-operations="true" :width="'100%'" :height="600" :sorting = "'none'">
        <DxColumn data-field="Id" caption="Id">
            <DxRequiredRule message="The Id field is required." />
        </DxColumn>
        <DxColumn data-field="Name">
            <DxRequiredRule message="The Name field is required." />
        </DxColumn>
        <DxScrolling mode="virtual" />
        <DxEditing :allow-adding="true" :allow-updating="true" :allow-deleting="true" mode="row" />
    </DxDataGrid>
</template>
  
<script>
import {
    DxDataGrid,
    DxColumn,
    DxEditing,
    DxScrolling,
    DxRequiredRule,
} from 'devextreme-vue/data-grid';
import createApamCustomStore from "../../app/core/services/stores/create-apam-custom-store"

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxEditing,
        DxScrolling,
        DxRequiredRule,
    },
    data() {
        return {
            dataSource: Object
        }
    },
    created() {
        this.dataSource = createApamCustomStore('Id', '/AutoPartCategories');
    }
}
</script>

<style lang="">
    
</style>