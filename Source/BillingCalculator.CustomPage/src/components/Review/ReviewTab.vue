<template>
    <rwc-category category-title="Review" collapsible>
        <span>
            <span class = "span1"></span>
            <rwc-text-input-field label="Billable File Size" value="" edit-mode ></rwc-text-input-field>
            <span class = "span1"></span>
            <rwc-text-input-field label="Text Only Documents" value="" edit-mode ></rwc-text-input-field>
        </span>
        <div class="static-text">
            <rwc-static-text><b>Billable File Size</b></rwc-static-text>
        </div>
            <rwc-slider max="27" step="3" length="300px" orientation="horizontal" style="padding-top:50px; padding-bottom: 50px;"></rwc-slider>
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

.static-text{
    height: 3rem;
	margin-top: 15px;
	margin-left: 60px;
    font-family: "Roboto", arial, helvetica, sans-serif;
	font-weight: 700;
	float: left;
	text-align: center;
	vertical-align: middle;
	line-height: 3rem;
}
</style>