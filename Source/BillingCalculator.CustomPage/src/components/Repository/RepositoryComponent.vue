<template>
    <rwc-category category-title="Repository" collapsible>
        <span>
            <span class = "span1"></span>
            <rwc-text-input-field label="Billable File Size" value="" edit-mode ></rwc-text-input-field>
            <span class = "span1"></span>
            <rwc-text-input-field label="Linked File Size" value="" edit-mode ></rwc-text-input-field>
            <span class = "span1"></span>
            <rwc-text-input-field label="Text Only Documents" value="" edit-mode ></rwc-text-input-field>
        </span>
    </rwc-category>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.span1{
    background: inherit;
    width: 3rem;
    display: inline-block;
    height: 1.5rem;
    padding: 0;
    vertical-align: middle;
    display: inline-block;
}
</style>