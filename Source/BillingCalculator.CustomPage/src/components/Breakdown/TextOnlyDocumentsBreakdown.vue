<template>
    <rwc-category category-title="Text Only Documents Breakdown" collapsible collapced reduced-spacing>
        <table>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" value="" edit-mode>
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" value="" edit-mode>
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" value="" edit-mode>
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" value="" edit-mode>
                </rwc-number-input-field>
              </td>
            </tr>
            <tr>
              <td>
                <static-text class="static-text2"><b>Text Only Documents</b></static-text>
                <rwc-slider class="slider-style" max="100" step="5" length="300px" orientation="horizontal">
                </rwc-slider>
              </td>
              <td>
                <rwc-number-input-field class="nif1" label="COUNT" value="" edit-mode>
                </rwc-number-input-field>
              </td>
            </tr>
        </table>
    </rwc-category>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.static-text2{
    height: 3rem;
	margin-top: 10px;
	margin-left: 56px;
    margin-right: 25px;
    font-family: "Roboto", arial, helvetica, sans-serif;
	font-weight: 700;
	float: left;
    font-size: 13.5px;
    opacity: 0.9;
	text-align: center;
	vertical-align: middle;
	line-height: 3rem;
}

.div1{
    white-space: "nowrap";
    margin-top: 20px;
    margin-bottom: 0px;
    border-top: 1px outset gray;
    text-align: center;
}

.slider-style{
    margin-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>