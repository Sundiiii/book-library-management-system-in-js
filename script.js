const bookNameElement = document.getElementById("book-name");
const IssueToElement = document.getElementById("issue-to");
const btnElement = document.getElementById("btn");
const tablebody = document.querySelector("tbody");
const books = [
    {
        bookname: "bhagvatgita",
        issuedto: "nilesh",
        issuedtd: "22",
        status: "uploading.."
    }];
function renderbooksinsideTable() {
    while (tablebody.firstChild) {
        tablebody.removeChild(tablebody.firstChild);
    }
    books.map(function (valueasBook, indexasId) {
        // this will create row and add it inside tbody
        createtableRow(valueasBook, tablebody, indexasId + 1);
    })
}

function createtableRow(data, tablebody, indexasId) {
    //  first create tr tag
    const tr = document.createElement("tr");
    // create 5 th tags to add id,bookname,status...all
    const id = document.createElement("td");
    id.textContent = indexasId;
    const bookname = document.createElement("td");
    bookname.textContent = data.bookname;
    const issuedto = document.createElement("td");
    issuedto.textContent = data.issuedto;
    const issuedtd = document.createElement("td");
    issuedtd.textContent = data.issuedtd;
    const status = document.createElement("td");
    status.textContent = data.status;
    tr.appendChild(id);
    tr.appendChild(bookname);
    tr.appendChild(issuedto);
    tr.appendChild(issuedtd);
    tr.appendChild(status);
    tablebody.appendChild(tr);
}

function handleformSubmit() {
    const bookname = bookNameElement.value;
    const issuedTo = IssueToElement.value;
    if (bookname && issuedTo) {

        const book = {
            bookname: bookname,
            issuedto: issuedTo,
            issuedtd: new Date().toUTCString(),
            status: "uploading"
        };
        books.push(book);
        renderbooksinsideTable();
    } else {
        alert("you are trying to enter empty details");
    }
}
btnElement.addEventListener("click", handleformSubmit);
renderbooksinsideTable();



// ###################
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