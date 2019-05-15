@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <a href="{{route('category.index')}}">Категории</a>->
                <a href="{{route('category.show', $news->category->id)}}">{{$news->category->name}}</a>
            </div>

            <div class="col-md-8">
                    <div class="card" style="margin-bottom: 20px">
                        <div class="card-header">{{$news->title}}</div>
                        <div class="card-body">
                            <div class="row">
                                <img src="{{asset("storage".$news->image->full_path)}}">
                                <div class="col-md-12">
                                    <p>{{$news->description}}</p>
                                </div>
                                <div class="col-md-12">
                                    <p>{{$news->text}}</p>
                                </div>
                                <div class="col-md-12 row">
                                    <div class="col-md-6 text-left">
                                        {{$news->date}}
                                    </div>
                                    <div class="col-md-6 text-right">
                                        {{$news->author}}
                                    </div>
                                </div>
                                <div class="col-md-12 row">
                                    <div class="col-md-12 text-right">
                                        <div>Просмотров {{$statistic['countViews']}}</div>
                                        <div>Посетителей {{$statistic['countVisits']}}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
@endsection
