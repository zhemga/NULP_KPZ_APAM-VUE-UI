<template>
    <DxDataGrid :show-borders="true" :data-source="dataSource"
     :remote-operations="true" :width="'100%'" :height="600" :sorting = "'none'">
        <DxColumn data-field="Id" caption="Id">
            <DxRequiredRule message="The Id field is required." />
        </DxColumn>
        <DxColumn data-field="AutoName" caption="Name">
            <DxRequiredRule message="The AutoName field is required." />
        </DxColumn>
        <DxColumn data-field="Price">
            <DxRequiredRule message="The Price field is required." />
        </DxColumn>
        <DxColumn data-field="AutoPartCategoryId" caption="Category Id">
            <DxRequiredRule message="The Category Id field is required." />
        </DxColumn>
        <DxColumn data-field="AutoPartManufacturerId" caption="Manufacturer Id">
            <DxRequiredRule message="The Manufacturer Id field is required." />
        </DxColumn>
        <DxColumn data-field="AutoPartSupplierId">
            <DxRequiredRule message="The Supplier Id field is required." />
        </DxColumn>
        <!-- <DxColumn data-field="AutoPartCategory" >
        </DxColumn>
        <DxColumn data-field="AutoPartManufacturer">
        </DxColumn>
        <DxColumn data-field="AutoPartSupplier">
        </DxColumn> -->

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
        this.dataSource = createApamCustomStore('Id', '/AutoParts');
    }
}
</script>

<style lang="">
    
</style>