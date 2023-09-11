var CalculationsArr = []
let i = 1
var table;

let val1;
let val2;
let add,sub,div,mul,percent,sq;

$(document).ready(function () {
    table = $('#calculationTable').DataTable({
        data: CalculationsArr,
        columns: [
            { data: "value1" },
            { data: "value2" },
            { data: "addition" },
            { data: "subtraction" },
            { data: "division" },
            { data: "multiplication" },
            { data: "percentage" },
            { data: "wholeSquare" },
            {
                "mData": null,
                "mRender": function (o) {
                    return `<div class="d-flex"><button class="btn btn-primary m-1" onclick="edit(${o.id})"><i class="fa-solid fa-pen-to-square"></i></button><button class="btn btn-danger m-1" onclick="del(${o.id},this)"><i class="fa-solid fa-trash"></i></button></div>`
                }
            }
        ],
        "ordering": false
    });

    $('#openForm').on('click',function(){
        remErr()
        document.getElementById("form").reset();
        $('#calculateAgain').hide()
        $('#calculate').show()
    })
 
    //Calculate Values
    $("#calculate").click(function () {
        //if value is not present then it considered as 0
        let calc = validations()

        if (calc) {
            let check=calculate(calc)
            check.id=i
            CalculationsArr.push(check)
            i += 1
            table.row.add(check).draw()
            document.getElementById("form").reset();

            $('#staticBackdrop').modal('hide')
            $('body').removeClass('modal-open');
            $(".modal-backdrop").remove();
        }
    });


    //Update Values
    $("#calculateAgain").click(function () {
        //if value is not present then it considered as 0
        let calc = validations()

        if (calc) {
            let check=calculate(calc)
            check.id=CalculationsArr[objWithIdIndex].id
            CalculationsArr[objWithIdIndex]=check
            document.getElementById("form").reset();
            table.clear().rows.add(CalculationsArr).draw()
            $('#staticBackdrop').modal('hide')
            $('body').removeClass('modal-open');
        }
    });

});

//Validations
function validations() {
    let valid = true;
    let obj = {}
    val1 = document.getElementById("val1").value;
    val2 = document.getElementById("val2").value;

    add = document.getElementById('addition').checked;
    sub = document.getElementById('subtraction').checked;
    div = document.getElementById('divide').checked;
    mul = document.getElementById('multiply').checked;
    percent = document.getElementById('percentage').checked;
    sq = document.getElementById('wholeSquare').checked;

    if (val1 == '') {
        document.getElementById('val1Err').innerHTML = "Value 1 is Empty!"
        valid = false
    } else {
        document.getElementById('val1Err').innerHTML = ""
    }

    if (val2 == '') {
        document.getElementById('val2Err').innerHTML = "Value 2 is Empty!"
        valid = false
    } else {
        document.getElementById('val2Err').innerHTML = ""
    }

    if (add || sub || div || mul || percent || sq) {
        document.getElementById('checkErr').innerHTML = ""
    } else {
        document.getElementById('checkErr').innerHTML = "Please check any one of the above!"
        valid = false
    }

    if (valid) {
        obj = {
            value1: Number(val1),
            value2: Number(val2),
            addition: 'NA',
            subtraction: 'NA',
            division: 'NA',
            multiplication: 'NA',
            percentage: 'NA',
            wholeSquare: 'NA',
        }
        return obj
    }
}

//Edit
let objWithIdIndex;   //required to get index of object in array
function edit(id) {
    remErr()
    objWithIdIndex = CalculationsArr.findIndex(item => item.id === id)
    if (objWithIdIndex > -1) {
        $('#calculateAgain').show()
        $('#calculate').hide()
        $('#staticBackdrop').modal('show')

        document.getElementById("val1").value=CalculationsArr[objWithIdIndex].value1
        document.getElementById("val2").value=CalculationsArr[objWithIdIndex].value2

        if(CalculationsArr[objWithIdIndex].addition!='NA'){
            document.getElementById("addition").checked = true;
        }else{
            document.getElementById("addition").checked = false;
        }

        if(CalculationsArr[objWithIdIndex].subtraction!='NA'){
            document.getElementById("subtraction").checked = true;
        }else{
            document.getElementById("subtraction").checked = false;
        }
        if(CalculationsArr[objWithIdIndex].division!='NA'){
            document.getElementById("divide").checked = true;
        }else{
            document.getElementById("divide").checked = false;
        }

        if(CalculationsArr[objWithIdIndex].multiplication!='NA'){
            document.getElementById("multiply").checked = true;
        }else{
            document.getElementById("multiply").checked = false;
        }

        if(CalculationsArr[objWithIdIndex].percentage!='NA'){
            document.getElementById("percentage").checked = true;
        }else{
            document.getElementById("percentage").checked = false;
        }

        if(CalculationsArr[objWithIdIndex].wholeSquare!='NA'){
            document.getElementById("wholeSquare").checked = true;
        }else{
            document.getElementById("wholeSquare").checked = false;
        }

    }
}

//Delete
function del(id, t) {
    objWithIdIndex = CalculationsArr.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
        CalculationsArr.splice(objWithIdIndex, 1);
        table.row($(t).parents('tr')).remove().draw();
    }
}

//Calculations for checked element
function calculate(check){
    val1 = check.value1
    val2 = check.value2

    if (add) {
        check.addition = val1 + val2
    }

    if (sub) {
        check.subtraction = val1 - val2
    }

    if (div) {
        check.division = (val1 / val2).toFixed(2)
    }

    if (mul) {
        check.multiplication = (val1 * val2).toFixed(2)
    }

    if (percent) {
        check.percentage = (val1 / (val2 * 100)).toFixed(2)
    }

    if (sq) {
        check.wholeSquare = ((val1 * val1) + (val2 * val2) + (2 * val1 * val2)).toFixed(2)
    }

    return check
}

//Remove error msg first
function remErr(){
    document.getElementById('val1Err').innerHTML = ""
    document.getElementById('val2Err').innerHTML = ""
    document.getElementById('checkErr').innerHTML = ""
}