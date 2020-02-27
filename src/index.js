
var mas1=['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
var mas2=['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
var mas3=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
module.exports = function toReadable (number) {
  if(number>=0 && number<=10){
    for(let i=0;i<mas1.length;i++){
      if(number==i) return mas1[i];
    }

}
 if(number>10 && number<=20){

 return mas2[number-11];
}
else if(number>20 && number<100){
  
  if(number%10==0)return mas3[number/10-2];
  else return String(mas3[Math.ceil(number/10)-3]+" "+mas1[number%10]);
}
else if(number>=100 && number<1000){
  if(number%100==0)return String(mas1[Math.ceil(number/100)]+" "+"hundred");
  else if(number%100>=1 && number%100<=10)return String (mas1[Math.ceil(number/100)-1]+" "+"hundred"+" "+mas1[number%100]);
  else if(number%100>10 && number%100<=20){
    return String(mas1[Math.ceil(number/100)-1]+" "+"hundred"+" "+mas2[(number%100)-11]);
  }
  else if (number%100>20 && number%10==0){return String(mas1[Math.ceil(number/100)-1]+" "+"hundred"+" "+mas3[Math.ceil(((number%100)/10)-2)])}
  else if(number%100>20){return String(mas1[Math.ceil(number/100)-1]+" "+"hundred"+" "+mas3[Math.ceil(((number%100)/10)-3)]+" "+mas1[(number%100)%10]); }
}
 
}
