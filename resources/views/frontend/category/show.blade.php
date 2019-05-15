@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <a href="{{route('category.index')}}">Категории</a>
            </div>

            <div class="col-md-8">

                @foreach($news as $item)
                    <div class="card" style="margin-bottom: 20px">
                        <div class="card-header">{{$item->title}}</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6" style="width: 250px; height: 250px; background: url({{asset("storage".$item->image->full_path)}}) 100% 100% no-repeat; background-size: cover;">
                                </div>
                                <div class="col-md-6">
                                    {{$item->description}}
                                    <div>
                                        <a href="{{route('news.show', $item->id)}}">Просмотреть</a>
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
                        {!! $news->appends(request()->all())->links() !!}
                    </nav>
                </div>
            </div>
        </div>
    </div>
@endsection
