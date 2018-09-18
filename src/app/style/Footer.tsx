import { style, classes } from "typestyle";
import { colors } from "./vars";
// import * as vars from "./vars"

export const Footer = style({
  paddingTop: 91,
  backgroundColor: "#1f7fe2"
});

export const WidgetFooter = style({
  width: "19%",
  float: "left",
  display: "inline-block",
  marginBottom: 115,

  $nest: {
    h4: {
      fontSize: 16,
      color: "white",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: 28
    },

    p: {
      color: colors.whiteDark,
      marginBottom: 25,
      letterSpacing: "1px"
    },

    ul: {
      listStyle: "none",

      $nest: {
        li: {
          marginBottom: 14,

          $nest: {
            a: {
              fontSize: 14,
              color: colors.whiteDark,
              letterSpacing: "1px"
            }
          }
        }
      }
    }
  }
});

export const WidgetFooterLast = classes(
  WidgetFooter,
  style({
    width: "24%",
    paddingLeft: 67,

    $nest: {
      img: {
        maxWidth: 144,
        marginBottom: 23
      },

      ".social-icon": {
        $nest: {
          li: {
            backgroundColor: "white",
            boxShadow: "4px 7px 26px rgba(0, 0, 0, 0.03)",
            marginRight: 6,
            display: "inline-block",
            width: 45,
            height: 45,
            borderRadius: "100%",
            lineHeight: "46px",
            textAlign: "center",
            transition: "0.2s linear",

            $nest: {
              a: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "rgba(31, 127, 226, 0.8)",
                fontSize: 18,
              }
            }
          }
        }
      }
    }
  })
);

export const Copyright = style({
  width: "100%",
  display: "inline-block",
  padding: "31px 0 35px",
  borderTop: "2px solid rgba(255, 255, 255, 0.2)",

  $nest: {
    p: {
      fontSize: 14,
      color: "rgba(185, 203, 239, 0.6)",
      letterSpacing: "1px"
    }
  }
});