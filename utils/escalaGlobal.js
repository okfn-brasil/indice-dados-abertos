export default function (v){
 if(v>80){
   return "alto";
 }else if(v>60){
   return "bom";
 }else if(v>40){
   return "medio";
 }else if(v>20){
   return "baixo";
 }else if(v>=0){
   return "opaco";
 }else{
  return ""
 }
}