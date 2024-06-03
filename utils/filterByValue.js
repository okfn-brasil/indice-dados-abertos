export default function(object, key, value){
  return Object.values(object).find(x => x[key] === value);
}