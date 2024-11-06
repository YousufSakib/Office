export const getShortMessage = (mess, len, ext = "...") => {
  if (mess.length > len) {
    return mess.slice(0, len) + ext;
  } else return mess;
};
