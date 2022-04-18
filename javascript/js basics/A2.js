function max(x,y,z){
    if(x>y && x>z)
    {
        console.log(x);
    }
    else if(y>x && y>z){
        console.log(y);
    }
    else{
        console.log(z);
    }
}
max(1,2,3);
max(1,3,2);
max(3,2,1);