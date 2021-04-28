var main = {
    init : function () {
        console.log('== init 함수 진입 ==')
        var _this = this;
        $('#btn-save').on('click', function () {
            console.log('== save 버튼 클릭 ==')
            _this.save();
        });

        $('#btn-update').on('click', function () {
            console.log('== update 버튼 클릭 ==')
            _this.update();
        })

        $('#btn-delete').on('click', function () {
            console.log('== delete 버튼 클릭 ==')
            _this.delete();
        })
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
        console.log('== update 함수 진입 ==')
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('글이 수정되었습니다');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },
    delete : function () {
        console.log('== delete 함수 진입 ==')
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
        }).done(function () {
            alert('글이 삭제되었습니다');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    }
};

main.init();