export const scrollto = (id)=>{
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}