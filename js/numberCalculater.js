let array = [
    2, 9, 27, 54, 69, 78, 10, 14, 25, 43, 54, 65, 20, 33, 39, 42, 43, 78, 1, 3, 41, 55, 84, 85, 30, 51, 56, 59, 65, 68, 
    40, 43, 56, 59, 63, 88, 28, 39, 44, 57, 61, 88, 10, 30, 52, 53, 66, 87, 8, 11, 44, 86, 88, 89, 42, 45, 52, 65, 70, 85, 11, 15, 20, 
    40, 69, 73, 21, 24, 25, 61, 73, 74, 8, 13, 16, 27, 32, 62, 58, 68, 70, 74, 76, 89, 2, 25, 37, 54, 57, 87, 6, 37, 64, 71, 85, 87, 28,
    34, 49, 65, 79, 90, 1, 6, 10, 61, 63, 64, 21, 25, 40, 50, 71, 87, 21, 25, 40, 50, 71, 87, 1, 6, 24, 36, 82, 83, 3, 14, 21, 31, 84, 89,
    14, 22, 36, 47, 59, 61, 14, 55, 65, 68, 78, 88, 28, 37, 41, 44, 52, 84, 1, 7, 34, 37, 45, 49, 14, 16, 47, 49, 53, 56, 17, 55, 59, 61, 62,
    90, 53, 64, 72, 74, 87, 89, 2, 3, 10, 38, 64, 70, 3, 4, 31, 80, 81, 87, 8, 19, 35, 59, 86, 90, 12, 27, 43, 48, 63, 66, 17, 21, 32, 40, 55, 
    76, 44, 54, 56, 63, 76, 77, 3, 5, 10, 44, 76, 77, 5, 15, 39, 72, 76, 80, 7, 60, 68, 71, 79, 80, 7, 20, 21, 31, 67, 89, 6, 58, 64, 73, 76,
    86, 1, 30, 36, 49, 75, 85, 3, 14, 42, 52, 69, 81, 12, 16, 40, 46, 47, 83, 22, 56, 60, 73, 76, 80, 5, 6, 29, 59, 68, 74, 8, 21, 38, 42,
    49, 51, 11, 19, 61, 62, 75, 76, 14, 18, 19, 33, 34, 80, 7, 32, 33, 36, 45, 47, 9, 19, 40, 62, 67, 71, 21, 40, 62, 66, 73, 85, 15, 18, 22,
    26, 66, 77, 9, 19, 40, 62, 67, 71, 21, 40, 62, 66, 73, 85, 15, 18, 22, 26, 66, 77, 7, 9, 70, 72, 77, 86, 46, 53, 55, 60, 64, 90, 8, 14, 25,
    59, 60, 88, 32, 41, 50, 57, 67, 89, 21, 28, 38, 42, 66, 88, 9, 10, 26, 27, 77, 86, 1, 11, 12, 15, 20, 83, 20, 24, 25, 49, 57, 68, 2, 25, 34,
    67, 73, 77, 20, 31, 41, 43, 48, 79, 22, 27, 51, 55, 77, 86, 22, 25, 38, 41, 61, 68, 6, 21, 56, 63, 81, 85, 3, 6, 14, 17, 54, 60, 4, 23, 52, 65,
    79, 88
	



        
		
];
    let a = [];
// Цикл для номерів
     for(i = 1; i <= 99; i++) {
          totalNumbers = a.push(i);
     }
