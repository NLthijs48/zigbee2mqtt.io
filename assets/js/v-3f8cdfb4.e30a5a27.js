"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[4155],{975369:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-3f8cdfb4","path":"/devices/BHI-US.html","title":"Bosch BHI-US control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch BHI-US control via MQTT","description":"Integrate your Bosch BHI-US via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-12-26T18:35:42.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory reset","slug":"factory-reset","link":"#factory-reset","children":[]},{"level":3,"title":"LED Configuration","slug":"led-configuration","link":"#led-configuration","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"LED config (top left short press) (text)","slug":"led-config-top-left-short-press-text","link":"#led-config-top-left-short-press-text","children":[]},{"level":3,"title":"LED config (top right short press) (text)","slug":"led-config-top-right-short-press-text","link":"#led-config-top-right-short-press-text","children":[]},{"level":3,"title":"LED config (bottom left short press) (text)","slug":"led-config-bottom-left-short-press-text","link":"#led-config-bottom-left-short-press-text","children":[]},{"level":3,"title":"LED config (bottom right short press) (text)","slug":"led-config-bottom-right-short-press-text","link":"#led-config-bottom-right-short-press-text","children":[]},{"level":3,"title":"LED config (top left long press) (text)","slug":"led-config-top-left-long-press-text","link":"#led-config-top-left-long-press-text","children":[]},{"level":3,"title":"LED config (top right long press) (text)","slug":"led-config-top-right-long-press-text","link":"#led-config-top-right-long-press-text","children":[]},{"level":3,"title":"LED config (bottom left long press) (text)","slug":"led-config-bottom-left-long-press-text","link":"#led-config-bottom-left-long-press-text","children":[]},{"level":3,"title":"LED config (bottom right long press) (text)","slug":"led-config-bottom-right-long-press-text","link":"#led-config-bottom-right-long-press-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1712602774000},"filePathRelative":"devices/BHI-US.md"}')},599870:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var i=o(166252);const s=(0,i._)("h1",{id:"bosch-bhi-us",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#bosch-bhi-us","aria-hidden":"true"},"#"),(0,i.Uk)(" Bosch BHI-US")],-1),l=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"BHI-US")],-1),a=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Universal Switch II")],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery_low, voltage, config_led_top_left_press, config_led_top_right_press, config_led_bottom_left_press, config_led_bottom_right_press, config_led_top_left_longpress, config_led_top_right_longpress, config_led_bottom_left_longpress, config_led_bottom_right_longpress, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BHI-US.png",alt:"Bosch BHI-US"})])],-1),h=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to &quot;Settings&quot; --&gt; &quot;Tools&quot; and click on &quot;Add install code&quot;. Paste the code you got from the QR-code and confirm by clicking &quot;OK&quot; which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.</p><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory reset</h3><p>To reset the device to factory settings, remove one of the batteries. While pressing and holding the device&#39;s bottom left button, insert the battery. As soon as the device&#39;s LED is starting to blink orange, release the main button and press and hold it again until the device&#39;s LED is lighting up green. The device will then restart and look for a Zigbee network to join.</p><h3 id="led-configuration" tabindex="-1"><a class="header-anchor" href="#led-configuration" aria-hidden="true">#</a> LED Configuration</h3><p>The blinking pattern and color of the device LED can be configured individually for each button short/long press and for the confirmation indication.</p><p>The configuration is an 18-byte hex string as follows:</p><ul><li>RGB color (6 bytes), e.g. <code>22bbff</code> for light blue</li><li>Position (2 bytes), <code>01</code> = upper half, <code>02</code> = lower half, <code>00</code> = both</li><li>Light Pattern (fade-in duration, light on duration, fade-out duration, light off duration; 2 bytes each, e.g. <code>010f0102</code> for fast fade-in and fade-out (<code>01</code>), long light on duration <code>0f</code>, and a short pause in between <code>02</code>.</li><li>Number of repetitions, e.g. <code>01</code> for single execution, <code>05</code> for flashing 5 times</li></ul><p>Examples:</p><ul><li>Full string from above: <code>22bbff01010f010205</code></li><li>Triple white flash: <code>ffffff000001000103</code></li><li>Default amber light on short press: <code>ff4200000104010001</code></li><li>Default amber light on long press:<code>ff4200000502050001</code></li></ul>',11),f=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),g=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><code>led_response</code>: Specifies LED color (rgb) and pattern of the confirmation response as hex string. 0-2: RGB value (e.g. ffffff = white) 3: Light position (01=top, 02=bottom, 00=full) 4-7: Durations for sequence fade-in -&gt; on -&gt; fade-out -&gt; off (e.g. 01020102) 8: Number of Repetitions (01=1 to ff=255) Example: 30ff00000102010001. The value must be textual.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="led-config-top-left-short-press-text" tabindex="-1"><a class="header-anchor" href="#led-config-top-left-short-press-text" aria-hidden="true">#</a> LED config (top left short press) (text)</h3><p>Specifies LED color (rgb) and pattern on short press as hex string. 0-2: RGB value (e.g. ffffff = white) 3: Light position (01=top, 02=bottom, 00=full) 4-7: Durations for sequence fade-in -&gt; on -&gt; fade-out -&gt; off (e.g. 01020102) 8: Number of Repetitions (01=1 to ff=255) Example: ff1493000104010001. Value can be found in the published state on the <code>config_led_top_left_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;config_led_top_left_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_led_top_left_press&quot;: NEW_VALUE}</code>.</p><h3 id="led-config-top-right-short-press-text" tabindex="-1"><a class="header-anchor" href="#led-config-top-right-short-press-text" aria-hidden="true">#</a> LED config (top right short press) (text)</h3><p>Specifies LED color (rgb) and pattern on short press as hex string. 0-2: RGB value (e.g. ffffff = white) 3: Light position (01=top, 02=bottom, 00=full) 4-7: Durations for sequence fade-in -&gt; on -&gt; fade-out -&gt; off (e.g. 01020102) 8: Number of Repetitions (01=1 to ff=255) Example: ff1493000104010001. Value can be found in the published state on the <code>config_led_top_right_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;config_led_top_right_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_led_top_right_press&quot;: NEW_VALUE}</code>.</p><h3 id="led-config-bottom-left-short-press-text" tabindex="-1"><a class="header-anchor" href="#led-config-bottom-left-short-press-text" aria-hidden="true">#</a> LED config (bottom left short press) (text)</h3><p>Specifies LED color (rgb) and pattern on short press as hex string. 0-2: RGB value (e.g. ffffff = white) 3: Light position (01=top, 02=bottom, 00=full) 4-7: Durations for sequence fade-in -&gt; on -&gt; fade-out -&gt; off (e.g. 01020102) 8: Number of Repetitions (01=1 to ff=255) Example: ff1493000104010001. Value can be found in the published state on the <code>config_led_bottom_left_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;config_led_bottom_left_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_led_bottom_left_press&quot;: NEW_VALUE}</code>.</p><h3 id="led-config-bottom-right-short-press-text" tabindex="-1"><a class="header-anchor" href="#led-config-bottom-right-short-press-text" aria-hidden="true">#</a> LED config (bottom right short press) (text)</h3><p>Specifies LED color (rgb) and pattern on short press as hex string. 0-2: RGB value (e.g. ffffff = white) 3: Light position (01=top, 02=bottom, 00=full) 4-7: Durations for sequence fade-in -&gt; on -&gt; fade-out -&gt; off (e.g. 01020102) 8: Number of Repetitions (01=1 to ff=255) Example: ff1493000104010001. Value can be found in the published state on the <code>config_led_bottom_right_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;config_led_bottom_right_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_led_bottom_right_press&quot;: NEW_VALUE}</code>.</p><h3 id="led-config-top-left-long-press-text" tabindex="-1"><a class="header-anchor" href="#led-config-top-left-long-press-text" aria-hidden="true">#</a> LED config (top left long press) (text)</h3><p>Specifies LED color (rgb) and pattern on long press as hex string. 0-2: RGB value (e.g. ffffff = white) 3: Light position (01=top, 02=bottom, 00=full) 4-7: Durations for sequence fade-in -&gt; on -&gt; fade-out -&gt; off (e.g. 01020102) 8: Number of Repetitions (01=1 to ff=255) Example: ff4200000502050001. Value can be found in the published state on the <code>config_led_top_left_longpress</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;config_led_top_left_longpress&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_led_top_left_longpress&quot;: NEW_VALUE}</code>.</p><h3 id="led-config-top-right-long-press-text" tabindex="-1"><a class="header-anchor" href="#led-config-top-right-long-press-text" aria-hidden="true">#</a> LED config (top right long press) (text)</h3><p>Specifies LED color (rgb) and pattern on long press as hex string. 0-2: RGB value (e.g. ffffff = white) 3: Light position (01=top, 02=bottom, 00=full) 4-7: Durations for sequence fade-in -&gt; on -&gt; fade-out -&gt; off (e.g. 01020102) 8: Number of Repetitions (01=1 to ff=255) Example: ff4200000502050001. Value can be found in the published state on the <code>config_led_top_right_longpress</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;config_led_top_right_longpress&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_led_top_right_longpress&quot;: NEW_VALUE}</code>.</p><h3 id="led-config-bottom-left-long-press-text" tabindex="-1"><a class="header-anchor" href="#led-config-bottom-left-long-press-text" aria-hidden="true">#</a> LED config (bottom left long press) (text)</h3><p>Specifies LED color (rgb) and pattern on long press as hex string. 0-2: RGB value (e.g. ffffff = white) 3: Light position (01=top, 02=bottom, 00=full) 4-7: Durations for sequence fade-in -&gt; on -&gt; fade-out -&gt; off (e.g. 01020102) 8: Number of Repetitions (01=1 to ff=255) Example: ff4200000502050001. Value can be found in the published state on the <code>config_led_bottom_left_longpress</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;config_led_bottom_left_longpress&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_led_bottom_left_longpress&quot;: NEW_VALUE}</code>.</p><h3 id="led-config-bottom-right-long-press-text" tabindex="-1"><a class="header-anchor" href="#led-config-bottom-right-long-press-text" aria-hidden="true">#</a> LED config (bottom right long press) (text)</h3><p>Specifies LED color (rgb) and pattern on long press as hex string. 0-2: RGB value (e.g. ffffff = white) 3: Light position (01=top, 02=bottom, 00=full) 4-7: Durations for sequence fade-in -&gt; on -&gt; fade-out -&gt; off (e.g. 01020102) 8: Number of Repetitions (01=1 to ff=255) Example: ff4200000502050001. Value can be found in the published state on the <code>config_led_bottom_right_longpress</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;config_led_bottom_right_longpress&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_led_bottom_right_longpress&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),u={},b=(0,o(983744).Z)(u,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),s,(0,i._)("table",null,[l,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[a,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Bosch"},{default:(0,i.w5)((()=>[(0,i.Uk)("Bosch")])),_:1})])]),r,d,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,i.kq)(" Notes END: Do not edit below this line "),f,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),g,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);