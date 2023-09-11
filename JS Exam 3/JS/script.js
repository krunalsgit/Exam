var table;

let fullName, dob, gender, email, contact

let tasks = [
    {
        'Id': 1,
        'Name': 'Krunal Dhote',
        'DOB': '2001-10-09',
        'Gender': 'Male',
        'Email': 'krunal.d@shaligraminfotech.com',
        'ContactNumber': '9307871334',
        'Task': [
            {
                'Id': 1,
                'TaskName':'JS',
                'DueDate':'2022-06-09 05:00:00',
                'Description':'Exam'
            },
            {
                'Id': 2,
                'TaskName':'JS',
                'DueDate':'2023-10-09 05:00:00',
                'Description':'Exam'
            }
        ]
    },
    {
        'Id': 2,
        'Name': 'Piyush Kumar',
        'DOB': '2001-10-09',
        'Gender': 'Male',
        'Email': 'krunal.d@shaligraminfotech.com',
        'ContactNumber': '9307871334',
        'Task': [
            {
                'Id': 2,
                'TaskName':'J ',
                'DueDate':'2023-10-09 05:00:00',
                'Description':'Exam2'
            }
        ]
    }
]
$(document).ready(function () {
    table = $('#userTable').DataTable({
        data: tasks,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: 'Name' },
            { data: 'DOB'},
            { data: 'Gender' },
            { data: 'Email' },
            { data: 'ContactNumber' },
            {
                mData: null,
                mRender: function (o) {
                    return `
                    <div class="d-flex">
                    <button class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#tasksAdd" onclick="Tasks('${o.Id}')">Add Task</button>
                    <button class="btn btn-primary m-1" onclick="edit('${o.Id}')"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn btn-danger m-1" onclick="del('${o.Id}',this)"><i class="fa-solid fa-trash"></i></button></div>
                    `
                }
            },
        ],
        pageLength:5
    })



    $('#userTable tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);
        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

    $('#openForm').on('click', function () {
        document.getElementById('staticBackdropLabel').innerHTML='Add User'
        $('#submit').show()
        $('#update').hide()
        remErr()
        document.getElementById('RegisterForm').reset()
    })

})


function format(d) {
    // `d` is the original data object for the row
    if (d.Task.length == 0) {
        return 'No Data Found'
    } else {
        let task = `
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Action</th>
        </tr>s
    `
        for (let i = 0; i < d.Task.length; i++) {
            task += `<tr>
            <td>${d.Task[i].TaskName}</td>
            <td>${d.Task[i].Description}</td>
            <td>${d.Task[i].DueDate}</td>
            <td>
            <button class="btn btn-primary m-1" onclick="editTask(${d.Id},${d.Task[i].Id})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn btn-danger m-1" onclick="delTask(${d.Id},${d.Task[i].Id})"><i class="fa-solid fa-trash"></i></button></div>
            </td>
        </tr>
        `
        }
        return task
    }
}

let pId = 2
function RegisterForm() {
    fullName = document.getElementById('name').value
    dob = document.getElementById('dob').value
    email = document.getElementById('mail').value
    contact = document.getElementById('phone').value

    let check = RegistrationValidation()
    if (check) {
        check.Id = pId
        tasks.push(check)
        pId += 1
        table.clear().rows.add(tasks).draw()
        $('#staticBackdrop').modal('hide')
        document.getElementById('RegisterForm').reset()
       // console.log(tasks);
    }

}

function RegistrationValidation() {
    let details = {}
    let valid = true;
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regName.test(fullName)) {
        document.getElementById('nameErr').innerHTML = 'Invalid Name Given!'
        valid = false
    } else {
        document.getElementById('nameErr').innerHTML = ''
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mailformat.test(email)) {
        document.getElementById('mailErr').innerHTML = 'Invalid Mail Given!'
        valid = false
    } else {
        document.getElementById('mailErr').innerHTML = ''
    }

    if (dob == '') {
        document.getElementById('dobErr').innerHTML = 'Date Of Birth Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('dobErr').innerHTML = ''
    }

    var phoneno = /^\d{10}$/;
    if (!phoneno.test(contact)) {
        document.getElementById('phnErr').innerHTML = 'Invalid Contact Number Given!'
        valid = false
    } else {
        document.getElementById('phnErr').innerHTML = ''
    }

    let gender;
    let m = document.getElementById('m')
    let f = document.getElementById('f')
    let t = document.getElementById('t')
    if (!m.checked && !f.checked && !t.checked) {
        document.getElementById('genderErr').innerHTML = 'Gender Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('genderErr').innerHTML = ''
        if (m.checked)
            gender = m.value
        else if (f.checked)
            gender = f.value
        else
            gender = t.value
    }
    if (valid) {
        details = {
            'Name': fullName,
            'DOB': dob,
            'Gender': gender,
            'Email': email,
            'ContactNumber': contact,
            'Task': []
        }
        return details
    }
}

let update, updateId;
function edit(id) {
    remErr()
    document.getElementById('staticBackdropLabel').innerHTML='Edit User'
    updateId = id;
    objIndex = tasks.findIndex((obj) => obj.Id == id)
    if (objIndex > -1) {
        $('#submit').hide()
        $('#update').show()
        $('#staticBackdrop').modal('show')
        let date = new Date(tasks[objIndex].DOB)
        let format = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0)

        document.getElementById('name').value = tasks[objIndex].Name
        document.getElementById('dob').value = format
        document.getElementById('mail').value = tasks[objIndex].Email
        document.getElementById('phone').value = tasks[objIndex].ContactNumber
        
        if(tasks[objIndex].Gender=='Male')
            document.getElementById('m').checked=true
        else if(tasks[objIndex].Gender=='Female')
            document.getElementById('f').checked=true
        else
            document.getElementById('t').checked=true
        
        update = objIndex
    }
}

