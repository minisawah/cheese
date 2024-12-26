export const PARSE_REGEX = {
  resolutions: {
    '2160p': /(?<![^ [_\-.])(4k|2160p|uhd)(?=[ \]_.-]|$)/i,
    '1080p': /(?<![^ [_\-.])(1080p|fhd)(?=[ \]_.-]|$)/i,
    '720p': /(?<![^ [_\-.])(720p|hd)(?=[ \]_.-]|$)/i,
    '480p': /(?<![^ [_\-.])(480p|sd)(?=[ \]_.-]|$)/i,
  },
  qualities: {
    'BluRay REMUX':
      /(?<![^ [_\-.])((blu[ .\-_]?ray|bd|br|b|uhd)[ .\-_]?remux)(?=[ \]_.-]|$)/i,
    BluRay:
      /(?<![^ [_\-.])(blu[ .\-_]?ray|((bd|br|b|uhd)[ .\-_]?(rip|r)?))(?![ .\-_]?remux)(?=[ \]_.-]|$)/i,
    'WEB-DL':
      /(?<![^ [_\-.])(web[ .\-_]?(dl)?)(?![ .\-_]?DLRip)(?=[ \]_.-]|$)/i,
    WEBRip: /(?<![^ [_\-.])(web[ .\-_]?rip)(?=[ \]_.-]|$)/i,
    HDRip:
      /(?<![^ [_\-.])(hd[ .\-_]?rip|web[ .\-_]?dl[ .\-_]?rip)(?=[ \]_.-]|$)/i,
    'HC HD-Rip': /(?<![^ [_\-.])(hc|hd[ .\-_]?rip)(?=[ \]_.-]|$)/i,
    DVDRip: /(?<![^ [_\-.])(dvd[ .\-_]?(rip|mux|r|full|5|9))(?=[ \]_.-]|$)/i,
    HDTV: /(?<![^ [_\-.])((hd|pd)tv|tv[ .\-_]?rip|hdtv[ .\-_]?rip|dsr(ip)?|sat[ .\-_]?rip)(?=[ \]_.-]|$)/i,
    CAM: /(?<![^ [_\-.])(cam|hdcam|cam[ .\-_]?rip)(?=[ \]_.-]|$)/i,
    TS: /(?<![^ [_\-.])(telesync|ts|hd[ .\-_]?ts|pdvd|predvd(rip)?)(?=[ \]_.-]|$)/i,
    TC: /(?<![^ [_\-.])(telecine|tc|hd[ .\-_]?tc)(?=[ \]_.-]|$)/i,
    SCR: /(?<![^ [_\-.])(((dvd|bd|web)?[ .\-_]?)?(scr(eener)?))(?=[ \]_.-]|$)/i,
  },
  visualTags: {
    'HDR10+': /(?<![^ [_\-.])(hdr10[ .\-_]?[+]|hdr10plus)(?=[ \]_.-]|$)/i,
    HDR10: /(?<![^ [_\-.])(hdr10)(?=[ \]_.-]|$)/i,
    HDR: /(?<![^ [_\-.])(hdr)(?=[ \]_.-]|$)/i,
    DV: /(?<![^ [_\-.])(dolby[ .\-_]?vision(?:[ .\-_]?atmos)?|dv)(?=[ \]_.-]|$)/i,
    IMAX: /(?<![^ [_\-.])(imax)(?=[ \]_.-]|$)/i,
    AI: /(?<![^ [_\-.])(ai[ .\-_]?(upscale|enhanced|remaster))(?=[ \]_.-]|$)/i,
  },
  audioTags: {
    Atmos: /(?<![^ [_\-.])(atmos)(?=[ \]_.-]|$)/i,
    'DD+':
      /(?<![^ [_\-.])((?:ddp|dolby[ .\-_]?digital[ .\-_]?plus)(?:[ .\-_]?(5\.1|7\.1))?)(?=[ \]_.-]|$)/i,
    DD: /(?<![^ [_\-.])((?:dd|dolby[ .\-_]?digital)(?:[ .\-_]?(5\.1|7\.1))?)(?=[ \]_.-]|$)/i,
    'DTS-HD MA': /(?<![^ [_\-.])(dts[ .\-_]?hd[ .\-_]?ma)(?=[ \]_.-]|$)/i,
    'DTS-HD': /(?<![^ [_\-.])(dts[ .\-_]?hd)(?=[ \]_.-]|$)/i,
    DTS: /(?<![^ [_\-.])(dts)(?=[ \]_.-]|$)/i,
    TrueHD: /(?<![^ [_\-.])(true[ .\-_]?hd)(?=[ \]_.-]|$)/i,
    5.1: /(?<![^ [_\-.])((?:ddp|dd)?[ .\-_]?5\.1)(?=[ \]_.-]|$)/i,
    7.1: /(?<![^ [_\-.])((?:ddp|dd)?[ .\-_]?7\.1)(?=[ \]_.-]|$)/i,
    AC3: /(?<![^ [_\-.])(ac[ .\-_]?3)(?=[ \]_.-]|$)/i,
    AAC: /(?<![^ [_\-.])(aac)(?=[ \]_.-]|$)/i,
  },
  encodes: {
    x265: /(?<![^ [_\-.])(x265|h265|h\.265)(?=[ \]_.-]|$)/i,
    x264: /(?<![^ [_\-.])(x264|h264|h\.264)(?=[ \]_.-]|$)/i,
    HEVC: /(?<![^ [_\-.])(hevc)(?=[ \]_.-]|$)/i,
    AVC: /(?<![^ [_\-.])(avc)(?=[ \]_.-]|$)/i,
  },
  languages: {
    English: /(?<![^ [_\-.])(english|eng)(?=[ \]_.-]|$)/i,
    Hindi: /(?<![^ [_\-.])(hindi|hin)(?=[ \]_.-]|$)/i,
    Tamil: /(?<![^ [_\-.])(tamil|tam)(?=[ \]_.-]|$)/i,
    Telugu: /(?<![^ [_\-.])(telugu)(?=[ \]_.-]|$)/i,
    Malayalam: /(?<![^ [_\-.])(malayalam)(?=[ \]_.-]|$)/i,
    Kannada: /(?<![^ [_\-.])(kannada)(?=[ \]_.-]|$)/i,
    Bengali: /(?<![^ [_\-.])(bengali)(?=[ \]_.-]|$)/i,
    Punjabi: /(?<![^ [_\-.])(punjabi)(?=[ \]_.-]|$)/i,
    Marathi: /(?<![^ [_\-.])(marathi)(?=[ \]_.-]|$)/i,
    French: /(?<![^ [_\-.])(french|fra)(?=[ \]_.-]|$)/i,
    Spanish: /(?<![^ [_\-.])(spanish|spa)(?=[ \]_.-]|$)/i,
    German: /(?<![^ [_\-.])(german|deu)(?=[ \]_.-]|$)/i,
    Italian: /(?<![^ [_\-.])(italian|ita)(?=[ \]_.-]|$)/i,
    Japanese: /(?<![^ [_\-.])(japanese|jpn)(?=[ \]_.-]|$)/i,
    Korean: /(?<![^ [_\-.])(korean|kor)(?=[ \]_.-]|$)/i,
    Chinese: /(?<![^ [_\-.])(chinese|chn)(?=[ \]_.-]|$)/i,
    Russian: /(?<![^ [_\-.])(russian|rus)(?=[ \]_.-]|$)/i,
    Multi: /(?<![^ [_\-.])(MULTi)(?=[ \]_.-]|$)/i,
    'Dual Audio': /(?<![^ [_\-.])(dual[ .\-_]?audio)(?=[ \]_.-]|$)/i,
  },
};
