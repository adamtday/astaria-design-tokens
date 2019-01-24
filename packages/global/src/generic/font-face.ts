import { css } from "@emotion/core";
import { base, typography } from "@heathmont/sportsbet-tokens";

/**
 * Define all custom `@font-face` declarations.
 *
 * Temporarily use a similar font ('Raleway' from Google Fonts) until we host
 * 'Averta' ourselves.
 */
export const fontFace = css`
  /* latin-ext */
  @font-face {
    font-family: ${base.fontFace};
    font-style: normal;
    font-weight: ${typography.fontWeight.normal};
    src: local("Raleway Medium"), local("Raleway-Medium"),
      url(https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: ${base.fontFace};
    font-style: normal;
    font-weight: ${typography.fontWeight.normal};
    src: local("Raleway Medium"), local("Raleway-Medium"),
      url(https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: ${base.fontFace};
    font-style: normal;
    font-weight: ${typography.fontWeight.semibold};
    src: local("Raleway SemiBold"), local("Raleway-SemiBold"),
      url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwPIsWqhPANqczVsq4A.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: ${base.fontFace};
    font-style: normal;
    font-weight: ${typography.fontWeight.semibold};
    src: local("Raleway SemiBold"), local("Raleway-SemiBold"),
      url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwPIsWqZPANqczVs.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: ${base.fontFace};
    font-style: normal;
    font-weight: ${typography.fontWeight.bold};
    src: local("Raleway Bold"), local("Raleway-Bold"),
      url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqhPANqczVsq4A.woff2)
        format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: ${base.fontFace};
    font-style: normal;
    font-weight: ${typography.fontWeight.bold};
    src: local("Raleway Bold"), local("Raleway-Bold"),
      url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPANqczVs.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;