function UpdateRegisterForm() {
    fullName = document.getElementById('name').value
    dob = document.getElementById('dob').value
    email = document.getElementById('mail').value
    contact = document.getElementById('phone').value

    let check = RegistrationValidation()
    if (check) {
        check.Id = updateId
        tasks[update].Name = check.Name
        tasks[update].DOB = check.DOB
        tasks[update].Email = check.Email
        tasks[update].ContactNumber = check.ContactNumber
        table.clear().rows.add(tasks).draw()
        $('#staticBackdrop').modal('hide')
        document.getElementById('RegisterForm').reset()
      //  console.log(tasks);
    }
}

function del(id) {
    objIndex = tasks.findIndex((obj) => obj.Id == id)
    if (objIndex > -1) {
        tasks.splice(objIndex, 1)
        table.clear().rows.add(tasks).draw()
    }
}


let select;
function Tasks(id) {
    
    $('#addTask').show()
    $('#updateTask').hide()
    objIndex = tasks.findIndex((obj) => obj.Id == id)
    if (objIndex > -1) {
        select = objIndex
    }
}



let tId = 2
function TasksForm() {
    title = document.getElementById('taskTitle').value
    desc = document.getElementById('Desc').value
    due = document.getElementById('DueDate').value
    time=new Date().toString().slice(16,24)
    
    let check = TasksValidation()
    if (check) {
        check.Id = tId
        tasks[select].Task.push(check)
        table.clear().rows.add(tasks).draw()
        $('#tasksAdd').modal('hide')
        document.getElementById('tasks').reset()
        tId += 1
    }
   // console.log(tasks[select]);
}

function TasksValidation() {
    let details = {}
    let valid = true;

    if (title == '') {
        document.getElementById('taskTitleErr').innerHTML = 'Invalid Title Given!'
        valid = false
    } else {
        document.getElementById('taskTitleErr').innerHTML = ''
    }

    if (due == '') {
        document.getElementById('DueDateErr').innerHTML = 'Due Date Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('DueDateErr').innerHTML = ''
    }

    if (desc == '') {
        document.getElementById('DescErr').innerHTML = 'Description Must Not Be Empty!'
        valid = false
    } else {
        document.getElementById('DescErr').innerHTML = ''
    }


    if (valid) {
        details = {
            'TaskName': title,
            'Description': desc,
            'DueDate': due+' '+time
        }
        return details
    }
}

function editTask(rid,tid){
    objIndexrID = tasks.findIndex((obj) => obj.Id == rid)
    objIndextID = tasks[objIndexrID].Task.findIndex((obj) => obj.Id == tid)

    $('#tasksAdd').modal('show')
    $('#addTask').hide()
    $('#updateTask').show()

    console.log(tasks[objIndexrID].Task[objIndextID]);
    document.getElementById('taskTitle').value=tasks[objIndexrID].Task[objIndextID].TaskName
    document.getElementById('Desc').value=tasks[objIndexrID].Task[objIndextID].Description
    

    let date = new Date(tasks[objIndexrID].Task[objIndextID].DueDate)
    let format = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0)
    document.getElementById('DueDate').value=format
}

function updateTasks(){
    title = document.getElementById('taskTitle').value
    desc = document.getElementById('Desc').value
    due = document.getElementById('DueDate').value
    time=new Date().toString().slice(16,24)
    
    let check = TasksValidation()
    if (check) {
        tasks[objIndexrID].Task[objIndextID]=check
        table.clear().rows.add(tasks).draw()
        $('#tasksAdd').modal('hide')
        document.getElementById('tasks').reset()
    }
}

function delTask(rid,tid){
    objIndexrID = tasks.findIndex((obj) => obj.Id == rid)
    objIndextID = tasks[objIndexrID].Task.findIndex((obj) => obj.Id == tid)
    tasks[objIndexrID].Task.splice(objIndextID, 1)
    table.clear().rows.add(tasks).draw()
}

function remErr() {
    document.getElementById('nameErr').innerHTML = ''
    document.getElementById('mailErr').innerHTML = ''
    document.getElementById('dobErr').innerHTML = ''
    document.getElementById('phnErr').innerHTML = ''
    document.getElementById('genderErr').innerHTML = ''
    document.getElementById('taskTitleErr').innerHTML = ''
    document.getElementById('DueDateErr').innerHTML = ''
    document.getElementById('DescErr').innerHTML = ''
}




// window.onclick=function (){
//     TaskAlert()
//     //$('#AltertPop').modal('show')
// }
function TaskAlert(){
    let now=new Date()
    for (let index = 0; index < tasks.length; index++) {
        for (let i = 0; i < tasks[index].Task.length; i++) {
            let due=new Date(tasks[index].Task[i].DueDate);
            if(due<=now){
                $('#AltertPop').modal('show')
                document.getElementById('uName').value=tasks[index].Name
                document.getElementById('tTitle').value=tasks[index].Task[i].TaskName
                
                let date = new Date(tasks[index].Task[i].DueDate)
                let format = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0)
    
                document.getElementById('dDate').value=format
            }
        }
    }
}