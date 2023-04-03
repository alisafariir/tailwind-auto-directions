const plugin = require("tailwindcss/plugin");

const spacing = plugin(function ({ matchUtilities, theme }) {
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
    );
});
const directions = plugin(function ({ matchUtilities }) {
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
  );
});
const textAligns = plugin(function ({ matchUtilities }) {
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
  );
});
const borders = plugin(function ({ matchUtilities, theme }) {
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
  );
});
const radius = plugin(function ({ matchUtilities, theme }) {
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
  );
});
const alignments = plugin(function ({ matchUtilities, theme }) {
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
const divides = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      x: (value) => ({
        borderInlineStartWidth: value,
        borderInlineEndWidth: value,
      }),
      y: (value) => ({
        borderBlockStartWidth: value,
        borderBlockEndWidth: value,
      }),
    },
    { values: theme("divide") }
  );
});

const TailwindRTLUtilites = {
  spacing,
  directions,
  textAligns,
  borders,
  radius,
  alignments,
  divides,
};
module.exports = TailwindRTLUtilites;
