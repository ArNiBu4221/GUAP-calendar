<template>
  <h1 class="title has-text-centered" href="https://guap.ru/rasp">
    Парсер с <a href="https://guap.ru/rasp"> guap.ru/rasp</a>
  </h1>
  <div class="columns">
    <div class="column has-text-right">
      <div class="select">
        <select v-model="_group">
          <option value="-1">- нет -</option>
          <option value="463"></option>
          <option value="456">1011</option>
          <option value="457">1012</option>
          <option value="443">1021</option>
          <option value="444">1022</option>
          <option value="461">1031</option>
          <option value="45">1032</option>
          <option value="199">1035</option>
          <option value="200">1036</option>
          <option value="425">1041</option>
          <option value="426">1042</option>
          <option value="427">1043</option>
          <option value="428">1044</option>
          <option value="310">1045</option>
          <option value="14">1111</option>
          <option value="15">1112</option>
          <option value="296">1121</option>
          <option value="297">1122</option>
          <option value="302">1123</option>
          <option value="59">1131</option>
          <option value="60">1132</option>
          <option value="203">1133</option>
          <option value="201">1135</option>
          <option value="202">1136</option>
          <option value="61">1137</option>
          <option value="308">1141</option>
          <option value="311">1142</option>
          <option value="309">1144</option>
          <option value="312">1145</option>
          <option value="403">1211</option>
          <option value="404">1212</option>
          <option value="405">1213</option>
          <option value="406">1221</option>
          <option value="407">1222</option>
          <option value="408">1223</option>
          <option value="409">1224</option>
          <option value="129">1231</option>
          <option value="130">1232</option>
          <option value="131">1233</option>
          <option value="132">1241</option>
          <option value="133">1242</option>
          <option value="134">1243</option>
          <option value="135">1245</option>
          <option value="39">1310М</option>
          <option value="321">1311</option>
          <option value="322">1312</option>
          <option value="323">1313</option>
          <option value="324">1321</option>
          <option value="325">1322</option>
          <option value="327">1323</option>
          <option value="458">1323М</option>
          <option value="326">1324</option>
          <option value="459">1324М</option>
          <option value="40">1326М</option>
          <option value="41">1330М</option>
          <option value="328">1331</option>
          <option value="329">1332</option>
          <option value="332">1333</option>
          <option value="333">1334</option>
          <option value="334">1335</option>
          <option value="330">1337</option>
          <option value="331">1338</option>
          <option value="460">1340М</option>
          <option value="315">1341</option>
          <option value="316">1342</option>
          <option value="317">1343</option>
          <option value="318">1346</option>
          <option value="206">2010</option>
          <option value="207">2011</option>
          <option value="16">2015</option>
          <option value="48">2022</option>
          <option value="42">2031</option>
          <option value="43">2033</option>
          <option value="24">2035</option>
          <option value="13">2037</option>
          <option value="1">2040</option>
          <option value="2">2043</option>
          <option value="3">2046</option>
          <option value="78">2051</option>
          <option value="79">2052</option>
          <option value="80">2055</option>
          <option value="91">2056</option>
          <option value="204">2110</option>
          <option value="205">2111</option>
          <option value="47">2115</option>
          <option value="46">2121</option>
          <option value="11">2131</option>
          <option value="12">2133</option>
          <option value="17">2135</option>
          <option value="20">2137</option>
          <option value="21">2138</option>
          <option value="6">2140</option>
          <option value="5">2144</option>
          <option value="7">2146</option>
          <option value="73">2151</option>
          <option value="74">2152</option>
          <option value="75">2154</option>
          <option value="76">2155</option>
          <option value="77">2156</option>
          <option value="49">2210</option>
          <option value="50">2211</option>
          <option value="51">2212</option>
          <option value="52">2213</option>
          <option value="53">2215</option>
          <option value="54">2221</option>
          <option value="55">2222</option>
          <option value="56">2223</option>
          <option value="22">2233</option>
          <option value="23">2235</option>
          <option value="19">2237</option>
          <option value="57">2240</option>
          <option value="58">2243</option>
          <option value="67">2246</option>
          <option value="68">2247</option>
          <option value="62">2251</option>
          <option value="63">2252</option>
          <option value="64">2253</option>
          <option value="65">2254</option>
          <option value="66">2255</option>
          <option value="26">2310</option>
          <option value="27">2311</option>
          <option value="28">2315</option>
          <option value="29">2321</option>
          <option value="30">2322</option>
          <option value="31">2323</option>
          <option value="44">2330М</option>
          <option value="32">2333</option>
          <option value="33">2335</option>
          <option value="18">2335М</option>
          <option value="34">2337</option>
          <option value="25">2337М</option>
          <option value="35">2338</option>
          <option value="9">2340</option>
          <option value="10">2343</option>
          <option value="8">2346</option>
          <option value="4">2346М</option>
          <option value="86">2350М</option>
          <option value="81">2351</option>
          <option value="87">2351М</option>
          <option value="82">2352</option>
          <option value="83">2353</option>
          <option value="84">2354</option>
          <option value="85">2355</option>
          <option value="462">2910</option>
          <option value="114">3011</option>
          <option value="115">3013КС</option>
          <option value="96">3014</option>
          <option value="122">3015</option>
          <option value="147">3021</option>
          <option value="143">3023</option>
          <option value="148">3026</option>
          <option value="149">3026КС</option>
          <option value="152">3031</option>
          <option value="153">3032</option>
          <option value="162">3033</option>
          <option value="166">3035</option>
          <option value="111">3111</option>
          <option value="112">3112</option>
          <option value="113">3113КС</option>
          <option value="105">3115</option>
          <option value="116">3121</option>
          <option value="117">3122К</option>
          <option value="118">3123</option>
          <option value="104">3127КС</option>
          <option value="88">3131</option>
          <option value="89">3132</option>
          <option value="92">3133</option>
          <option value="93">3135</option>
          <option value="90">3136</option>
          <option value="106">3211</option>
          <option value="107">3212</option>
          <option value="108">3215</option>
          <option value="109">3216</option>
          <option value="110">3218КС</option>
          <option value="123">3221</option>
          <option value="125">3222КС</option>
          <option value="124">3223</option>
          <option value="120">3226</option>
          <option value="126">3231</option>
          <option value="127">3233</option>
          <option value="128">3234К</option>
          <option value="69">3235</option>
          <option value="70">3236</option>
          <option value="71">3237</option>
          <option value="72">3238К</option>
          <option value="95">3310М</option>
          <option value="97">3311</option>
          <option value="98">3312</option>
          <option value="99">3313К</option>
          <option value="101">3315</option>
          <option value="100">3316</option>
          <option value="144">3320М</option>
          <option value="102">3321</option>
          <option value="103">3323</option>
          <option value="145">3324М</option>
          <option value="141">3326</option>
          <option value="142">3328</option>
          <option value="156">3331</option>
          <option value="157">3333</option>
          <option value="158">3335</option>
          <option value="94">3335М</option>
          <option value="159">3336</option>
          <option value="160">3337</option>
          <option value="161">3338К</option>
          <option value="150">3923</option>
          <option value="168">3933</option>
          <option value="167">3935</option>
          <option value="210">4016</option>
          <option value="211">4017</option>
          <option value="283">4021</option>
          <option value="284">4026</option>
          <option value="285">4027</option>
          <option value="286">4028</option>
          <option value="163">4031</option>
          <option value="164">4032</option>
          <option value="165">4036</option>
          <option value="271">4041</option>
          <option value="272">4042</option>
          <option value="182">4116</option>
          <option value="183">4117</option>
          <option value="184">4118</option>
          <option value="279">4121</option>
          <option value="280">4126</option>
          <option value="281">4127</option>
          <option value="282">4128</option>
          <option value="225">4131</option>
          <option value="226">4132</option>
          <option value="227">4133К</option>
          <option value="228">4134К</option>
          <option value="229">4136</option>
          <option value="274">4141</option>
          <option value="275">4142</option>
          <option value="276">4143</option>
          <option value="215">4215</option>
          <option value="216">4216</option>
          <option value="212">4217</option>
          <option value="213">4218</option>
          <option value="214">4219</option>
          <option value="287">4221</option>
          <option value="288">4226</option>
          <option value="289">4227</option>
          <option value="290">4228</option>
          <option value="231">4231</option>
          <option value="232">4232</option>
          <option value="233">4233К</option>
          <option value="234">4236</option>
          <option value="137">4241</option>
          <option value="138">4242</option>
          <option value="139">4243</option>
          <option value="208">4313М</option>
          <option value="188">4314</option>
          <option value="185">4315</option>
          <option value="186">4316</option>
          <option value="187">4317</option>
          <option value="189">4318</option>
          <option value="190">4319</option>
          <option value="223">4320М</option>
          <option value="291">4321</option>
          <option value="292">4326</option>
          <option value="293">4327</option>
          <option value="294">4328</option>
          <option value="295">4329</option>
          <option value="265">4330М</option>
          <option value="193">4331</option>
          <option value="194">4332</option>
          <option value="195">4333К</option>
          <option value="154">4340М</option>
          <option value="196">4341</option>
          <option value="197">4342</option>
          <option value="155">4342М</option>
          <option value="198">4343</option>
          <option value="410">6029К</option>
          <option value="384">6031</option>
          <option value="385">6032К</option>
          <option value="266">6033К</option>
          <option value="386">6034К</option>
          <option value="169">6121К</option>
          <option value="170">6122К</option>
          <option value="248">6127К</option>
          <option value="175">6131</option>
          <option value="176">6132К</option>
          <option value="171">6133</option>
          <option value="177">6134К</option>
          <option value="178">6136К</option>
          <option value="179">6137К</option>
          <option value="244">6221К</option>
          <option value="245">6222К</option>
          <option value="263">6227К</option>
          <option value="235">6231</option>
          <option value="236">6232К</option>
          <option value="237">6234К</option>
          <option value="238">6235К</option>
          <option value="239">6236К</option>
          <option value="382">6320МК</option>
          <option value="335">6321К</option>
          <option value="172">6331К</option>
          <option value="173">6332К</option>
          <option value="313">7041</option>
          <option value="314">7141</option>
          <option value="136">7241</option>
          <option value="375">7341</option>
          <option value="413">8011К</option>
          <option value="261">8016К</option>
          <option value="421">8021К</option>
          <option value="419">8026</option>
          <option value="420">8027</option>
          <option value="418">8028К</option>
          <option value="414">8031К</option>
          <option value="262">8033К</option>
          <option value="430">8035</option>
          <option value="431">8036К</option>
          <option value="240">8038К</option>
          <option value="241">8039К</option>
          <option value="436">8043К</option>
          <option value="438">8044К</option>
          <option value="437">8051КВ</option>
          <option value="345">8051КС</option>
          <option value="440">8053К</option>
          <option value="441">8054К</option>
          <option value="249">8111К</option>
          <option value="250">8112КВ</option>
          <option value="251">8114КВ</option>
          <option value="252">8116К</option>
          <option value="246">8121К</option>
          <option value="247">8122К</option>
          <option value="253">8124К</option>
          <option value="254">8124КВ</option>
          <option value="218">8126</option>
          <option value="255">8133К</option>
          <option value="180">8135К</option>
          <option value="181">8136К</option>
          <option value="256">8138К</option>
          <option value="257">8141К</option>
          <option value="258">8143К</option>
          <option value="242">8151КС</option>
          <option value="243">8152КС</option>
          <option value="259">8153К</option>
          <option value="392">8211К</option>
          <option value="370">8212КВ</option>
          <option value="372">8214КВ</option>
          <option value="396">8221К</option>
          <option value="371">8224КВ</option>
          <option value="397">8226</option>
          <option value="398">8227К</option>
          <option value="393">8233К</option>
          <option value="394">8235К</option>
          <option value="395">8236К</option>
          <option value="399">8241К</option>
          <option value="400">8243К</option>
          <option value="433">8251КС</option>
          <option value="434">8251КСВ</option>
          <option value="401">8253К</option>
          <option value="402">8254К</option>
          <option value="336">8311К</option>
          <option value="376">8312КВ</option>
          <option value="377">8314КВ</option>
          <option value="416">8314МК</option>
          <option value="415">8315М</option>
          <option value="337">8316К</option>
          <option value="338">8321К</option>
          <option value="339">8324К</option>
          <option value="378">8324КВ</option>
          <option value="191">8326</option>
          <option value="379">8326КВ</option>
          <option value="209">8326М</option>
          <option value="192">8327К</option>
          <option value="174">8335К</option>
          <option value="429">8335МК</option>
          <option value="340">8341К</option>
          <option value="341">8343К</option>
          <option value="439">8345МК</option>
          <option value="381">8351КВ</option>
          <option value="342">8353К</option>
          <option value="442">8353МК</option>
          <option value="343">8354К</option>
          <option value="411">8916К</option>
          <option value="412">8917К</option>
          <option value="432">8933К</option>
          <option value="435">8938К</option>
          <option value="347">А3111</option>
          <option value="348">А3121</option>
          <option value="349">А3131</option>
          <option value="350">А3141</option>
          <option value="351">А3211</option>
          <option value="352">А3214</option>
          <option value="353">А3221</option>
          <option value="354">А3231</option>
          <option value="355">А3251</option>
          <option value="356">А3311</option>
          <option value="357">А3321</option>
          <option value="358">А3331</option>
          <option value="359">А3441</option>
          <option value="360">А3442</option>
          <option value="361">А3611К</option>
          <option value="362">А3621К</option>
          <option value="363">А3641К</option>
          <option value="364">А3811К</option>
          <option value="365">А3831К</option>
          <option value="366">А3841К</option>
          <option value="367">А3851К</option>
          <option value="368">А3М11</option>
          <option value="369">А3М52</option>
          <option value="119">В0326</option>
          <option value="278">В0441</option>
          <option value="121">В1326</option>
          <option value="224">В1441</option>
          <option value="264">В1821К</option>
          <option value="140">В2326</option>
          <option value="270">В2441</option>
          <option value="373">В2821К</option>
          <option value="151">В3326</option>
          <option value="277">В3441</option>
          <option value="146">В9326</option>
          <option value="273">В9441</option>
          <option value="422">И0824К</option>
          <option value="346">И1131КС</option>
          <option value="260">И1824К</option>
          <option value="383">И3620МК</option>
          <option value="380">И3812КВ</option>
          <option value="417">И3824МК</option>
          <option value="445">М011</option>
          <option value="423">М021</option>
          <option value="424">М022</option>
          <option value="447">М050</option>
          <option value="449">М051</option>
          <option value="450">М053КС</option>
          <option value="451">М054КС</option>
          <option value="448">М056</option>
          <option value="446">М061</option>
          <option value="307">М062</option>
          <option value="267">М111</option>
          <option value="268">М112</option>
          <option value="219">М121</option>
          <option value="220">М122</option>
          <option value="303">М131К</option>
          <option value="304">М150</option>
          <option value="305">М151</option>
          <option value="300">М153КС</option>
          <option value="301">М154КС</option>
          <option value="298">М156</option>
          <option value="299">М157</option>
          <option value="306">М161</option>
          <option value="230">М211</option>
          <option value="221">М221</option>
          <option value="222">М222</option>
          <option value="388">М250</option>
          <option value="389">М251</option>
          <option value="374">М253КС</option>
          <option value="390">М256</option>
          <option value="391">М257</option>
          <option value="387">М261</option>
          <option value="269">М311</option>
          <option value="217">М320М</option>
          <option value="344">М321</option>
          <option value="36">М350</option>
          <option value="37">М351</option>
          <option value="38">М352</option>
          <option value="452">М355М</option>
          <option value="453">М357М</option>
          <option value="454">М358М</option>
          <option value="319">М361</option>
          <option value="455">М361М</option>
          <option value="320">М362</option>
        </select>
      </div>
    </div>
    <div class="column has-text-left">
      <div @click="getRasp(_group)" class="button is-centered is-primary">
        Получить расписание
      </div>
    </div>
  </div>
  <div id="calendar" class="column is-10 is-offset-1 has-text-centered">
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
              <template v-for="{ key, customData } in attributes" :key="key">
                <tr
                  v-if="selectedDay.date.getDay() + 1 === customData.dayOfWeek"
                >
                  <td>{{ customData.startTime }} - {{ customData.endTime }}</td>
                  <td>{{ customData.title }}</td>
                  <td v-if="customData.weekDirection === 1">
                    <VueFeather type="chevron-up"></VueFeather>
                  </td>
                  <td v-if="customData.weekDirection === 0">
                    <VueFeather type="chevron-down"></VueFeather>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<script>
