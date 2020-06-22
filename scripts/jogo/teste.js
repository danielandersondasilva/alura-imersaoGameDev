var matriz = [[]];
matriz.pop()
// matriz.push([10*10,10*20])
// matriz.push([10*30,10*40])

//  matriz.splice((0*220),0,(0,0))
// matriz.splice([0][1],0,0*220)
// matriz.splice([1][0],0,1*220)
// matriz.splice([1][1],0,0*220)
// matriz[0].push('oi');
// console.log(matriz[0][0]);

for (let i = 0; i < 4; i++) {
    for (let index = 0; index < 4; index++) {
        matriz.push([index*220,i*270])
//         matriz.splice([i][index],0,index*220);
//         console.log(i,index);
        
        // matriz[i][index].push('po')
        // console.log(i, index);

        //     matriz[i].push(220 * i)
        //     // console.log(matriz[0][0]);
        // }



     }
 }
console.table(matriz);
console.log(matriz);
