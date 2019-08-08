export const cate = (val) => {
  if (!val) return;
  switch (Number(val)) {
    case 1:
      return "Layout";
    case 2:
      return "JavaScript";
    case 3:
      return "Utils";
    default:
      return "Unknown";
  }
}
