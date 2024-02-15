const fetch = require("node-fetch");

const fetchData = async () => {
  const url = "https://www.sec.gov/cgi-bin/current?q1=0&q2=1&q3=";

  try {
    const response = await fetch(url, {
      headers: {
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "sec-ch-ua":
          '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        // "sec-ch-ua-mobile": "?0",
        // "sec-ch-ua-platform": '"Windows"',
        // "sec-fetch-dest": "document",
        // "sec-fetch-mode": "navigate",
        // "sec-fetch-site": "same-origin",
        // "upgrade-insecure-requests": "1",
        // "sec-fetch-user": "?1",
        "User-Agent": "Data Management.",
        cookie:
          "ak_bmsc=7E9D280E5FC5AF0F374517BF0D590652~000000000000000000000000000000~YAAQb8gwF27JI3+NAQAAKVE8rRapIbSRWDHBlrcgN7ob9etLfPHwyv4pQb3yKfYNHFjqUc4G9xrSnb2ab5XLCdbfAM3qyuuvGwMMYWeBsiRf5cmHdd5hd7vu6QS7M+bam12PQ3Q7jw+fIOIhlIitXv0Xrtf7Ed1MitgEBJRBrks/qRjh/dvYohlnWwW9D4SLe43ny8SFFqGPHzcGjJBe5F3lzdzg6uzf1OaXrizCBau7nNjMPrA4G40N1Lv2dSBEbh6sY5of+uvyCD0qI5KU1jcpa7PzpaDitQPWChR75b95NCoF5HQmgJt/JaPDIHzkTYIK2QkK7ITdMglu0F+AbdTdoTuSnsKwEgY7VuwW/5RNKbsEF9dMuFJaJPn+aAwZJjRuperk0uME6jEss2I+TBFJwPmuA201LeEX7ARXao6HEQ/EcgUGZeNkXpgdhxw/PM/iG+y0hdQzS/mHr0bxhg4oiQZUzLygQwboIHvPlvI1U8R47tILgwTnoNlOBZI=; _gid=GA1.2.333866262.1708008429; _gat_UA-30394047-1=1; _gat_GSA_ENOR0=1; _gat_GSA_ENOR1=1; _gat=1; bm_sv=A8E08DFE398AF15230F2BE9FF048874F~YAAQb8gwFzT8I3+NAQAAivI8rRboMen4WqkV23EtsQWsfzXclCRPFa6pYGGbX6wG2+WyPKeQG4V819HLqnuIuiSmG5qHEvbwXxVQqPL0b+NzqnQawQQ3mBGwP+Frx7gBOR8gFjuh5YDP3vPt31ZTJi6XeRdm0uX2xxr9eD/v6pLcXjgcsxEPnqNVngVVBTA04XWDDDYHbSjeMgo79K+v5RQkm/45+fQVnEo+UBg5ka9JKkpvLgKUsyWd9RyP~1; _ga=GA1.2.736353946.1669897718; _ga_300V1CHKH1=GS1.1.1708008429.18.1.1708008479.0.0.0; _4c_=%7B%22_4c_s_%22%3A%22lVPBbtswDP2VQucoES1ZlnIbOmDYoRs2dNsxkCXZFprGhuzG7Yr8%2B6jYaTsXOyyXiI%2BPz08k9UzGxh%2FIFgqmGFOi0LmSK3Lnn3qyfSYxuPR3JFtijJAVVJJawRUVAJyW1hgKsgTHylxW2pEVeUxakEGueZ6BkqcVsd2s8Uxs6zxqgV6DWjNa9Vgx%2FEaEgmJ47mLrHuywG566xBt9edW7O0w4fwzW78bghuYskLFXtPGhboYEs7OK62IK8DSGg2vHZdmMvpRp0IiWsR17nyqvm9je%2Byu8BcItNoL8Olckt9FXPsYzrRmGrt9uNuM4ruu2rfd%2Bbdv7DZL6MCT7vbeYOM4A9nTC6IT9DAl1V7fX3xH%2F8gb5dv31Zoa61PoMD%2FvWmn0SxWmtyKcPux%2BfP2JUcMlzroVcg5Ra6aIAhfmHuF8YnL1svKtN3PTeRNtQc3DUWOv7dDN%2FSN%2FqYpoisofQHia%2FGN%2FGUNc%2B3vihaXEjMDYuJIbZp34nYvTO96FO7lxqKkZ3Q9u9wKd5N3BEWqiCAWc4%2BwF9KilY%2Bp2m655XJfuLzYEx%2FZ49TYymlvrD%2F5Uew2WvtWRQVhmjYLWmwjpOjWeSigKktcpo5wR5lQSW",
      },
    });

    let data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

// Chamar a função para realizar a solicitação
fetchData();
