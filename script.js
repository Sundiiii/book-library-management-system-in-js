

// ################### adding data in info array by using map function
const add = document.getElementById("btn1");
const t = document.getElementById("t");
const tb = document.getElementById("tb");
const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");

add.addEventListener("click", adddata);

var info = [
    {
        name: "rama", age: "30"
    }
];


function adddata() {
    let a = in1.value;
    console.log(in1.value);
    let b = in2.value;

    let in3 = { name: a, age: b }

    info.push(in3);
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td = document.createElement("td");

    info.map((val, indx) => {
        td1.textContent = val.name;
        td.textContent = val.age;
        tr.appendChild(td1);
        tr.appendChild(td);
        tb.appendChild(tr);
    });

}
adddata();