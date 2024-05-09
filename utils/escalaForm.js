export default function (v){
 if([1,"1","Sim"].includes(v)){
   return "sim";
 }else if([0,"0","Não"].includes(v)){
   return "nao";
 }else if(v=="NA"){
   return "nao-aplicado";
 }else{
  return "nao-localizado"
 }
}