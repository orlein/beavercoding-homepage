export default function sluggify(str: string) {
  return str.toLowerCase().replace(/ /g, '-').replace(/--+/g, '-');
}
