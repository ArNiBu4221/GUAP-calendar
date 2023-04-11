const axios = require("axios");
const cheerio = require("cheerio");

const getRasp = async (group) => {
  try {
    const resp = await axios.get("https://guap.ru/rasp", {
      params: {
        g: group,
      },
    });
    return resp;
  } catch (e) {
    console.log(e);
  }
};
getRasp(275).then((res) => {
  const $ = cheerio.load(res.data);
  const $rasp = $(".result h3");
  const studies = [];
  const myClass = {
    day: "",
    numberOfClass: "",
    weekDirection: "",
    type: "",
    name: "",
    place: "",
    teacher: "",
    groups: {},
  };
  for (let i = 0; i < $rasp.length; i++) {
    let h = $rasp.eq(i);
    let day = h.nextUntil("h3");
    // let $day = cheerio.load(day.toString());
    // let classes = $day(".study");
    // console.log("\n", classes.text());
    console.log("\n", day.toString());
  }
});
