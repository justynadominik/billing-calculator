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
        <div class="div1">
            <rwc-category category-title="Bilable File Size Breakdown" collapsible defined reduced-spacing>
            <table>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <static-text class="static-text"><b>Billable File Size</b></static-text>
                    <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                    </rwc-slider>
                  </td>
                  <td>
                    <rwc-number-input-field label="GB" value="" edit-mode
                        style="padding-right: 0px; margin-right: 0px; border-spacing: 0px;" >
                    </rwc-number-input-field>
                  </td>
                </tr>
            </table>
        </rwc-category>
        </div>
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