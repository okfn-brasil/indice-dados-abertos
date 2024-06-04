export default function (g,k){
  return g.sort((a,b)=>{
    let aa,bb;
    if(k=='geral'){
      aa=a.geral;
      bb=b.geral;
    }else{
      aa=Math.round(a.notas[k]);
      bb=Math.round(b.notas[k]);
    }
    if(aa!=bb) return bb-aa;
    if (a.nome < b.nome) return -1;
    if (a.nome > b.nome) return 1;
    return 0;
  });
}