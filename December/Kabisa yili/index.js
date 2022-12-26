function Kabisa(yil) {
    if(yil > 100 && (yil%400===0 || yil%4===0 || yil%100===1)){
return "Kabisa yili"
    }
    else if(yil < 100 && (yil%4===0 || yil%100===1)){
        return "Kabisa yili"
    }
    else{return "Kabisa yili emas"}
}
console.log(Kabisa(5));