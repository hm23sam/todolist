var todolist = [];
var id = 1;

function addList() {
    var _title = $('#title').val();
    var _message = $('#message').val();

    if (_title == "" || _message == "") {
        alert("Please input topic and content!");
    }
    else {
        var newtodo = {
            '_id': id,
            'title': _title,
            'content': _message,
            '_status': false
        };

        todolist.push(newtodo);
        newList(newtodo);
        id++;

        $('#title').val('');
        $('#message').val('');

    }

}