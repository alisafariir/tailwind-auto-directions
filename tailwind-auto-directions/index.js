const plugin = require("tailwindcss/plugin");
const TailwindRTLUtilites = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      ps: (value) => ({
        paddingInlineStart: value,
      }),
      pe: (value) => ({
        paddingInlineEnd: value,
      }),
    },
    { values: theme("spacing") }
  ),
    matchUtilities(
      {
        ms: (value) => ({
          marginInlineStart: value,
        }),
        me: (value) => ({
          marginInlineEnd: value,
        }),
      },
      { values: theme("spacing") }
    ),
    matchUtilities(
      {
        "dir-rtl": () => ({
          direction: "rtl",
        }),
        "dir-ltr": () => ({
          direction: "ltr",
        }),
      },
      {}
    ),
    matchUtilities(
      {
        "text-start": () => ({
          "text-align": "start",
        }),
        "text-end": () => ({
          "text-align": "end",
        }),
      },
      {}
    ),
    matchUtilities(
      {
        "border-s": (value) => ({
          borderInlineStartWidth: value,
        }),
        "border-e": (value) => ({
          borderInlineEndWidth: value,
        }),
      },
      { values: theme("borderWidth") }
    ),
    matchUtilities(
      {
        "rounded-s": (value) => ({
          borderStartStartRadius: value,
          borderEndStartRadius: value,
        }),
        "rounded-e": (value) => ({
          borderStartEndRadius: value,
          borderEndEndRadius: value,
        }),
        "rounded-ts": (value) => ({
          borderStartStartRadius: value,
        }),
        "rounded-te": (value) => ({
          borderStartEndRadius: value,
        }),
        "rounded-bs": (value) => ({
          borderEndStartRadius: value,
        }),
        "rounded-be": (value) => ({
          borderEndEndRadius: value,
        }),
      },
      { values: theme("borderRadius") }
    ),
    matchUtilities(
      {
        start: (value) => ({
          insetInlineStart: value,
        }),
        end: (value) => ({
          insetInlineEnd: value,
        }),
      },
      { values: theme("inset") }
    ),
   
    matchUtilities(
      {
        "float-start": () => ({
          float: "inline-start",
        }),
        "float-end": () => ({
          float: "inline-end",
        }),
      },
      {}
    ),
    matchUtilities(
      {
        "clear-start": () => ({
          clear: "inline-start",
        }),
        "clear-end": () => ({
          clear: "inline-end",
        }),
      },
      {}
    );
});
module.exports = TailwindRTLUtilites;
