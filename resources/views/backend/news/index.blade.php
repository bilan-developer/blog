@extends ('backend.layouts.master')

@section ('title', 'Новости')

@section('page-header')
    <h1>
        Новости
    </h1>
@endsection
@section('content')
    <div class="box box-success">
        <div class="box-header with-border">
            <a href="{!! route('admin.news.create') !!}" class="btn btn-success pull-right">Создать новость</a>
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
