export const scoreClassifier = (score) =>{
    if(score>=75 && score<=100){
        return 4.0
    }
    else if(score>=70 && score<=74){
        return 3.5
    }
    else if(score>=65 && score<=69){
        return 3.25
    }
    else if(score>=60 && score<=64){
        return 3.0
    }
    else if(score>=55 && score<=59){
        return 2.75
    }
    else if(score>=50 && score<=54){
        return 2.5
    }
    else if(score>=45 && score<=49){
        return 2.25
    }
    else if(score>=40 && score<=44){
        return 2.00
    }
    else {
        return 0.00
    }
}