export default function (v){
 if(v === "i1"){
   return "Os dados estão disponíveis online, de forma gratuita e sem necessidade de solicitar acesso?";
 }else if(v === "i2"){
   return "Os dados estão disponíveis online sem necessidade de preencher cadastro?";
}else if(v === "i3"){
  return "O conjunto de dados está disponível de forma gratuita por API ou Web Service?";
}else if(v === "i4"){
  return "O conjunto de dados indica uma licença livre ou de domínio público?";
}else if(v === "i5"){
  return "O conjunto de dados fornece metadados?";
}else if(v === "i6"){
  return "O conjunto de dados fornece um dicionário de dados?";
}else if(v ==="i7"){
  return "O conjunto de dados está em formato de arquivo não-proprietário e processável por máquina?";
}else if(v === "i8"){
  return "Os dados estão em um nível de desagregação máxima?";
}else if(v === "i9"){
  return "Os registros dos conjuntos de dados estão geolocalizados?";
}else if(v === "i10"){
  return "O conjunto de dados está atualizado de acordo com a periodicidade declarada?";
}else if(v === "i11"){
  return "Existe série histórica disponível para esse conjunto de dados?";
 }else if(v === "g1"){
  return "O município tem Política de Dados Abertos em forma de lei ou decreto?";
}else if(v === "g2"){
  return "O município elabora e publica Planos de Dados Abertos?";
}else if(v === "g3"){
 return "A construção dos Planos de Dados Abertos preveem no mínimo uma forma de consulta à sociedade?";
}else if(v === "g4"){
 return "O município tem Portal de Dados Abertos?";
}else if(v === "g5"){
 return "O município tem inventário de dados disponível para o público";
}else if(v === "g6"){
 return "O município publica Relatório de Impacto de Tratamento de Dados Pessoais ou alguma outra forma de avaliação da Lei Geral de Proteção de Dados (LGPD)?";
}else if(v ==="g7"){
 return "O município tem um Encarregado de Dados Pessoais nomeado e indicado no site da Prefeitura?";
}else if(v === "g8"){
 return "O município tem canal de feedback para os dados abertos publicados?";
}else if(v === "g9"){
 return "O feedback fica disponível?";
}else if(v === "g10"){
 return "O município regulamentou a Lei do Governo Digital (LGD)?";
}else{
  return ""
 }
}