/*
    parser imports
*/

import { Calendar } from "v-calendar";
import "v-calendar/dist/style.css";
/*
  code
*/

/*
    Vue exports
*/
export default {
  name: "ParserView",
  components: {
    Calendar,
  },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<script setup>
import { ref, computed, onMounted } from "vue";
import { raspParser } from "@/parser_test";
import { getDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/main";
import VueFeather from "vue-feather";

const axios = require("axios");
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
      // console.log(raspArray.value);
      // console.log(attributes.value);
    })
    .catch((e) => {
      console.log("***ERROR****");
      console.log(e);
    });
};
/*объект пары для вставки в календарь
 * {
 *   name:
 *   description: ""
 *   teacher: {}
 *   numberOfPair:
 *   weekDirection: 0 (четная) | 1 (нечетная) | none (обе)
 *   place: ""
 *   type: ""
 *   groups: {}
 *   startTime:
 *   endTime:
 *   dates: [
 *     {
 *       start:
 *       end:
 *       repeat: {
 *         every: [2, "weeks"] if 0 or 1 | "weeks" if 2
 *         weekdays: obj.dayOfWeek
 *       },
 *     },
 *   ],
 *   color: "",
 * },
 */

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
    /*for (let i = 0; i < str.length; i++) {
      if (str[i] === "9") {
        studyObj.startTime = str.slice(i, i + 4);
        studyObj.endTime = str.slice(i + 5, -1);
        break;
      }
    }*/
    if (raspArray[study].weekDirection === "нижняя (четная)") {
      studyObj.weekDirection = 0;
      studyObj.dates = [
        {
          // start: new Date(2023, 1, 1),
          // end: new Date(2023, 7, 1),
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
          // start: new Date(2023, 1, 2),
          // end: new Date(2023, 7, 1),
          repeat: {
            every: [2, "weeks"],
            weekdays: studyObj.dayOfWeek,
          },
        },
      ];
    } else {
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

/*
const arr = [
  {
    title: "Пупа и лупа",
    isComplete: false,
    dates: [
      {
        repeat: {
          every: "week",
          // on: ({ weekday }) => weekday === 6,
          weekdays: 3,
        },
      },
    ], // Every Friday
    color: "red",
    dayOfWeek: 3,
  },
  {
    title: "Лупа и пупа.",
    isComplete: false,
    dates: [
      {
        repeat: {
          every: "week",
          // on: ({ weekday }) => weekday === 6,
          weekdays: 5,
        },
      },
    ], // Every Friday
    color: "red",
    dayOfWeek: 5,
  },
  {
    title: "купа и залупа",
    isComplete: false,
    dates: [
      {
        repeat: {
          every: "week",
          // on: ({ weekday }) => weekday === 6,
          weekdays: 3,
        },
      },
    ], // Every Friday
    color: "red",
    dayOfWeek: 3,
  },
];
*/

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

/*const daysInMatrixForm = daySpread(attributes);
console.log(daysInMatrixForm);

const daySpread = (someArr) => {
  let daysMatrix = [];
  let oneDay = [someArr[0]];
  let dayOfWeekIterator = someArr[0].customData.dayOfWeek;
  for (let i = 1; i < someArr.length; i++) {
    if (dayOfWeekIterator === someArr[i].customData.dayOfWeek) {
      oneDay.push(someArr[i]);
    } else {
      daysMatrix.push(oneDay);
      oneDay.length = 0;
      oneDay.push(someArr[i]);
      dayOfWeekIterator = someArr[i].customData.dayOfWeek;
    }
  }
  return daysMatrix;
};*/
// const rasp = raspProcessing(raspArray);

// const todos = ref(arr);

let selectedDay;
const dayClicked = (day) => {
  selectedDay = day;
  console.log(selectedDay.date.getDay());
};
</script>

<style scoped>
@import "../../node_modules/bulma/css/bulma.min.css";
li {
  margin: 0 auto;
}
</style>
