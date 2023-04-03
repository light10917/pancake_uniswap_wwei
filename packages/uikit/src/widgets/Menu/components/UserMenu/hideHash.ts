export function hideHash(str: any, len = 4) {
  return str ? `${str.slice(0, len)}....${str.slice(-len)}` : ""
}