@extends ('backend.layouts.master')

@section ('title', 'Редактирование новости')

@section('page-header')
    <h1>
        Редактирование новости
    </h1>
@endsection
@section('content')
    {!! Form::open(['route' => ['admin.news.update', $news->id], 'class' => 'form-horizontal', 'role' => 'form', 'files' => true]) !!}
    {{ method_field('PUT') }}

    <div class="box box-success">
        <div class="box-header with-border">
            <a href="{{route('admin.news.index')}}" class="btn btn-primary pull-left" title="Назад">Назад</a>
        </div>
        <div class="box-body">
            <div class="col-lg-12">
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Заголовок</label>
                    <div class="col-sm-6">
                        {!!  Form::text('title', $news->title, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Описание</label>
                    <div class="col-sm-6">
                        {!!  Form::textarea('description', $news->description, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Текст</label>
                    <div class="col-sm-6">
                        {!!  Form::textarea('text', $news->text, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class="form-group">
                    <label for="body" class="col-sm-3 control-label label-left">Текущая картинка</label>
                    <div class="col-sm-6">
                        <div style="width: 250px; height: 250px; background: url({{asset("storage".$news->image->full_path)}}) 100% 100% no-repeat; background-size: cover;">
                        </div>
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Новая картинка</label>
                    <div class="col-sm-6">
                        <input type="file" class="file input-image" name="image">
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Автор</label>
                    <div class="col-sm-6">
                        {!!  Form::text('author', $news->author, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Дата</label>
                    <div class="col-sm-6">
                        <input type="date" name="date" value="{{old('date', $news->date)}}" class="form-control" required>
                    </div>

                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Категория</label>
                    <div class="col-sm-6">
                        {!!  Form::select('category_id', $categories, $news->category_id, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Статус</label>
                    <div class="col-sm-6">
                        {!!  Form::select('status', $statuses, $news->status, ['class' => 'form-control', 'required'])!!}
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

