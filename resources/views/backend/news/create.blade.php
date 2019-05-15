@extends ('backend.layouts.master')

@section ('title', 'Добавление новости')

@section('page-header')
    <h1>
        Добавление новости
    </h1>
@endsection
@section('content')
    {!! Form::open(['route' => ['admin.news.store'], 'class' => 'form-horizontal', 'role' => 'form', 'files' => true]) !!}
    <div class="box box-success">
        <div class="box-header with-border">
            <a href="{{route('admin.news.index')}}" class="btn btn-primary pull-left" title="Назад">Назад</a>
        </div>
        <div class="box-body">
            <div class="col-lg-12">
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Заголовок</label>
                    <div class="col-sm-6">
                        {!!  Form::text('title', null, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Описание</label>
                    <div class="col-sm-6">
                        {!!  Form::textarea('description', null, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Текст</label>
                    <div class="col-sm-6">
                        {!!  Form::textarea('text', null, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Картинка</label>
                    <div class="col-sm-6">
                        <input type="file" class="file input-image" name="image">
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Автор</label>
                    <div class="col-sm-6">
                        {!!  Form::text('author', null, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Дата</label>
                    <div class="col-sm-6">
                        <input type="date" name="date" value="{{old('date')}}" class="form-control" required>
                    </div>

                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Категория</label>
                    <div class="col-sm-6">
                        {!!  Form::select('category_id', $categories, null, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Статус</label>
                    <div class="col-sm-6">
                        {!!  Form::select('status', $statuses, null, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="box box-success">
        <div class="box-body">
            <div class="pull-right">
                <input type="submit" class="btn btn-success " value="Сохранить" />
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    {!! Form::close() !!}
@stop

