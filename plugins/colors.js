const plugin = require('tailwindcss/plugin');

const getColors = async () => {
    // This function retrieves some colors from an API
    let data = await fetch(`https://api.storyblok.com/v2/cdn/stories/config?token=${process.env.STORYBLOK_PREVIEW_TOKEN}`);
    data = await data.json();
    const colors = [
      {
        type: "primary",
        color: data.story.content.primary
      },
      {
        type: "secondary",
        color: data.story.content.secondary
      },
      {
        type: "accent",
        color: data.story.content.accent
      },
    ]
    return [colors[0].color];
}

// module.exports = plugin(async function({ matchUtilities, theme }) {
//   const colorFromApi = await getColors();
//   const colorsArray = colorFromApi.map(elem => {
//   return {
//     [elem.type]: elem.color
//    }
//  })
// //  console.log(colorsArray)
//   matchUtilities(
//     {
//      colors: (value) => {console.log(value);return value},
//     },
//     { values: colorsArray}
//   )
// });
module.exports = plugin(async function({ matchUtilities, theme }) {
  const colorFromApi = await getColors();
  const colorsArray = colorFromApi.map(color => {
  return {
    [color]: color
   }
 })
  matchUtilities(
    {
     colors: (value) => ({primary : value}),
    },
    { values: {primary: "#fb8500"}}
  )
});