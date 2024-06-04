import request from "request";
import XLSX from "xlsx";
import fs from 'fs';
import https from 'https';

const fileURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSKx8Tj6eN3UrcvQ4SnQHI1nDeTdNKLwmua2Mgg2-oy1x4hxaSPYRBoYC7taYZwynstrbLdmcd9feis/pub?output=xlsx";

const path = `./assets/data.json`; 

function createSlug(title) {
 var normalizedTitle = title.normalize('NFD').replace(/[\u0300-\u036f]/g, "");;
 var slug = normalizedTitle.replace(/ /g, '-');
 slug = slug.replace(/[^a-zA-Z0-9\-]/g, '');
 slug = slug.toLowerCase();
 return slug;
}

request.get(fileURL, { encoding: null }, function (err, res, data) {
  if (err || res.statusCode != 200) {
    console.log(res.statusCode);
    return;
  }
  const buf = Buffer.from(data);
  const workbook = XLSX.read(buf);

  const errors = [];

  const conjuntos = {};
  var j = XLSX.utils.sheet_to_json(workbook.Sheets['id_odi']);
  j.forEach(x=>{
    // id_odi   label   descricao

    let id = String(x['id_odi']).trim();
    if (id.charAt(id.length - 1) === '.') id = id.slice(0, -1);
    let label = x['label'];
    let descricao = x['descricao'];
    let score = Boolean(x['score']);

    id.split('.').reduce((prev, curr) => {
        curr = String(curr);
        let a = {
            key: id,
            label: label,
            slug: createSlug(label),
            descricao: descricao,
            score: score,
            children: {}
        };
        if(!prev[curr]) prev[curr] = a;
        return prev[curr].children;
    }, conjuntos);
  });

  const capitais = {};
  var j = XLSX.utils.sheet_to_json(workbook.Sheets['id_capital']);
  j.forEach(x=>{
    //id_capital    nome_capital
    let id_capital = x['id_capital'];
    let nome_capital = x['nome_capital'];

    capitais[String(id_capital)] = {
        key: id_capital, 
        nome: nome_capital, 
        slug: createSlug(nome_capital),
        entradas: {},
        notas: {},
        geral: null,
    };
  });

  var j = XLSX.utils.sheet_to_json(workbook.Sheets['data_entry']);
  j.forEach(x=>{
    //id_capital    id_odi indicador   valor
    let id_capital = x['id_capital'];
    let indicador = x['indicador'];
    let valor = x['valor'];
    if(valor=='❌')valor=0;
    if(valor=='⭐')valor=1;
    if(valor=='0,5')valor=1;
    if(valor=='1 x 0')valor=0;
    if(valor=='0 x 1')valor=0;
    let id_odi = String(x['id_odi']).trim();
    if (id_odi.charAt(id_odi.length - 1) === '.') id_odi = id_odi.slice(0, -1);

    let a1 = String(id_capital);
    let a2 = String(id_odi);
    let a3 = String(indicador);
    if(!capitais[a1].entradas[a2]) capitais[a1].entradas[a2] = {};
    capitais[a1].entradas[a2][a3] = valor;
  });

  var j = XLSX.utils.sheet_to_json(workbook.Sheets['consolidado_pontuacoes']);
  j.forEach(x=>{
    //id_capital    id_odi  valor
    let id_capital = x['id_capital'];
    let valor = x['score'];
    let id_odi = String(x['id_odi']).trim();
    if (id_odi.charAt(id_odi.length - 1) === '.') id_odi = id_odi.slice(0, -1);

    let a1 = String(id_capital);
    let a2 = String(id_odi);
    capitais[a1].notas[a2] = valor;
  });

  for(let i in capitais){
    let x = capitais[i];
    let g = 0;
    let c = 0;

    for(let ii in x.notas){
      if(!ii.includes('.')){
        let n = x.notas[ii];
        g+=n;
        c++;
      }
    }
    capitais[i].geral = Math.round(g/c);
    //if(!g) delete capitais[i];
  }


  let alldata = {
    conjuntos: conjuntos,
    capitais: capitais
  };

  if(errors.length){
    console.log(errors.join('\n'));
  }else{
    const filePath = fs.createWriteStream(path);
    filePath.write(JSON.stringify(alldata));
    console.log('Finalizado');
  }

});