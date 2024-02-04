export const textWrap = (originalText, maxLength = 20) => {
  if (originalText.length > maxLength) {
    return originalText.substring(0, maxLength) + "...";
  }
  return originalText;
};