// Цикл для підрахунку к-сті номерів в масиві  
    for (let i = 0; i < a.length; i++) {
        
        a[i] = array.filter(x => x === a[i]).length;
    }
    
    
    
    document.getElementById("demo1").innerHTML = `
    Number 1:   ${a[0]}  Number 2:  ${a[1]}  Number 3:  ${a[2]}  Number 4:  ${a[3]}  
    Number 5:   ${a[4]}  Number 6:  ${a[5]}  Number 7:  ${a[6]}  Number 8:  ${a[7]} 
    Number 9:  ${a[8]}  Number 10:  ${a[9]}
    
    Number 11:  ${a[10]} Number 12:  ${a[11]} Number 13:  ${a[12]} Number 14:  ${a[13]}  
    Number 15:  ${a[14]} Number 16:  ${a[15]} Number 17:  ${a[16]} Number 18:  ${a[17]} 
    Number 19:  ${a[18]} Number 20:  ${a[19]} 

    Number 21:  ${a[20]} Number 22:  ${a[21]} Number 23:  ${a[22]} Number 24:  ${a[23]} 
    Number 25:  ${a[24]} Number 26:  ${a[25]} Number 27:  ${a[26]} Number 28:  ${a[27]} 
    Number 29:  ${a[28]} Number 30:  ${a[29]} 

    Number 31:  ${a[30]} Number 32:  ${a[31]} Number 33:  ${a[32]} Number 34:  ${a[33]} 
    Number 35:  ${a[34]} Number 36:  ${a[35]} Number 37:  ${a[36]} Number 38:  ${a[37]} 
    Number 39:  ${a[38]} Number 40:  ${a[39]} 

    Number 41:  ${a[40]} Number 42:  ${a[41]} Number 43:  ${a[42]} Number 44:  ${a[43]} 
    Number 45:  ${a[44]} Number 46:  ${a[45]} Number 47:  ${a[46]} Number 48:  ${a[47]} 
    Number 49:  ${a[48]} Number 50:  ${a[49]} 

    Number 51:  ${[50]} Number 52:  ${[51]} Number 53:  ${[52]} Number 54:  ${[53]} 
    Number 55:  ${[54]} Number 56:  ${[55]} Number 57:  ${[56]} Number 58:  ${[57]} 
    Number 59:  ${[58]} Number 60:  ${[59]} 

    Number 61:  ${a[60]} Number 62:  ${a[61]} Number 63:  ${a[62]} Number 64:  ${a[63]} 
    Number 65:  ${a[64]} Number 66:  ${a[65]} Number 67:  ${a[66]} Number 68:  ${a[67]} 
    Number 69:  ${a[68]} Number 70:  ${a[69]} 

    Number 71:  ${a[70]} Number 72:  ${a[71]} Number 73:  ${a[72]} Number 74:  ${a[73]} 
    Number 75:  ${a[74]} Number 76:  ${a[75]} Number 77:  ${a[76]} Number 78:  ${a[77]} 
    Number 79:  ${a[78]} Number 80:  ${a[79]} 


    Number 81:  ${a[80]} Number 82:  ${a[81]} Number 83:  ${a[82]} Number 84:  ${a[83]} 
    Number 85:  ${a[84]} Number 86:  ${a[85]} Number 87:  ${a[86]} Number 88:  ${a[87]} 
    Number 89:  ${a[88]} Number 90:  ${a[89]} 

    Number 91:  ${a[90]} Number 92:  ${a[91]} Number 93:  ${a[92]} Number 94:  ${a[93]} 
    Number 95:  ${a[94]} Number 96:  ${a[95]} Number 97:  ${a[96]} Number 98:  ${a[97]} 
    Number 99:  ${a[98]} `

