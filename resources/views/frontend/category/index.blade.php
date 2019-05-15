@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                @foreach($categories as $category)
                    <div class="card" style="margin-bottom: 20px">
                        <div class="card-header">{{$category->name}}</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6" style="width: 250px; height: 250px; background: url({{asset("storage".$category->image->full_path)}}) 100% 100% no-repeat; background-size: cover;">
                                </div>
                                <div class="col-md-6">
                                    {{$category->description}}
                                    <div>
                                        <a href="{{route('category.show', $category->id)}}">Просмотреть</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="paginationBlock">
                    <nav>
                        {!! $categories->appends(request()->all())->links() !!}
                    </nav>
                </div>
            </div>
        </div>
    </div>
@endsection
