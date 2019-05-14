<?php

namespace App\Http\Controllers\Backend;

use App\Http\Core\Constants;
use App\Http\Requests\NewsRequest;
use App\Models\Category;
use App\Models\News;
use App\Services\Backend\Image\ImageService;
use App\Services\Backend\News\NewsService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewsController extends Controller
{
    protected $service;

    public function __construct()
    {
        $this->service = new NewsService();
    }

    /**
     * Все новости.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.news.index', [
            'grid' => $this->service->getGrid(),
        ]);
    }

    /**
     * Страница для добавления новости.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.news.create', [
            'categories' => Category::all()->pluck('name', 'id'),
            'statuses' => Constants::STATUSES_NEWS,
        ]);
    }

    /**
     * Добавление новости.
     *
     * @param NewsRequest $request
     * @param News $news
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(NewsRequest $request, News $news)
    {
        $news->fill($request->validated());
        $news->image_id = ImageService::savePhoto($request->image, 'news');
        $news->save();

        \Session::flash('flash_success', 'Новость успешно добавлена');
        return redirect()->route('admin.news.index');
    }


    /**
     * Страница редактирования новости.
     *
     * @param News $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        $news->load('image');
        return view('backend.news.edit', [
            'news' => $news,
            'categories' => Category::all()->pluck('name', 'id'),
            'statuses' => Constants::STATUSES_NEWS,
        ]);

    }

    /**
     * Обновление новости.
     *
     * @param NewsRequest $request
     * @param News $news
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function update(NewsRequest $request, News $news)
    {
        $news->fill($request->validated());
        if(isset($request->image)){
            $oldImage = $news->image;
            $news->image_id = ImageService::savePhoto($request->image, 'news');
        }
        $news->save();

        if (isset($oldImage)){
            ImageService::deletePhotoAndDirectory($oldImage);
        }

        \Session::flash('flash_success', 'Новость успешно обновлена');
        return redirect()->route('admin.news.index');
    }

    /**
     * Удаление новости.
     *
     * @param News $news
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(News $news)
    {
        $image = $news->image;
        $news->delete();
        ImageService::deletePhotoAndDirectory($image);

        \Session::flash('flash_success', 'Новость успешно удалёна');
        return redirect()->route('admin.news.index');
    }
}
