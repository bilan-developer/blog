@extends ('backend.layouts.master')

@section ('title', 'Категории')

@section('page-header')
    <h1>
        Категории
    </h1>
@endsection
@section('content')
    <div class="box box-success">
        <div class="box-header with-border">
            <a href="{!! route('admin.category.create') !!}" class="btn btn-success pull-right">Создать категорию</a>
        </div>
        <div class="box-body">
            {!! $grid !!}
        </div>
    </div>
@stop
@section('after-scripts-end')
    <script>
    </script>
@stop
