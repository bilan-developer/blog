@extends ('backend.layouts.master')

@section ('title', 'Добавление категории')

@section('page-header')
    <h1>
        Добавление категории
    </h1>
@endsection
@section('content')
    {!! Form::open(['route' => ['admin.category.store'], 'class' => 'form-horizontal', 'role' => 'form', 'files' => true]) !!}
    <div class="box box-success">
        <div class="box-header with-border">
            <a href="{{route('admin.category.index')}}" class="btn btn-primary pull-left" title="Назад">Назад</a>
        </div>
        <div class="box-body">
            <div class="col-lg-12">
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Название</label>
                    <div class="col-sm-6">
                        {!!  Form::text('name', null, ['class' => 'form-control'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Описание</label>
                    <div class="col-sm-6">
                        {!!  Form::textarea('description', null, ['class' => 'form-control'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Картинка</label>
                    <div class="col-sm-6">
                        <input type="file" class="file input-image" name="image">
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

