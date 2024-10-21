export default function Power(numOne : number, numTwo : number){
    let res : number = 1;
    for(let i = 0; i < numTwo; i++){
        res = res * numOne;
    }
    return (res + "");
}