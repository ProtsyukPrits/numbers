let starArray = [62, 79, 49, 87, 40, 2, 26, 20, 8, 61, 48, 24, 31, 74, 77, 23, 80, 37, 18, 78, 68, 56, 82, 12,
    57, 59, 72, 4, 39, 53, 22, 4, 75, 71, 6, 68, 89, 45, 73, 3, 16, 4, 53, 58, 24, 19, 19, 58, 67, 78, 58, 67,
    78, 20, 72, 31, 90, 6, 23, 80, 53, 11, 46, 42, 3, 61, 78, 53




];
    let b = [];
// Цикл для номерів
     for(i = 1; i <= 99; i++) {
          totalNumbers = b.push(i);
     }
// Цикл для підрахунку к-сті номерів в масиві  
    for (let i = 0; i < b.length; i++) {
        
        b[i] = starArray.filter(x => x === b[i]).length;
    }

    
    
    document.getElementById("demo2").innerHTML = `
    Number 1:  ${b[0]}  Number 2:  ${b[1]}  Number 3:  ${b[2]}  Number 4:  ${b[3]}  
    Number 5:  ${b[4]}  Number 6:  ${b[5]}  Number 7:  ${b[6]}  Number 8:  ${b[7]} 
    Number 9:  ${b[8]}  Number 10:  ${b[9]}
    
    Number 11:  ${b[10]} Number 12:  ${b[11]} Number 13:  ${b[12]} Number 14:  ${b[13]}  
    Number 15:  ${b[14]} Number 16:  ${b[15]} Number 17:  ${b[16]} Number 18:  ${b[17]} 
    Number 19:  ${b[18]} Number 20:  ${b[19]} 

    Number 21:  ${b[20]} Number 22:  ${b[21]} Number 23:  ${b[22]} Number 24:  ${b[23]} 
    Number 25:  ${b[24]} Number 26:  ${b[25]} Number 27:  ${b[26]} Number 28:  ${b[27]} 
    Number 29:  ${b[28]} Number 30:  ${b[29]} 

    Number 31:  ${b[30]} Number 32:  ${b[31]} Number 33:  ${b[32]} Number 34:  ${b[33]} 
    Number 35:  ${b[34]} Number 36:  ${b[35]} Number 37:  ${b[36]} Number 38:  ${b[37]} 
    Number 39:  ${b[38]} Number 40:  ${b[39]} 

    Number 41:  ${b[40]} Number 42:  ${b[41]} Number 43:  ${b[42]} Number 44:  ${b[43]} 
    Number 45:  ${b[44]} Number 46:  ${b[45]} Number 47:  ${b[46]} Number 48:  ${b[47]} 
    Number 49:  ${b[48]} Number 50:  ${b[49]} 

    Number 51:  ${b[50]} Number 52:  ${b[51]} Number 53:  ${b[52]} Number 54:  ${b[53]} 
    Number 55:  ${b[54]} Number 56:  ${b[55]} Number 57:  ${b[56]} Number 58:  ${b[57]} 
    Number 59:  ${b[58]} Number 60:  ${b[59]} 

    Number 61:  ${b[60]} Number 62:  ${b[61]} Number 63:  ${b[62]} Number 64:  ${b[63]} 
    Number 65:  ${b[64]} Number 66:  ${b[65]} Number 67:  ${b[66]} Number 68:  ${b[67]} 
    Number 69:  ${b[68]} Number 70:  ${b[69]} 

    Number 71:  ${b[70]} Number 72:  ${b[71]} Number 73:  ${b[72]} Number 74:  ${b[73]} 
    Number 75:  ${b[74]} Number 76:  ${b[75]} Number 77:  ${b[76]} Number 78:  ${b[77]} 
    Number 79:  ${b[78]} Number 80:  ${b[79]} 


    Number 81:  ${b[80]} Number 82:  ${b[81]} Number 83:  ${b[82]} Number 84:  ${b[83]} 
    Number 85:  ${b[84]} Number 86:  ${b[85]} Number 87:  ${b[86]} Number 88:  ${b[87]} 
    Number 89:  ${b[88]} Number 90:  ${b[89]} 

    Number 91:  ${b[90]} Number 92:  ${b[91]} Number 93:  ${b[92]} Number 94:  ${b[93]} 
    Number 95:  ${b[94]} Number 96:  ${b[95]} Number 97:  ${b[96]} Number 98:  ${b[97]} 
    Number 99:  ${b[98]} `

// Привязка номера і к-сті та сортовка мах до min значень    
    b = b.map((item, index) => {
        return { number: index + 1, quantity: item }
    });

     b.sort((item1, item2) => {
         return item2.quantity - item1.quantity
      
     });
    