// Привязка номера і к-сті та сортовка мах до min значень   






      a = a.map((item, index) => {
        return { number: index + 1, quantity: item }
    });

    a.sort((item1, item2) => {
        return item2.quantity - item1.quantity
    });

   

  


    


    document.getElementById("demo3").innerHTML = `
    Number ${a[0].number} : ${a[0].quantity}
    Number ${a[1].number} : ${a[1].quantity} Number ${a[2].number} : ${a[2].quantity} 
    Number ${a[3].number} : ${a[3].quantity} Number ${a[4].number} : ${a[4].quantity} 
    Number ${a[5].number} : ${a[5].quantity} Number ${a[6].number} : ${a[6].quantity} 
    Number ${a[7].number} : ${a[7].quantity} Number ${a[8].number} : ${a[8].quantity} 
    Number ${a[9].number} : ${a[9].quantity} Number ${a[10].number} : ${a[10].quantity} 
    
    Number ${a[11].number} : ${a[11].quantity} Number ${a[12].number} : ${a[12].quantity}
    Number ${a[13].number} : ${a[13].quantity} Number ${a[14].number} : ${a[14].quantity}
    Number ${a[15].number} : ${a[15].quantity} Number ${a[16].number} : ${a[16].quantity}
    Number ${a[17].number} : ${a[17].quantity} Number ${a[18].number} : ${a[18].quantity}
    Number ${a[19].number} : ${a[19].quantity} Number ${a[20].number} : ${a[20].quantity}
   
    Number ${a[21].number} : ${a[21].quantity} Number ${a[22].number} : ${a[22].quantity} 
    Number ${a[23].number} : ${a[23].quantity} Number ${a[24].number} : ${a[24].quantity} 
    Number ${a[25].number} : ${a[25].quantity} Number ${a[26].number} : ${a[26].quantity} 
    Number ${a[27].number} : ${a[27].quantity} Number ${a[28].number} : ${a[28].quantity} 
    Number ${a[29].number} : ${a[29].quantity} Number ${a[30].number} : ${a[30].quantity}

    Number ${a[31].number} : ${a[31].quantity} Number ${a[32].number} : ${a[32].quantity}
    Number ${a[33].number} : ${a[33].quantity} Number ${a[34].number} : ${a[34].quantity}
    Number ${a[35].number} : ${a[35].quantity} Number ${a[36].number} : ${a[36].quantity}
    Number ${a[37].number} : ${a[37].quantity} Number ${a[38].number} : ${a[38].quantity}
    Number ${a[39].number} : ${a[39].quantity} Number ${a[40].number} : ${a[40].quantity}

    Number ${a[41].number} : ${a[41].quantity} Number ${a[42].number} : ${a[42].quantity}
    Number ${a[43].number} : ${a[43].quantity} Number ${a[44].number} : ${a[44].quantity}
    Number ${a[45].number} : ${a[45].quantity} Number ${a[46].number} : ${a[46].quantity}
    Number ${a[47].number} : ${a[47].quantity} Number ${a[48].number} : ${a[48].quantity}
    Number ${a[49].number} : ${a[49].quantity} Number ${a[50].number} : ${a[50].quantity}

    Number ${a[51].number} : ${a[51].quantity} Number ${a[52].number} : ${a[52].quantity} 
    Number ${a[53].number} : ${a[53].quantity} Number ${a[54].number} : ${a[54].quantity} 
    Number ${a[55].number} : ${a[55].quantity} Number ${a[56].number} : ${a[56].quantity} 
    Number ${a[57].number} : ${a[57].quantity} Number ${a[58].number} : ${a[58].quantity} 
    Number ${a[59].number} : ${a[59].quantity} Number ${a[60].number} : ${a[60].quantity} 

    Number ${a[61].number} : ${a[61].quantity} Number ${a[62].number} : ${a[62].quantity} 
    Number ${a[63].number} : ${a[63].quantity} Number ${a[64].number} : ${a[64].quantity} 
    Number ${a[65].number} : ${a[65].quantity} Number ${a[66].number} : ${a[66].quantity} 
    Number ${a[67].number} : ${a[67].quantity} Number ${a[68].number} : ${a[68].quantity} 
    Number ${a[69].number} : ${a[69].quantity} Number ${a[70].number} : ${a[70].quantity} 

    Number ${a[71].number} : ${a[71].quantity} Number ${a[72].number} : ${a[72].quantity} 
    Number ${a[73].number} : ${a[73].quantity} Number ${a[74].number} : ${a[74].quantity} 
    Number ${a[75].number} : ${a[75].quantity} Number ${a[76].number} : ${a[76].quantity} 
    Number ${a[77].number} : ${a[77].quantity} Number ${a[78].number} : ${a[78].quantity} 
    Number ${a[79].number} : ${a[79].quantity} Number ${a[80].number} : ${a[80].quantity} 

    Number ${a[81].number} : ${a[81].quantity} Number ${a[82].number} : ${a[82].quantity} 
    Number ${a[83].number} : ${a[83].quantity} Number ${a[84].number} : ${a[84].quantity} 
    Number ${a[85].number} : ${a[85].quantity} Number ${a[86].number} : ${a[86].quantity} 
    Number ${a[87].number} : ${a[87].quantity} Number ${a[88].number} : ${a[88].quantity} 
    Number ${a[89].number} : ${a[89].quantity} Number ${a[90].number} : ${a[90].quantity}  

    Number ${a[91].number} : ${a[91].quantity} Number ${a[92].number} : ${a[92].quantity} 
    Number ${a[93].number} : ${a[93].quantity} Number ${a[94].number} : ${a[94].quantity} 
    Number ${a[95].number} : ${a[95].quantity} Number ${a[96].number} : ${a[96].quantity} 
    Number ${a[97].number} : ${a[97].quantity} Number ${a[98].number} : ${a[98].quantity} `
