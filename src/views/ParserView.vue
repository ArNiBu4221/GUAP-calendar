<template>
  <h1 class="title has-text-centered">Выбирете вашу группу</h1>
  <div class="columns">
    <div class="column has-text-right">
      <div class="select">
        <select v-model="_group">
          <option disabled value="">Выберите группу</option>
          <option value="-1">- нет -</option>
          <option value="1">1011</option>
          <option value="2">1012</option>
          <option value="23">1021</option>
          <option value="24">1022</option>
          <option value="13">1031</option>
          <option value="14">1032</option>
          <option value="25">1033</option>
          <option value="26">1035</option>
          <option value="27">1036</option>
          <option value="28">1041</option>
          <option value="29">1042</option>
          <option value="30">1043</option>
          <option value="31">1044</option>
          <option value="32">1045</option>
          <option value="21">1111</option>
          <option value="22">1112</option>
          <option value="41">1121</option>
          <option value="42">1122</option>
          <option value="39">1123</option>
          <option value="69">1131</option>
          <option value="70">1132</option>
          <option value="3">1133</option>
          <option value="4">1135</option>
          <option value="5">1136</option>
          <option value="71">1137</option>
          <option value="56">1141</option>
          <option value="57">1142</option>
          <option value="58">1144</option>
          <option value="59">1145</option>
          <option value="9">1210М</option>
          <option value="19">1211</option>
          <option value="20">1212</option>
          <option value="18">1213</option>
          <option value="10">1214М</option>
          <option value="45">1221</option>
          <option value="46">1222</option>
          <option value="44">1223</option>
          <option value="36">1223М</option>
          <option value="47">1224</option>
          <option value="37">1224М</option>
          <option value="11">1226М</option>
          <option value="12">1227М</option>
          <option value="67">1230М</option>
          <option value="48">1231</option>
          <option value="49">1232</option>
          <option value="50">1233</option>
          <option value="51">1241</option>
          <option value="52">1242</option>
          <option value="53">1243</option>
          <option value="38">1243М</option>
          <option value="54">1245</option>
          <option value="6">1911</option>
          <option value="7">1912</option>
          <option value="34">1921</option>
          <option value="35">1922</option>
          <option value="66">1931</option>
          <option value="15">1932</option>
          <option value="61">1941</option>
          <option value="64">1942</option>
          <option value="62">1944</option>
          <option value="40">1945</option>
          <option value="74">2010</option>
          <option value="73">2011</option>
          <option value="78">2015</option>
          <option value="82">2022</option>
          <option value="121">2031</option>
          <option value="107">2033</option>
          <option value="108">2035</option>
          <option value="123">2037</option>
          <option value="80">2040</option>
          <option value="81">2043</option>
          <option value="83">2046</option>
          <option value="142">2051</option>
          <option value="143">2052</option>
          <option value="144">2055</option>
          <option value="114">2056</option>
          <option value="85">2110</option>
          <option value="43">2111</option>
          <option value="91">2115</option>
          <option value="92">2121</option>
          <option value="140">2131</option>
          <option value="141">2133</option>
          <option value="137">2135</option>
          <option value="138">2137</option>
          <option value="139">2138</option>
          <option value="93">2140</option>
          <option value="94">2144</option>
          <option value="95">2146</option>
          <option value="96">2151</option>
          <option value="97">2152</option>
          <option value="98">2154</option>
          <option value="99">2155</option>
          <option value="100">2156</option>
          <option value="88">2210</option>
          <option value="86">2211</option>
          <option value="87">2212</option>
          <option value="89">2213</option>
          <option value="90">2215</option>
          <option value="109">2221</option>
          <option value="110">2222</option>
          <option value="111">2223</option>
          <option value="101">2228М</option>
          <option value="136">2230М</option>
          <option value="126">2233</option>
          <option value="127">2235</option>
          <option value="84">2235М</option>
          <option value="125">2237</option>
          <option value="124">2237М</option>
          <option value="117">2240</option>
          <option value="118">2243</option>
          <option value="119">2246</option>
          <option value="113">2246М</option>
          <option value="120">2247</option>
          <option value="153">2250М</option>
          <option value="148">2251</option>
          <option value="154">2251М</option>
          <option value="149">2252</option>
          <option value="150">2253</option>
          <option value="151">2254</option>
          <option value="152">2255</option>
          <option value="76">2810</option>
          <option value="75">2840</option>
          <option value="116">2840КВ</option>
          <option value="72">2910</option>
          <option value="79">2915</option>
          <option value="102">2921</option>
          <option value="134">2931</option>
          <option value="135">2933</option>
          <option value="77">2935</option>
          <option value="105">2937</option>
          <option value="106">2938</option>
          <option value="112">2946</option>
          <option value="145">2951</option>
          <option value="146">2952</option>
          <option value="147">2953</option>
          <option value="115">2956</option>
          <option value="175">3011</option>
          <option value="176">3013КС</option>
          <option value="169">3014</option>
          <option value="170">3015</option>
          <option value="179">3021</option>
          <option value="180">3023</option>
          <option value="181">3026</option>
          <option value="182">3026КС</option>
          <option value="155">3031</option>
          <option value="156">3032</option>
          <option value="157">3033</option>
          <option value="158">3035</option>
          <option value="171">3111</option>
          <option value="172">3112</option>
          <option value="174">3113КС</option>
          <option value="173">3115</option>
          <option value="185">3121</option>
          <option value="186">3122К</option>
          <option value="187">3123</option>
          <option value="204">3127КС</option>
          <option value="189">3131</option>
          <option value="190">3132</option>
          <option value="103">3133</option>
          <option value="104">3135</option>
          <option value="191">3136</option>
          <option value="161">3210М</option>
          <option value="163">3211</option>
          <option value="164">3212</option>
          <option value="165">3215</option>
          <option value="166">3216</option>
          <option value="162">3218М</option>
          <option value="194">3220М</option>
          <option value="167">3221</option>
          <option value="202">3222М</option>
          <option value="168">3223</option>
          <option value="203">3223М</option>
          <option value="195">3224М</option>
          <option value="193">3226</option>
          <option value="208">3231</option>
          <option value="209">3233</option>
          <option value="210">3234К</option>
          <option value="211">3235</option>
          <option value="159">3235М</option>
          <option value="212">3236</option>
          <option value="213">3237</option>
          <option value="214">3238К</option>
          <option value="201">3823</option>
          <option value="224">3833</option>
          <option value="223">3835</option>
          <option value="177">3911</option>
          <option value="178">3913КС</option>
          <option value="160">3914</option>
          <option value="183">3915</option>
          <option value="199">3921</option>
          <option value="200">3922К</option>
          <option value="192">3923</option>
          <option value="198">3926</option>
          <option value="221">3931</option>
          <option value="222">3932</option>
          <option value="215">3933</option>
          <option value="220">3935</option>
          <option value="252">4016</option>
          <option value="253">4017</option>
          <option value="254">4018К</option>
          <option value="313">4021</option>
          <option value="314">4026</option>
          <option value="315">4027</option>
          <option value="316">4028</option>
          <option value="288">4031</option>
          <option value="289">4032</option>
          <option value="290">4036</option>
          <option value="308">4041</option>
          <option value="309">4042</option>
          <option value="273">4116</option>
          <option value="274">4117</option>
          <option value="275">4118</option>
          <option value="326">4121</option>
          <option value="327">4126</option>
          <option value="328">4127</option>
          <option value="329">4128</option>
          <option value="291">4131</option>
          <option value="292">4132</option>
          <option value="293">4133К</option>
          <option value="294">4134К</option>
          <option value="295">4136</option>
          <option value="284">4141</option>
          <option value="285">4142</option>
          <option value="286">4143</option>
          <option value="269">4213М</option>
          <option value="259">4215</option>
          <option value="260">4216</option>
          <option value="261">4217</option>
          <option value="262">4218</option>
          <option value="263">4219</option>
          <option value="283">4220М</option>
          <option value="322">4221</option>
          <option value="323">4226</option>
          <option value="324">4227</option>
          <option value="325">4228</option>
          <option value="296">4230М</option>
          <option value="264">4231</option>
          <option value="297">4231М</option>
          <option value="265">4232</option>
          <option value="298">4232М</option>
          <option value="266">4233К</option>
          <option value="255">4236</option>
          <option value="206">4240М</option>
          <option value="256">4241</option>
          <option value="257">4242</option>
          <option value="207">4242М</option>
          <option value="258">4243</option>
          <option value="270">4916</option>
          <option value="271">4917</option>
          <option value="272">4918</option>
          <option value="317">4921</option>
          <option value="318">4922</option>
          <option value="319">4926</option>
          <option value="320">4927</option>
          <option value="321">4928</option>
          <option value="216">4931</option>
          <option value="217">4932</option>
          <option value="218">4933</option>
          <option value="219">4936</option>
          <option value="305">4941</option>
          <option value="306">4942</option>
          <option value="225">6021К</option>
          <option value="330">6027</option>
          <option value="331">6028К</option>
          <option value="226">6029К</option>
          <option value="227">6031</option>
          <option value="228">6032К</option>
          <option value="229">6033К</option>
          <option value="230">6034К</option>
          <option value="351">6121К</option>
          <option value="352">6122К</option>
          <option value="378">6127К</option>
          <option value="353">6131</option>
          <option value="354">6132К</option>
          <option value="355">6133</option>
          <option value="356">6134К</option>
          <option value="357">6136К</option>
          <option value="365">6221К</option>
          <option value="366">6222К</option>
          <option value="367">6227К</option>
          <option value="244">6231</option>
          <option value="245">6232К</option>
          <option value="246">6234К</option>
          <option value="247">6235К</option>
          <option value="248">6236К</option>
          <option value="412">6929К</option>
          <option value="392">6931</option>
          <option value="393">6932К</option>
          <option value="299">6933К</option>
          <option value="394">6934К</option>
          <option value="33">7041</option>
          <option value="60">7141</option>
          <option value="55">7241</option>
          <option value="16">7931</option>
          <option value="17">7932</option>
          <option value="63">7941</option>
          <option value="364">7961</option>
          <option value="231">8011К</option>
          <option value="375">8016К</option>
          <option value="232">8021К</option>
          <option value="276">8026</option>
          <option value="277">8027</option>
          <option value="250">8028К</option>
          <option value="233">8031К</option>
          <option value="234">8033К</option>
          <option value="237">8035</option>
          <option value="238">8036К</option>
          <option value="239">8037К</option>
          <option value="235">8038К</option>
          <option value="236">8039К</option>
          <option value="402">8043К</option>
          <option value="403">8044К</option>
          <option value="251">8051КВ</option>
          <option value="395">8051КС</option>
          <option value="396">8053К</option>
          <option value="397">8054К</option>
          <option value="379">8111К</option>
          <option value="380">8112КВ</option>
          <option value="376">8114КВ</option>
          <option value="377">8116К</option>
          <option value="381">8121К</option>
          <option value="382">8122К</option>
          <option value="390">8124К</option>
          <option value="388">8124КВ</option>
          <option value="310">8126</option>
          <option value="398">8133К</option>
          <option value="399">8135К</option>
          <option value="400">8136К</option>
          <option value="401">8137К</option>
          <option value="389">8138К</option>
          <option value="409">8141К</option>
          <option value="410">8143К</option>
          <option value="436">8151КС</option>
          <option value="437">8152КС</option>
          <option value="411">8153К</option>
          <option value="368">8211К</option>
          <option value="384">8212КВ</option>
          <option value="385">8214КВ</option>
          <option value="370">8221К</option>
          <option value="386">8224КВ</option>
          <option value="267">8226</option>
          <option value="268">8227К</option>
          <option value="369">8233К</option>
          <option value="242">8235К</option>
          <option value="243">8236К</option>
          <option value="371">8241К</option>
          <option value="372">8243К</option>
          <option value="373">8253К</option>
          <option value="447">8253МК</option>
          <option value="374">8254К</option>
          <option value="413">8816К</option>
          <option value="414">8817К</option>
          <option value="435">8833К</option>
          <option value="438">8838К</option>
          <option value="439">8839К</option>
          <option value="415">8911К</option>
          <option value="416">8914К</option>
          <option value="419">8916К</option>
          <option value="420">8917К</option>
          <option value="417">8918К</option>
          <option value="424">8921К</option>
          <option value="426">8924К</option>
          <option value="425">8926</option>
          <option value="423">8928К</option>
          <option value="418">8931К</option>
          <option value="432">8933К</option>
          <option value="433">8934К</option>
          <option value="430">8935К</option>
          <option value="431">8936К</option>
          <option value="434">8938К</option>
          <option value="442">8942К</option>
          <option value="440">8943К</option>
          <option value="443">8944К</option>
          <option value="444">8951КС</option>
          <option value="441">8951КСВ</option>
          <option value="445">8953К</option>
          <option value="446">8954К</option>
          <option value="333">А2111</option>
          <option value="334">А2121</option>
          <option value="335">А2131</option>
          <option value="336">А2141</option>
          <option value="337">А2221</option>
          <option value="338">А2231</option>
          <option value="339">А2251</option>
          <option value="340">А2311</option>
          <option value="341">А2321</option>
          <option value="342">А2441</option>
          <option value="343">А2621</option>
          <option value="344">А2641</option>
          <option value="345">А2811К</option>
          <option value="346">А2831</option>
          <option value="347">А2841К</option>
          <option value="348">А2М11</option>
          <option value="349">А2М21</option>
          <option value="350">А2М52</option>
          <option value="184">В0326</option>
          <option value="287">В0441</option>
          <option value="133">В1326</option>
          <option value="304">В1441</option>
          <option value="383">В1821К</option>
          <option value="205">В2326</option>
          <option value="311">В2441</option>
          <option value="422">В2821К</option>
          <option value="197">В8326</option>
          <option value="307">В8441</option>
          <option value="196">В9326</option>
          <option value="312">В9441</option>
          <option value="461">И0131КС</option>
          <option value="332">И0626К</option>
          <option value="249">И0824К</option>
          <option value="387">И1824К</option>
          <option value="391">И2620МК</option>
          <option value="421">И2824МК</option>
          <option value="122">И9231К</option>
          <option value="427">И9824К</option>
          <option value="302">М011</option>
          <option value="278">М021</option>
          <option value="279">М022</option>
          <option value="280">М023</option>
          <option value="404">М050</option>
          <option value="405">М051</option>
          <option value="407">М053КС</option>
          <option value="408">М054КС</option>
          <option value="65">М056</option>
          <option value="406">М061</option>
          <option value="8">М062</option>
          <option value="300">М111</option>
          <option value="301">М112</option>
          <option value="281">М121</option>
          <option value="282">М122</option>
          <option value="188">М131К</option>
          <option value="358">М150</option>
          <option value="359">М151</option>
          <option value="362">М153КС</option>
          <option value="363">М154КС</option>
          <option value="240">М156</option>
          <option value="241">М157</option>
          <option value="68">М161</option>
          <option value="448">М210М</option>
          <option value="303">М211</option>
          <option value="360">М221</option>
          <option value="361">М222</option>
          <option value="128">М250</option>
          <option value="129">М251</option>
          <option value="452">М255М</option>
          <option value="130">М256</option>
          <option value="131">М257</option>
          <option value="457">М257М</option>
          <option value="458">М258М</option>
          <option value="459">М259М</option>
          <option value="132">М261</option>
          <option value="460">М261М</option>
          <option value="449">М911</option>
          <option value="428">М921</option>
          <option value="429">М922</option>
          <option value="451">М950</option>
          <option value="454">М951</option>
          <option value="455">М953КС</option>
          <option value="456">М954КС</option>
          <option value="453">М956</option>
          <option value="450">М961</option>
        </select>
      </div>
    </div>
    <div class="column has-text-left">
      <div @click="getRasp(_group)" class="button is-centered is-primary">
        Получить расписание
      </div>
    </div>
  </div>
  <div class="columns mx-1 is-1">
    <div class="column">
      <div id="topLeft-panel" class="card column">
        <div class="card-content">
          <input
            class="input block is-full"
            type="text"
            placeholder="Заголовок события"
          />
          <div class="columns is-vcentered">
            <div class="column is-narrow">С</div>
            <div class="column">
              <div id="time-select1" class="columns block">
                <select
                  id="left-select"
                  v-model="startTimePicker"
                  class="column is-small is-narrow has-background-light"
                >
                  <option v-for="i in 23" value="{{i}}" :key="i">
                    {{ i }}
                  </option>
                  <option value="00">00</option>
                </select>
                <select
                  id="right-select"
                  v-model="endTimePicker"
                  class="column is-small is-narrow has-background-light"
                >
                  <option v-for="j in 59" value="{{j}}" :key="j">
                    {{ j }}
                  </option>
                  <option value="00">00</option>
                </select>
              </div>
            </div>
            <div class="column is-narrow">До</div>
            <div class="column">
              <div id="time-select2" class="columns block">
                <select
                  id="left-select"
                  class="column is-small is-narrow has-background-light"
                >
                  <option v-for="i in 23" value="{{i}}" :key="i">
                    {{ i }}
                  </option>
                  <option value="00">00</option>
                </select>
                <select
                  id="right-select"
                  class="column is-small is-narrow has-background-light"
                >
                  <option v-for="j in 59" value="{{j}}" :key="j">
                    {{ j }}
                  </option>
                  <option value="00">00</option>
                </select>
              </div>
            </div>
            <div v-if="selectedDay !== null" class="column">
              {{ selectedDay.date.toDateString() }}
            </div>
            <div v-else class="column">Выберите дату на календаре</div>
            <button class="button is-primary">Сохранить</button>
          </div>
        </div>
      </div>
      <div id="calendar-block" class="column">
        <Calendar
          expanded
          :first-day-of-week="2"
          :attributes="attributes"
          @dayclick="dayClicked"
        >
          <template #day-popover="{ dayTitle }">
            <div class="px-1">
              <div class="has-text-grey-dark has-text-centered">
                {{ dayTitle }}
              </div>
              <table class="table has-text-left is-striped table-container">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  <template
                    v-for="{ key, customData } in attributes"
                    :key="key"
                  >
                    <tr
                      @click="eventSelect(customData)"
                      v-if="
                        selectedDay.date.getDay() + 1 === customData.dayOfWeek
                      "
                    >
                      <td>
                        {{ customData.startTime }} - {{ customData.endTime }}
                      </td>
                      <td>{{ customData.title }}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </template>
        </Calendar>
      </div>
    </div>
    <div id="right-panel" class="card column">
      <div class="card-content" v-if="selectedEvent !== null">
        <div class="block">
          <p class="title has-text-centered">{{ selectedEvent.title }}</p>
          <p v-if="selectedDay !== null" class="subtitle has-text-centered">
            {{ selectedDay.date.toDateString() }}
          </p>
        </div>
        <div class="block">
          <div class="columns">
            <div class="column has-text-centered">
              <p class="has-text-weight-bold">Время</p>
            </div>
            <div class="column">
              <div class="columns">
                <p class="column is-narrow">С</p>
                <p class="column">
                  {{ selectedEvent.startTime }}
                </p>
                <p class="column is-narrow">До</p>
                <p class="column">
                  {{ selectedEvent.endTime }}
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <p class="has-text-weight-bold">Место</p>
            </div>
            <div class="column">
              <p>{{ selectedEvent.place }}</p>
            </div>
          </div>
          <div class="columns is-vcentered">
            <div class="column has-text-centered">
              <p class="has-text-weight-bold">Преподаватель</p>
            </div>
            <div class="column">
              <p v-for="key in selectedEvent.teacher" :key="key">
                {{ key }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParserView",
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<script setup>
import { Calendar } from "v-calendar";
import "v-calendar/dist/style.css";
import { ref, computed, onMounted } from "vue";
const axios = require("axios");
import { raspParser } from "@/parser_test";
import { getDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/main";

const raspArray = ref([]);
const _group = ref(0);

const usrRef = doc(db, "Users", "User1");

onMounted(() => {
  onSnapshot(usrRef, (doc) => {
    let g = 0;
    g = doc.data().group;
    _group.value = g;
    console.log("Cashed group's code = " + g);
  });
  getRasp(_group);
});

const getRasp = async (gr) => {
  const usrDoc = await getDoc(usrRef);
  let cnt = 0;
  await updateDoc(usrRef, { group: _group.value });
  axios
    .get(`http://localhost:8080/rasp/?g=${gr}`)
    .then((response) => {
      console.log("****SUCCSESS***");
      raspArray.value = raspProcessing(raspParser(response));
      console.log(raspArray.value);
      console.log(attributes.value);
    })
    .catch((e) => {
      console.log("***ERROR****");
      console.log(e);
    });
};

const raspProcessing = (raspArray) => {
  let calendarFormattedRasp = [];
  for (let study in raspArray) {
    let studyObj = {
      key: study,
      title: raspArray[study].name,
      dayOfWeek: null,
      weekDirection: null,
      numberOfClass: null,
      type: raspArray[study].type,
      place: raspArray[study].place,
      teacher: raspArray[study].teacher,
      groups: raspArray[study].groups,
      startTime: "",
      endTime: "",
      dates: [],
      color: "purple",
    };
    studyObj.dayOfWeek = dayOfweekProcessing(raspArray[study].day);
    let str = raspArray[study].numberOfClass;
    studyObj.numberOfClass = Number(str[0]);
    if (str[0] !== "в" && str[0] !== "1") {
      studyObj.startTime = str.slice(8, 13);
      studyObj.endTime = str.slice(14, -1);
    } else if (str[0] !== "в") {
      studyObj.startTime = str.slice(8, 12);
      studyObj.endTime = str.slice(13, -1);
    }
    if (raspArray[study].weekDirection === "нижняя (четная)") {
      studyObj.weekDirection = 0;
      studyObj.dates = [
        {
          repeat: {
            every: [2, "weeks"],
            weekdays: studyObj.dayOfWeek,
          },
        },
      ];
    } else if (raspArray[study].weekDirection === "верхняя (нечетная)") {
      studyObj.weekDirection = 1;
      studyObj.dates = [
        {
          repeat: {
            every: [2, "weeks"],
            weekdays: studyObj.dayOfWeek,
          },
        },
      ];
    } else if (raspArray[study].weekDirection === "both") {
      studyObj.weekDirection = 1;
      studyObj.dates = [
        {
          // start: new Date(2023, 1, 1),
          // end: new Date(2023, 7, 1),
          repeat: {
            every: "week",
            weekdays: studyObj.dayOfWeek,
          },
        },
      ];
    }
    calendarFormattedRasp.push(studyObj);
  }
  return calendarFormattedRasp;
};

const dayOfweekProcessing = (dayOfWeek) => {
  switch (dayOfWeek) {
    case "Воскресенье":
      return 1;
    case "Понедельник":
      return 2;
    case "Вторник":
      return 3;
    case "Среда":
      return 4;
    case "Четверг":
      return 5;
    case "Пятница":
      return 6;
    case "Суббота":
      return 7;
    default:
      return -1;
  }
};

const attributes = computed(() => [
  ...raspArray.value.map((todo) => ({
    dates: todo.dates,
    highlight: {
      color: "purple",
      fillMode: "light",
    },
    popover: true,
    customData: todo,
  })),
]);

let selectedDay = ref(null);
const dayClicked = (day) => {
  if (day !== selectedDay.value) {
    selectedDay.value = day;
  } else {
    selectedDay.value = null;
  }
};

const startTimePicker = "";
const endTimePicker = "";

let selectedEvent = ref(null);
const eventSelect = (data) => {
  selectedEvent.value = data;
  console.log(selectedEvent.value);
};
</script>

<style scoped>
@import "../../node_modules/bulma/css/bulma.min.css";
#right-panel {
  border-radius: 10px;
}
#topLeft-panel {
  border-radius: 10px;
}

/*
  style rules for tim-picker
*/
#time-select1 select,
#time-select1 option {
  border: 1px;
}
#time-select2 select,
#time-select2 option {
  border: 1px;
}
#left-select {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
#right-select {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
