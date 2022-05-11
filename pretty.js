
//creating table from input json data

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input',()=>{
    const ugly = input.value;
    const object = JSON.parse(ugly);
    
    const pretty = Object.values(object).flat();

    let col=[];

    for (let i = 0; i < pretty.length; i++) {
        for (let key in pretty[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    //creating table element
    const table = document.createElement("table");
    
    let tr = table.insertRow(-1);                   

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");     
        th.innerHTML = col[i];
        tr.appendChild(th);
    }


    for (let i = 0; i < pretty.length; i++) {

        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = pretty[i][col[j]];
        }
    }
//printing out table
const er = document.getElementById("output");
er.innerHTML ='';
er.appendChild(table);

const str = JSON.stringify(table,null,"\t");
output.value=str;

});