document.getElementById("demo4").innerHTML =`
    Number ${b[0].number} : ${b[0].quantity}
    Number ${b[1].number} : ${b[1].quantity} Number ${b[2].number} : ${b[2].quantity} 
    Number ${b[3].number} : ${b[3].quantity} Number ${b[4].number} : ${b[4].quantity} 
    Number ${b[5].number} : ${b[5].quantity} Number ${b[6].number} : ${b[6].quantity} 
    Number ${b[7].number} : ${b[7].quantity} Number ${b[8].number} : ${b[8].quantity} 
    Number ${b[9].number} : ${b[9].quantity} Number ${b[10].number} : ${b[10].quantity} 
    
    Number ${b[11].number} : ${b[11].quantity} Number ${b[12].number} : ${b[12].quantity}
    Number ${b[13].number} : ${b[13].quantity} Number ${b[14].number} : ${b[14].quantity}
    Number ${b[15].number} : ${b[15].quantity} Number ${b[16].number} : ${b[16].quantity}
    Number ${b[17].number} : ${b[17].quantity} Number ${b[18].number} : ${b[18].quantity}
    Number ${b[19].number} : ${b[19].quantity} Number ${b[20].number} : ${b[20].quantity}
   
    Number ${b[21].number} : ${b[21].quantity} Number ${b[22].number} : ${b[22].quantity} 
    Number ${b[23].number} : ${b[23].quantity} Number ${b[24].number} : ${b[24].quantity} 
    Number ${b[25].number} : ${b[25].quantity} Number ${b[26].number} : ${b[26].quantity} 
    Number ${b[27].number} : ${b[27].quantity} Number ${b[28].number} : ${b[28].quantity} 
    Number ${b[29].number} : ${b[29].quantity} Number ${b[30].number} : ${b[30].quantity}

    Number ${b[31].number} : ${b[31].quantity} Number ${b[32].number} : ${b[32].quantity}
    Number ${b[33].number} : ${b[33].quantity} Number ${b[34].number} : ${b[34].quantity}
    Number ${b[35].number} : ${b[35].quantity} Number ${b[36].number} : ${b[36].quantity}
    Number ${b[37].number} : ${b[37].quantity} Number ${b[38].number} : ${b[38].quantity}
    Number ${b[39].number} : ${b[39].quantity} Number ${b[40].number} : ${b[40].quantity}

    Number ${b[41].number} : ${b[41].quantity} Number ${b[42].number} : ${b[42].quantity}
    Number ${b[43].number} : ${b[43].quantity} Number ${b[44].number} : ${b[44].quantity}
    Number ${b[45].number} : ${b[45].quantity} Number ${b[46].number} : ${b[46].quantity}
    Number ${b[47].number} : ${b[47].quantity} Number ${b[48].number} : ${b[48].quantity}
    Number ${b[49].number} : ${b[49].quantity} Number ${b[50].number} : ${b[50].quantity}

    Number ${b[51].number} : ${b[51].quantity} Number ${b[52].number} : ${b[52].quantity} 
    Number ${b[53].number} : ${b[53].quantity} Number ${b[54].number} : ${b[54].quantity} 
    Number ${b[55].number} : ${b[55].quantity} Number ${b[56].number} : ${b[56].quantity} 
    Number ${b[57].number} : ${b[57].quantity} Number ${b[58].number} : ${b[58].quantity} 
    Number ${b[59].number} : ${b[59].quantity} Number ${b[60].number} : ${b[60].quantity} 

    Number ${b[61].number} : ${b[61].quantity} Number ${b[62].number} : ${b[62].quantity} 
    Number ${b[63].number} : ${b[63].quantity} Number ${b[64].number} : ${b[64].quantity} 
    Number ${b[65].number} : ${b[65].quantity} Number ${b[66].number} : ${b[66].quantity} 
    Number ${b[67].number} : ${b[67].quantity} Number ${b[68].number} : ${b[68].quantity} 
    Number ${b[69].number} : ${b[69].quantity} Number ${b[70].number} : ${b[70].quantity} 

    Number ${b[71].number} : ${b[71].quantity} Number ${b[72].number} : ${b[72].quantity} 
    Number ${b[73].number} : ${b[73].quantity} Number ${b[74].number} : ${b[74].quantity} 
    Number ${b[75].number} : ${b[75].quantity} Number ${b[76].number} : ${b[76].quantity} 
    Number ${b[77].number} : ${b[77].quantity} Number ${b[78].number} : ${b[78].quantity} 
    Number ${b[79].number} : ${b[79].quantity} Number ${b[80].number} : ${b[80].quantity} 

    Number ${b[81].number} : ${b[81].quantity} Number ${b[82].number} : ${b[82].quantity} 
    Number ${b[83].number} : ${b[83].quantity} Number ${b[84].number} : ${b[84].quantity} 
    Number ${b[85].number} : ${b[85].quantity} Number ${b[86].number} : ${b[86].quantity} 
    Number ${b[87].number} : ${b[87].quantity} Number ${b[88].number} : ${b[88].quantity} 
    Number ${b[89].number} : ${b[89].quantity} Number ${b[90].number} : ${b[90].quantity}  

    Number ${b[91].number} : ${b[91].quantity} Number ${b[92].number} : ${b[92].quantity} 
    Number ${b[93].number} : ${b[93].quantity} Number ${b[94].number} : ${b[94].quantity} 
    Number ${b[95].number} : ${b[95].quantity} Number ${b[96].number} : ${b[96].quantity} 
    Number ${b[97].number} : ${b[97].quantity} Number ${b[98].number} : ${b[98].quantity} `
   
    