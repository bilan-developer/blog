@extends ('backend.layouts.master')

@section ('title', 'Редактирование категории')

@section('page-header')
    <h1>
        Редактирование категории
    </h1>
@endsection
@section('content')
    {!! Form::open(['route' => ['admin.category.update', $category->id], 'class' => 'form-horizontal', 'role' => 'form', 'files' => true]) !!}
    {{ method_field('PUT') }}

    <div class="box box-success">
        <div class="box-header with-border">
            <a href="{{route('admin.category.index')}}" class="btn btn-primary pull-left" title="Назад">Назад</a>
        </div>
        <div class="box-body">
            <div class="col-lg-12">
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Название</label>
                    <div class="col-sm-6">
                        {!!  Form::text('name', $category->name, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Описание</label>
                    <div class="col-sm-6">
                        {!!  Form::textarea('description', $category->description, ['class' => 'form-control', 'required'])!!}
                    </div>
                </div>
                <div class="form-group">
                    <label for="body" class="col-sm-3 control-label label-left">Текущая картинка</label>
                    <div class="col-sm-6">
                        <div style="width: 250px; height: 250px; background: url({{asset("storage".$category->image->full_path)}}) 100% 100% no-repeat; background-size: cover;">
                        </div>
                    </div>
                </div>
                <div class='form-group'>
                    <label for="body" class="col-sm-3 control-label label-left">Новая картинка</label>
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

