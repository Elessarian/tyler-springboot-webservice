var main = {
    init : function () {
        var _this = this;
        $('#btn-save').on('click', function () {
            console.log('== init 함수 진입 ==')
            _this.save();
        });
    },
    save : function () {
        console.log('== save 함수 진입 ==')
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function () {
            console.log('글이 등록되었습니다.')
            alert('글이 등록되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error))
        })
    },
    update : function () {
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url:
        })
    }
};

main.init();